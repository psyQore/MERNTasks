import { FORM_PROJECT } from "../../types"

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case FORM_PROJECT:
      return {
        ...state,
        form: true
      }
    default:
      return state;
  }
};
