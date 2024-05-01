const { OK } = require('http-status');

function generateResponse(req, data, statusCode = OK) {
  req.status(statusCode).json({
    success: true,
    data,
  });
}
module.exports = generateResponse;
