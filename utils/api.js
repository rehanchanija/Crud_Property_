import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://adventus-admin-api.pdwap.store/api/backend/",
  headers: {
    accept: "*/*",
    "accept-Language": "application/json",
    Authorization:
      "Bearer b8eeecfa2e8230bebaf6898b1f13ed31:1348395bd01b4443981ea28ad3e12a4839d21946dd0acab6fb0007fc595dfe0a767b752506069d48bdb7a0d462c84b9617a38e4454ddc7a14fc82a4b9cfcc1e66d89a01781fb6673fb99a7c54100c61319980c204e8fa81ffee4d39f70ad173465694a6e056108d4d76bb2bacd765c7ea20aaa25129a019f1a3c692d084b7770b9a05b5e23475f71be79b5c3b7c14b567123fc2eb1ce8c1364f3b2d13868fbc57be6cfd03fd2f42b35679b202c475b1911782b17695dabe9c93324ed6940ffeaea8eb32b170eb7b33e9b45b0e8aa8868",
  },
});

// Create property (POST request)
export const createProperty = async (propertyData) => {
  try {
    const response = await apiClient.post("property", propertyData);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to create property"
    );
  }
};

// Fetch property list (GET request)
export const fetchPropertyList = async (search = "") => {
  try {
    const response = await apiClient.get("property", {
      params: { search },
    });
    return response?.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch property list"
    );
  }
};

// Update property (PUT request)
export const updateProperty = async (propertyId, propertyData) => {
  try {
    const response = await apiClient.put(
      `property/${propertyId}`,
      propertyData
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to update property"
    );
  }
};
export const deleteProperty = async (propertyId) => {
  try {
    const response = await apiClient.delete(`property/${propertyId}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to delete property"
    );
  }
};
