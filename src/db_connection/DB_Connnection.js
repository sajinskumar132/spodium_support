import { connect } from "mongoose"

export const DbConnect=async ()=>{
    try {
        await connect(process.env.MONGODB_URL).then(()=>{
            console.log('DbConnected')
        })
    } catch (error) {
        console.log(error)
        throw error
    }
}