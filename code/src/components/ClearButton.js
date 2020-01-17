import React from "react"
import { useDispatch } from "react-redux"
import { tasks } from '../reducers/tasks'
import "./removebuttons.css"

export const ClearButton = () => {
  const dispatch = useDispatch()

  const removeAllHandler = () => {
    dispatch(tasks.actions.removeAllTasks())

  }


  return (
    <button className="remove-all-container" type="button" onClick={() => { removeAllHandler() }} >
      <span className="remove-all-btn" role="button" aria-label="remove">CLEAR ALL</span>
    </button >
  )
}