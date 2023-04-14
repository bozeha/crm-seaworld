import { useContext } from "react";
import { MainContext } from "../App";
import loader from "../assets/images/loader.gif";
const Loader = () => {
  const { setShowMessage, messageText, setMessageText } =
    useContext(MainContext);

  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundImage: `url(${loader})`,
        backgroundSize: "100px",
        backgroundRepeat: "no-repeat",
        position: "absolute",
        top: "50%",
        left: "50%",
        zIndex: 10,
        transform: "translate(-50%,-50%)",
        borderRadius: 10,
      }}
    ></div>
  );
};

export default Loader;
