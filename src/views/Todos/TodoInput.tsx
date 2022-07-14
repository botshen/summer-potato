import React from 'react'
import { Input } from '@mantine/core'
import s from './TodoInput.module.scss'
import { Plus } from 'tabler-icons-react'
import axios from '../../config/axios'

const TodoInput: React.FC = () => {
  const [description, setDescription] = React.useState('')
  const addTodo = async (e: any) => {
    if (description === '') return
    console.log(e.target.value)
    const response = await axios.post('todos', { description })
    console.log(response)
    setDescription('')
  }

  const addTodoClick = () => {
    console.log(description)
    setDescription('')
  }
  const rightSection =
    description === '' ? (
      <span />
    ) : (
      <Plus className={s.plus} onClick={addTodoClick} />
    )
  return (
    <div className={s.wrapper}>
      <Input
        className={s.input}
        placeholder="添加新任务"
        rightSectionWidth={70}
        rightSection={rightSection}
        value={description}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
          setDescription(e.target.value)
        }
        onKeyDown={(e: { key: string }) => {
          if (e.key === 'Enter') {
            addTodo(e)
          }
        }}
      />
    </div>
  )
}

export default TodoInput
