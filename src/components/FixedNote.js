import React, { useState } from "react";
import {FaTrashAlt} from 'react-icons/fa'
import {AiTwotoneStar} from 'react-icons/ai'

export function FixedNote({
  Notes,
  deleteNote,
  Search,
  Bookmark
}) {

  const [showResults,setShowResults]=useState(true)
 
  return (
    <>
    <div className="hidden">
      {Search}
    </div>
   <div> 
          {Notes.length >= 1 ? <div className='flex gap-2 flex-wrap'>
            {Notes.map((el, index) => {
        return <>{el.showNote?<div key={el.id} className='Note 
                text-2xl  relative rounded-lg font-bold  '>
                    <h1 className='p-2'>{el.text}</h1>
                    <p className='
                    text-base
                    absolute bottom-2 left-2 '>{el.date}</p>
                    <button className='absolute bottom-2 right-2 bg-red-700 hover:bg-white hover:text-red-700 transition-all p-1.5
                    text-base text-white rounded-lg flex justify-center
                    border-2 border-red-600 ' onClick={e => {
            deleteNote(e,el.id);
          }}><FaTrashAlt className='' /></button>
                    <button style={{color:el.bookMrkd?'#e9ec23':'gray'}}
                    className='absolute top-2 right-2
                    text-gray-500 hover:text-yellow-600 transition-all p-1.5
                    rounded-lg flex justify-center
                    ' onClick={() => { Bookmark(el.id);}}><AiTwotoneStar className='scale-110 p-0 hover:text-yellow-400' /></button>
                </div>:null}</>
                                })}
            </div> : null}
        </div> 
    </>
  )
}
  