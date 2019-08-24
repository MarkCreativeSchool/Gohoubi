export const state = () => ({
  works: [],
})

export const mutations = {
  setWorks(state, works) {
    state.works = works
  },
}

export const actions = {
  addWorks({ commit }, work) {
    console.log("commit", work)
    let works = localStorage.getItem("works")
    if (works === null) {
      works = []
    } else {
      works = JSON.parse(works)
    }
    works.push(work)
    localStorage.setItem("works", JSON.stringify(works))
    const newWorks = localStorage.getItem("works")
    console.log("new", JSON.parse(newWorks))
    commit("setWorks", newWorks)
  },
}

export const getters = {
  works(state) {
    return state.works
  },
}
