export const LoginStart = (payload) => ({
    type: "LOGIN_START",
});

export const LoginSuccess = (payload) => ({
    type: "LOGIN_SUCCESS",
    payload: payload,
});

export const UpdateSuccess = (payload) => ({
    type: "UPDATE_SUCCESS",
    payload: payload,
});

export const LoginFailure = (payload) => ({
    type: "LOGIN_FAILURE",
    payload: payload,
});

export const SignUpStart = () => ({
    type: "SIGNUP_START",
})
export const SignUpSuccess = () => ({
    type: "SIGNUP_SUCCESS",
})

export const SignUpFailure = (err) => ({
    type: "SIGNUP_FAILURE",
    payload: err,

})
export const LogoutStart = () => ({
    type: "LOGOUT_START"
})
export const BookingStart = () => ({
    type: "BOOKING_START"
})
export const SelectSeatSuccess = () => ({
    type: "SELECT_SEAT_SUCCESS"
})
export const PaySuccess = () => ({
    type: "PAY_SUCCESS"
})
export const BookingComplete = () => ({
    type: "BOOKING_COMPLETE"
})
export const LogOut = () => ({
    type: "LOG_OUT"
})