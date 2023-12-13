import axios from "axios";

export const PUBLIC_URL = "changepPassphrase";

export const BASE_URL = window.location.origin + "/" + PUBLIC_URL;
// export const BASE_URL = "http://localhost:8080" + "/" + PUBLIC_URL;

export const https = axios.create({
  baseURL: BASE_URL,
  timeout: 1000000000,
  "Access-Control-Allow-Origin": "*",
});
