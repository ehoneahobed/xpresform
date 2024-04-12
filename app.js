const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } = require('google-auth-library');

require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 4500;

const auth = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});


async function addToGoogleSheet(email) {
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, auth);

    await doc.loadInfo(); // loads document properties and worksheets
    // console.log(doc.title);
    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id if known]
    // console.log(sheet.title);
    // console.log(sheet.rowCount);

    await sheet.addRow({ Email: email });
}



app.get('/', (req, res) => res.send('Welcome to GetWaitlist'));

app.post('/signup', async (req, res) => {
    const { email } = req.body;
    try {
        await addToGoogleSheet(email);
        res.status(200).json({ status: 'success', message: 'Email added successfully'});
    } catch (error) {
        console.error('Error adding email to Google Sheets', error);
        res.status(500).send('Failed to add email');
    }
});

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
