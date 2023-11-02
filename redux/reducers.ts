// reducers.ts
// reducers.ts
import { SET_SELECTED_ITEM } from './actions';

const initialState = {
  globalVariable: '',
  selectedItem: '', // Agrega la propiedad para el elemento seleccionado
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_ITEM:
      return { ...state, selectedItem: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
