const User = require('../db/models/').User;
const Role = require('../db/models').Role;
const getPaginationData = require("../utils/getPaginationData");

const getUsers = async (page, perPage) =>{
    return await getPaginationData(User, page, perPage)
}

const getUserById = async (id) => {
    return await User.findByPk(id)
}

const createUser = async (data)=>{
    const userRole = await Role.findOrCreate({where: {name: 'user'}})
    return await User.create({...data, roleId: userRole[0].id})
}

const updateUser =  (id, data) =>{
    return  User.update({where:{id}}, ...data)
}

const deleteUser = async (id) => {
    return await User.destroy({where: {id}})
}
module.exports={
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    getUserById
}