const Role = require('../db/models').Role;

const getRoles = async () => {
  return await Role.findAll();
};

const getRoleById = async (id) => {
  return await Role.findByPk(id);
};

const createRole = async (role) => {
  return await Role.create(role);
};
const updateRole = async (id, {name}) => {
  name = name.toLowerCase();
  return Role.update( { name }, { where: { id } });
};
const deleteRole = async (id) => {
  return await Role.destroy({ where: { id } });
};
module.exports = {
  getRoles,
  createRole,
  getRoleById,
  updateRole,
  deleteRole,
};
