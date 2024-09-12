import axios from "axios";

const BASE_URL = "https://mct-6.onrender.com/api";

export const addTask = async (task) => {
  return await axios.post(`${BASE_URL}/task`, task);
};

export const getTasks = async () => {
  return await axios.get(`${BASE_URL}/tasks`);
};

export const stopTask = async (taskId) => {
  return await axios.put(`${BASE_URL}/task/${taskId}`);
};
