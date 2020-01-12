import Vue from "vue";
import Vuex from "vuex";

import stocks from "./modules/stocks";
import portfolio from "./modules/portfolio";
import { loadData } from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: { loadData },
  modules: { stocks, portfolio }
});
