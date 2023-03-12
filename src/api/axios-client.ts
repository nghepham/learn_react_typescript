import axios, { AxiosInstance } from "axios";

class AxiosClient {
  public readonly instance: AxiosInstance;

  public constructor() {
    this.instance = axios.create({
      baseURL: "" // URL here
    });
  }
}

const axiosClient = new AxiosClient();
export default axiosClient;
