import React, { useState, useEffect } from "react";
import { EditorState } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
import axios from "axios";

let DraftEditor;
if (typeof window != "undefined") {
  import("react-draft-wysiwyg").then((mod) => (DraftEditor = mod.Editor));
}
console.log(DraftEditor);
const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  //   function uploadImageCallBack(file) {
  //     return new Promise((resolve, reject) => {
  //       const xhr = new XMLHttpRequest();
  //       xhr.open("POST", "/api/upload");
  //       //   xhr.setRequestHeader("Authorization", "Client-ID ##clientid###");
  //       const data = new FormData();
  //       data.append("image", file);
  //       xhr.send(data);
  //       xhr.addEventListener("load", () => {
  //         const response = JSON.parse(xhr.responseText);
  //         console.log(response);
  //         resolve(response);
  //       });
  //       xhr.addEventListener("error", () => {
  //         const error = JSON.parse(xhr.responseText);
  //         console.log(error);
  //         reject(error);
  //       });
  //     });
  //   }

  const uploadImageCallBack = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    // setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);

      const response = JSON.parse(data);
      // setImage(data);
      // setUploading(false);
    } catch (error) {
      console.error(error);
      // setUploading(false);
    }
  };

  return (
    <div>
      <DraftEditor
        editorState={editorState}
        onEditorStateChange={(e) => setEditorState(e.value)}
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
          image: {
            uploadCallback: uploadImageCallBack,
            alt: { present: true, mandatory: true },
          },
        }}
      />
    </div>
  );
};

export default RichTextEditor;
