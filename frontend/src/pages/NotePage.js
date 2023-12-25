import React from 'react'
import { useParams } from 'react-router-dom';

function NotePage() {
    const { id } = useParams();
    const [note, setNote] = React.useState(null)

    React.useEffect(()=>{
        fetch(`/api/notes/${id}/`)
             .then(res => res.json())
             .then(data => setNote(data) )
    },[id])


  return (
    <div>{note?.body}</div>
  )
}

export default NotePage