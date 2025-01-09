import jwt from 'jsonwebtoken'
import appConfig from '../config/appConfig'

function AuthenticateToken(req, res, next) {
    const token = localStorage.getItem("_token")

    if (token == null) return res.json({ "err": true, "msg": "Token not found" })

    jwt.verify(token, appConfig.JWT_SECRET, (err, user) => {
        if (err) {
            console.log(err)
            return res.sendStatus(403)
        }
        req.user = user
        next()
    })
}

function roleAuthenticate(req, res, next) {
    if(req.user.role === "admin") {
        next()
    } else {
        return res.json({ "err": true, "msg": "You are not authorized to access"})
    }
}

export {AuthenticateToken, roleAuthenticate}