<template>
<div>
<h1>Hello{{WkId}}</h1>
<button @click="test"></button>
</div>
</template>

<script>
export default {
    name:'WkMainPage',
    computed: {
        WkId(){
            return this.$store.state.openedWkId;
        }
    },
    methods:{
        test(){
            console.log(this.$store.state.openedWkId);
        }
    }
}
</script>
