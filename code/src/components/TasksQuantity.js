import React from 'react'
import { useSelector } from 'react-redux'



export const TasksQuantity = () => {
  const allTasks = useSelector(state => state.tasks.items)
  let completedTasks = allTasks.filter((item) => item.complete === true)

  return (
    <span className="tasks-quantity">{completedTasks.length}/{allTasks.length} Done</span>
  )
} 