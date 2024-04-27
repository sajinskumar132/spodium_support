import bcryptjs from "bcryptjs"
import { ValidationHelper } from "../helpers/validationHelper.js"
import User from "../models/UserModel.js"
import jwt from 'jsonwebtoken'


export const userRegistration = async(req,res)=>{
    try {
        const {userName,email,password}=req.body
        if(!ValidationHelper.isNotEmpty(userName)) return res.status(400).json({message:"User name is required"})
        if(!ValidationHelper.isNotEmpty(email)) return res.status(400).json({message:"Email is required"})
        if(!ValidationHelper.isNotEmpty(password)) return res.status(400).json({message:"Password is required"})
        if(!ValidationHelper.IsValidEmail(email)) return res.status(400).json({message:"Please enter valid email"})
        const existingEmail=await User.findOne({email})
        if(existingEmail)  return res.status(400).json({message:"Email is already exists"})
        const encryptPassword = bcryptjs.hashSync(password)
        const newUser=new User({userName,email,password:encryptPassword})
        await newUser.save()
        if(newUser) return res.status(201).json({message:"Sucessfully register new user"})
        return res.status(400).json({message:"Failed to register new user"})
    } catch (error) {
        return res.status(500).json({message:"Internal server error",error})
    }
}
export const userLogin=async (req,res)=>{
    try {
        const {email,password}=req.body
        if(!ValidationHelper.isNotEmpty(email)) return res.status(400).json({message:"Email is required"})
        if(!ValidationHelper.isNotEmpty(password)) return res.status(400).json({message:"Password is required"})
        if(!ValidationHelper.IsValidEmail(email)) return res.status(400).json({message:"Please enter valid email"})
        const exstingUser=await User.findOne({email})
        if(exstingUser){
            const isMatchPassword = bcryptjs.compareSync(password,exstingUser.password);
            const token = jwt.sign({id:exstingUser._id},process.env.SECRETKEY,{ expiresIn: '7d' })
            if(isMatchPassword) return res.status(200).json({message:"Sucessfully login",data:{token}})
            return res.status(400).json({message:"Incorrect Password"})
        }
       return res.status(400).json({message:"User does not exists"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Internal server error",error})
    }
}