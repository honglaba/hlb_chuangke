<template>
  <div>
    <!-- <keep-alive> -->
      <router-view :DataTree="DataTree || defaultData"></router-view>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      DataTree: 'userInfoGetter'
    })
  },
  data () {
    return {
      defaultData: {
        id: 9,
        parent: 0,
        gid: 1,
        mobile_phone: null,
        nickname: null,
        headimgurl: require('../../assets/images/mrtx.png'),
        birthday: null,
        address: null,
        real_name: null,
        id_card: null,
        reward_point: '0.00',
        money: '0.00',
        freeze_money: '0.00',
        invites: 0,
        invite_id: null,
        created_at: '2018-06-14 01:18:29',
        wechat_info: {
          mid: 9,
          subscribe: 1,
          openid: 'oZ7VWwm3_DF4yKkJpXBMAnPe_dP0',
          nickname: '',
          sex: 1,
          city: '',
          province: '沙迦',
          country: '阿拉伯联合酋长国',
          birthday: null,
          headimgurl:
              'http://thirdwx.qlogo.cn/mmopen/vi_32/c4taseHGbqZ2C18J2Ga12VasJ14vEkhABwJzLPeiaj7q9FH36HY0cFEIKOGZ4S2yDQPvw5pAqDge5ib5xtPNq3Ag/132',
          subscribe_time: null,
          unionid: 'ovjNOw7UrySS5fJFEeGPDwl9g93Y',
          created_at: '2018-06-14 01:18:29',
          updated_at: '2018-06-14 01:18:29'
        },
        alipay_info: {
          mid: 9,
          user_id: null,
          avatar: null,
          province: null,
          city: null,
          nick_name: null,
          is_student_certified: null,
          user_type: null,
          user_status: null,
          is_certified: null,
          gender: null,
          created_at: '2018-06-14 01:18:29',
          updated_at: '2018-06-14 01:18:29'
        }
      }
    }
  }
}
</script>

<style scoped>
</style>
