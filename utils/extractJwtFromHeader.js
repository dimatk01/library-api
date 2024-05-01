function extractJwtFromHeader(req) {
    return  req.headers.authorization.split(' ')[1]
}
module.exports = extractJwtFromHeader;