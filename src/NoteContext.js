import { createContext, useContext,useState } from "react";


const NoteContext=createContext()
export const useNote=()=>{
    return useContext(NoteContext)
}
const NoteProvider = ({children}) => {
    const [Notes,setNotes]=useState([])
    const [Search,setSearch]=useState([])
  return (
    <NoteContext.Provider value={{Notes,setNotes,Search,setSearch}}>{children}</NoteContext.Provider>
  )
}

export default NoteProvider

