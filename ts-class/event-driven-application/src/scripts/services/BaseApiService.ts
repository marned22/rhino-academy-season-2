import axios, { Axios, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { error, log } from "console";
import { get } from "http";
import { config } from "process";

export class BaseApiService {
    private axiosInstance: AxiosInstance
    
    constructor(){
        this.axiosInstance = axios.create({ baseURL: "http://localhost:2000", headers: { "Content-Type": "application/json" }})
    }

    protected async request<T>(
        endpoint: string, // API endpoint (e.g., "users" or "posts/1").
        config: AxiosRequestConfig = {} // Additional request options (method, body, headers, etc.).
      ): Promise<T> {
        try {
          // Perform the HTTP request using Axios.
          const response: AxiosResponse<T> = await this.axiosInstance.request<T>({
            url: endpoint,
            ...config, // Merge provided configuration options.
          });
          console.log(response);
          
    
          return response.data; // Axios automatically parses JSON.
        } catch (error: any) {
          if (error.response) {
            // API responded with an error status code.
            throw new ApiError(error.response.status, error.response.data?.message || "API Error");
          } else if (error.request) {
            // Request was made but no response was received.
            throw new ApiError(500, "No response received from server.");
          } else {
            // Something else went wrong.
            throw new ApiError(500, error.message || "Unknown Network Error");
          }
        }
      }

    protected async get<T>(endPoint: string): Promise<T>{
        return this.request<T>(endPoint, { method: "GET"})
    }
    protected async post<T>(endPoint: string, data:any): Promise<T>{
        console.log('Endpoint:', endPoint)
        return this.request<T>(endPoint, {
            method: "POST",
            data,
        })
    }

    protected async put<T>(endPoint: string, data: any): Promise<T>{
      return this.request<T>(endPoint, {
        method: 'PUT',
        data,
      })
    }

    protected async delete<T>(endPoint: string): Promise<T>{
      return this.request<T>(endPoint, {
        method: 'DELETE',
      })
    }
}


export class ApiError extends Error {
    constructor(public status: number, message: string) {
      super(message); // Call the parent Error class constructor.
    }
  }