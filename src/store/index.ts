import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    recoedList: [] as RecordItem[]
  },
  mutations: {
    fetchRecords(state) {
      state.recoedList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
 },
    createRecord(state, record) {
      const record2: RecordItem = clone(record)
      record2.createAt = new Date()
      state.recoedList.push(record2)
      console.log(state.recoedList);
      store.commit('saveRecords')
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recoedList))
 },
  }
})


export default store
