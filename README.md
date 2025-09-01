# URL Shortener

This is a simple and efficient URL shortener application built with [Next.js](https://nextjs.org) and MongoDB. It allows users to shorten long URLs into concise, shareable links.

## Live Demo

Check out the live application here: [URL Shortener](https://url-shorten-dusky.vercel.app/)

## Features

- Shorten long URLs into short, shareable links.
- Copy the shortened link to the clipboard with a single click.
- Automatically redirects users to the original URL when accessing the shortened link.

## Getting Started

Follow these steps to run the project locally:

### Prerequisites

- Node.js installed on your machine.
- A MongoDB database (local or cloud).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sakil470004/url-shorten.git
   cd url-shorten
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   BASE_URL=http://localhost:3000
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/). Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is licensed under the MIT License.
