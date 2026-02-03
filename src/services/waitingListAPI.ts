import axios from "axios";
import { WaitingListFormData, WaitingListResponse } from "../types/waitingList";

const waitingListAPI = axios.create({
  baseURL:
    import.meta.env.VITE_REACT_APP_API_URL || "http://localhost:3000/join-waiting-list",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});

waitingListAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem("csrf_token");
  if (token) {
    config.headers["X-CSRF-Token"] = token;
  }

  config.headers["X-Request-ID"] =
    `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  return config;
});

waitingListAPI.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ECONNABORTED") {
      throw new Error(
        "Request timeout. Please check your connection and try again.",
      );
    }

    if (!error.response) {
      throw new Error("Network error. Please check your internet connection.");
    }

    return Promise.reject(error);
  },
);

export const submitWaitingList = async (
  formData: WaitingListFormData,
  turnstileToken: string,
): Promise<WaitingListResponse> => {
  try {
    
    const payload = {
      user_type: formData.userType === "personal" ? "individual" : "organisation",
      first_name: formData.firstName,
      last_name: formData.lastName,
      personal_email: formData.personalEmail, 
      organisation_name: formData.businessName,
      phone: formData.phone,
      organisation_email: formData.businessEmail,
      physical_address: formData.physicalAddress,
      contact_first_name: formData.contactFirstName,
      contact_last_name: formData.contactLastName,
      contact_phone: formData.contactPhone,
      contact_email: formData.contactEmail,
      source: formData.source || "landing_page", 
      turnstile_token: turnstileToken,
      timestamp: Date.now(),
      referral_code: formData.referralCode,
      country: formData.country,
    };

    const response = await waitingListAPI.post<WaitingListResponse>(
      "/join-waiting-list",
      payload,
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 429) {
        throw new Error(
          "Too many requests. Please try again in a few minutes.",
        );
      }

      if (error.response?.data?.errors) {
        const serverErrors = error.response.data.errors;
        throw new Error(
          Object.entries(serverErrors)
            .map(
              ([field, messages]) =>
                `${field}: ${(messages as string[]).join(", ")}`,
            )
            .join("\n"),
        );
      }

      throw new Error(
        error.response?.data?.message || "Submission failed. Please try again.",
      );
    }
    throw error;
  }
};
