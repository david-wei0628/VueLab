const ComVm = Vue.createApp({
    data() {
        return {
            msg: 'parent !!'
        }
    }
});

ComVm.component('custom-component', {
    template:
        `<div>
            Com
            <div>
            <solt>spac        </solt>
            </div>
        </div>`,
    data() {
        return {
            msg:'child'
        }
    }
});
ComVm.mount('#Comapp');

const ComVm2 = Vue.createApp({
    data() {
        return {
            isShow: false
        }
    }
}).mount('#Comapp2');


const ComVm3 = Vue.createApp({
    data() {
        return {
            isShow: false
        }
    }
}).mount('#Comapp3');