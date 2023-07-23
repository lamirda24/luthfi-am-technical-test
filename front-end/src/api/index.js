import { request } from "../config";

const getUser = async (params) => {
  const res = await request.get(`/getDataUser/${params}`);
  return res;
};

const submitDataUser = async (payload) => {
  const res = await request.post(`/setDataUser`, payload);
  return res;
};
const deleteData = async (params) => {
  const res = await request.delete(`/delDataUser/${params}`);
  return res;
};

export { getUser, submitDataUser, deleteData };
