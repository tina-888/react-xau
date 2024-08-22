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
  accessToken: string;
}
interface GetData {
  id: string;
  email: string;
  referralcode: string;
}

interface ApiResponse {
  accessToken: string;
  // Add other properties if necessary
}

const apiUrl = import.meta.env.VITE_API_URL;

const register = async (data: RegisterData): Promise<ApiResponse> => {
  try {
    const result = await axios.post<ApiResponse>(`${apiUrl}/register`, data);
    const { accessToken } = result.data;
    if (accessToken) {
      localStorage.setItem("jwtToken", accessToken); // Store token
      console.log("Token stored:", accessToken); // Debugging
    } else {
      console.error("No access token found in response");
    }
    return result.data;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};

const login = async (data: LoginData): Promise<ApiResponse> => {
  try {
    const result = await axios.post<ApiResponse>(`${apiUrl}/login`, data);
    const { accessToken } = result.data;
    if (accessToken) {
      localStorage.setItem("jwtToken", accessToken); // Store token
      console.log("Token stored:", accessToken); // Debugging
    } else {
      console.error("No access token found in response");
    }
    return result.data; // Ensure this line is not commented out
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error during login:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};

const getProfile = async (): Promise<GetData> => {
  try {
    const token = localStorage.getItem("jwtToken");
    console.log("Retrieved token:", token);

    if (!token) {
      throw new Error("No JWT token found");
    }

    const response = await axios.get<GetData>(`${apiUrl}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching profile data:", error);

    if (axios.isAxiosError(error) && error.response) {
      // Handle specific HTTP errors
      if (error.response.status === 401) {
        // Handle unauthorized errors (e.g., token expired)
        console.error("Unauthorized: Please log in again.");
      } else if (error.response.status === 404) {
        // Handle not found errors
        console.error("Profile not found.");
      }
    }

    throw error;
  }
};

export default {
  register,
  login,
  getProfile,
};
