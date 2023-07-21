import { getTrans } from "../utils/dictionary";
import { useState } from "react";

interface ElementType {}
interface NewElement {
  type: string;
  id: string;
  value: string;
}

const AddGuid = () => {
  const [counter, updateCounter] = useState(0);
  const [obj, setObj] = useState<{
    [key: string]: { type: string; id: string; value: string };
  }>({
    title: {
      type: "h1",
      id: "title",
      value: "",
    },
    subTitle: {
      type: "h4",
      id: "subTitle",
      value: "",
    },
  });
  const removeElement = (id: string) => {
    const tempObj = { ...obj };
    if (tempObj.hasOwnProperty(id)) {
      delete tempObj[id];
      setObj(tempObj);
    }
  };
  const addElement = (type: string) => {
    updateCounter((prev) => {
      return prev + 1;
    });
    let newObj: NewElement;
    switch (type) {
      case "h2":
        newObj = {
          type: "h2",
          id: `h2-${counter}`,
          value: "",
        };
        addValue(newObj, newObj.id);
        return;
      //return <input name={`h2-${counter}`} />;
      case "h3":
        newObj = {
          type: "h3",
          id: `h3-${counter}`,
          value: "",
        };
        addValue(newObj, newObj.id);
        return;
      case "h4":
        newObj = {
          type: "h4",
          id: `h4-${counter}`,
          value: "",
        };
        addValue(newObj, newObj.id);
        return;
      case "textArea":
        newObj = {
          type: "textArea",
          id: `textArea-${counter}`,
          value: "",
        };
        addValue(newObj, newObj.id);
        return;
      case "image":
        newObj = {
          type: "image",
          id: `image-${counter}`,
          value: "",
        };
        addValue(newObj, newObj.id);
        return;
      case "p":
        newObj = {
          type: "p",
          id: `p-${counter}`,
          value: "",
        };
        addValue(newObj, newObj.id);
        return;
    }
  };
  const addValue = (newObj: any, key: string) => {
    const mergedObj = { ...obj, [key]: newObj };
    setObj(mergedObj);
  };
  const updateObj = (newVal: any) => {
    const mergedObj = { ...obj };
    if (newVal?.target?.files && newVal?.target?.files.length > 0) {
      const imgUrl = URL.createObjectURL(newVal?.target?.files[0]);
      mergedObj[newVal.target.name].value = imgUrl;
    } else {
      mergedObj[newVal.target.name].value = newVal.target.value;
    }
    setObj(mergedObj);
    console.log(`mergedObj::::::${JSON.stringify(mergedObj)}:::mergedObj-END`);
    console.log(
      `${newVal.target.name}newVal.target.value:::: ${newVal.target.value}`
    );
  };
  return (
    <div style={{ paddingBottom: "500px", position: "relative" }}>
      <h1>{getTrans("addGuid")}</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {Object.keys(obj).map((current: string) => {
          let currentElement = null;

          currentElement = (
            <div
              className="element"
              style={{ border: "1px solid lightblue", marginBottom: "10px" }}
            >
              <p
                style={{ cursor: "pointer" }}
                onClick={() => {
                  removeElement(obj[current].id);
                }}
              >
                X
              </p>
              <p>key:{obj[current].type}</p>
              <p>id:{obj[current].id}</p>
              {obj[current].type === "textArea" ? (
                <textarea
                  style={{ width: "500px", height: "300px" }}
                  name={obj[current].id}
                  onChange={(val) => {
                    updateObj(val);
                  }}
                />
              ) : (
                <input
                  style={{ width: "500px" }}
                  name={obj[current].id}
                  type={obj[current].type === "image" ? "file" : "text"}
                  onChange={(val) => {
                    updateObj(val);
                  }}
                />
              )}
              {obj[current].type === "image" && (
                <img
                  style={{ width: "100px", height: "auto" }}
                  src={obj[current].value}
                />
              )}

              <pre>val:{obj[current].value}</pre>
            </div>
          );

          return <>{currentElement}</>;
        })}
      </form>
      <div
        style={{
          position: "fixed",
          top: "300px",
          right: "0px",
          width: "300px",
        }}
        className="list-of-buttons"
      >
        <button
          onClick={() => {
            addElement("h2");
          }}
        >
          Add h2
        </button>
        <button
          onClick={() => {
            addElement("h3");
          }}
        >
          Add h3
        </button>
        <button
          onClick={() => {
            addElement("h4");
          }}
        >
          Add h4
        </button>
        <button
          onClick={() => {
            addElement("textArea");
          }}
        >
          Add textArea
        </button>
        <button
          onClick={() => {
            addElement("image");
          }}
        >
          Add image
        </button>
        <button
          onClick={() => {
            addElement("p");
          }}
        >
          Add paragraph
        </button>
      </div>
    </div>
  );
};

export default AddGuid;
