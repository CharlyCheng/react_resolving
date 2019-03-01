
const delay = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default {
  namespace: 'activity_list',
  state: {
    list: [],
    record: 0,
    current: 0
  },
  effects: {
    *getList(action, { call, put, select}){
      yield call(delay, 1000);
      yield put({ type: 'count/minus' });
    }
  },
  reducers: {
    save(state, { playload : id }){
      return state.list.filter( item => item.id !== id)
    },
    add(state) {
      const newCurrent = state.current + 1;
      return { ...state,
        record: newCurrent > state.record ? newCurrent : state.record,
        current: newCurrent,
      }
    },
    minus(state) {
      return { ...state, current: state.current - 1};
    }
  }
}