<template class="template">
    <div class="center">
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
      <div
        v-for="(item, index) in books"
        :key="index"
      >
      <div class="main">
        <div class="search-results">
            <div class="aside">
              <a>
                <div class="cocktail-item-good"
                  v-for="(part) in item.parts"
                  :key="part.part"
                >
                <img class="image"
                  :src="'https://ru.inshaker.com' + part.src"
                  :title="part.name"
                  :width="78"
                  :height="78"
                  />
                     <div class="name"><br><span>{{part.name}}</span><br>
                     <div class="line"></div>
                    </div> 
                </div>
             </a>
     </div>
              <section>
                <div class="main">
              <img class="size"
                  :src="'https://ru.inshaker.com' + item.src"
                  :height="300"
                  :width= "95"
                /> <br> <span>{{item.name}}</span>
                </div>
          </section>
      </div>
      </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapState } from 'vuex';
export default {
  data() {
    return {
      selected:null,
      color:null
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
    },
    books() {
        return this.$store.getters.list
    },
    getPagination() {
      return [50, { text: 'All', value: -1 }];
    },
  },
  methods: {
    updateSelect (e) {
    this.$store.commit('updateSelect', e.target.value)
  },
  updateColor (e) {
    this.$store.commit('updateColor', e.target.value)
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
.lol {
    border-bottom: 3px dashed #eee;
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
  margin-top:-14% ;
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
    border: 1px solid #CCC;
    overflow: hidden;
    height: 34px;
    background: url(http://wpandyou.ru/wp-content/uploads/2013/01/down_arrow_select.jpg) no-repeat right rgb(255, 255, 255);
    width: 240px;
   }
   .search-result{
    background: white;
    overflow: hidden;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    border-bottom: 3px dashed black;
}
.new-select-style-wpandyou {
    margin-left:-366px ;
  margin-top:0% ;
    border: 1px solid #CCC;
    overflow: hidden;
    height: 34px;
    background: url(http://wpandyou.ru/wp-content/uploads/2013/01/down_arrow_select.jpg) no-repeat right rgb(255, 255, 255);
    width: 240px;
   }
.center{
  background: white;
  width: 65%;
  margin-top: -29.86%;
  margin-left: 23%;
}
.group, header, section, aside, footer {
    margin: 0 1.5% 24px 1.5%;
  display: list-item inline;
  font: 17px/27px "Source Code Pro", Inconsolata, "Lucida Console",
  Terminal, "Courier New", Courier;
  text-align: center;
}
.line {
    margin-left: -35%;
}
.name {
  font: 13px/27px "Times New Roman";
  line-height:29px;
  text-align: center;
  margin-top: -19%;
  margin-left: -21%;
    width: 140px;
    height:35px;
}
.application--wrap{
  background-image: url("https://ru.inshaker.com/assets/common/body-bg-bf9928ee232a5a485e2d840111ee4bb2b7affb0509ecc283e6c81d4956ca3038.jpg");
  height: 100%;
}
.main{
  margin-top: -8%;
  
}
section {
  margin-top: -40%;
    float: left;
    width: 260px;
    height:400px;
}
.aside {
    margin-top: 2.1%;
    float: right;
    margin-left:60%;
    height:500px;
    width: 900px;
    border-radius: 80px;
}
footer {
  clear: both;
  margin-bottom: 0;
}
.filter {
  padding-left: 20px;
}
.cocktail-item-good {
  margin-top: 30px;
  
    position: relative;
    display: inline-block;
    vertical-align: top;
    height: auto;
}
.cocktail-item-good:before {
    position: absolute;
    left: -30%;
    top: 20%;
    font-size: 34px;
    content: '  +  ';
    color: #ccc;
}
.cocktail-item-good:first-child:before {
  left: -34%;
    content: '=';
}
.image{
  height: auto;
  position: left;
    display: block;
    margin-left:-0% ;
    margin-top:0% ;
    max-width: 100%;
    max-height: 310px;
    min-width: 20px;
    min-height: 20px;
    border-radius: 10px;
}
.size{
  display: block;
  margin-left:30%;
    max-width: 100%;
    max-height: 310px;
    min-width: 20px;
    min-height: 20px;
    border-radius: 6px;
}

</style>
