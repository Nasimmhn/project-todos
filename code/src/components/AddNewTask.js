import React, { useState } from "react"
import { useDispatch } from "react-redux"

import { tasks } from "reducers/tasks"
import "./addnewtask.css"

export const AddNewTask = () => {

  const [sendTask, setSendTask] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(tasks.actions.addTask(sendTask))
    setSendTask("")
  }

  return (

    <form className="new-task-form" onSubmit={handleSubmit}>
      <input className="task-input" type="text" placeholder="Add task" value={sendTask} onChange={(event) => setSendTask(event.target.value)} />

      <button className="btn-container" type="submit"><span className="add-task-btn" role="img" aria-label="plus">+</span></button>
    </form >



  )

}