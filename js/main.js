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
      ]
    }
  },
  methods: {

  }
}).mount('#app');