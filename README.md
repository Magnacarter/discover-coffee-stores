## Coure Notes

Next Improvments
	// It uses Rust compiler, it's 17x faster than Babel
	// Speedy Web Compiler (SWC)
	// It is enabled by default and can config it.

	// It has Middleware
		// Request happens, it goes to the Middleware to do redirects, auths, token validation location based
		// nav and more... then api code will run.
		// All you have to do is create a middleware.js file in the pages dir.
		// Can be used for A/B tests, logging, advanced i18n routing, redirects, rewrites, server-side analytics, etc...
		// Traditionally middleware setup takes quite a bit of config time, however,
		// next is going back to the zero config setup for us and comes outta the box, ready to go.

	// You can install React 18


	// Edge functions work with middleware
		// Research edge functions and middleware

Routing
	// Index routes
	// 2 rules of routing
		// 1. the page needs to be a react component
		// 2. the component needs to be exported by default
			// export default function Home() {}

	// Nested routes : /coffee-store/239487
	// Dynamic routes 
	// To use dynamic routes we need to import the 'next/router

	// linking routes with 'next/link
		// link component will not refresh the page, just changes the route
		// wnen linking to an external page, like google.ca, Link component
		// only knows about routes in the pages directory so it makes sense
		// to use the a tag instead for external links.

Document.js 
	// this is a file that allows us access to the body and head tags in the global scope
	// Example: you would want the same fonts avaiable to the entire app while 
	// only loading them once.

Pre-rendering
	// When a user makes a request the server, not the client is responsible for rendering the html (pre-rendering)
	// User gets the static page first, then once the JS loads the user can interact with the page. (hydration)

Data Fetching
	// 3 types
	// 

getStaticProps Rules
	// Can only be exported from a page file.
		// It has to be a page file and it has to be exported.
	// Meant for all routes.
	// Only runs at build time.
	// Only runs on server side
	// on dev, runs on client and server side.

getStaticPaths
	// if a page has dynamic routes and uses getStaticProps it needs to define a list of paths that have to be rendered to HTML
	// at build time.
	// getStaticPaths must be used with getStaticProps
	// Can only be exported from a page file, otherwise next won't see it.
	// It's meant for dynamic routes
	// Page must also implement getStaticProps
	// Only runs at build time (on the server)
	// Not included in the client side bundle
	// On dev, runs on both server and client

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
