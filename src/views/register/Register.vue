<template>
    <div class="wrapper">
        <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png"/>
        <div class="wrapper__input">
            <input class="wrapper__input__content" placeholder="phont num"/>
        </div>
        <div class="wrapper__input">
            <input class="wrapper__input__content" placeholder="password" type="password"/>
        </div>
        <div class="wrapper__login-button" >register</div>
        <div class="wrapper__login-link">立即注册</div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Register',
  setup () {
    const router = useRouter()
    const handleLogin = () => {
      localStorage.isLogin = true
      router.push({ name: 'home' })
    }
    return { handleLogin }
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
