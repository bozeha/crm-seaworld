const defaultObj: any = {
  lang: process.env.REACT_APP_LANG || "he",
  serverApi: process.env.REACT_APP_SERVER_API || "http://192.168.0.212:666",
  addElements: process.env.REACT_APP_ADD_ELEMENT || "/items/addElement",
  uploadImages: process.env.REACT_APP_UPLOAD_IMAGE || "/uploadImages",
  updateElements:
    process.env.REACT_APP_UPDATE_ELEMENT || "/items/updateElement",
  removeElement: process.env.REACT_APP_REMOVE_ELEMENT || "/items/removeElement",
};

export const getVal = (val: string) => {
  return defaultObj[val];
};
