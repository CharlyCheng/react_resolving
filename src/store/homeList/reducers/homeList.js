import {
  TYPE
} from '../constants'

const createUser = (user) => user;

const homeList = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case TYPE.SET_USER:
      // 根据type来更新用户信息
      action.resolve(action.user)
      return {...state, ...createUser(action.user)};
    default:
      return state;
  }
}

export {
  homeList
}