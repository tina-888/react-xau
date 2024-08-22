/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

interface RewardData {
  coin: number;
  totalcoin: number;
}

const apiUrl = import.meta.env.VITE_API_URL;

const RewardAdd = async (data: RewardData): Promise<RewardData> => {
  try {
    const result = await axios.post<RewardData>(`${apiUrl}/reward/add`, data);
    return result.data;
  } catch (error) {
    console.error("Error during reward addition:", error);
    throw error;
  }
};

const RewardGetAll = async (): Promise<RewardData> => {
  try {
    const result = await axios.get<RewardData>(`${apiUrl}/reward/getall`);
    return result.data;
  } catch (error) {
    console.error("Error during reward retrieval:", error);
    throw error;
  }
};

const RewardGetLast = async (): Promise<RewardData> => {
  try {
    const result = await axios.get<RewardData>(`${apiUrl}/reward/getlast`);
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
