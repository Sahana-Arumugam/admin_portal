import { Registration } from "../types";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchRegistrations = async (): Promise<Registration[]> => {
  const response = await fetch(`${API_URL}/admin/registrations`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    throw new Error("Failed to fetch registrations");
  }

  return response.json();
};
