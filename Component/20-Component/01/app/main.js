const Home = {
    template: `
        <h1 v-text="title"></h1>
    `,
    data(){
        return{
            title: 'Components in vuejs',
        }
    }
}

Vue.createApp({
    components:{
        messageTitle: Home
    },
    template: `
        <messageTitle />
        <h3 v-text="question"></h3>
        <span v-text="answer"></span>

    `,
    data(){
        return{
            question: 'How to create component in vuejs?',
            answer: 'It is easy.'
        }
    }
}).mount('#app');