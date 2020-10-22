import axios from "axios";
const baseUrl = "/api/blogs";

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = () => axios.get(baseUrl).then((res) => res.data);

const create = async (newBlog) => {
  const config = { headers: { Authorization: token } };
  const res = await axios.post(baseUrl, newBlog, config);
  return res.data;
};

const update = async (id, updatedBlog) => {
  const req = await axios.put(`${baseUrl}/${id}`, updatedBlog);
  return req.data;
};

const deleteBlog = async (id, token) => {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const req = await axios.delete(`${baseUrl}/${id}`, config);
  return req.data;
};

const findById = async (id) => {
  try {
    const res = await axios.get(`${baseUrl}/${id}`);
    return res.data;
  } catch (ex) {
    console.error("BLOG NOT FOUND: ", ex);
    return 0;
  }
};

export default { setToken, getAll, create, update, deleteBlog, findById };
