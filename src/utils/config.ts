const defaultObj: any = {
  lang: process.env.REACT_APP_LANG || "he",
  serverApi: process.env.REACT_APP_SERVER_API || "",
  addElements: process.env.REACT_APP_ADD_ELEMENT || "/items/addElement",
  updateElements:
    process.env.REACT_APP_UPDATE_ELEMENT || "/items/updateElement",
};

export const getVal = (val: string) => {
  return defaultObj[val];
};
