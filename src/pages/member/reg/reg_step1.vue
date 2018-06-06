<template>
    <div>
        <Header></Header>
        <div class="main2">
            <div class="content pd20">
                <div class="xuanze">
                    <ul>
                        <li>
                            <a href="#"><img src="./../images/you.png"><br>我有推荐人</a>
                        </li>
                        <li>
                            <a href="#"><img src="./../images/meiyou.png"><br>我没有推荐人</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.xuanze {
  color: #333;
  ul {
    li {
      a {
        color: #333;
        display: block;
        font-size: 0.4rem;
      }
      text-align: center;
      img {
        width: 1.8rem;
        height: 1.84rem;
        margin-bottom: 0.24rem;
      }
      &:first-child {
        margin-top: 1.3rem;
        margin-bottom: 1.5rem;
      }
    }
  }
}
</style>