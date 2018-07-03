
<template>
  <transition name="modal-fade" v-show="show">
    <div class="backdrop" @click="close">
      <div class="modal" role="dialog" @click.stop>
        <div class="header">
            <slot name="modalHeader"></slot>
            <ul class="label-list">
              <li class="label-item" v-for="(item, index) in data.labels" :key="index" :class="data.active === index ? 'label-active' : ''">
                <a class="label-a" @click="changeLabel(index)" href="javascript:;">{{ item.label }}</a>
              </li>
            </ul>
            <button type="button" name="close" class="btn btn-close" @click="close" position="relative">X</button>
        </div>
        <div class="body">
            <slot name="modalBody"></slot>
            <div class="error-tip" v-show="tip.display">{{ tip.content }}</div>
            <ul class="input-list">
              <li class="input-item" v-for="(item, index) in inputBoxes" :key="index">
                <label>
                  <span>{{item.name.toUpperCase()}}: </span>
                  <input class="input-box" :class="{errorinput:item.state === false}" v-model="inputData[index]" :placeholder="item.name" onfocuse="this.placeholder=''">
                </label>
              </li>
            </ul>
        </div>
        <div class="footer">
            <slot name="modalFooter"></slot>
            <button type="button" name="submit" class="btn btn-green" @click="submit">SUBMIT</button>
            <button type="button" name="close" class="btn btn-green" @click="close">CLOSE</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: [
    'show',
    'data'
  ],
  data: function () {
    return {
      inputBoxes: this.data.labels[this.data.active].input,
      inputData: new Array(this.data.labels[this.data.active].input.length),
      tip: this.data.labels[this.data.active].tip
    }
  },
  methods: {
    close: function () {
      this.$emit('close')
    },
    nothing: function () {
      ;
    },
    submit: function () {
      const activeSubmit = this.data.labels[this.data.active]
      const url = activeSubmit.submit
      let params = {}
      for (let i in activeSubmit.input) {
        params[activeSubmit.input[i].name] = this.inputData[i]
      }
      this.$emit('submit', url, params)
      this.close()
    },
    changeLabel: function (index) {
      this.data.active = index
      this.inputBoxes = this.data.labels[this.data.active].input
      this.tip = this.data.labels[this.data.active].tip
    }
  }
}
</script>

<style lang="css" scoped>
.modal-fade-enter, .modal-fade-leave-active {
  opacity: 0;
}
.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity .5s ease
}
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background-color: #fff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}
.header, .footer {
  display: flex;
}
.header {
  border-bottom: 1px solid #eee;
  font-size: 20px;
  padding: 0;
  font-weight: bold;
  background-color: transparent;
  color: #4aae9b;
  justify-content: space-between;
  display: flex;
}
.footer {
  border-top: 1px solid #eee;
  justify-content: flex-end;
}
.body {
  position: relative;
}
.btn-close {
  border: none 0;
  font-size: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-top: 0;
  padding-right: 5px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background-color: transparent;
}
.btn-green {
  color: #fff;
  background-color: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
  font-size: 18px;
  padding-left: 20px;
  padding-right: 20px;
}
.label-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  vheight: 24px;
  padding-bottom: 0;
  padding-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
}
.label-list .label-item {
  float: left;
  display: inline;
}
.label-list .label-a {
  text-decoration: none;
  display: block;
  padding: 5px 0 3px;
  margin-left: 0;
  width: 158px;
  font-weight: bold;
  text-align: center;
  line-height: 15px;
  color: #4aae9b;

}
.label-a.on, .label-a:hover {
  padding-top: 6px;
  background-color: lightgreen;
  padding-bottom: 3px;
  width: 159px;
}
.label-active {
  border: 0;
  border-bottom: 2px solid #4aae9b;
}
.btn-green:hover {
  background-color: lightgreen;
}
.input-list {
  list-style: none;
  padding: 10px;
}
.input-item {
  color: #4aae9b;
  padding: 10px;
}
.input-box {
  padding: 3px;
  font-size: 18px;
  float: right;
}
.errorinput {
  border-color: red;
}
.error-tip {
  padding: 5px;
  margin-left: 15px;
  color: red;
  font-size: 18px;
}
</style>
