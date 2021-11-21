import { api } from "../utils/http";

function login (data) {
  return api.post('api/admin/login', data)
}

export {
  login
}