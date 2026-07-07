FROM cypress/included:cypress-13.6.6-node-20.11.0-chrome-121.0.6167.184-1-ff-123.0-edge-121.0.2277.128-1

WORKDIR /app

COPY . .

ENV ENVIRONMENT=prod

RUN npm install

CMD ["npx", "cypress", "run", "--config-file", "cypress.qauto.config.js", "--browser", "firefox"]