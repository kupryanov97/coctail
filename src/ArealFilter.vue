  <template>
  <div>
  <div class="new-select-style-wpandyou">
           <select :value="selected" @change="updateSelect"> 
             <option>Любые</option> 
             <option>kek</option>
             <option>Безалкогольный</option>
             <option>arbidol</option>
           </select>
           
      </div>
      <div class="color">
           <select :value="color" @change="updateColor"> 
             <option>Любые</option> 
             <option>black</option>
             <option>white</option>
             <option>arbidol</option>
           </select>
      </div>
      <div class="components">
           <select :value="components" @change="updateComponents"> 
             <option>Любые</option> 
             <option>Лед в кубиках</option>
             <option>Водка</option>
             <option>Серебряная текила</option>
             <option>Лаймовый сок</option>
           </select>
      </div>
      </div>
</template>

<script>
  module.exports= {
  data:function () {
    return {
              selected:null,
      color:null,
      components: null,
    };
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
  },
};
  </script>
