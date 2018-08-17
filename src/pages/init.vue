<template>
  <div class="init">
    <h1 class="title">{{ title }}</h1>
    <div class="card" id="180816">

    </div>
  </div>
</template>

<script>
export default {
  name: 'init',
  data () {
    return {
      title: 'TO LEARN List'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.init {
    margin-left: 241px;
    padding: 0 30px;
}
.title {
    color: #B2C6DA;
}
.card {
  width: 90%;
  height: 220px;
  border: 1px solid rgba(0,36,100,.3);
  border-radius: 10px;
  cursor: pointer;
  transition: all .3s;
}
/* .card:hover {
  box-shadow: 0 26px 40px -24px rgba(0,36,100,.3);
  transform: translateY(-6px);
} */
h1, h2 {
  font-weight: normal;
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
