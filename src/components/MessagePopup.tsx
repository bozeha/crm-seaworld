import { useContext } from "react";
import { MainContext } from "../App";
const MessagePopup = () => {
  const { setShowMessage, messageText, setMessageText } =
    useContext(MainContext);

  return (
    <div
      style={{
        width: "300px",
        height: "250px",
        backgroundColor: "white",
        position: "absolute",
        top: "50%",
        left: "50%",
        zIndex: 10,
        transform: "translate(-50%,-50%)",
        borderRadius: 10,
      }}
    >
      <h2 style={{ textAlign: "center" }}>{messageText}</h2>
      <button
        style={{
          position: "absolute",
          bottom: 10,
          left: "50%",
          transform: "translate(-50%)",
        }}
        onClick={() => {
          setMessageText("");
          setShowMessage(false);
        }}
      >
        close
      </button>
    </div>
  );
};

export default MessagePopup;
