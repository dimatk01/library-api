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
    const candidate = await User.findOne({where: {username}})
    if (candidate) {
        throw new Error('User already exists')
    }
   const hashedPass = await bcrypt.hash(password, saltRounds)
    const userRole = await Role.findOrCreate({where: {name: 'user'}})
    return await User.create({username, password: hashedPass, roleId: userRole[0].id})
}

const updateUser = async (id, data) =>{
    let hashedPass
    if(data?.password) {
        hashedPass = await bcrypt.hash(data.password, saltRounds)
    }
    return  User.update({where:{id}}, {...data, password: hashedPass})
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