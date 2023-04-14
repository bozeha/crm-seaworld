import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";
import uuid from "react-uuid";
import { getVal } from "../utils/config";
import getTrans from "../utils/dictionary";
import { E_Actions, E_ListsTypes } from "../utils/enum";
import { sendData } from "../utils/globalFunctions";
import { saltWaterFish } from "../utils/objects";
import { useContext } from "react";
import { MainContext } from "../App";

const AddOneElement = () => {
  const [itemObj, setItemObj] = useState<any>();
  const { setShowLoader, setShowMessage, setMessageText } =
    useContext(MainContext);
  const onSubmit = async (e: any) => {
    try {
      e.preventDefault();
      const objToSend = {
        data: itemObj,
        collection: E_ListsTypes.SALT_WATER_FISHES_HE,
        lang: getVal("lang"),
        action: E_Actions.ADD_ELEMENT,
      };
      const results = await sendData(objToSend);
      console.log(`results::::::${JSON.stringify(results)}`);
      setMessageText(getTrans("elementBeenUpload"));
      setShowMessage(true);
    } catch (error) {
      console.log(`Error:::${error}`);
    }
  };

  useEffect(() => {
    const uuidKey = `fish-${uuid()}`;
    //console.log(`saltWaterFish::::::${JSON.stringify(saltWaterFish)}`);

    let newObj: { [key: string]: any } = {};
    Object.keys(saltWaterFish).map((current) => {
      console.log(`current:: ${current}`);
      console.log(`current:: ${saltWaterFish[current].value}`);
      newObj[current] = saltWaterFish[current].value;
    });
    //newObj["key"] = uuidKey;
    setItemObj(newObj);
  }, []);
  const changeValue = (currentKey: any, value: any) => {
    const tempObj: any = { ...itemObj };
    tempObj[currentKey] = value;
    setItemObj(tempObj);
  };

  return (
    <form
      onSubmit={(e) => onSubmit(e)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      {itemObj &&
        Object.keys(saltWaterFish).map((currentKey: string) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {saltWaterFish[currentKey].type === "text" && (
              <>
                <input
                  style={{ textAlign: "right", width: "400px" }}
                  type={`${saltWaterFish[currentKey].type || "text"}`}
                  value={itemObj[currentKey]}
                  onChange={(e) => {
                    changeValue(currentKey, e.target.value);
                  }}
                />
                <label style={{ width: "250px", textAlign: "right" }}>
                  {getTrans(currentKey)}
                </label>
              </>
            )}
            {saltWaterFish[currentKey].type === "select" && (
              <>
                <select
                  value={itemObj[currentKey]}
                  onChange={(e) => {
                    changeValue(currentKey, e.target.value);
                  }}
                  style={{ textAlign: "right", width: 400 }}
                >
                  {Object.keys(saltWaterFish[currentKey].options).map(
                    (current: any) => (
                      <option>
                        {saltWaterFish[currentKey].options[current]}
                      </option>
                    )
                  )}
                </select>

                {/* <input
                  style={{ textAlign: "right", width: "400px" }}
                  type={`${saltWaterFish[currentKey].type || "text"}`}
                  value={itemObj[currentKey]}
                  onChange={(e) => {
                    changeValue(currentKey, e.target.value);
                  }}
                /> */}
                <label style={{ width: "250px", textAlign: "right" }}>
                  {getTrans(currentKey)}
                </label>
              </>
            )}
          </div>
        ))}
      <input type="submit" />
    </form>
  );
};

export default AddOneElement;
