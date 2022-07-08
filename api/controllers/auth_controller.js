import User from "../models/User.js"
import bcrypt from 'bcryptjs'

export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltsync(10)
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

        const user = await User.findOne({ username: req.body.username })
        if (!user) return next(createError(404, "User not found!"))

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isPasswordCorrect) return next(createError(404, "Password is wrong!"))

        const { password, isAdmin, ...otherDrtails } = user._doc
        res.status(200).json(...otherDrtails)

    } catch (err) {
        next(err)
    }
}