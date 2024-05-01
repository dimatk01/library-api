const Role = require('../db/models').Role;
const {FORBIDDEN, UNAUTHORIZED} = require("http-status");


module.exports = function (roles) {
    return  async function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }

        try {
          const user = req.user
            if (!user) {
                return res.status(UNAUTHORIZED).json({message: "User unauthorized"})
            }
           const userRole = await Role.findByPk(user?.roleId)

            if (!roles.some((role)=> role === userRole?.name)) {
                return res.status(FORBIDDEN).json({message: "Resource forbidden"})
            }
            next();
        } catch (e) {
            console.log(e)
            return res.status(403).json({message: "User unauthorized"})
        }
    }
};