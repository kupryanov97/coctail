  <template>
  <div class="filters">
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
             <option>Бурбон</option>
              <option>Абсент</option>
              <option>Энергетик</option>
              <option>Коктейльная вишня красная</option>
              <option>Ананас</option>
           </select>
      </div>
      <div class="button1"><button class="b1"  v-on:click="clearSelect">  Очистить</button>
      </div>
      </div>
</template>

<script>
module.exports = {
  data() {
    return {
      counter: 0,
      selected: null,
      color: null,
      components: '',
    };
  },
  methods: {
    updateSelect(e) {
      this.$store.commit('updateSelect', e.target.value);
    },
    clearSelect(e) {
      e.target.value = 'Любые';
      this.$store.commit('updateColor', e.target.value);
      this.$store.commit('updateSelect', e.target.value);
      this.$store.commit('updateComponents', e.target.value);
    },
    updateColor(e) {
      this.$store.commit('updateColor', e.target.value);
    },
    updateComponents(e) {
      this.$store.commit('updateComponents', e.target.value);
    },
  },
};
</script>
<style>
.filter11{
  margin-top:-37%;
}
.filters{
  position: fixed;
  z-index: 0;
  margin-left:22%;
  margin-top:9%;
}
.b1 {
    background: -moz-linear-gradient(#00BBD6, #EBFFFF);
    background: -webkit-gradient(linear, 0 0, 0 100%, from(#00BBD6), to(#EBFFFF));
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00BBD6', endColorstr='#EBFFFF');
    padding: 3px 7px;
    color: #333;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    border: 1px solid #666;
   }
.button1{
  width: 150px;
  font: 18px/27px "Times New Roman";
  line-height:29px;
  text-align: center;
  height: 154px;
  margin-left:-207%;
  margin-top: 20px;
}
.new-select-style-wpandyou select{
  border-radius: 0;
    background: transparent;
    height: 44px;
    border: 0;
    font-size: 16px;
    line-height: 1;
    -webkit-appearance: none;
    width: 268px;
  margin-top:-24% ;
}
.color select{
    border-radius: 0;
    background: transparent;
    height: 44px;
    border: 0;
    font-size: 16px;
    line-height: 1;
    -webkit-appearance: none;
    width: 268px;
  margin-top:-14% ;
}
.color {
    margin-left:-366px ;
  margin-top:5% ;
    height: 42px;
    line-height: 42px;
    color: #777777;
    font-size: 17px;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    background: url(http://wpandyou.ru/wp-content/uploads/2013/01/down_arrow_select.jpg) no-repeat right rgb(255, 255, 255);
    width: 240px;
   }
   .components select{
  border-radius: 0;
    background: transparent;
    height: 44px;
    border: 0;
    font-size: 16px;
    line-height: 1;
    -webkit-appearance: none;
    width: 268px;
  margin-top:-14% ;
}
.components {
    margin-left:-366px ;
  margin-top:5% ;
    border: 1px solid #CCC;
    overflow: hidden;
    height: 34px;
    background: url(http://wpandyou.ru/wp-content/uploads/2013/01/down_arrow_select.jpg) no-repeat right rgb(255, 255, 255);
    width: 240px;
   }
   .search-result{
     height: 100px;
    background: white;
    overflow: hidden;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    border-bottom: 3px dashed black;
}
.new-select-style-wpandyou {
    margin-left:-366px ;
  margin-top:-100px ;
    border: 1px solid #CCC;
    overflow: hidden;
    height: 34px;
    background: url(http://wpandyou.ru/wp-content/uploads/2013/01/down_arrow_select.jpg) no-repeat right rgb(255, 255, 255);
    width: 240px;
   }
</style>
