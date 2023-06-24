module.exports = {
    jwt: {
        secret: process.env.SECRET_API || "default",
        expiresIn: "1d", 
    }
}