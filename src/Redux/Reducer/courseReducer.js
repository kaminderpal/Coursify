const initialState = {
  courses: [],
};
const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_COURSE':
      return {
        ...state,
        courses: [...state.courses, action.course],
      };
    default:
      return state;
  }
};
export default courseReducer;
