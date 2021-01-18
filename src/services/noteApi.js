import tokenService from "../services/tokenService";
const BASE_URL = "/api/notes/";

export function addNote(newNoteData) {
    return fetch(
      `${BASE_URL}${newNoteData.resourceId}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + tokenService.getToken(),
        },
      },
      { mode: "cors" }
    ).then((res) => res.json());
  }
