<template>
  <input
    type="text"
    class="TextInput"
    @input="input"
    v-on="listeners"
    v-bind="$attrs"
    :value="value"
  />
</template>

<script>
/**
 * @class TextInput
 * @description инпут для ввода теста
 * @property {string} value - значение инпута
 */
export default {
  name: 'TextInput',
  props: ['value'],
  methods: {
    input (event) {
      this.$emit('input', event.target.value)
    }
  },
  computed: {
    listeners () {
      const { input, ...listeners } = this.$listeners
      return listeners
    }
  },
  inheritAttrs: false
}
</script>

<style lang="scss" scoped>
.TextInput {
  font: 18px arial, sans-serif;
  border: none;
  padding: 0;
  margin: 0;
  padding-left: 15px;
  background-color: #ffffff;
  height: 58px;
  vertical-align: top;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  width: calc(50vw - 15px);
  min-width: 350px;
  max-width: 70ch;
  box-sizing: border-box;

  &::-webkit-input-placeholder,
  &::-moz-placeholder,
  &:-moz-placeholder,
  &:-ms-input-placeholder {
    font-weight: 100;
    padding-left: 10px;
    color: #aba9a9;
  }

  &:hover,
  &:focus {
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08);
  }
}
</style>
