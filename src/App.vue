<template>
  <v-app id="app">
    <viewer/>
  </v-app>
</template>

<script>
import Viewer from './components/Viewer.vue';

export default {
  name: 'app',
  components: {
    Viewer,
  },
};
</script>
