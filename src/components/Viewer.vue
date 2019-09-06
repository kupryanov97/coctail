<template class="template">
<div> <ArealHeader></ArealHeader><ArealFilter></ArealFilter>
      <div class="component">
    <ArealComponent></ArealComponent>
    </div>
    <ArealFooter></ArealFooter>
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
  width: 55%;
overflow:auto;
  margin-top: 1.86%;
  margin-left: 24%;
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
