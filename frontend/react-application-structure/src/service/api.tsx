import axios from './axios';

const API: any = async ({
  url,
  method,
  responseType,
  data,
  cancelToken,
  params,
  headers
}) => {
  let axiosRequestObject = {
    method,
    url,
    data,
    headers,
    responseType,
    params,
    ...(cancelToken
      ? {
          cancelToken
        }
      : '')
  };

  let request = await axios
    .request(axiosRequestObject)
    .then(handleSuccessRequest)
    .catch(handleErrorRequest);

  return request;
};

const handleSuccessRequest = (response) => ({
  status: response.status,
  data: response.data
});

const handleErrorRequest = (err) => {
  if (!err.response) {
    return Promise.reject();
  } else if (err.response?.status === 401) {
    localStorage.removeItem('token');
    return Promise.reject();
  } else return err.response;
};

export default API;
