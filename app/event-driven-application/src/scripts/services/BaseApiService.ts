import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"

export class BaseApiService {
    private axiosInstance: AxiosInstance
    
    constructor(){
        this.axiosInstance = axios.create({ baseURL: "http://localhost:2000", headers: { "Content-Type": "application/json" }})
    }

    protected async request<T>(
        endpoint: string,
        config: AxiosRequestConfig = {}
      ): Promise<T> {
        try {
          const response: AxiosResponse<T> = await this.axiosInstance.request<T>({
            url: endpoint,
            ...config,
          });
          return response.data;
        } catch (error: any) {
          if (error.response) {
            throw new ApiError(error.response.status, error.response.data?.message || "API Error");
          } else if (error.request) {
            throw new ApiError(500, "No response received from server.");
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
      super(message);
    }
  }