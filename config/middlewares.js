module.exports = {
  load: {
    before: ["responseTime", "logger", "cors", "responses"],
    after: ["parser", "router"],
  },
  settings: {
    cors: {
      enabled: true,
      origin: [
        "https://designanoasis.vercel.app", // Replace with your Vercel app's URL
        "http://localhost:3000", // Add this line to allow CORS for your local development environment
      ],
    },
  },
};
