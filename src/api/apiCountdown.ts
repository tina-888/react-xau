import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

interface AddCount {
  countdown_start: string;
  countdownDuration: number;
  completed: boolean;
}

const CountAdd = async (data: AddCount): Promise<AddCount> => {
  try {
    const token = localStorage.getItem("jwtToken");
    console.log("Retrieved token:", token);

    if (!token) {
      throw new Error("No JWT token found");
    }
    const result = await axios.post<AddCount>(
      `${apiUrl}/countdown`,
      { ...data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return result.data;
  } catch (error) {
    console.error("Error during count addition:", error);
    throw error;
  }
};
const CountGet = async () => {
  try {
    const token = localStorage.getItem("jwtToken");
    console.log("Retrieved token:", token);

    if (!token) {
      throw new Error("No JWT token found");
    }

    const result = await axios.get(`${apiUrl}/countdown`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result.data;
  } catch (error) {
    console.error("Error during count retrieval:", error);
  }
};

export default { CountAdd, CountGet };
