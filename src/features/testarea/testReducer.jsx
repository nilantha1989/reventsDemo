import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstants";
import { createReducer } from "../../app/common/util/reducerUtils";

const initialState = {
  data: 42,
};

const decrmentCounter = (state) => {
  return { ...state, data: state.data + 1 };
};

const incrmentCounter = (state) => {
  return { ...state, data: state.data - 1 };
};

export default createReducer(initialState, {
  [INCREMENT_COUNTER]: incrmentCounter,
  [DECREMENT_COUNTER]: decrmentCounter,
});

/*const testReducer = (state = initialStore, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, data: state.data + 1 };
    case DECREMENT_COUNTER:
      return { ...state, data: state.data - 1 };
    default:
      return state;
  }
};*/
