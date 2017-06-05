import * as axios from 'axios';

const BASE_URL = 'http://localhost:3001';

function load() {
  const url = `${BASE_URL}/images`;
  return axios({
    method: 'GET',
    url: url,
  }).then(x => x.request.response);
}

function upload(formData) {
  const url = `${BASE_URL}/images/upload`;
  return axios.post(url, formData)
  // get response
      .then(x => x.request.response);
}

function remove(imageId) {
  const url = `${BASE_URL}/images/${imageId}`;
  return axios({
    method: 'DELETE',
    url: url,
  }).then(x => x.request.response);
}

// add url field
// .then(x => x.request.response.map(img => Object.assign({},
//     img, {url: `${BASE_URL}/images/${img.id}`})));
// }

export {load, upload, remove};