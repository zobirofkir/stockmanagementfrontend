import axiosClient from "@/axios/axiosClient";

export const ProfileService = () => axiosClient.get("/auth/current");