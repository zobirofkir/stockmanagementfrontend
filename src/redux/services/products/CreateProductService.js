import { axiosClient } from "@/axios/axiosClient";

const CreateProductService = (data) => axiosClient.post("/products", data);

export default CreateProductService;