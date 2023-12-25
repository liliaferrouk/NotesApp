import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as addIcon} from '../assets/add.svg'

function AddButton() {
  return (
    <Link to="/note/new" className='floating-button'>
        <addIcon/>
    </Link>
  )
}

export default AddButton