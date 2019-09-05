<template class="template">
<div> <Header></Header><ArealFilter></ArealFilter>
      <div class="component">
    <Component111></Component111>
    </div>
    <ArealFooter></ArealFooter>
    </div>
</template>

<script>

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
    ArealFilter: () => import('/home/oem/repo/cocktail/src/ArealFilter.vue'),
    Header: () => import('/home/oem/repo/cocktail/src/ArealHeader.vue'),
    Component111: () => import('/home/oem/repo/cocktail/src/ArealComponent.vue'),
    ArealFooter: () => import('/home/oem/repo/cocktail/src/ArealFooter.vue'),
  },
  methods: {
    getData() {
      console.log('getData');
      return this.$store.dispatch('getDataa');
    },
  },
};
</script>

<style>
.b11{
  background: -moz-linear-gradient(#00BBD6, #EBFFFF);
    background: -webkit-gradient(linear, 0 0, 0 100%, from(#00BBD6), to(#EBFFFF));
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00BBD6', endColorstr='#EBFFFF');
    padding: 3px 7px;
    color: #333;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    border: 1px solid #666;
    margin-top: 1%;
    margin-left: 50%;
}
div.component{
  border-radius: 10px;
  width: 65%;
overflow:auto;
  margin-top: 1.86%;
  margin-left: 22%;
  background: white
}
.choosed{
  background: orange;
}
hr {
  border:none;
  border-top:1px dotted #f00;
  color:#fff;
  background-color:#fff;
  height:1px;
}

footer {
  clear: both;
  margin-bottom: 0;
}

</style>
