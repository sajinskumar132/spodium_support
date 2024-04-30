import axiosConfig from "./apiConfig"

export const userLogin=async(data)=>{
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig.post('/user_login', data);
            resolve(response.data.data.token);
        } catch (error) {
            reject(error.response.data.message);
        }
    });

}


///get_subscription

export const subscribtions=async(data)=>{
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig.get('/get_subscription');
            resolve(response.data.data);
        } catch (error) {
            reject(error.response.data.message);
        }
    });

}