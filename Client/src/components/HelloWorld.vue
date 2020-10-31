<template>
<div>
    <h3>asdasd</h3>
    
    <button v-on:click="go">GO</button>
</div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods:{
    go(){
      window.open('/home','_self');
    }
  }
};
</script>
