# Description

RapidSum is a simple web application that leverages advanced AI technology to summarize articles from URLs. Users can paste a URL into the application, and it will utilize the Article Extractor and Summarizer API, powered by GPT, to extract the body of the article and generate a concise summary.

### Live Demo

[RapidSum](https://rapid-sum-ecru.vercel.app/)

### Data Flow Overview

- **Index.html**: This file serves as the entry point for the Next.js application, providing the structure for rendering React components and linking necessary stylesheets and scripts.

- **main.jsx**: In this file, we initialize the React application by rendering the `<App />` component. The Redux store is made available to all components through the `<Provider>` component from React-Redux.

- **App.jsx**: The `<App />` component acts as the main container for our application. It renders two primary components: `<Hero />`, which represents the hero section with branding and description, and `<Demo />`, which handles the core functionality of the app.

- **Hero.jsx**: This component displays the branding and description of the application. It doesn't interact with Redux or fetch data from the API directly.

- **Demo.jsx**: Here lies the core functionality of our application. Users can input a URL, triggering an API call to fetch and summarize the article content. The component interacts with Redux using the `useLazyGetSummaryQuery` hook from the `articleApi` service to fetch data from the RapidAPI endpoint. Additionally, it utilizes local storage to store and retrieve article history.

- **store.js** and **article.js**: These files configure the Redux store and define API slices using Redux Toolkit. They handle the state management for fetching article summaries from the RapidAPI endpoint, allowing seamless integration of API requests into our application.

### Technologies & Dependencies

- **React.js:** JavaScript library for building user interfaces.
- **Vite:** Build tool that focuses on speed and simplicity.
- **TailwindCSS:** Utility-first CSS framework.
- **Redux Toolkit:** State management library for React applications.

### API's Used

**Article Extractor and Summarizer API:** This API extracts the body of news articles from a given URL and utilizes AI powered by GPT to summarize the content. 

More information can be found here: [Article Extractor and Summarizer](https://rapidapi.com/restyler/api/article-extractor-and-summarizer/)