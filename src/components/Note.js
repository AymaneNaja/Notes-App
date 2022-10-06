import { FixedNote } from './FixedNote';
import { FillingForm } from './FillingForm';
import React from 'react'
import { useRef } from 'react'
import { useNote } from '../NoteContext';
import Search from './Search';
import { useState } from 'react';
const Note = () => {
    const {Notes,setNotes,Search}=useNote()
    const textRef=useRef()
    const [showFillter,setShowFiller]=useState(true)
    function handleAddNote(e){
      e.preventDefault();
      if(textRef.current.value.length>=3){
      const RanNumb=Math.round(Math.random()*1000)
      const date=new Date().toDateString()
      const NewNote={
        text:textRef.current.value
        ,id:RanNumb
        ,date:date
        ,bookMrkd:false
        ,showNote:true
      }
      setNotes(prev=>[...prev,NewNote])
      textRef.current.value=''}
    }
    function deleteNote(e,noteId){
      e.preventDefault();
      const updatedNotes=Notes.filter(el=>{
        if(el.id!=noteId){
          return el
        }
        else{return}
      }
      )
      setNotes(updatedNotes)
      
    }
    function Bookmark(noteId){
      const updatedNotes=Notes.map(el=>{
        if(el.id===noteId){
          return {...el,bookMrkd:!el.bookMrkd}
        }
        else{return el}
      }
      )
      const sortedNotes=updatedNotes.sort(el=>{
        if(el.bookMrkd){
          return -1
        }
        else return 1
      })
      setNotes(sortedNotes)      
    }
    
  return (
    <div className='mt-2 flex gap-2 flex-wrap '>

        <FixedNote Search={Search}   Notes={Notes}  deleteNote={deleteNote} Bookmark={Bookmark} />
        <FillingForm   textRef={textRef}  handleAddNote={handleAddNote}  />
        
    </div>
  )
}

export default Note