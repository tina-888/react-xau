import axios from "axios";

interface PaymentData {
  name: string; // Use lowercase `string`
  usd: number; // Use `number` for both integer and float
  xau: number;
  total: number;
  status: string;
}

interface ApiResponse {}

const apiUrl = import.meta.env.VITE_API_URL;

const PaymentAdd = async (data: PaymentData): Promise<ApiResponse> => {
  try {
    const result = await axios.post<ApiResponse>(`${apiUrl}/payment/add`, data); // Fixed the URL path
    return result.data;
  } catch (error) {
    console.error("Error during payment addition:", error); // Updated the error message for clarity
    throw error;
  }
};
const PaymentGet = async (): Promise<PaymentData> => {
  try {
    const result = await axios.get<PaymentData>(`${apiUrl}/payment/get`);
    return result.data;
  } catch (error) {
    console.error("Error during payment addition:", error); // Updated the error message for clarity
    throw error;
  }
};
const PaymentGetAll = async (): Promise<ApiResponse> => {
  try {
    const result = await axios.get<ApiResponse>(`${apiUrl}/payment/getall`);
    return result.data;
  } catch (error) {
    console.error("Error during payment addition:", error); // Updated the error message for clarity
    throw error;
  }
};
export default {
  PaymentAdd,
  PaymentGet,
  PaymentGetAll,
};
