# Ecommerce Application

![Next.js](https://img.shields.io/badge/Next.js-v13.4.8-black.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-v5.1.6-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v3.3.2-blueviolet.svg)
![Prisma](https://img.shields.io/badge/Prisma-v4.16.2-brightgreen.svg)
![Stripe](https://img.shields.io/badge/Stripe-v12.18.0-yellow.svg)
![Clerk](https://img.shields.io/badge/Clerk-Auth-blue.svg)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

This is a monorepo for an eCommerce application with separate Admin and Store applications. It is built using modern web technologies such as Next.js, TypeScript, Prisma, Tailwind CSS, and Clerk for authentication. The admin panel allows for product management, order tracking, and more, while the store allows customers to browse products, view details, and complete purchases.

## Deployed URLs

-   **Admin Panel**: [app-ecommerce-admin.vercel.app](https://app-ecommerce-admin.vercel.app)
-   **Storefront**: [app-ecommerce-store.vercel.app](https://app-ecommerce-store.vercel.app)

## Applications

-   **Ecommerce Admin**: An admin dashboard for managing the eCommerce store's products, orders, categories, etc.
-   **Ecommerce Store**: A storefront where users can browse and purchase products.

## Tech Stack

### Common Stack:

-   **Next.js**: React framework for building modern web applications.
-   **Tailwind CSS**: Utility-first CSS framework for fast UI development.
-   **TypeScript**: Superset of JavaScript that adds static typing.
-   **Stripe**: Payment gateway for handling purchases.
-   **Zustand**: State management solution for React.
-   **Vercel**: Deployment platform for modern web applications.

### Admin:

-   **Clerk Authentication**: User authentication and management solution.
-   **Prisma ORM**: Database access layer with support for MySQL and PlanetScale.
-   **Radix UI**: Components for building accessible UI primitives.
-   **React Hook Form**: Performant form handling and validation.
-   **Zod**: Validation library for form inputs and API responses.

### Store:

-   **Headless UI**: Unstyled, fully accessible UI components designed to integrate with Tailwind CSS.

## Features

### Admin:

-   **Authentication**: Managed with Clerk.
-   **Prisma ORM Setup**: Integrated with PlanetScale for scalable MySQL database management.
-   **Dashboard Setup**: Manage orders, products, categories, sizes, colors, and more.
-   **Billboards Entity**: Manage promotional content across the store.
-   **Data Tables**: Display structured data with pagination and filtering options.
-   **Entity Management**: Control over products, categories, sizes, and colors.
-   **Stripe Integration**: Payment processing and checkout management.
-   **Dark Mode**: User preference for dark mode UI.
-   **Deployment**: Easily deploy the app on Vercel.

### Store:

-   **Environment Setup**: Configurable environment for API keys, database connections, etc.
-   **Product Screens**: Detailed product information for individual products.
-   **Category Screens**: Browse products by category.
-   **Product Preview Modals**: Quick view modals for product details.
-   **Add to Cart**: Functionality for adding products to the shopping cart.
-   **Checkout**: Finalize purchase with Stripe integration.
-   **Featured Products**: Display selected products on the homepage.

## Scripts

To run the project, use the following commands:

### Admin:

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint the codebase
npm run lint
```

### Store:

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint the codebase
npm run lint
```

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/ecommerce-application.git
# cd into the project root
cd ecommerce-application

# Install the dependencies

# Admin
cd ecommerce-admin
npm install

# Store
cd ecommerce-store
npm install
```

## Environment Variables

Create a `.env.local` or `.env` file in the root of the project with the following environment variables:

### Admin:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

DATABASE_URL=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_PRESET=
STRIPE_API_KEY=
FRONTEND_STORE_URL=http://localhost:3001
```

> **Note**: The `DATABASE_URL` should be a connection string to your PostgreSQL database.

### Store:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api/{store_id}
```

> **Note**: The `store_id` should be the ID of the store you want to connect to.

## Deployment

The application is optimized for deployment on [Vercel](https://vercel.com/). Ensure that your environment variables are correctly set up in the Vercel dashboard for both admin and store applications.

## License

This project is open source and available under the [MIT License](LICENSE).
