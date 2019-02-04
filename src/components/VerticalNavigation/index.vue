<template>
  <nav
    class="slds-nav-vertical"
    :class="{'slds-nav-vertical_shade': variant === 'shade'}"
  >
    <div
      v-for="category in categories"
      :key="`${getCategoryId(category)}-header`"
      class="slds-nav-vertical__section"
    >
      <h2
        :id="getCategoryId(category)"
        class="slds-nav-vertical__title slds-text-title_caps"
      >
        {{ category.label }}
      </h2>
      <ul :key="getCategoryId(category)">
        <li
          v-for="item in category.items"
          :key="item.id"
          class="slds-nav-vertical__item"
          :class="{ 'slds-is-active': item.id === getSelectedId }"
        >
          <a
            :data-id="item.id"
            :href="item.url || 'javascript:void(0);'"
            class="slds-nav-vertical__action"
            :aria-describedby="getCategoryId(category)"
            @click="handleClick(item)"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import shortid from 'shortid';

export default {
  props: {
    categories: {
      type: Array,
      default: () => ([])
    },
    selectedId: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      validator: value => [
        'default',
        'shade'
      ].indexOf(value) !== -1,
      default: 'default'
    }
  },
  data() {
    return {
      generatedId: shortid.generate()
    };
  },
  computed: {
    getId() {
      return this.$attrs.id || this.generatedId;
    },
    getSelectedId() {
      let selectedId;
      if (this.selectedId) {
        ({ selectedId } = this);
      } else if (
        this.categories.length > 0
        && this.categories[0].items
        && this.categories[0].items.length > 0
      ) {
        selectedId = this.categories[0].items[0].id;
      }
      return selectedId;
    }
  },
  methods: {
    getCategoryId(category) {
      return `${this.getId}-${category.id}`;
    },
    handleClick(item) {
      this.$emit('handleClick', item);
    }
  }
};
</script>
