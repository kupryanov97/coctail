<template class="template">
  <div>
    <ArealHeader>
    </ArealHeader>
    <ArealFilter>
    </ArealFilter>
    <div class="component">
      <ArealComponent>
      </ArealComponent>
    </div>
    <ArealFooter>
    </ArealFooter>
  </div>
</template>

<script>
import ArealFilter from './ArealFilter.vue';
import ArealHeader from './ArealHeader.vue';
import ArealComponent from './ArealComponent.vue';
import ArealFooter from './ArealFooter.vue';

export default {
  data() {
    return {
    };
  },
  name: 'Main',
  components: {
    ArealFilter,
    ArealHeader,
    ArealComponent,
    ArealFooter,
  },
};
</script>

<style>
div.component{
  border-radius: 10px;
  width: 55%;
overflow:auto;
  margin-top: 1.86%;
  margin-left: 24%;
  background: white
}

</style>
