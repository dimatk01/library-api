async function getPaginationData(model, page, perPage, options) {
  try {
    const offset = (page - 1) * perPage;

    const { rows, count } = await model.findAndCountAll({
      limit: perPage,
      offset: offset,
      order: [['id', 'ASC']],
      ...options,
    });

    return {
      result: rows,
      count,
    };
  } catch (error) {
    console.error('getPaginationData:', error);
    throw error;
  }
}
module.exports = getPaginationData;
