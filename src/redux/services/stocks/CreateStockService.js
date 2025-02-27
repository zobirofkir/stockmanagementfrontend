import axiosClient from "@/axios/axiosClient";

const CreateStockService = async (data) => axiosClient.post("/stocks", data);

export default CreateStockService;