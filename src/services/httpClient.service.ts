import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { HttpClient } from '@/models/httpClient.model'

class httpClientService implements HttpClient {
  private readonly axiosInstance: AxiosInstance
  private readonly abortController: AbortController

  constructor() {
    this.abortController = new AbortController()
    this.axiosInstance = axios.create({
      baseURL: `${import.meta.env.VITE_API_URL}api/v1`,
    })
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.get(url, {
      ...config,
      signal: this.abortController.signal,
    })
    return response.data as T
  }

  async put<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.put(url, data, {
      ...config,
      signal: this.abortController.signal,
    })
    return response.data as T
  }

  async post<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.post(
      url,
      data,
      {
        ...config,
        signal: this.abortController.signal,
      },
    )
    return response.data as T
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.delete(url, {
      ...config,
      signal: this.abortController.signal,
    })
    return response.data as T
  }

  async patch<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.patch(
      url,
      data,
      {
        ...config,
        signal: this.abortController.signal,
      },
    )
    return response.data as T
  }
}

export default httpClientService
