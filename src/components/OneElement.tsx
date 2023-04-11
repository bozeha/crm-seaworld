import { MainContext } from "../App";
import { useContext, useState, useEffect } from "react";
import { sendData } from "../utils/globalFunctions";
import { E_Actions, E_ListsTypes } from "../utils/enum";
import { getVal } from "../utils/config";
import getTrans from "../utils/dictionary";
import "./oneElement.scss";
import { extraInputs, saltWaterFish } from "../utils/objects";
import { isDisabled } from "@testing-library/user-event/dist/utils";

// interface I_itemObj {
//   key: string;
//   name: string;
//   otherNames: string;
//   arrOfExtraInfo: string[];
//   images: string[];
//   minimumTankSize: string;
//   proneToDisease: string;
//   beginnerCompatible: string;
//   adultSize: string;
//   reefCompatible: string;
//   predatorTankCompatible: string;
//   careLevel: string;
//   pH: string;
//   temperature: string;
//   preferredTankLevel: string;
//   numberToATtank: string;
// }

const OneElement = ({ data }: any) => {
  const { currentView, setCurrentView, oneElementId, setOneElementId } =
    useContext(MainContext);
  const [itemObj, setItemObj] = useState<any>();
  useEffect(() => {
    if (data) {
      Object.keys(saltWaterFish).map((current) => {
        if (!data[current]) {
          data[current] = saltWaterFish[current].value;
        }
      });
      setItemObj(data);
    }
  }, [data]);
  const changeValue = (currentKey: any, value: any, index?: number) => {
    const tempObj: any = { ...itemObj };
    if (index || index === 0) {
      tempObj[currentKey][index] = value;
    } else {
      tempObj[currentKey] = value;
    }
    setItemObj(tempObj);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      action: E_Actions.UPDATE_ELEMENT,
      key: itemObj._id,
      data: itemObj,
      location: E_ListsTypes.SALT_WATER_FISHES_HE,
    };
    const resutls = await sendData(data);
    console.log(`resutls::::::${JSON.stringify(resutls)}`);
  };

  return (
    <form className="one-element-form" onSubmit={onSubmit}>
      {/* {data && Object.keys(data).map((current) => <form>{current}</form>)} */}
      {itemObj && <img src={itemObj.images && itemObj.images[0]} />}
      {itemObj &&
        Object.keys(itemObj).map((currentElementKey) => {
          return (
            <div className="one-element">
              {Array.isArray(itemObj[currentElementKey]) === true ? (
                <div className="one-of-array">
                  {itemObj[currentElementKey].map(
                    (item: any, index: number) => (
                      <div className="inner-block">
                        <input
                          value={item}
                          type="text"
                          onChange={(e) => {
                            changeValue(
                              currentElementKey,
                              e.target.value,
                              index
                            );
                          }}
                        />
                        <label>
                          {`${getTrans(currentElementKey)} ${index}`}
                        </label>
                      </div>
                    )
                  )}
                </div>
              ) : (
                <div className="one-of-single">
                  <input
                    disabled={currentElementKey === "_id" ? true : false}
                    value={itemObj[currentElementKey]}
                    type="text"
                    onChange={(e) => {
                      changeValue(currentElementKey, e.target.value);
                    }}
                  />
                  <label>{getTrans(currentElementKey)}</label>
                </div>
              )}
            </div>
          );
        })}
      <input
        className="submit-button"
        type="submit"
        value={getTrans("update")}
      />
    </form>
  );
};

export default OneElement;
