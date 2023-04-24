import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";
import uuid from "react-uuid";
import { getVal } from "../utils/config";
import getTrans from "../utils/dictionary";
import { E_Actions, E_Elements, E_ListsTypes } from "../utils/enum";
import { sendData, sendFormData } from "../utils/globalFunctions";
import { saltWaterFish } from "../utils/objects";
import { useContext } from "react";
import { MainContext } from "../App";

const AddOneElement = () => {
  const [itemObj, setItemObj] = useState<any>();
  const [elementImage, setElementImage] = useState<any>();
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
      if (elementImage) {
        const key = itemObj.enName.replaceAll(" ", "");

        let formData = new FormData();
        formData.append("key", key);
        formData.append("type", E_Elements.SALT_WATER_FISHES);
        formData.append("action", E_Actions.UPLOAD_IMAGE);
        formData.append(`files`, elementImage);

        const imageResults = await sendFormData(formData);

        console.log(`imageResults::::::${JSON.stringify(imageResults)}`);
      }

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
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "100px",
        marginBottom: "100px",
      }}
    >
      {itemObj &&
        Object.keys(saltWaterFish).map((currentKey: string) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              paddingBottom: "20px",
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
                <label
                  style={{
                    width: "250px",
                    textAlign: "right",
                    backgroundColor: "lightblue",
                    fontSize: "25px ",
                  }}
                >
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
                  style={{ textAlign: "right", width: 400, fontSize: "25px" }}
                >
                  {Object.keys(saltWaterFish[currentKey].options).map(
                    (current: any) => (
                      <option>
                        {saltWaterFish[currentKey].options[current]}
                      </option>
                    )
                  )}
                </select>

                <label
                  style={{
                    width: "250px",
                    textAlign: "right",
                    fontSize: "25px",
                  }}
                >
                  {getTrans(currentKey)}
                </label>
              </>
            )}
          </div>
        ))}

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          style={{ width: "200px", marginBottom: "15px" }}
          type="file"
          onChange={(e) => {
            if (e.target.files) {
              setElementImage(e.target.files[0]);
              changeValue("images", [e.target.files[0]?.name]);
              console.log(`elementImage::::::${JSON.stringify(elementImage)}`);
            }
          }}
        />
        <input style={{ width: "200px" }} type="submit" />
      </div>
    </form>
  );
};

export default AddOneElement;
