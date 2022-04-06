const vm = Vue.createApp({
  data () {
    return {
      count: 0
    }
  },
  methods: {
    plus: function() {
      this.count++;
    }
  }
}).mount('#app');