import api from "./api";

export async function getUserLists() {
  const response = await api.get("/lists");
  return response.data;
}

export async function createList(title) {
  const response = await api.post("/lists", { title });
  return;
}
