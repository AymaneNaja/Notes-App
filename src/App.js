import Note from "./components/Note";
import Search from "./components/Search";
import { useState } from "react";
import NoteProvider from "./NoteContext";


function App() {
return (    

  <div className="note-app">
  <NoteProvider>
     <Search/>
     <Note/>
  </NoteProvider>
  

  </div>
    );
}

export default App;
