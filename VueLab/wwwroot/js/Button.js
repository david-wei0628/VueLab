const vm = Vue.createApp({
    data() {
        return {
            count: 0
        }
    },
    methods: {
        plus: function () {
            this.count++;
        }
    }
}).mount('#app');

const vm2 = Vue.createApp({
    data: () => {
        return {
            count: 0
        }
    },
}).mount('#app2');

const vm3 = Vue.createApp({
    template: `<div>{{ greeting }} 好棒棒!</div>`,
    data() {
        return {
            greeting: 'Hello Vue.js!'
        }
    }
}).mount('#app3');