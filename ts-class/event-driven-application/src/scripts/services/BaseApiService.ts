import axios, { Axios, AxiosInstance, AxiosRequestConfig } from "axios"
import { error } from "console";
import { get } from "http";
import { config } from "process";

export class BaseApiService {
    private axiosInstance: AxiosInstance
    
    constructor(){
        this.axiosInstance = axios.create({ baseURL: "http://localhost:2000", headers: { "Content-Type": "application/json" }})
    }

    async request<T>(endPoint: string, config: AxiosRequestConfig = {}): Promise<T>{
        try{
            const response = await this.axiosInstance.request({ url: endPoint, ...config });
            return response.data;
        } catch (error: any) {
            if (error.response) {
                throw new ApiError(error.response.status, error.response.data?.message || "Api error");
            }

            if (error.request){
                throw new ApiError(500, "No response received from server")
            } else {
                throw new ApiError(500, error.message || "Unknown Network Error");
            }
        }
    }

    protected async get<T>(endPoint: string): Promise<T>{
        return this.request<T>(endPoint, { method: "GET"})
    }
    protected async post<T>(endPoint: string, data:any): Promise<T>{
        return this.request<T>(endPoint, {
            method: "POST",
            data,
        })
    }
}


export class ApiError extends Error {
    constructor(public status: number, message: string) {
      super(message); // Call the parent Error class constructor.
    }
  }