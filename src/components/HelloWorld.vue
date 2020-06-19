<template>
  <div class="hello">
    <InputSearch @searchInputHandle="aaa" @handleButton="testButton" />
  </div>
</template>

<script>
import InputSearch from '@/components/InputQuery'
export default {
  name: 'HelloWorld',
  components: { InputSearch },
  props: {
    msg: String
  },
  methods: {
    aaa (v) {
      debugger
    },
    testButton () {
      debugger
      alert('is my button')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
