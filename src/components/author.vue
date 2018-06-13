<template>
  <div>
    <button @click="loginWX()">点击登录微信</button>
    <button @click="loginCallback()">回调</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      a: 1
    };
  },
  computed: {},
  methods: {
    ...mapActions(["HTTP_WxAccredit", "HTTP_WxAccreditSuccess", "HTTP_WxReq"]),
    loginWX() {
      this.HTTP_WxAccredit().then(res => {
        window.location.href = res;
      });
    },
    loginCallback() {
      this.HTTP_WxAccreditSuccess();
    }
  }
};
</script>

<style scoped>
</style>
