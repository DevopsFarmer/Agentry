// Moved from src/api/submit-to-google-sheets.js for Vercel deployment
const { google } = require('googleapis');

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

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SHEET_ID = process.env.GOOGLE_SHEET_ID;

async function appendToSheet(data) {
  const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON || '{}');
  const auth = new google.auth.GoogleAuth({
    credentials: serviceAccount,
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
      const { name, email, company, revenue, message, timestamp } = req.body;
      await appendToSheet([timestamp, name, email, company, revenue, message]);
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
