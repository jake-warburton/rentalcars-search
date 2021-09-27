This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Choices

I've chosen to use Next.js as I am very comfortable with it, it provides server-side rendering (not useful for this test, but if I was to expand it into a full website it would be), and it comes with Webpack and CSS-in-JS which will solve the problem of what to use to bundle the app and what styling method to use. I prefer Next.js' folder and page structure over the less opinionated "Create-React-App", as it is more reminiscent of typical website folder structure which I'm used to. I like to use CSS-in-JS for small apps because you can keep it lightweight by not including large styling libraries like [bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) or [Chakra.ui](https://chakra-ui.com/) which I would usually use on large projects.

Jest
Typescript
