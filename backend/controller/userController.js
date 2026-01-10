import User from '../model/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const signUp = async (req, res) => {
    const {name, age, email, password} = req.body
    const user = await User.findOne({email})
    if(user) return res.send("user already registered")

    bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, async function(err, hash) {
        const res = await User.create({
            name,
            age,
            email,
            password: hash,
        })
        const token = jwt.sign({email: email}, process.env.JWT_SECRET);
        res.cookie("token", token)
        res.send("sucessfully registered")
    });
});
}

export const login = async (req, res) => {
    try {
        const {email, password} = req.body
    const user = await User.findOne({email})
    if(!user) return res.send('user not registered yet')
        bcrypt.compare(password, user.password, function(err, result) {
    if(result){
        const token = jwt.sign({email: email, id: user._id}, process.env.JWT_SECRET,  { expiresIn: "1d" });
        res.cookie("token", token), {
            httpOnly: true,
            sameSite: "lax"
        }
        res.send('successfully have an account')
    } else {
        res.redirect('/login')
    }
});
    } catch(err) {
        console.log('something went wrong with login')
    }
}