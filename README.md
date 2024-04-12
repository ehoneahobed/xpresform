# XpresForm

XpresForm is a lightweight, Express.js-based application designed to handle email signups for waitlists, storing data directly into Google Sheets. This project is an excellent starting point for those seeking a cost-effective and straightforward solution to manage email collections without using costly form service subscriptions.

## Features

- **Google Sheets Integration:** Directly stores email signups into a specified Google Sheet.
- **Scalability:** Ready to handle large volumes of email addresses for your waitlist or email campaigns.
- **Customizable:** Easily adaptable for future enhancements such as handling full contact forms.

## Getting Started

These instructions will guide you in setting up and running XpresForm on your local machine for development and testing purposes.

### Prerequisites

You need Node.js installed to run this application. Visit [Node.js](https://nodejs.org/en/download/) to download and install it.

### Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/xpresform.git
cd xpresform
```

Install the necessary dependencies:

```bash
npm install
```

### Configuration

Create a `.env` file in the root directory of the project and populate it with your Google Sheets and service account details:

```plaintext
GOOGLE_SERVICE_ACCOUNT_EMAIL=your_service_account_email@project-id.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your_google_sheet_id
```

### Running Locally

Start the server using:

```bash
node app.js
```

Navigate to `http://localhost:4500` to see the application in action.

### Deployment

Refer to your hosting provider's documentation for deploying Node.js applications.

## Future Possibilities

While currently designed for simple email collection for waitlists, XpresForm has the potential to be extended to handle more comprehensive contact forms. This could include collecting names, messages, and other data, providing a versatile tool for website contact forms.




