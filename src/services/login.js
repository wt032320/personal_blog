import { api } from "../utils/http";

function login (data) {
  return api.post('/login', data)
}

export {
  login
}