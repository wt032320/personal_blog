import { api } from "../utils/http";

function getHomeInfo () {
  return api.get('/api/homeinfo')
}

export {
  getHomeInfo
}