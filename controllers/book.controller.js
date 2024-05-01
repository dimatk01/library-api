const catchAsync = require("../utils/catchAcync");
const BookService = require("../services/book.service");
const generateResponse = require("../utils/generateResponse");
const {NO_CONTENT, CREATED} = require("http-status");



const getAll = catchAsync(async (req, res) => {
 const {page = 1, perPage = 10} = req.query
const data =  await BookService.getAll(page, perPage);
 return generateResponse(res, data)
})

const getBook = catchAsync(async (req, res) => {
const {id} = req.params
 const data =  await BookService.getBook(Number(id));
 return generateResponse(res, data)
})

const createBook = catchAsync(async (req, res) => {
 const data = await BookService.createBook(req.body)
 return generateResponse(res, data, CREATED)
})

const updateBook = catchAsync(async (req, res) => {
 const {id} = req.params
 await BookService.updateBook(req.body, Number(id))
 return generateResponse(res, {}, NO_CONTENT)
})

const deleteBook = catchAsync(async (req, res) => {
 const {id} = req.params
await BookService.deleteBook(Number(id))
 return generateResponse(res, {}, NO_CONTENT)
})

module.exports = {
 getAll,
 createBook,
 updateBook,
 deleteBook,
 getBook
}