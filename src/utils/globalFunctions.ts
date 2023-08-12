import { getVal } from "./config";

export const getData = async (collection: any) => {
  try {
    console.log(`getVal("serverApi"):: ${getVal("serverApi")}`);
    const sendData = { collection: collection };

    // query
    //   ? { dbQuery: `${query.listType}.${query.lang}` }
    //   : {};
    console.log(`sendData::::::${JSON.stringify(sendData)}`);
    const results = await fetch(`${getVal("serverApi")}/items`, {
      method: "POST",
      body: JSON.stringify(sendData),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
      },
    }).then((res) => {
      return res.json();
    });
    return results;
  } catch (error) {
    console.log(`Error:::${error}`);
  }
};

export const sendData = async (data: any) => {
  try {
    const path = getVal(data.action);
    console.log(`data::::::${JSON.stringify(data)}`);
    await fetch(`${getVal("serverApi")}${path}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods": " POST, GET, PUT, DELETE, OPTIONS",
        // "Access-Control-Allow-Headers": "Content-Type",
      },
    }).then((results) => {
      console.log(`results::::::${JSON.stringify(results)}`);
      return results;
    });
  } catch (error) {
    console.log(`Error:::${error}`);
    return error;
  }
};
export const sendData2 = async (data: any) => {
  try {
    const path = getVal(data.action);
    console.log(`data::::::${JSON.stringify(data)}`);
    await fetch(`${getVal("serverApi")}${path}`, {
      method: "POST",
      body: data.data,
      // headers: {
      //   "Content-Type": "application/json",
      //   "Access-Control-Allow-Origin": "*",
      // },
    }).then((results) => {
      console.log(`results::::::${JSON.stringify(results)}`);
      return results;
    });
  } catch (error) {
    console.log(`Error:::${error}`);
    return error;
  }
};

export const sendFormData = async (data: any) => {
  try {
    const path = getVal(data.get("action"));
    await fetch(`${getVal("serverApi")}${path}`, {
      method: "POST",
      body: data,
    }).then((results) => {
      console.log(`results::::::${JSON.stringify(results)}`);
      return results;
    });
  } catch (error) {
    console.log(`Error:::${error}`);
    return error;
  }
};
export const getItemImage = (src: string) => {
  return src.includes("http") ? src : `${getVal("serverApi")}/${src}`;
};
