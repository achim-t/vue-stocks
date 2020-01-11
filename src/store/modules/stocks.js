import importedStocks from "../../data/stocks";
const state = {
  stocks: []
};

const mutations = {
  SET_STOCKS(state, stocks) {
    state.stocks = stocks;
  },
  RND_STOCKS(state) {} //eslint-disable-line
};

const actions = {
  buyStock: ({ commit }, order) => {
    commit(order);
  },
  initStocks: ({ commit }) => {
    commit("SET_STOCKS", importedStocks);
  },
  randomizeStocks: ({ commit }) => {
    commit("RND_STOCKS");
  }
};

const getters = {
  stocks: state => {
    return state.stocks;
  }
};

export default { state, mutations, actions, getters };
