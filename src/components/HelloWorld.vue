<template>
  <div class="hello">
    <article><h1>{{ msg }}</h1>
    </article>
  </div>
</template>

<script>
export default {

  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style lang="sass">
$nav-color: #F90;
.hello
  color: $nav-color
</style>
