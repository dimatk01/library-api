const User = require('../db/models/').User;
const Role = require('../db/models').Role;
const getPaginationData = require("../utils/getPaginationData");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const getUsers = async (page, perPage) =>{
    return await getPaginationData(User, page, perPage, {attributes:{ exclude: ['password'] }})
}

const getUserById = async (id) => {
    return await User.findByPk(id)
}

const createUser = async ({username, password})=>{
   const hashedPass = await bcrypt.hash(password, saltRounds)
    const userRole = await Role.findOrCreate({where: {name: 'user'}})
    return await User.create({username, password: hashedPass, roleId: userRole[0].id})
}

const updateUser =  (id, data) =>{
    const username = data.username;
    return  User.update({where:{id}}, {username})
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