/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

interface RewardData {
  coin: number;
  totalcoin: number;
  createdAt: string;
}
interface AddRewardData {
  coin: number;
  totalcoin: number;
}

const RewardAdd = async (data: AddRewardData): Promise<AddRewardData> => {
  try {
    const token = localStorage.getItem("jwtToken");
    console.log("Retrieved token:", token);

    if (!token) {
      throw new Error("No JWT token found");
    }
    console.log(data);

    const result = await axios.post<AddRewardData>(
      `${apiUrl}/reward/add`,
      { ...data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(result);

    return result.data;
  } catch (error) {
    console.error("Error during reward addition:", error);
    throw error;
  }
};

const RewardGetAll = async (): Promise<RewardData[]> => {
  try {
    const token = localStorage.getItem("jwtToken");
    console.log("Retrieved token:", token);

    if (!token) {
      throw new Error("No JWT token found");
    }
    const result = await axios.get<RewardData[]>(`${apiUrl}/reward/getall`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result.data;
  } catch (error) {
    console.error("Error during reward retrieval:", error);
    throw error;
  }
};

const RewardGetLast = async (): Promise<RewardData> => {
  try {
    const token = localStorage.getItem("jwtToken");
    console.log("Retrieved token:", token);

    if (!token) {
      throw new Error("No JWT token found");
    }
    const result = await axios.get<RewardData>(`${apiUrl}/reward/getlast`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("RewardGetLast response:", result); // Log the result to inspect the response
    return result.data;
  } catch (error) {
    console.error("Error during reward retrieval:", error);
    throw error;
  }
};

export default {
  RewardAdd,
  RewardGetAll,
  RewardGetLast,
};
