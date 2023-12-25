import React from 'react'
import { useParams, Link } from 'react-router-dom';
import {ReactComponent as Arrowleft} from '../assets/arrow-left.svg'

function NotePage() {
    const { id } = useParams();
    const [note, setNote] = React.useState(null)

    React.useEffect(()=>{
        fetch(`/api/notes/${id}/`)
             .then(res => res.json())
             .then(data => setNote(data) )
    },[id])


  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <Link to="/">
            <Arrowleft/>
          </Link>
        </h3>
      </div>
    <textarea defaultValue={note?.body}></textarea>
    </div>
  )
}

export default NotePage