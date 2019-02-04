<template>
  <span
    class="slds-icon_container"
    :class="{
      'slds-icon_container': category !== 'utility',
      'slds-icon_container_circle': category === 'action',
      [`slds-icon-${category}-${kababCaseName}`]:
        category !== 'utility' && category !== 'doctype',
      containerClass
    }"
    :title="title"
  >
    <svg
      aria-hidden="true"
      class="slds-icon"
      :class="[
        sizeClass,
        { 'slds-icon-text-default':
          colorVariant === 'default' && category === 'utility'
            ? !inverse
            : inverse },
        { 'slds-icon-text-warning': colorVariant === 'warning' },
        { 'slds-icon-text-error': colorVariant === 'error' },
        { 'slds-icon-text-light': colorVariant === 'light' }
      ]"
      v-bind="$attrs"
    >
      <use :xlink:href="svgUrl" />
    </svg>

    <span
      v-if="assistiveText"
      class="slds-assistive-text"
    >
      {{ assistiveText }}
    </span>
  </span>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    assistiveText: {
      type: String,
      default: null
    },
    category: {
      validator: value => [
        'action',
        'custom',
        'doctype',
        'standard',
        'utility'
      ].indexOf(value) !== -1,
      default: 'standard'
    },
    containerClass: {
      type: String,
      default: null
    },
    colorVariant: {
      validator: value => [
        'base',
        'default',
        'error',
        'light',
        'warning'
      ].indexOf(value) !== -1,
      default: 'default'
    },
    inverse: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      validator: value => [
        'xx-small',
        'x-small',
        'small',
        'medium',
        'large'
      ].indexOf(value) !== -1,
      default: 'medium'
    },
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    kababCaseName() {
      return this.name ? this.name.replace(/_/g, '-') : '';
    },
    sizeClass() {
      return `slds-icon_${this.size}`;
    },
    svgUrl() {
      return `/icons/${this.category}-sprite/svg/symbols.svg#${this.name}`;
    }
  }
};
</script>
