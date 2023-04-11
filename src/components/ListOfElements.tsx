//import * as React from "react";
import React, { useContext } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { MainContext } from "../App";
import { E_Screens } from "../utils/enum";
const ListOfElements = ({ data }: any) => {
  const { currentView, setCurrentView, oneElementId, setOneElementId } =
    useContext(MainContext);
  return (
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
              <img
                src={`${current.images[0]}`}
                srcSet={`${current.images[0]}`}
                alt={current.title}
                loading="lazy"
                onClick={() => {
                  //console.log(`key:: ${currentkey}`);
                  setOneElementId(current._id);
                  setCurrentView(E_Screens.SALT_WATER_FISH_CARD);
                }}
              />
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
  );
};

export default ListOfElements;
