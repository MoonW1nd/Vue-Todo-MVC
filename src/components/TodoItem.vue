<template>
  <li tab-index='0' class="TodoItem" v-on="$listeners" v-bind="$attrs">
    <label class="TodoItem-Label">
      <input
        class="TodoItem-Checkbox"
        type="checkbox"
        @click.stop="onClickCheckbox(id)"
        v-bind:checked="isClosed"
      />
      <p class="TodoItem-Text">{{text}}</p>
    </label>
    <ButtonCloseContainer
      :id="id"
      :mix="'TodoItem-ButtonClose'"
    />
  </li>
</template>

<script>
import ButtonCloseContainer from '@/containers/ButtonClose.container.vue'

export default {
  name: 'TodoItem',
  props: {
    isClosed: Boolean,
    text: String,
    id: Number,
    onClickCheckbox: Function
  },
  components: { ButtonCloseContainer },
  inheritAttrs: false
}
</script>

<style lang='scss' scoped>
.TodoItem {
  margin-top: 10px;
  width: 100%;
  height: 58px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  font: 18px arial, sans-serif;
  color: #000000;

  &-Label {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
  }

  &-Checkbox {
    text-align: center;
    width: 40px;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    cursor: pointer;
    border: none;
    outline: none;
    -webkit-appearance: none;

    &:after {
      position: absolute;
      left: 0;
      top: 8px;
      content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
    }

    &:checked:after {
      position: absolute;
      left: 0;
      top: 8px;
      content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
    }

    &:focus {
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
    }
  }

  &-Text {
    display: inline-block;
    margin-left: 50px;
  }

  &_closed {
    .TodoItem-Text {
      text-decoration: line-through;
      color: #e0e0e0;
    }
  }

  &:hover,
  &:focus {
    .TodoItem-ButtonClose {
      display: block;
    }
  }
}

</style>
