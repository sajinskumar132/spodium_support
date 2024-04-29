import AsyncStorage from '@react-native-async-storage/async-storage';

export class LocalStorageHelper{
    static async getLocalStoreData(){
        const value = await AsyncStorage.getItem('my-token');
        console.log(value,'sssss')
        return value
    }

    static async SetLocalStoreData(token){
        await AsyncStorage.setItem('my-token', token);
    }
    
    static async ClearLocalStoreData(){
        await AsyncStorage.clear();
    }
}