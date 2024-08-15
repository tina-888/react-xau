/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const register = async (data: any) => {
  try {
    const result = await axios.post(`${process.env.API_URL}/register`, data);
    return result.data;
  } catch (error) {
    console.error("Error during registration:", Error);
    throw error;
  }
};

const login = async (data: any) => {
  try {
    const result = await axios.post(`${process.env.API_URL}/login`, data);
    return result.data;
  } catch (error) {
    console.error("Error during login:", Error);
    throw error;
  }
};

export default {
  register,
  login,
};
