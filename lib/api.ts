import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Add a request interceptor to include the token in every request
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("jwt_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export interface CurrentUser {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  // Add more fields as needed
}

export const getCurrentUser = async (): Promise<CurrentUser> => {
  const response = await api.get<CurrentUser>("/api/id");
  return response.data;
};

export default api;
