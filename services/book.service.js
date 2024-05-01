const db = require('../db/models');
const getPaginationData = require('../utils/getPaginationData');
const Book = db.Book;

const getAll = async (page, perPage) => {
  return await getPaginationData(Book, page, perPage);
};

const getBook = async (id) => {
  return await Book.findByPk(id);
};

const createBook = async (data) => {
  return await Book.create(data);
};

const updateBook = async (data, id) => {
  return Book.update({ ...data }, { where: { id } });
};

const deleteBook = async (id) => {
  return await Book.destroy({ where: { id } });
};
module.exports = {
  getAll,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
