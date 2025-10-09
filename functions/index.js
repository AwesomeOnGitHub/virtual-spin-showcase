const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

// Initialize Firebase Admin SDK
// This allows Cloud Functions to interact with your Firebase project with admin privileges
admin.initializeApp();

// --- Configure your email sender ---

// Option A: Using Gmail (Less reliable for production)
// You'll need to enable "Less secure app access" in your Gmail settings
// OR use an App Password if 2FA is enabled.
const gmailEmail = functions.config().gmail?.email; // Get from Firebase config (see Step 4)
const gmailPassword = functions.config().gmail?.password; // Get from Firebase config (see Step 4)

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

// Option B: Using SendGrid (Recommended for production)
// const sgMail = require('@sendgrid/mail');
// const sendgridApiKey = functions.config().sendgrid?.key; // Get from Firebase config (see Step 4)
// sgMail.setApiKey(sendgridApiKey);

// --- Cloud Function triggered on new Firestore document ---

exports.sendContactEmail = functions.firestore
  .document("contact_messages/{docId}") // Listen for new documents in 'contact_messages'
  .onCreate(async (snap, context) => { // Triggered when a new document is created
    const newMessage = snap.data(); // Get the data from the new document

    const mailOptions = {
      from: 'Your Website Contact Form <noreply@yourdomain.com>', // Sender address
      to: 'your-receiving-email@example.com', // Your email to receive notifications
      subject: New Contact Message from ${newMessage.name}, // Subject line
      html: `
        <p>You received a new message from your contact form:</p>
        <p><strong>Name:</strong> ${newMessage.name}</p>
        <p><strong>Email:</strong> ${newMessage.email}</p>
        ${newMessage.phone ? <p><strong>Phone:</strong> ${newMessage.phone}</p> : ''}
        ${newMessage.business ? <p><strong>Business:</strong> ${newMessage.business}</p> : ''}
        <p><strong>Message:</strong></p>
        <p>${newMessage.message}</p>
        <p><em>Received at: ${new Date(newMessage.timestamp.toDate()).toLocaleString()}</em></p>
      `,
    };

    try {
      // Option A: Send with Nodemailer (Gmail example)
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully!");

      // Option B: Send with SendGrid
      // await sgMail.send(mailOptions);
      // console.log("Email sent with SendGrid successfully!");

      return null; // Indicate successful execution
    } catch (error) {
      console.error("Error sending email:", error);
      // You might want to log this to a separate collection for failures
      return null; // Function still finished, but with an error
    }
  });