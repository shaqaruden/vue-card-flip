import VueCardFlip from './VueCardFlip.vue';

export default {
    install(Vue, options) {
        Vue.component("vue-flip-card", VueCardFlip);
       }
}