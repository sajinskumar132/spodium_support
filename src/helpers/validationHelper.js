export class ValidationHelper{
    static IsValidEmail(email){
        const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        const validateEmail=emailRegexp.test(email)
        return validateEmail
    }
    static isNotEmpty(item){
        if(!item){
            return false
        }else if(!item.trim()){
            return false
        }
        return true
    }
}