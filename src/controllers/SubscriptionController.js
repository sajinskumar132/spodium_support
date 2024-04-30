import Subscription from "../models/SubscriptionModel.js";

export const getSubscription=async(req,res)=>{
    try {
        
        const Subscriptions=await Subscription.find().sort({"created_at": -1})
        if(Subscriptions) return res.status(200).json({message:"Sucessfully get subscription list",data:Subscriptions})
        return res.status(400).json({message:"Failed to get subscription list",data:Subscriptions})
    } catch (error) {
        return res.status(500).json({message:"Internal server error",error})
    }
}
export const CreateSubscription=async (req,res)=>{
    try {
        const {email}=req.body
        if(!email) return res.status(400).json({message:"Email id is required"})
        const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        const validateEmail=emailRegexp.test(email)
        if(!validateEmail) return res.status(400).json({message:"Please enter a valid email"})
        let existingEmail=await Subscription.findOne({email})
        if(existingEmail) return res.status(200).json({message:"You entered email already subscribed"})
        const newSubscription=new Subscription({email})
        await newSubscription.save()
        if(newSubscription) return res.status(201).json({message:"Sucessfully Subscribed"})
        return res.status(400).json({message:"Failed to Subscribed"})
    } catch (error) {
       return res.status(500).json({message:"Internal server error",error})
    }
}