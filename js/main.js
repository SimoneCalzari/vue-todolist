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
      ],
      textInput: '',
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
    },
    changeDone(element) {
      if (element.done === true) {
        element.done = false;
        return;
      }
      element.done = true;
    },
    addDo(doToAdd) {
      if (doToAdd.trim().length > 0) {
        const newDo = {
          text: doToAdd,
          done: false
        };
        this.listDos.push(newDo);
      }
      this.textInput = '';
    }
  }
}).mount('#app');