import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'

export const CheckBox = (props) => {
  const dispatch = useDispatch()

  const handleCheckboxClick = (id) => {
    dispatch(tasks.actions.toggleCheckbox(id))
    console.log("THIS IS THE ID:", id)
    console.log("CHANGED")
  }

  return (
    <label className="checkbox-container">
      <input
        type="checkbox"
        checked={props.task.complete}
        onChange={() => { handleCheckboxClick(props.task.id) }}>
      </input>
      <span className="checkmark" role="checkbox" aria-checked="false" tabIndex="0"></span>
    </label>

  )
}