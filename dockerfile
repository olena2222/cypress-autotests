FROM cypress/browsers:node-20.9.0-chrome-118.0.5993.88-1-ff-118.0.2-edge-118.0.2088.46-1

WORKDIR /app

COPY . .

ENV ENVIRONMENT=prod

RUN npm install

CMD ["npx", "cypress", "run", "--config-file", "cypress.qauto.config.js", "--spec", "cypress/e2e/login.cy.js"]