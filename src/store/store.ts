import Vue from 'vue';
import Vuex from 'vuex';
import { SET_HEROES, ADD_MESSAGES, CLEAR_MESSAGES } from './mutation-types';
import { HEROES } from '@/static/mock-heroes';
import { GET_HEROES } from './action-types';
import { Hero } from '@/models/Hero';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    heroes: undefined,
    messages: [],
  },
  mutations: {
    [SET_HEROES](state, payload) {
      state.heroes = payload.heroes;
    },
    [ADD_MESSAGES](state, payload) {
      state.messages = state.messages.concat(payload.messages);
    },
    [CLEAR_MESSAGES](state) {
      state.messages = [];
    },
  },
  actions: {
    [GET_HEROES](context) {
      // Simulate API call by using a promise
      const heroesPromise = new Promise<Hero[]>((resolve, reject) => {
        setTimeout(() => {
          const messages = 'Content fetched from static data';
          context.commit(ADD_MESSAGES, { messages });
          resolve(HEROES);
        }, 1000);
      });
      heroesPromise.then((heroes: Hero[]) => {
        context.commit(SET_HEROES, { heroes });
      });
    },
  },
});
