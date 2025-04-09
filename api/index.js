const express = require('express');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const path = require('path');

const app = express();
const CSS_URL =
	'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css';

// Load swagger.json
const swaggerDocument = JSON.parse(
	fs.readFileSync(path.join(__dirname, '../docs', 'swagger.json'), 'utf8')
);

// Serve Swagger UI
app.use(
	'/',
	swaggerUi.serve,
	swaggerUi.setup(swaggerDocument, {
		customCss:
			'.swagger-ui .opblock .opblock-summary-path-description-wrapper { align-items: center; display: flex; flex-wrap: wrap; gap: 0 10px; padding: 0 10px; width: 100%; }',
		customCssUrl: CSS_URL,
	})
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Swagger UI hosted at http://localhost:${PORT}`);
});

module.exports = app;
