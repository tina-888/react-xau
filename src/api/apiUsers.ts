import axios from "axios";

// Define the types for request data
interface RegisterData {
  email: string;
  password: string;
  // Add other fields as necessary
}

interface LoginData {
  email: string;
  password: string;
}

// Define the types for response data if needed
interface ApiResponse {
  // Define the shape of the response data
  // Example: id: string; token: string;
}

const apiUrl = import.meta.env.VITE_API_URL;

const register = async (data: RegisterData): Promise<ApiResponse> => {
  try {
    const result = await axios.post<ApiResponse>(`${apiUrl}/register`, data);
    return result.data;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};

const login = async (data: LoginData): Promise<ApiResponse> => {
  try {
    const result = await axios.post<ApiResponse>(`${apiUrl}/login`, data);
    return result.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error during login:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};

export default {
  register,
  login,
};
