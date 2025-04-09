const express = require('express');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const path = require('path');

const app = express();

// Load swagger.json
const swaggerDocument = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../docs', 'swagger.json'), 'utf8')
);

// Serve Swagger UI
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Swagger UI hosted at http://localhost:${PORT}/api-docs`);
});

module.exports = app;