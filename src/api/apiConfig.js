import axios from "axios";

import { LocalStorageHelper } from "../helpers/localStoreHelper";

const axiosConfig = axios.create({
  baseURL: 'https://spodium-support.onrender.com/spodium_support',
  headers: {
    'Authorization':`Bearer ${LocalStorageHelper.getLocalStoreData()}`,
    'Content-Type': 'application/json',
  },
});

export default axiosConfig;