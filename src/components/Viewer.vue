<template class="template">
<div a> <Header></Header>
    <div class="center1">
      <div>
    <testComponent></testComponent> <Component111></Component111>
      </div>

    </div>
    </div>
</template>

<script>
import testComponent from '/home/oem/repo/cocktail/src/ArealFilter.vue';
import Header from '/home/oem/repo/cocktail/src/ArealHeader.vue';
import Component111 from '/home/oem/repo/cocktail/src/ArealComponent.vue';

export default {
  data() {
    return {

    };
  },
  name: 'Main',
  computed: {
    books() {
      return this.$store.getters.list;
    },
    getPagination() {
      return [50, { text: 'All', value: -1 }];
    },
  },
  components: {
    testComponent,
    Component111,
    Header,
  },
  methods: {
    updateSelect(e) {
      this.$store.commit('updateSelect', e.target.value);
    },
    updateColor(e) {
      this.$store.commit('updateColor', e.target.value);
    },
    updateComponents(e) {
      this.$store.commit('updateComponents', e.target.value);
    },
    getData() {
      console.log('getData');
      return this.$store.dispatch('getDataa');
    },
  },
};
</script>

<style>
.center1{
  background: white;
  width: 65%;
  height: 100%;
  margin-top: 6.86%;
  margin-left: 22%;
}
.choosed{
  background: orange;
}
hr {
  border:none;
  border-top:2px dotted #f00;
  color:#fff;
  background-color:#fff;
  height:1px;
}

footer {
  clear: both;
  margin-bottom: 0;
}

</style>
