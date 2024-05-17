const { createApp, ref } = Vue;
//const app = Vue.createApp({
const app = createApp({    
    setup() {
        let message = ref("Added by VueJS");
        const changeMessage = () => {
            message.value = "Changed by VueJS";
        };

        return {
            message,
            changeMessage
        };
    }
});
