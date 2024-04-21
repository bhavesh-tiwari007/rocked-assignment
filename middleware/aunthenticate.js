const authenticate = (req, res, next) => {
    const token = req.headers['x-trainer-id'];
    if(!token) return res.status(401).json({message: "Unauthorized"});
    if(token != "8810261639") return res.status(401).json({message: "Unauthorized"});
    next();
}

module.exports = {authenticate};