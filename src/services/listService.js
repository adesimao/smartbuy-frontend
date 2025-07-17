import api from "./api";

export async function getUserLists() {
  const response = await api.get("/lists");
  return response.data;
}

export async function createList(title) {
  const response = await api.post("/lists", { title });
  return;
}

export async function getListById(id) {
  const response = await api.get(`/lists/${id}`);
  return response.data;
}

export async function addItemToList(listId, item) {
  const response = await api.post(`items/list/${listId}`, item);
  return response.data;
}
