// app/api/contact/route.js
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema } from "@/lib/formValidation";

export async function POST(request: NextRequest) {
  try {
    // Parse the incoming request
    const body = await request.json();

    // Validate the form data using Zod
    const validatedData = contactSchema.parse(body);

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Format the email content with a clean HTML template
    const emailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
          }
          .container {
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
          }
          h1 {
            color: #2563eb;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid #eee;
          }
          .section {
            margin-bottom: 15px;
          }
          .section-title {
            font-weight: bold;
            margin-bottom: 5px;
          }
          .section-content {
            margin-left: 10px;
          }
          .footer {
            margin-top: 30px;
            font-size: 0.9em;
            color: #666;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>New Contact Form Submission</h1>
          
          <div class="section">
            <div class="section-title">Contact Information:</div>
            <div class="section-content">
              Name: ${validatedData.first_name} ${validatedData.last_name}<br>
              Email: ${validatedData.email}<br>
              ${validatedData.phone ? `Phone: ${validatedData.phone}<br>` : ""}
              ${
                validatedData.country ? `Country: ${validatedData.country}` : ""
              }
            </div>
          </div>

          <div class="section">
            <div class="section-title">Project Details:</div>
            <div class="section-content">
              Service Needed: ${validatedData.service}<br>
              Budget: ${
                validatedData.budget
                  ? `$${validatedData.budget}`
                  : "Not specified"
              }<br>
              ${
                validatedData.details
                  ? `Additional Details: ${validatedData.details}`
                  : ""
              }
            </div>
          </div>
          
          <div class="footer">
            This message was sent from your website contact form on ${new Date().toLocaleDateString()}.
          </div>
        </div>
      </body>
      </html>
    `;

    // Configure email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Gmail will use your account's email as the sender
      to: process.env.EMAIL_USER, // Send to yourself or another email
      subject: `Portfolio Contact Request: ${validatedData.first_name} ${validatedData.last_name} - ${validatedData.service}`,
      html: emailContent,
      // Include a plain text version for email clients that don't support HTML
      text: `
        New Contact Form Submission
        
        Contact Information:
        Name: ${validatedData.first_name} ${validatedData.last_name}
        Email: ${validatedData.email}
        ${validatedData.phone ? `Phone: ${validatedData.phone}` : ""}
        ${validatedData.country ? `Country: ${validatedData.country}` : ""}
        
        Project Details:
        Service Needed: ${validatedData.service}
        Budget: ${
          validatedData.budget ? `${validatedData.budget}` : "Not specified"
        }
        ${
          validatedData.details
            ? `Additional Details: ${validatedData.details}`
            : ""
        }
        
        This message was sent from your website contact form on ${new Date().toLocaleDateString()}.
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact form submission error:", error);

    // Return error response
    return NextResponse.json(
      { success: false, message: "Failed to send email", error: error.message },
      { status: 500 }
    );
  }
}
