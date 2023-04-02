import axios from "axios";

const state = {
    snackBar: false,
    snackBarText: "",
};

const getters = {
    getSnackBar: (state) => state.snackBar
};

const mutations = {
    setSnackBarState: (state, payload) => state.snackBar = payload,
    openSnackBar: (state, payload) => {
        state.snackBarText = payload;
        state.snackBar = true;
    },
    resetSnackBar: (state) => {
        state.snackBarText = "";
        state.snackBar = false;
    }
};

const actions = {
    validate(context, coupon) {
        return axios.get(`/api/validateCoupon/${coupon}`);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
