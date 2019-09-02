<template class="template">
<div> <Header></Header>
    <div class="center">
      <div class="choosed">
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
    message: {
      set(value) {
        this.$store.commit('updateMessage', value);
      },
      set(value) {
        this.$store.commit('updateColor', value);
      },
      set(value) {
        this.$store.commit('updateComponents', value);
      },
    },
    books() {
        return this.$store.getters.list
    },
    getPagination() {
      return [50, { text: 'All', value: -1 }];
    },
  },
    components:{
    testComponent,
    Component111,
    Header
  },
  methods: {
    updateSelect (e) {
    this.$store.commit('updateSelect', e.target.value)
  },
  updateColor (e) {
    this.$store.commit('updateColor', e.target.value)
  },
  updateComponents (e) {
    this.$store.commit('updateComponents', e.target.value)
  },
    getData() {
      console.log('getData');
      return this.$store.dispatch('getData');
    },
  },
};
</script>

<style>
hr {
  border:none;
  border-top:2px dotted #f00;
  color:#fff;
  background-color:#fff;
  height:1px;
}
.application--wrap{
  background-image: url("https://ru.inshaker.com/assets/common/body-bg-bf9928ee232a5a485e2d840111ee4bb2b7affb0509ecc283e6c81d4956ca3038.jpg");
  height: 100%;
}

footer {
  clear: both;
  margin-bottom: 0;
}

</style>
