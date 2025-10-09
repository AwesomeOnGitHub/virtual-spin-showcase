/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { setGlobalOptions } = require("firebase-functions");
const { onRequest } = require("firebase-functions/https");
const logger = require("firebase-functions/logger");

const functions = require("firebase-functions");
const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
// This allows Cloud Functions to interact with your Firebase project with admin privileges
admin.initializeApp();

// Using SendGrid (Recommended for production)
const sgMail = require('@sendgrid/mail');
const sendgridApiKey = functions.config().sendgrid?.key; // Get from Firebase config (see Step 4)
sgMail.setApiKey(sendgridApiKey);

// --- Cloud Function triggered on new Firestore document ---

exports.sendContactEmail = functions.firestore
    .document("contact_messages/{docId}") // Listen for new documents in 'contact_messages'
    .onCreate(async (snap, context) => { // Triggered when a new document is created
        const newMessage = snap.data(); // Get the data from the new document

        const mailOptions = {
            from: 'Your Website Contact Form <noreply@yourdomain.com>', // Sender address
            to: 'your-receiving-email@example.com', // Your email to receive notifications
            subject: `New Contact Message from ${newMessage.name}`, // Subject line
            html: `
        <p>You received a new message from your contact form:</p>
        <p><strong>Name:</strong> ${newMessage.name}</p>
        <p><strong>Email:</strong> ${newMessage.email}</p>
        ${newMessage.phone ? `<p><strong>Phone:</strong> ${newMessage.phone}</p>` : ''}
        ${newMessage.business ? `<p><strong>Business:</strong> ${newMessage.business}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${newMessage.message}</p>
        <p><em>Received at: ${new Date(newMessage.timestamp.toDate()).toLocaleString()}</em></p>
      `,
        };

        try {

            // Send with SendGrid
            await sgMail.send(mailOptions);
            console.log("Email sent with SendGrid successfully!");

            return null; // Indicate successful execution
        } catch (error) {
            console.error("Error sending email:", error);
            // You might want to log this to a separate collection for failures
            return null; // Function still finished, but with an error
        }
    });