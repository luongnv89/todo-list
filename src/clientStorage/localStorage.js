/**
 * Work with localStorage
 */

const saveObject = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

const getObject = (key) => {
  return JSON.parse(localStorage.getItem(key));
}

const deleteObject = (key) => {
  localStorage.removeItem(key);
}

module.exports = {
  saveObject,
  getObject,
  deleteObject,
};
