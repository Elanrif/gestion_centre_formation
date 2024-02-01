import React, { useState } from "react"
import { Button } from "@mui/material"
import axios from "axios";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Basic() {

   const [value, setValue] = useState({
      programme : ""
   });

   const handleChaonge = (e)=>{

         const target = e.target 
         const name = target.name
         const value = target.value 

         setValue((prev)=>({
          ...prev,
          [name]:value
         }))
   }

   const handleChange = (e) => {
  setValue((prev) => ({
    ...prev,
    programme: e,
  }));
};
   console.log(value)

   const Toolbar = [
        ["bold", "italic", "underline", "strike"], // toggled buttons
        ["blockquote", "code-block"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }], // superscript/subscript
        [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
        [{ direction: "rtl" }], // text direction
        [{ size: ["small", false, "large", "huge"] }], // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],
        ["clean"] // remove formatting button
    ];

  return (
    <div>
         <div className="flex h-[100vh] items-center justify-center">
                 <ReactQuill 
                 theme="snow" 
                 name="programme"
                 value={value.programme} 
                 onChange={handleChange}
                 modules={{ toolbar: Toolbar }} 
                 className="w-[34rem]"/>
          </div>
    </div>
  )
}

export default Basic

