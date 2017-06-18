import * as axios from 'axios';

const BASE_URL = 'http://localhost:3001';
// const BASE_URL = 'https://kitboxer.herokuapp.com';

function update(image, cropData) {
  const url = `${BASE_URL}/images/${image.id}`;
  return axios({
    method: 'PATCH',
    data: {image: image, crop_data: cropData},
    url: url,
  }).then(x => x.request.response);
}

function upload(formData) {
  const url = `${BASE_URL}/images/upload`;
  return axios.post(url, formData).
      then(x => x.request.response).
      catch((error) => {
        console.log(error);
      });
}

function remove(imageId) {
  const url = `${BASE_URL}/images/${imageId}`;
  return axios({
    method: 'DELETE',
    url: url,
  }).then(x => x.request.response);
}

export {upload, update, remove};