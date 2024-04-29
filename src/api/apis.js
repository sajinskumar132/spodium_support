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


