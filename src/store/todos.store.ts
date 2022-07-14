import { flow, makeAutoObservable } from 'mobx'
import axios from '../config/axios'

type Todo = {
  completed: boolean
  completed_at: string
  created_at: string
  deleted: boolean
  description: string
  extra: any
  id: number
  updated_at: string
  user_id: number
  editing?: boolean
}

class TodosStore {
  todos: Todo[] = []

  constructor() {
    makeAutoObservable(this)
  }

  // 初始化 todos
  initTodo = flow(function* (this: TodosStore) {
    this.todos = []
    try {
      const response = yield axios.get('todos')
      if (response.status === 200) {
        this.todos = response.data.resources
      }
    } catch (error) {
      console.log(error)
    }
  })
}

const todosStore = new TodosStore()
export default todosStore
