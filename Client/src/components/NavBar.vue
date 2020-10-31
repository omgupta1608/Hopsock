<template>
    <nav class="purple accent-3">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo" style="margin-left:15px;">HOPSOCK</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="#"> <i @click="changeTab('home')" id="home" class="material-icons active_tab onetab">person</i></a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
    name:'NavBar'
}
</script>