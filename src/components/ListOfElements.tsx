//import * as React from "react";
import React, { useContext, useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { MainContext } from "../App";
import { E_Screens, E_ListsTypes } from "../utils/enum";
import { getVal } from "../utils/config";
import { getItemImage } from "../utils/globalFunctions";
const ListOfElements = ({ data }: any) => {
  const [showRemoveButtons, setShowRemoveButtons] = useState(false);
  const { currentView, setCurrentView, oneElementId, setOneElementId } =
    useContext(MainContext);
  const removeElement = (id: any) => {
    const url = `${getVal("serverApi")}${getVal("removeElement")}`;
    const obj = {
      id: id,
      collection: E_ListsTypes.SALT_WATER_FISHES_HE,
    };
    fetch(url, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: { "Content-Type": "application/json" },
    });
  };
  useEffect(() => {
    console.log(`data updated !!!!!!!!!!!!!!!!!`);
  }, [data]);
  return (
    <>
      <label>remove</label>
      <input
        checked={showRemoveButtons}
        onChange={() => {
          setShowRemoveButtons(!showRemoveButtons);
        }}
        type="checkbox"
      />
      <ImageList sx={{ width: "100%", height: 450 }}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">December</ListSubheader>
        </ImageListItem>
        {
          //data &&
          // Object.keys(data)
          data &&
            data.map((current: any) => (
              <ImageListItem key={current?.images[0]}>
                {showRemoveButtons && (
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      fontSize: "20px",
                      backgroundColor: "black",
                      color: "white",
                      position: "absolute",
                      top: 0,
                      right: 0,
                    }}
                    onClick={() => {
                      removeElement(current?._id);
                    }}
                  >
                    x
                  </div>
                )}
                <>{current.enName}</>

                {current?.images ? (
                  <div style={{ minHeight: "100px" }}>
                    <img
                      src={`${getItemImage(current?.images[0])}`}
                      srcSet={`${getItemImage(current?.images[0])}`}
                      alt={current?.title}
                      loading="lazy"
                      onClick={() => {
                        //console.log(`key:: ${currentkey}`);
                        setOneElementId(current._id);
                        setCurrentView(E_Screens.SALT_WATER_FISH_CARD);
                      }}
                    />
                  </div>
                ) : (
                  <div style={{ minWidth: "100px", minHeight: "100px" }}></div>
                )}

                <ImageListItemBar
                  title={current.name}
                  subtitle={current.author}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${current.name}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))
        }
      </ImageList>
    </>
  );
};

export default ListOfElements;
