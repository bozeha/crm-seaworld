const defaultObj: any = {
  lang: process.env.REACT_APP_LANG || "hex",
};

export const getVal = (val: string) => {
  return defaultObj[val];
};
