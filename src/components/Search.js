import React, { useState } from 'react'
import { useRef } from 'react'
import { useNote } from '../NoteContext'


const Search = () => {
  const searchRef=useRef()
  const {Notes,setNotes,setSearch}=useNote()

  function FindNote(){

    setSearch(searchRef.current.value)
    const sortedNotes=Notes.map((el)=>{
      if(el.text.includes(searchRef.current.value)){
        return {...el,showNote:true}
      }
      else return{...el,showNote:false}
    })
    setNotes(sortedNotes)
   
  }


  return (
    <div  className='mt-3'>
    <form>   
    <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-blue-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input 
  
        ref={searchRef}
        onChange={()=>FindNote()}
        type="search" id="default-search" className="block p-4 pl-10 w-full
       `text-base text-gray-900 bg-gray-10 rounded-lg border-2 border-blue-500 
        outline-none
        focus:ring-blue-700 focus:border-blue-700 font-bold
      " placeholder="Search Note..." required/>
        
    </div>
</form> 
    </div>
    
  )
}

export default Search