import {
  E_BeginnerCompatibleHe,
  E_CareLevelHe,
  E_NumberToATtankHe,
  E_PredatorTankCompatibleHe,
  E_PreferredTankLevelHe,
  E_proneToDiseaseEn,
  E_proneToDiseaseHe,
  E_ReefCompatibleHe,
} from "./enum";

type SaltWaterFish = Record<
  string,
  {
    value: string;
    type: string;
    options?: any;
  }
>;

export const saltWaterFish: SaltWaterFish = {
  //   key: {
  //     value: "",
  //     type: "text",
  //   },
  name: {
    value: "",
    type: "text",
  },
  family: {
    value: "",
    type: "text",
  },
  scientificName: {
    value: "",
    type: "text",
  },
  enName: {
    value: "",
    type: "text",
  },
  nickName: {
    value: "",
    type: "text",
  },
  otherNames: {
    value: "",
    type: "text",
  },
  arrOfExtraInfo: {
    value: "",
    type: "text",
  },
  images: {
    value: "",
    type: "text",
  },
  minimumTankSize: {
    value: "",
    type: "text",
  },
  proneToDisease: {
    value: "",
    type: "select",
    options: E_proneToDiseaseHe,
  },
  beginnerCompatible: {
    value: "",
    type: "select",
    options: E_BeginnerCompatibleHe,
  },
  adultSize: {
    value: "",
    type: "text",
  },
  reefCompatible: {
    value: "",
    type: "select",
    options: E_ReefCompatibleHe,
  },
  predatorTankCompatible: {
    value: "",
    type: "select",
    options: E_PredatorTankCompatibleHe,
  },
  careLevel: {
    value: "",
    type: "select",
    options: E_CareLevelHe,
  },
  pH: {
    value: "",
    type: "text",
  },
  temperature: {
    value: "",
    type: "text",
  },
  preferredTankLevel: {
    value: "",
    type: "select",
    options: E_PreferredTankLevelHe,
  },
  numberToATtank: {
    value: "",
    type: "select",
    options: E_NumberToATtankHe,
  },
};

export const extraInputs = [
  { name: "family", value: "" },
  { name: "scientificName", value: "" },
  { name: "enName", value: "" },
  { name: "nickName", value: "" },
];
