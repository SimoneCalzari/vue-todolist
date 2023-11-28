'use strict';


const { createApp } = Vue;

createApp({
  data() {
    return {
      listDos: [
        {
          text: 'Fare la spesa',
          done: false
        },
        {
          text: 'Fare la lavatrice',
          done: true
        },
        {
          text: 'Studiare Vue',
          done: false
        },
        {
          text: 'Prendere il gelato',
          done: true
        },
        {
          text: 'Cambiare le lenzuola',
          done: true
        },
      ]
    }
  },
  methods: {
    removeDo(index) {
      this.listDos.splice(index, 1);
    },
    isDone(stateTask) {
      if (stateTask === true) {
        return 'done';
      }
      return '';
    }
  }
}).mount('#app');