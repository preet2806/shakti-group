import { OUTLOOK_CONFIG } from '../constants';

// --- Types ---
interface EmailData {
  name: string;
  company: string;
  email: string;
  phone: string;
  type: string;
  message: string;
}

// --- Helper: Get Access Token ---
// Fetches an access token using Client Credentials Flow
// Endpoint: https://login.microsoftonline.com/{tenant}/oauth2/v2.0/token
const getAccessToken = async (): Promise<string> => {
  const { TENANT_ID, CLIENT_ID, CLIENT_SECRET } = OUTLOOK_CONFIG;

  if (!TENANT_ID || !CLIENT_ID || !CLIENT_SECRET) {
    throw new Error('Missing Microsoft Outlook API Credentials');
  }

  const tokenEndpoint = `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`;

  const body = new URLSearchParams();
  body.append('client_id', CLIENT_ID);
  body.append('scope', 'https://graph.microsoft.com/.default');
  body.append('client_secret', CLIENT_SECRET);
  body.append('grant_type', 'client_credentials');

  try {
    const response = await fetch(tokenEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Token Error:', errorData);
      throw new Error(`Failed to fetch access token: ${response.statusText}`);
    }

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Authentication Error:', error);
    throw error;
  }
};

// --- Main: Send Email ---
// Sends email via Microsoft Graph API
// Endpoint: https://graph.microsoft.com/v1.0/users/{from_email}/sendMail
export const sendOutlookEmail = async (formData: EmailData): Promise<void> => {
  const token = await getAccessToken();
  const { FROM_EMAIL, TO_EMAIL } = OUTLOOK_CONFIG;

  const emailSubject = `New Website Inquiry from ${formData.name} - ${formData.company}`;

  // Construct HTML Body
  const emailBody = `
    <html>
      <body>
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Company:</strong> ${formData.company}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Inquiry Type:</strong> ${formData.type}</p>
        <hr/>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br/>')}</p>
      </body>
    </html>
  `;

  const sendMailEndpoint = `https://graph.microsoft.com/v1.0/users/${FROM_EMAIL}/sendMail`;

  const payload = {
    message: {
      subject: emailSubject,
      body: {
        contentType: 'HTML',
        content: emailBody
      },
      toRecipients: [
        {
          emailAddress: {
            address: TO_EMAIL
          }
        }
      ],
      // Optional: Add the sender as Reply-To if supported,
      // though Graph API sends 'on behalf of' the authenticated user.
      replyTo: [
        {
          emailAddress: {
             address: formData.email,
             name: formData.name
          }
        }
      ]
    },
    saveToSentItems: 'true'
  };

  const response = await fetch(sendMailEndpoint, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error('Graph API Error:', errorData);
    throw new Error(`Failed to send email: ${response.statusText}`);
  }
};