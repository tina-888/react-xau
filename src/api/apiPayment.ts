import axios from "axios";

interface AddPaymentData {
  name: string; // Use lowercase `string`
  usd: number; // Use `number` for both integer and float
  xau: number;
  total: number;
  status: string;
}
interface GetPaymentData {
  name: string; // Use lowercase `string`
  usd: number; // Use `number` for both integer and float
  xau: number;
  total: number;
  status: string;
  createdAt: string;
}

const apiUrl = import.meta.env.VITE_API_URL;

const PaymentAdd = async (data: AddPaymentData): Promise<AddPaymentData> => {
  try {
    const token = localStorage.getItem("jwtToken");
    console.log("Retrieved token:", token);

    if (!token) {
      throw new Error("No JWT token found");
    }
    const result = await axios.post<AddPaymentData>(
      `${apiUrl}/payment/add`,
      { ...data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ); // Fixed the URL path
    return result.data;
  } catch (error) {
    console.error("Error during payment addition:", error); // Updated the error message for clarity
    throw error;
  }
};
const PaymentGet = async (): Promise<GetPaymentData> => {
  try {
    const token = localStorage.getItem("jwtToken");
    console.log("Retrieved token:", token);

    if (!token) {
      throw new Error("No JWT token found");
    }
    const result = await axios.get<GetPaymentData>(`${apiUrl}/payment/get`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result.data;
  } catch (error) {
    console.error("Error during payment addition:", error); // Updated the error message for clarity
    throw error;
  }
};
const PaymentGetAll = async (): Promise<GetPaymentData[]> => {
  try {
    const token = localStorage.getItem("jwtToken");
    console.log("Retrieved token:", token);

    if (!token) {
      throw new Error("No JWT token found");
    }
    const result = await axios.get<GetPaymentData[]>(`${apiUrl}/payment/getall`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
