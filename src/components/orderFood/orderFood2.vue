<template>
    <h1>这里是组件2</h1>
</template>
<script>
export default {
  mounted(){
    let app=this;
    app.axios.get("https://cnodejs.org/api/v1/topic_collect/alsotang")
    .then(function(res){
      console.log(res)
    })


    app.axios({
      url:"https://cnodejs.org/api/v1/topics",
      method:"get",
    }).then(function(res){
      console.log(res)
    })
  }
}
</script>
