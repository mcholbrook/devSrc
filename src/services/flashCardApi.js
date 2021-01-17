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