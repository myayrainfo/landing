import axios from "axios";

const DEFAULT_API_ROOT = "http://localhost:5001";

function normalizeApiBase(baseUrl, panelPath) {
  const trimmedBase = (baseUrl || "").trim().replace(/\/+$/, "");
  const normalizedPanelPath = panelPath.startsWith("/") ? panelPath : `/${panelPath}`;

  if (!trimmedBase) {
    return `${DEFAULT_API_ROOT}${normalizedPanelPath}`;
  }

  if (trimmedBase.endsWith(normalizedPanelPath)) {
    return trimmedBase;
  }

  return `${trimmedBase}${normalizedPanelPath}`;
}

const API = axios.create({
  baseURL: normalizeApiBase(import.meta.env.VITE_API_BASE_URL, "/api/landing"),
});

export default API;
