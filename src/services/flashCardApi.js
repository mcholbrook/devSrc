import tokenService from '../services/tokenService'
const BASE_URL = '/api/flashcards/'

export function create(flashcard) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(flashcard)
  }, {mode: "cors"})
  .then(res => res.json());
}

export function getAll() {
    return fetch(BASE_URL, {mode: 'cors'})
    .then(res => res.json())
}

export function deleteFlashCard(flashCard) {
    console.log(flashCard)
    return fetch(
        `${BASE_URL}${flashCard}`,
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