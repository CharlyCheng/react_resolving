
import { SET_TASK_LIST } from '../constants'


export function setTaskList(param) {
  return {
    type: SET_TASK_LIST,
    param
  }
}

export const setUser = (user, resolve) => ({
  type: 'SET_USER',
  user,
  resolve
});