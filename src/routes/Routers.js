import express from 'express'
import { CreateSubscription, getSubscription } from '../controllers/SubscriptionController.js'
import { userLogin, userRegistration } from '../controllers/UserController.js'

const route=express.Router()

route.post('/create_new_user',userRegistration)
route.post('/user_login',userLogin)

route.get('/get_subscription',getSubscription)
route.post('/create_subscribtion',CreateSubscription)

export default route