<template>
  <div class="app">
    <x-header :left-options="{backText: ''}" title="实名认证">
    </x-header>
    <div class="main2">
      <div class="content">
        <group>
           <x-input title='真实姓名' type="text" required></x-input>
            <x-input title='身份证号码' type="text" required></x-input>
        </group>
        <div class="tijiao">
          <button class="btn-aoc">确认</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { XInput, Group, Divider } from 'vux'
import { mapActions } from 'vuex'
export default {
  data () {
    return {}
  },
  components: {
    XInput,
    Group,
    Divider
  },
  methods: {
    ...mapActions(['HTTP_realNameRegistration']),
    _submit () {
      // this.HTTP_realNameRegistration()
    }
  }
}
</script>
<style lang="less" scoped>
.tijiao {
  margin-top: 0.2rem;
  padding: 0.3rem;
}
</style>
