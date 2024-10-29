import { validateEmail } from "../helper/email.js"
export const registerMiddleware = (req, res, next) => {
    const {email, password} = req.body
    if (!email || !password) {
        res.status(400).send("Email va Password bolishi shart")
    }
    if (password.length <= 5) {
        res.status(400).send("Password kamida 6 ta elementdan iborat bolishi kerak")
    } 
    if (!validateEmail(email)) {
        return res.status(400).send("Email yaroqsiz")
    }
    next()
}


export const loginMiddleware = (req, res, next) => {
    const {email, password} = req.body
    if (!email || !password) {
        return res.status(400).send("Email va Password bolishi shart")
    }
    if (password.length <= 5) {
        return res.status(400).send("Password kamida 6 ta elementdan iborat bolishi kerak")
    } 
    if (!email.includes("@") || !email.includes(".")) {
        return res.status(400).send("")
    }
    next()
}
