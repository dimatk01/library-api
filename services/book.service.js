const db = require("../db/models");
const getPaginationData = require("../utils/getPaginationData");
const Book = db.Book;

const getAll=async (page = 1, perPage = 10)=>{
   return await getPaginationData(Book, page, perPage)
}
module.exports={getAll}