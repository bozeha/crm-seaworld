import { useEffect, useState, useContext } from "react";
import { getData } from "../utils/globalFunctions";
import { getVal } from "../utils/config";
import { E_ListsTypes, E_Screens } from "../utils/enum";

import ListOfElements from "./ListOfElements";
import { MainContext } from "../App";
import OneElement from "./OneElement";
import AddOneElement from "./AddOneElement";

//import { useDaylightContext } from "../MainContext";

const MainBlock = () => {
  const [data, setData] = useState<any>(null);
  const [selectedElement, setSelectedElement] = useState({});
  //const { currentView } = useDaylightContext();
  const { currentView, setCurrentView, oneElementId, setOneElementId } =
    useContext(MainContext);
  const updateList = async () => {
    const results = await getData(E_ListsTypes.SALT_WATER_FISHES_HE);
    console.log(`results::::::${JSON.stringify(results)}`);
    setData(results);
  };

  useEffect(() => {
    updateList();
    console.log(`currentView:: ${currentView}`);
    console.log(`oneElementId:: ${oneElementId}`);
    //console.log(`daylight:: ${value.currentView}`);
  }, []);
  useEffect(() => {
    if (oneElementId && data) {
      const currentElement = data?.filter(
        (current: any) => current._id === oneElementId
      );
      setSelectedElement(currentElement[0]);
    }
  }, [oneElementId]);

  //return <div>{data && console.log(JSON.stringify(data))}</div>;

  return (
    <>
      {/* {JSON.stringify(data)} */}
      {currentView === E_Screens.SALT_WATER_FISHES_LIST && (
        <ListOfElements data={data} />
      )}
      {currentView === E_Screens.SALT_WATER_FISH_CARD && (
        <OneElement data={selectedElement} key={oneElementId} />
      )}
      {currentView === E_Screens.ADD_SALT_WATER_FISH && <AddOneElement />}
    </>
  );
};

export default MainBlock;
