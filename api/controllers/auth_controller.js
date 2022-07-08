import User from "../models/User"
import bcrypt from 'bcryptjs'

export const register = async (req, res, next) => {
    try {
        const salt =  bcrypt.genSaltsync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            telephone: req.body.telephone
        })

        await newUser.save()
        res.status(200).send("User been created")
        
    } catch (err) {
        next(err)
    }
}
export const login = async (req, res, next) => {
    try {

       const user = User.findOne({username: re.body.username})
       if(!user) return next(createError(404, "User not found!"))
        res.status(200).send("User been created")
        
    } catch (err) {
        next(err)
    }
}