<template class="template">
  <div>
    <areal-header /><areal-filter /><div class="component">
      <areal-component />
    </div><areal-footer />
  </div>
</template><script>import ArealFilter from './ArealFilter.vue';
import ArealHeader from './ArealHeader.vue';
import ArealComponent from './ArealComponent.vue';
import ArealFooter from './ArealFooter.vue';

export default {
  name: 'Main',
  components: {
    ArealFilter,
    ArealHeader,
    ArealComponent,
    ArealFooter,
  },
  data() {
    return {};
  },
};

</script>
<style>
  div.component {
    border-radius: 10px;
    width: 55%;
    overflow: auto;
    margin-top: 1.86%;
    margin-left: 24%;
    background: white
  }
</style>
