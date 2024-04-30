const catchAsync = require("../utils/catchAcync");
const BookService = require("../services/book.service");
const generateResponse = require("../utils/generateResponse");



const getAll = catchAsync(async (req, res) => {
const data =  await BookService.getAll();
 return generateResponse(res, data)
})

module.exports = {getAll}