export const getLocalStorage = (key) => {
   let retString = localStorage.getItem(key)
   let retArray = JSON.parse(retString)
   return {
      data : retArray
   }
}

