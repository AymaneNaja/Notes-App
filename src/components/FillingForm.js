import React from "react";
import {IoMdAdd} from 'react-icons/io'

export function FillingForm({
  showFillter,
  textRef,
  handleAddNote
}) {
  return <form className='
        Note
        text-2xl grid relative rounded-lg font-bold'>
            <textarea maxLength={200} placeholder='text here...' className='bg-transparent
            outline-none p-3 placeholder:text-black resize-none' ref={textRef} ></textarea>
            <button className='absolute bottom-2 right-2 bg-blue-700 hover:bg-white hover:text-blue-700 transition-all p-1.5
            text-base text-white rounded-lg border-2 border-blue-700 flex resize-none' onClick={e => {
              handleAddNote(e);
    }}>
            <IoMdAdd className=' translate-y-1 mr-0.5 scale-125 font-bold' />Add Note</button>
        </form>;
}
  