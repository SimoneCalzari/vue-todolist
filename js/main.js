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
      newDo: {},
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
        // CON VARIABILE LOCALE ANZICHE PROPRIETA DELL OGGETTO APP
        // const newDo = {};
        // newDo.text = doToAdd;
        // newDo.done = false;
        // listDos.push(newDo);
        this.newDo.text = this.capitalizeDo(doToAdd);
        this.newDo.done = false;
        this.listDos.push(this.newDo);
      }
      this.textInput = '';
      this.newDo = {};
    },
    capitalizeDo(string) {
      return `${string.charAt(0).toUpperCase()}${string.slice(1, string.length - 1).toLowerCase()}`
    }
  }
}).mount('#app');