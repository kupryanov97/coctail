<template>
  <div class="viewer">
    <div 
      v-for="(item, index) in filteredItems"
      :key="index"
    >
      <p>
      <img
        :src="'https://ru.inshaker.com' + item.src"
        :height="300"
        :align="middle"
      />
      =
      <img
        v-for="(part) in item.parts"
        :key="part.part"
        :src="'https://ru.inshaker.com' + part.src"
        :width="98"
        :height="98"
        />
        
      </p>
      <span>{{item.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  computed: {
    filteredItems() {
      return this.$store.state.list;
    },
    getPagination() {
      return [50, { text: 'All', value: -1 }];
    },
  },
  methods: {
    getData() {
      console.log('getData');
      return this.$store.dispatch('getData')
    },
  },
};
</script>

<style>
.filter {
  padding-left: 20px;
}
</style>
