const CHECK_STATUS = 'check_status';
const initialState = [];

const statusReducer = (status = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return status;
  }
};

const checkStatus = () => ({
  type: CHECK_STATUS,
});

export { checkStatus };
export default statusReducer;
