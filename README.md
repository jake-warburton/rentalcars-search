This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Choices

React.js as that's the recommended frontend Library to use, and the one I'm the most comfortable with personally.

I've chosen to use Next.js as I am very comfortable with it, it provides server-side rendering (not useful for this test, but if I was to expand it into a full website it would be), and it comes with Webpack and CSS-in-JS which will solve the problem of what to use to bundle the app and what styling method to use. I prefer Next.js' folder and page structure over the less opinionated "Create-React-App", as it is more reminiscent of typical website folder structure which I'm used to.

I like to use CSS-in-JS for small apps because you can keep it lightweight by not including large styling libraries like [bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) or [Chakra.ui](https://chakra-ui.com/) which I would usually use on large projects. Also, you can inject variables into the styling or use ternaries to update the styling when state is changed.

I've opted to use Cypress testing library as it's simple to use, readable and provides the functionality to test the frontend components HTML output required for this project. Some libraries are more suited to testing functions but this project is mainly the HTML output you see on screen.

I'm using Typescript as it allows you to catch errors before they even happen by forcing good practices and typing of variable and prop declarations ensure your modular components all work seamlessly together
