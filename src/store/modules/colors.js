import {
  PUSH_COLOR,
  PUSH_MYCOLOR
} from '../actions/colors'

const state = {
  colors: {},
  mycolors: {}
}

const getters = {
}

const actions = {
}

const mutations = {
  [PUSH_COLOR]: (state, colors) => {
    for (const color of colors) {
      state.colors[color.uid] = color
    }
  },
  [PUSH_MYCOLOR]: (state, mycolors) => {
    for (const color of mycolors) {
      state.mycolors[color.uid] = color
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
