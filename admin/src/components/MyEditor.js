import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

function MyEditor({ value, setValue }) {
  // const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "font", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video", "background"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "background",
    "color",
    "font",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  useEffect(() => {
    console.log(value);
  }, [value]);
  //   handleProcedureContentChange = (content, delta, source, editor) => {
  //     let has_attribues = delta.ops[1].attributes || "";
  //     console.log(has_attribues);
  //     const cursorPosition = e.quill.getSelection().index;
  //     this.quill.insertText(cursorPosition, "★");
  //     this.quill.setSelection(cursorPosition + 1);
  //   };

  return (
    <ReactQuill
      theme="bubble"
      className="h-48 text-lg max-h-20 object-contain w-full bg-gray-50"
      // style={{ height: "300px", width: "100%" }}
      modules={modules}
      formats={formats}
      value={value}
      placeholder="Your Content Goes Here..."
      onChange={setValue}
    />
  );
}

export default MyEditor;
