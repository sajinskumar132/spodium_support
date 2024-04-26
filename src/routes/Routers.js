import express from 'express'
import { CreateSubscription, getSubscription } from '../controllers/SubscriptionController.js'

const route=express.Router()

route.get('/get_subscription',getSubscription)
route.post('/create_subscribtion',CreateSubscription)

export default route