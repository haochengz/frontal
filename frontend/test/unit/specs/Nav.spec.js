import Vue from 'vue'
import Nav from '@/components/Nav'

describe('HelloWorld.vue', () => {
  let vm
  beforeEach(function () {
    const Constructor = Vue.extend(Nav)
    vm = new Constructor().$mount()
  })
  it('should render correct contents', () => {
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
