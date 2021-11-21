import {api } from '../utils/http'

function blogSubmit (data) {
  return api.post('/api/bloginfo/create', data)
}

function getBlogInfo () {
  return api.get('/api/bloginfo')
}

function getBlogDetails (data) {
  return api.post('/blogdetails', data)
}

function changeBlogViews (data) {
  return api.post('api/bloginfo/views', data)
}

export {
  blogSubmit,
  getBlogInfo,
  getBlogDetails,
  changeBlogViews
}