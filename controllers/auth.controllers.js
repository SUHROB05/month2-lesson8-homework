import { createUser } from "../services/index.js"

export const registerController = (req, res, next)=>{
    try {
        const user = createUser(req.body)
        res.send(user)

    } catch (error) {
        next(error)
    }
}
export const loginController = (req, res, next)=>{
    try {
        
    } catch (error) {
        next(error)
    }
}
export const logoutController = (req, res, next)=>{
    try {
        
    } catch (error) {
        next(error)
    }
}
