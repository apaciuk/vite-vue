<template>
<div id="nav">
<router-link to="/Home"></router-link>
<router-link to="/Contact"></router-link>
</nav>
<router-view></router-view>
  <h1>Hello Vite + Vue 3!</h1>
  <p>Edit ./App.vue to test hot module replacement (HMR).</p>
  <p>
    <span>Count is: {{ count }}</span>
    <button @click="count++">increment</button>
  </p>
  <Index />
</template>
<script>
import Index from './components/Index.vue';
export default {
  components: {
   Index
  },
  data: () => ({ count: 0 }),
  }
</script>

<style lang="scss">
p > button {
  background-color: red;
  height: 50px;
}
h1 {
  color: #4fc08d;
}

h1, p {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
