import Baobab from 'baobab';
import R from 'ramda';

import Storage from './utils/Storage';

let user = Storage.getItem('user');

export default new Baobab({
  // Authentication
  user: {
    logged: !!user,
    model: user || null,
    loading: false,
  },

  // App data
  convos: {
    models: {},
    loading: true,
  },
  messages: {
    models: {},
    loading: true,
  },

  // UI State
  navbar: {
    title: null,
    backButton: false,
  },

  currentConvoId: null,
},
{
  facets: {
    visibleMessages: {
      cursors: {
        id: ['currentConvoId'],
        messages: ['messages', 'models'],
      },
      get(state) {
        if(!state.id) {
          return [];
        }
        return R.filter(m => m.convoId === state.id, R.values(state.messages));
      },
    },
    visibleConvos: {
      cursors: {
        convos: ['convos', 'models'],
      },
      get(state) {
        return R.values(state.convos);
      },
    },
    currentConvo: {
      cursors: {
        convos: ['convos', 'models'],
      },
      get(state, id) {
        return state.convos[id];
      },
    },
  },
});
