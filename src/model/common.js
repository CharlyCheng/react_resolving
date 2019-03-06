export default {
  // 命名空间
  namespace: 'common',
  // 初始化state
  state: {
    loading: false,
  },
  // reducers 同步更新 类似于vuex的mutations
  reducers: {
    updateLoadingStatus(state, action) {
      return {
        ...state,
        loading: action.payload
      }
    },
  },
  // reducers 异步更新 类似于vuex的actions
  efffects: {
    someEffect(action, store) {
      // some effect code
      ...
      ... 
      // 将结果返回
      return result
    }
  }
}