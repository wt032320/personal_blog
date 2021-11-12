import {api } from '../utils/http'

function blogSubmit (data) {
  return api.post('/blogcreate', data)
}

function getBlogInfo () {
  return api.get('/getblog')
}

function getBlogDetails (data) {
  return api.post('/blogdetails', data)
}

function changeBlogViews (data) {
  return api.post('/changeviews', data)
}

export {
  blogSubmit,
  getBlogInfo,
  getBlogDetails,
  changeBlogViews
}