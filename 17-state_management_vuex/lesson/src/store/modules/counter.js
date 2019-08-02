import * as types from "../types";

const state = {
  counter: 0
};

const getters = {
  [types.DOUBLE_COUNTER]: state => state.counter * 2,
  [types.STRING_COUNTER]: state => state.counter + " clicks"
};

const mutations = {
  increment: (state, payload) => {
    state.counter += payload;
  },
  decrement: (state, payload) => {
    state.counter -= payload;
  }
};

const actions = {
  increment: (context, payload) => {
    context.commit("increment", payload);
  },
  decrement: (context, payload = 1) => {
    context.commit("decrement", payload);
  },
  asyncIncrement: ({ commit }, payload) => {
    setTimeout(() => {
      commit("increment", payload.amount);
    }, payload.duration);
  },
  asyncDecrement: ({ commit }, payload) => {
    setTimeout(() => {
      commit("decrement", payload.amount);
    }, payload.duration);
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
