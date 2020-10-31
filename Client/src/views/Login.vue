<template>
    <div class="row mainform">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s4">
          <input id="first_name" type="text" class="validate">
          <label for="first_name">First Name</label>
        </div>
      </div>
      <div class="row">
          <div class="input-field col s4">
          <input id="last_name" type="text" class="validate">
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s4">
          <input id="password" type="password" class="validate">
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s4">
          <input id="email" type="email" class="validate">
          <label for="email">Email</label>
        </div>
      </div>
    </form>
  
  </div>
</template>

<script>
export default {
    
}
</script>

<style>
.mainform {
    align-content: center;
}
</style>