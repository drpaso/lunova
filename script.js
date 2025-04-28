const { createApp } = Vue;

createApp({
  data() {
    return {
      title: 'Welcome to Vue.js!',
      message: 'Edit me!'
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('');
    }
  }
}).mount('#app');
