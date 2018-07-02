<template>
  <div class="">
    <nav class="nav_bar">
      <div class="logo">
        <a href="/"><img class="logo-img" src="../assets/logo.png" alt="logo"></a>
      </div>
      <div class="navigator">
        <ul class="list list1">
          <li class="item" v-for="(item, index) in navBar" :key="index">
            <a v-show="item.type === 'link'" class="item1" :href="item.link">{{ item.name }}</a>
            <button v-show="item.type === 'modal' && !isLogin" class="btn btn-link" type="button" @click="showModal">{{ item.name }}</button>
          </li>
        </ul>
      </div>
    </nav>
    <modal v-show="isModalVisible" v-bind:show="isModalVisible" v-bind:data="sign" @submit="submit" @close="showModal">
    </modal>
  </div>
</template>

<script>
import Modal from './Modal.vue'
import axios from 'axios'
export default {
  name: 'Nav',
  components: {
    Modal
  },
  data () {
    return {
      navBar: [
        { type: 'modal', name: 'Login', link: 'javascript:;' },
        { type: 'link', name: 'App', link: '/' },
        { type: 'link', name: 'Blog', link: '/' },
        { type: 'link', name: 'CV', link: '/' },
        { type: 'link', name: 'Portfolio', link: '/' }
      ],
      isModalVisible: false,
      isLogin: false,
      sign: {
        active: 0,
        labels: [
          {
            label: 'SIGN IN',
            tip: '',
            input: [
              'username',
              'password'
            ],
            submit: '/api/login'
          },
          {
            label: 'SIGN UP',
            tip: '',
            input: [
              'username',
              'email',
              'password'
            ],
            submit: '/api/register'
          }
        ]
      }
    }
  },
  methods: {
    showModal: function () {
      this.isModalVisible = !this.isModalVisible
    },
    submit: function (url, params) {
      console.log(url)
      console.log(params)
      this.login(url, params)
    },
    login: function (url, params) {
      axios.post(url, params)
        .then((resp) => {
          console.log(resp)
        }).catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/nav.css';
</style>
