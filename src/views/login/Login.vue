<template>
    <div class="wrapper">
        <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png"/>
        <div class="wrapper__input">
            <input class="wrapper__input__content" placeholder="phont num" v-model="username"/>
        </div>
        <div class="wrapper__input">
            <input class="wrapper__input__content" placeholder="password" type="password"  v-model="password"/>
        </div>
        <div class="wrapper__login-button" @click="handleLogin">登录</div>
        <div class="wrapper__login-link">立即注册</div>
        <Toast  v-if="show" :message="toastMessage"/>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/ToastComponent.vue'

const useLoginEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({ username: '', password: '' })
  const handleLogin = async () => {
    const { username, password } = data
    if (username === '' && password === '') {
      showToast('username and password is null')
      return
    }
    try {
      const result = await post('/api/user/login', {
        username: data.username,
        password: data.password
      })
      if (result?.errno === 0) {
        localStorage.isLogin = true
        router.push({ name: 'home' })
      } else {
        showToast('login fail')
      }
    } catch (e) {
      showToast('request fail')
    }
  }
  const { username, password } = toRefs(data)
  return { username, password, handleLogin }
}

export default {
  name: 'LoginCom',
  components: { Toast },
  setup () {
    const { show, toastMessage, showToast } = useToastEffect()
    const { username, password, handleLogin } = useLoginEffect(showToast)
    return { handleLogin, username, password, show, toastMessage }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
    .wrapper{
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        transform: translateY(-50%);
        &__img{
            display: block;
            margin: 0 auto .4rem auto;
            width: .66rem;
            height: .66rem;
        }
        &__input{
            height: .48rem;
            margin: 0 .4rem .16rem .4rem;
            padding: 0 .16rem;
            background: #f9f9f9;
            border: 1px solid rgba(0,0,0,.10);
            border-radius: 6px;
            &__content{
                line-height: .48rem;
                border: none;
                outline: none;
                width: 100%;
                background: none;
                font-size: .16rem;
                &::placeholder{
                    color: $content-notice-fontcolor;
                }
            }
        }
        &__login-button{
            margin: .32rem .4rem .15rem .4rem;
            line-height: .48rem;
            background: #0091ff;
            box-shadow: 0 .04rem .08rem 0 rgba(0, 145, 255, 0.32);
            border-radius: .04rem;
            color: #fff;
            font-size: .16rem;
            text-align: center;
        }
        &__login-link{
            text-align: center;
            font-size: .14rem;
            color: $content-notice-fontcolor;
        }
    }
</style>
