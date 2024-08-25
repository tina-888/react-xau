import axios from "axios";

// Define the types for request data
interface RegisterData {
  email: string;
  password: string;
  refcodtarget: string;
  accessToken: string;
}

interface LoginData {
  email: string;
  password: string;
  // refcoduser: string;
  accessToken: string;
}
interface UpdateProfile {
  email: string;
  fullname: string;
  refcoduser: string;
  about: string;
}
interface UpdatePasswordResponse {
  success: boolean;
  message: string;
}

const apiUrl = import.meta.env.VITE_API_URL;

const register = async (data: RegisterData): Promise<RegisterData> => {
  try {
    const result = await axios.post<RegisterData>(`${apiUrl}/register`, data);
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

const login = async (data: LoginData): Promise<LoginData> => {
  try {
    const result = await axios.post<LoginData>(`${apiUrl}/login`, data);
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

const getProfile = async (): Promise<UpdateProfile> => {
  try {
    const token = localStorage.getItem("jwtToken");
    console.log("Retrieved token:", token);

    if (!token) {
      throw new Error("No JWT token found");
    }

    const response = await axios.get<UpdateProfile>(`${apiUrl}/profile`, {
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

const updatePassword = async (currentPassword: string, newPassword: string): Promise<UpdatePasswordResponse> => {
  try {
    const token = localStorage.getItem("jwtToken");
    console.log("Retrieved token:", token);

    if (!token) {
      throw new Error("No JWT token found");
    }

    const response = await axios.patch<UpdatePasswordResponse>(
      `${apiUrl}/password`,
      { currentPassword, newPassword },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error updating password:", error);

    return {
      success: false,
      message: error instanceof Error ? error.message : "An error occurred while updating the password.",
    };
  }
};

const updateProfile = async (profileData: Omit<UpdateProfile, "accessToken">) => {
  try {
    const token = localStorage.getItem("jwtToken");
    console.log("Retrieved token:", token);

    if (!token) {
      throw new Error("No JWT token found");
    }

    const response = await axios.put(`${apiUrl}/profile`, profileData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating profile:", error);

    throw error;
  }
};

export default {
  register,
  login,
  getProfile,
  updatePassword,
  updateProfile,
};
