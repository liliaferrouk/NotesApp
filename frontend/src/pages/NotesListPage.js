import React from 'react'
import ListItem from '../components/ListItem'

function NotesListPage() {
    const [notes, setNotes] = React.useState([])

    React.useEffect(()=>{
        fetch("/api/notes/")
             .then(res => res.json())
             .then(data => setNotes(data) )
    },[])
  return (
    <div>
        <div className='notes-list'>
            {notes.map((note,index)=>(
                <ListItem key={index} note={note} />
            ))}
        </div>
    </div>
  )
}

export default NotesListPage