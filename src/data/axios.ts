import axios from "axios";
import { tokenStorageKey } from "hooks/useLocalStrage";

export const client = axios.create({
  baseURL: process.env.REACT_APP_AXIOS_BASE_URL,
  timeout: 15000,
});

// トークンをインターセプターで設定
client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(tokenStorageKey); // 例としてlocalStorageからトークンを取得
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
