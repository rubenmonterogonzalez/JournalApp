import React from 'react'

const NotesAppBar = () => {
  return (
    <div className="notes__appbar">
      <span>August 20th, 2022</span>

      <div>
        <button className="btn">
          Picture
        </button>

        <button className="btn">
          Save
        </button>
      </div>
    </div>
  )
}

export default NotesAppBar