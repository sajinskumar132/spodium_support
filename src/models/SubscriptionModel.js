import { Schema, model } from "mongoose";

const SubscriptionSchema=new Schema({
    email: {type: String,required: true,unique: true},
},{timestamps:true})

export default model('Subscription',SubscriptionSchema)