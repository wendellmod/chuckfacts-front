import Vue from 'vue'
import store from '@/config/store'
import ChuckFactsService from '@/services/chuckfacts.service'

const state = {
    fact: {
        data: [],
        error: null
    }
}

const getters = {}

const actions = {
    async fetchFact( {commit} ) {
        try {
            const fact = await ChuckFactsService.getFacts()
            commit('updateFact', fact)
        } catch ( error ) {
            commit('errorFact', error)
        }
    }
}

const mutations = {
    updateFact (state, fact) {
        const updateData = { data: fact, error: null }
        Vue.set( state, 'fact', updateData)
    },
    errorFact (state, error) {
        const updateData = { data: [], error: error}
        Vue.set( state, 'fact', updateData )
    }
}

const module = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

store.registerModule('facts', module)
export default module