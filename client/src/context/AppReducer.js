export const AppReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: "",
        error: false,
        order: "",
        hasPay: false,
      };
    case "LOGOUT_START":
      return {
        user: "",
        error: false,
        order: "",
        hasPay: false,
      };
    case "LOGIN_SUCCESS":
      console.log(action.payload.accessToken);
      return {
        user: action.payload.username,
        error: false,
        order: "",
        hasPay: false,
        token: action.payload.accessToken,
      };
    case "UPDATE_SUCCESS":
      console.log(action.payload);
      console.log("update success");
      return {
        user: action.payload.user,
        error: false,
        order: "",
        hasPay: false,
      };
    case "LOGIN_FAILURE":
      console.log("fail " + action.payload);
      return {
        user: "",
        error: true,
        order: "",
        hasPay: false,
      };
    case "SIGNUP_START":
      return {
        user: "",
        error: false,
        order: "",
        hasPay: false,
      };
    case "SIGNUP_SUCCESS":
      return {
        user: "",
        error: false,
        order: "",
        hasPay: false,
      };
    case "SIGNUP_FAILURE":
      return {
        user: "",
        error: true,
        order: "",
        hasPay: false,
      };

    case "BOOKING_START":
      return {
        user: "",
        error: false,
        order: "",
        hasPay: false,
      };
    case "SELECT_SEAT_SUCCESS":
      return {
        user: action.payload.user,
        error: false,
        order: action.payload.order,
        hasPay: false,
      };
    case "PAY_SUCCESS":
      return {
        user: action.payload.user,
        error: false,
        order: action.payload.order,
        hasPay: true,
      };
    case "BOOKING_COMPLETE":
      return {
        user: action.payload.user,
        error: false,
        order: action.payload.order,
        hasPay: true,
      };
    case "LOG_OUT":
      return {
        user: "",
        error: false,
        order: "",
        hasPay: false,
      };
    default:
      return state;
  }
};
