import Axios from "axios";

const defaultParams = {
  baseUrl: "https://api.instantwebtools.net/v1/passenger",
  size: 10,
};

export const getAllPax = async () => {
  return await Axios.get(defaultParams.baseUrl);
};

export const getPaxPerPage = async (page) => {
  // minus 1 for handle request to endpoint, pages starting from 0. But in userface page starting from 1.
  const getPageNo = page - 1;

  const fetchUrlPerPage = `${defaultParams.baseUrl}?size=${defaultParams.size}&page=${getPageNo}`;

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
