import tokenService from "../services/tokenService";
const BASE_URL = "/api/users/";

export function getAllUsers() {
  return fetch(
    BASE_URL,
    {
      headers: { Authorization: "Bearer " + tokenService.getToken() },
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

export function updateUser(formData){
  return fetch(`${BASE_URL}update`,
  {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken(),
    },
    body: JSON.stringify(formData)
  },
  {mode: "cors"}
  ).then((res) => res.json())
}

export function getUser(id){
  return fetch(`${BASE_URL}updatedUser/${id}`,
  {
    headers: { Authorization: "Bearer " + tokenService.getToken() },
  },
  { mode: "cors" })
  .then((res) => res.json())
}