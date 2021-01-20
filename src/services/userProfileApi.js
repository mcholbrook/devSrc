import tokenService from "../services/tokenService";
const BASE_URL = "/api/userInfo";

export function create(profile) {
    return fetch(
      BASE_URL,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + tokenService.getToken(),
        },
        body: JSON.stringify(profile)
      },
      { mode: "cors" }
    ).then((res) => res.json());
  }

  export function update(profile) {
    return fetch(`${BASE_URL}${profile._id}`, {
          method: 'PUT',
          headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
          body: JSON.stringify(profile)
    }, {mode: 'cors'})
    .then( res => res.json())
}