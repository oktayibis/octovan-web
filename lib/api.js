import Axios from "axios";
// https://api.instantwebtools.net/v1/passenger?page=0&size=10
//  ​https://api.instantwebtools.net/v1/passenger/:id
const defaultParams = {
  baseUrl: "https://api.instantwebtools.net/v1/passenger",
  size: 10,
};

export const getAllPax = async () => {
  return await Axios.get(defaultParams.baseUrl);
};

export const getPaxPerPage = async (page) => {
  const fetchUrlPerPage = `${defaultParams.baseUrl}?size=${defaultParams.size}&page=${page}`;
  return await Axios.get(fetchUrlPerPage);
};

export const getPaxDetails = async (id) => {
  const fetchDetailUrl = `${defaultParams.baseUrl}/${id}`;
  return await Axios.get(fetchDetailUrl);
};

export const changePaxName = async (id, name) => {
  const patchPaxUrl = `${defaultParams.baseUrl}/${id}`;

  return await Axios.patch(patchPaxUrl, { name });
};
