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
import Loader from "../components/Loader";
const ListOfUsers = ({ data, updateList }: any) => {
  const [showLoader, setShowLoader] = useState(false);
  const [showRemoveButtons, setShowRemoveButtons] = useState(false);
  const { currentView, setCurrentView, oneElementId, setOneElementId } =
    useContext(MainContext);
  const removeElement = async (id: any) => {
    const url = `${getVal("serverApi")}${getVal("removeElement")}`;
    const obj = {
      id: id,
      collection: E_ListsTypes.USERS,
    };
    try {
      await fetch(url, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": "application/json" },
      });
      await updateList(E_ListsTypes.USERS);
      setShowLoader(false);
    } catch (error) {
      setShowLoader(false);
      console.log(`Error:::${error}`);
    }
  };

  return (
    <>
      {showLoader && <Loader />}
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "200px",
          }}
        >
          {
            //data &&
            // Object.keys(data)
            data &&
              data.map((current: any) => (
                <div
                  style={{
                    width: "400px",
                    backgroundColor: "lightcoral",
                    position: "relative",
                  }}
                >
                  {showRemoveButtons && (
                    <div
                      style={{
                        width: "30px",
                        height: "30px",
                        fontSize: "40px",

                        color: "black",
                        position: "absolute",
                        top: 0,
                        right: 0,
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setShowLoader(true);
                        removeElement(current?._id);
                      }}
                    >
                      X
                    </div>
                  )}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      border: "3px solid black",
                    }}
                  >
                    <p>Name : {current.name}</p>
                    <p>First name : {current.firstName}</p>
                    <p>Last name : {current.lastName}</p>
                    <p>Email : {current.email}</p>
                    <p>
                      User verified : {JSON.stringify(current?.userVerified)}
                    </p>
                  </div>

                  {/* <img
                  src={`${current.images[0]}`}
                  srcSet={`${current.images[0]}`}
                  alt={current.title}
                  loading="lazy"
                  onClick={() => {
                    //console.log(`key:: ${currentkey}`);
                    setOneElementId(current._id);
                    setCurrentView(E_Screens.SALT_WATER_FISH_CARD);
                  }}
                /> */}
                  {/* <ImageListItemBar
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
                /> */}
                </div>
              ))
          }
        </div>
      </ImageList>
    </>
  );
};

export default ListOfUsers;
