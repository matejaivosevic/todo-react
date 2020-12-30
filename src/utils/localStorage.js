export function getLocalStorageItem(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  
  export function setLocalStorageItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  export function removeLocalStorageItem(key) {
    localStorage.removeItem(key);
  }