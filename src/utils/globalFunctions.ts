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
      headers: { "Content-Type": "application/json" },
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
      headers: { "Content-Type": "application/json" },
    }).then((results) => {
      console.log(`results::::::${JSON.stringify(results)}`);
      return results;
    });
  } catch (error) {
    console.log(`Error:::${error}`);
    return error;
  }
};