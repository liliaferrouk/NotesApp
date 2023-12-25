import React from 'react'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'

function NotesListPage() {
    const [notes, setNotes] = React.useState([])

    React.useEffect(()=>{
        fetch("/api/notes/")
             .then(res => res.json())
             .then(data => setNotes(data) )
    },[])
  return (
    <div className='notes'>
        <div className='notes-haeder'>
          <h2 className='notes-title'>&#9782; Notes</h2>
          <p className='notes-count'>{notes.length}</p>
        </div>
        <div className='notes-list'>
            {notes.map((note,index)=>(
                <ListItem key={index} note={note} />
            ))}
        </div>
        <AddButton/>
    </div>
  )
}

export default NotesListPage