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
    data()  {
        return {
            count: 0
        }
    },
}).mount('#app2');

const vm3 = Vue.createApp({
    template: `<br><div>{{ greeting }} 好棒棒!</div><br>`,
    data() {
        return {
            greeting: 'Hello Vue.js!'
        }
    }
}).mount('#app3');

const vm4 = Vue.createApp({
    data() {
        return {
            message: 'Hello'
        }
    }
}).mount('#app4');

const vm5 = Vue.createApp({
    data() {
        return {
            checkedNames: []
        }
    }
}).mount('#app5');

const vm6 = Vue.createApp({
    data() {
        return {
            msg: '外部'
        }
    }
});

vm6.component('my-component', {
    template:`
        <div class="component">
            <div> props to parentMsg =>{{ parentMsg }}</div>
            <div> my msg => {{ msg }}</div>
        </div>`,
    props: ["parentMsg"],
    data: () => {
        return {
            msg: '子元件MSG'
        }
    }
});

vm6.mount('#app6');

