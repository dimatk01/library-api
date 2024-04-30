const catchAsync = require("../utils/catchAcync");
const BookService = require("../services/book.service");
const generateResponse = require("../utils/generateResponse");



const getAll = catchAsync(async (req, res) => {
 const {page = 1, perPage = 10} = req.query
const data =  await BookService.getAll(page, perPage);
 return generateResponse(res, data)
})

module.exports = {getAll}