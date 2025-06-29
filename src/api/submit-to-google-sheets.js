// Minimal backend endpoint for Google Sheets integration using service account
const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// CORS middleware for local dev
function allowCors(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    res.status(200).json({ ok: true });
    return true;
  }
  return false;
}

// Service account key JSON (inlined for demo; use env or secure file in prod)
const SERVICE_ACCOUNT = {
  "type": "service_account",
  "project_id": "agentry-inc",
  "private_key_id": "2441591d35dcaab3bc63b289de61406d69e46af7",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCba3tjLlh4eahX\nJfNgPD8o1wKj4b/nK7dqN+D+/dGm/QQYikr5s/IU32wLipMvUfXk1QjG3Ac23OfQ\nnKS9sVYxc6TfvsWUffOPPK33KPsQEczWlTAwGutDX88yWTwAz1Nd7T7U499EvuK3\nH3bq4arpgH2pQ7wJ23BJsD40Ax9hvpCImEJOrH3EqHyfBTp+QX2A9oQrVqzN5zem\nA/fe94jSUhAJmfDBZCGTu2mgqjK4rCxGvTitziwfaXaGe8iWqNo9AkTwZtBvqM+X\n2tB7RJ7VJwyewSMNhSQYti17Q4vkOCvIaTY9YOKmARxorg4Thoq5UKx8ZalAolhN\n2Zfou7gPAgMBAAECggEADlJGKWqA3oEfYQBvP8Ptcf72EFHiFBQ0L4Z8piKPahrQ\ngM5lgELzoLbBxwJ685ZS2UZEK8bkp0qN1exJRe2MarwkSjXTEQ7WHbHSuf69u8pY\nHMHckeI5IZk3h4UvgUeZgAM3kfh5f2UzkPpGQ/iNfjzH14wVTLc6zp99698JykDX\nTs5DGGuRusmdY6DPWv6NldtIV0RNmygQNVGmixqWl0tT4RGw1nA9UXrIsUl820D3\nzu5UI5z9iqaX7seg1vufCkoYsbZEYVsK5sEnOI1gzJ02jeDT0+3wumhPwtzbCDeD\nJ+8IOZt4t9/tQiUVmZremENCD59++Q4pJOjLi0YTKQKBgQDT1oxzt2+4b076u8ud\n0xAbUSf9zrLFYnrS51MnT3YEU3cATW0iWUAiu3mNMq9sfNfUCFu/PGnegocue/pU\n4qbm3nRpIsNXz5CFrjn9cTihx33BB+BaeVhacp6/mKoBhcasvP+c2aWcurvcjrqj\nYa9WCenlov6PQL0a0siqt+3cewKBgQC70fwgYHCb3BivEPTljB/EQy9hVMVFbHRu\nsMrZQttxK4+DXHleXJCG7qKs0kTz5mBcJd91NM80/7EgF8AUbKTQ/nKaEBEs7kng\nHOtOfqOxAQc6E/VFWKAQTNBqvaak0WKPDK0fG0FtXtgAeT3+WyxccUMnjGWXtVLl\nxUDPLMAwfQKBgQDC0rHPhqf/9parcGVeXAuXI/dkrGGruNt+9fJ619CRP/XU2GCD\nU5PxnXu3ySKe4t5YCevfH/+5/U+4B5t90AlxkKt9OdRwANxIpah9l1BfMSpNiiHi\n83C3lmy7hvrrdY33tcZcCasPTomR2c56jk+EEJAFevck5oRElBCrOYdP2wKBgAKb\nodKZRDcF0Vns9FmTnoVNIYVKdgrGvL8kuUxW/1EM98stJ4pF4sPc4Glh6g8w7bmZ\n1QZ9mzrzKfR2H/aoo4k7X0AAZRyommIARMwsOf2lNAJ8cHVsC5zuVB6HT58OQT4X\nQPgjmr74CCvJgzDa9zy5XeNYsbhvjh0epg26Y1jJAoGBAKqydqCQWrPRAkvPB41g\nHD7obK6bCT2rQfAycG1bOLfmc3CHo+E+AGJg8szVEi5t3Sr7Z4AV/Vt4VvQjXHdD\nKSb9MDIX7M1x0VmdA+XlsFsecO3GMgqzVRJBwwDOQvUAhKC6AnNWLpdMbnVWQuvM\nJxPIhgyTtC6S+JgXWozmuN9B\n-----END PRIVATE KEY-----\n",
  "client_email": "agentry-inbound@agentry-inc.iam.gserviceaccount.com",
  "client_id": "112047878165989683392",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/agentry-inbound%40agentry-inc.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
};
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SHEET_ID = '1w85vOabIkvw8WlBs_u39KZmZgjZxZ-T89JKkCIS--Po';

async function appendToSheet(data) {
  const auth = new google.auth.GoogleAuth({
    credentials: SERVICE_ACCOUNT,
    scopes: SCOPES,
  });
  const sheets = google.sheets({ version: 'v4', auth });
  const range = 'Sheet1!A:E';
  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range,
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    resource: { values: [data] },
  });
}

module.exports = async (req, res) => {
  console.log("submit-to-google-sheets API called, method:", req.method);

  try {
    if (allowCors(req, res, () => {})) return;
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
    try {
      const { name, email, company, revenue, message } = req.body;
      await appendToSheet([name, email, company, revenue, message]);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Google Sheets API Error:', error);
      res.status(500).json({ error: error.message, stack: error.stack });
    }
  } catch (err) {
    // Catch any truly unexpected errors
    console.error('Unexpected API Error:', err);
    res.status(500).json({ error: 'Unexpected server error', details: err.message });
  }
};
// Place your service account key as google-service-account-key.json in the project root. Replace SHEET_ID with your actual Google Sheet ID.
