import { getTrans } from "../utils/dictionary";
import { useState } from "react";
import { E_Actions, E_Folders, E_ListsTypes } from "../utils/enum";
import { getVal } from "../utils/config";
import Loader from "./Loader";
import "./addGuid.scss";

interface NewElement {
  type: string;
  id: string;
  value: string;
  data?: any;
}

const AddGuid = () => {
  const [files, setFiles] = useState<any>({});

  const [counter, updateCounter] = useState(0);

  const [showLoader, setShowLoader] = useState(false);
  const [test, setTest] = useState<File | null>(null);
  const [obj, setObj] = useState<{
    [key: string]: {
      type: string;
      id: string;
      value: string;
      data?: any;
      required?: boolean;
    };
  }>({
    title: {
      type: "h1",
      id: "title",
      value: "",
    },
    englishTitle: {
      type: "h1",
      id: "englishTitle",
      value: "",
      required: true,
    },
    subTitle: {
      type: "h4",
      id: "subTitle",
      value: "",
    },
    mainImage: {
      type: "image",
      id: "mainImage",
      value: "",
      data: "",
    },
  });

  const onSubmit2 = async (e: any) => {
    e.preventDefault();

    const objToSend = {
      collection: E_ListsTypes.GUIDES_HE,
      lang: getVal("lang"),
      action: E_Actions.UPLOAD_GUIDE,
      category: E_Folders.GUIDES,
    };
    var formData = new FormData();
    //addValue(E_Folders.GUIDES, "category");
    console.log(
      `obj:::xxx:::${JSON.stringify(JSON.stringify(obj))}::xx:obj-END`
    );
    formData.append("obj", JSON.stringify(obj));
    formData.append("settingsObj", JSON.stringify(objToSend));
    console.log(`files::::::${JSON.stringify(files)}:::files-END`);
    let arrayOfFiles: any[] = [];
    Object.keys(files).map((current, keys) => {
      arrayOfFiles = [...files[current], ...arrayOfFiles];
    });
    arrayOfFiles.map((current: any) => {
      formData.append("myFiles", current);
    });

    const response = await fetch(`${getVal("serverApi")}/uploadData`, {
      method: "POST",
      body: formData,
    });
  };

  const removeElement = (id: string) => {
    const tempObj = { ...obj };

    if (id.includes("image") || id.includes("Image")) {
      const tempFilesObj = { ...files };
      delete tempFilesObj[id];
      setFiles(tempFilesObj);
    }

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
          data: null,
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

  const reader = new FileReader();
  reader.onload = async () => {
    if (typeof reader?.result === "string") {
      const base64String = reader?.result?.split(",")[1];
      return base64String;
    }
  };
  const setFilesFunction = async (e: any) => {
    updateObj(e);
    const newFileObj = { [e?.target?.name]: e?.target?.files };
    setFiles({ ...files, ...newFileObj });
  };
  const updateObj = async (newVal: any) => {
    const mergedObj = { ...obj };
    if (newVal?.target?.files && newVal?.target?.files.length > 0) {
      const imgUrl = URL.createObjectURL(newVal?.target?.files[0]);
      mergedObj[newVal.target.name].value = imgUrl;
      setTest(newVal?.target?.files[0]);
    } else {
      mergedObj[newVal.target.name].value = newVal.target.value;
    }
    setObj(mergedObj);
  };
  return (
    <div style={{ paddingBottom: "500px", position: "relative" }}>
      {showLoader && <Loader />}
      <h1>{getTrans("addGuid")}</h1>
      <form
        onSubmit={onSubmit2}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {Object.keys(obj).map((current: string, index) => {
          let currentElement = null;

          currentElement = (
            <div
              key={index}
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
                <>
                  {obj[current].type === "image" ? (
                    <input
                      multiple
                      onChange={(e) => {
                        if (e?.target?.files && e?.target?.files.length > 0) {
                          setFilesFunction(e);
                        }
                      }}
                      type="file"
                      name={obj[current].id}
                    />
                  ) : (
                    <>
                      {obj[current]?.required ? (
                        <input
                          style={{ width: "500px" }}
                          name={obj[current].id}
                          required
                          onChange={(val) => {
                            updateObj(val);
                          }}
                        />
                      ) : (
                        <input
                          style={{ width: "500px" }}
                          name={obj[current].id}
                          onChange={(val) => {
                            updateObj(val);
                          }}
                        />
                      )}
                    </>
                  )}
                </>
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
        <input id="submit-button" type="submit" title="submit" />
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
