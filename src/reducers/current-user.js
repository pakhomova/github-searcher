import { PICK_USER } from '../actions/current-user';

const initialState = {
  currentUser: {}
};

export default function currentUser(state = initialState, action) {
  switch (action.type) {
    case PICK_USER: {
      const { value } = action.payload;
      return {
        ...state,
        currentUser: value
      };
    }
    default:
      return state;
  }
}
