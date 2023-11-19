import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const Editor = ({
   description,
   setDescription
}) => {
   var toolbarOptions = [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
    
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
    
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'align': [] }],
    
      ['clean'] ,
      ['link', 'image'],                                     // remove formatting button
   ];
   const module = {
      toolbar:toolbarOptions
   }
   const onEditorStateChange = (content, delta, source, editor) => {
      setDescription(editor.getHTML());
   }
   return (
      <div className='w-full md:h-[90%]'>
         <ReactQuill modules={module} theme="snow" value={description} className='md:h-[90%] h-[70%] z-20  pt-5 rounded-[80px]' onChange={onEditorStateChange}/>
      </div>
   )
}

export default Editor
