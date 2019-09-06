<template>
    <div class="filters">
       <div class="new-select-style-wpandyou">
           <select :value="selected" @change="updateSelect">
                <option v-for="vol in vols">{{vol}}</option>
          </select>
       </div>
       <div class="color">
            <select :value="color" @change="updateColor">
                <option v-for="color in colors">{{color}}</option>
            </select>
        </div>
        <div class="color">
            <select :value="components" @change="updateComponents">
                <option v-for="comp in component">{{comp}}</option>
            </select>
        </div>
        <div class="button1">
              <button class="b1"  v-on:click="clearSelect">Очистить</button>
        </div>
     </div>
</template>

<script>
module.exports = {
  data() {
    return {
      vols: [
        'Любые',
        'kek',
        'Безалкогольный',
        'arbidol',
      ],
      colors: [
        'Любые',
        'black',
        'white',
        'arbidol',
      ],
      component: [
        'Любые',
        'Лед в кубиках',
        'Водка',
        'Серебряная текила',
        'Лаймовый сок',
        'Бурбон',
        'Абсент',
        'Энергетик',
        'Коктейльная вишня красная',
        'Ананас',
      ],
      selected() {
        this.$store.state.vol;
      },
      color() {
        this.$store.state.color;
      },
      components() {
        this.$store.state.comp;
      },

    };
  },
  methods: {
    updateSelect(e) {
      this.$store.commit('updateSelect', e.target.value);
    },
    clearSelect() {
      alert('ну и');
      this.$store.commit('clearSelect');
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
  margin-left:27%;
  margin-top:8.7%;
}
.b1 {
    background: -moz-linear-gradient(rgb(227, 255, 69), #EBFFFF);
    background: -webkit-gradient(linear, 0 0, 0 100%, from(white), to(white));
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00BBD6', endColorstr='#EBFFFF');
    padding: 3px 7px;
    color: #333;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 50px;
    border: 1px solid #666;
   }
.button1{
  width: 150px;
  font: 18px/27px "Times New Roman";
  line-height:29px;
  text-align: center;
  height: 154px;
  margin-left:-249%;
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
  margin-top:22% ;
    height: 42px;
    border: 1px solid #CCC;
    overflow: hidden;
    height: 34px;
    background: url(http://wpandyou.ru/wp-content/uploads/2013/01/down_arrow_select.jpg) no-repeat right rgb(255, 255, 255);
    width: 120%;
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
    width: 120%;
   }
</style>
