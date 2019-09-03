<template class="template">
    <div class="center">
      <div class="idkname"
        v-for="(item, index) in books"
        :key="index"
      >
      <div class="main">
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
                <div class="main1">
              <img class="size"
                  :src="'https://ru.inshaker.com' + item.src"
                  :height="300"
                /><div class="name-main"> <span>{{item.name}}</span></div>
                <div class="noname"></div>
                </div>
          </section>
      </div>
      </div>
    </div>
</template>

<script>
module.exports = {
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
  methods: {
    getData() {
      console.log('getData');
      return this.$store.dispatch('getData');
    },
  },
};
</script>

<style>
.idkname{
  background: #f00;
  height: 0px;
}
.name-main{
 margin-top:20%;
 margin-left:auto;
 
}
hr {
  border:none;
  border-top:2px dotted #f00;
  color:#fff;
  background-color:#fff;
  height:1px;
  
}
.noname {
    border-bottom: 3px dashed #eee;
    margin-top: 100%;
    width:1200px;
    margin-left: -70%;
    
}

.center{
  background: white;
  width: 65%;
  height: 100%;
  margin-top: 6.86%;
  margin-left: 22%;
}
.main1{
  margin-top: 29%;
  margin-left: -43%;
  background: white;
}
.group, header, section, aside, footer {
    margin: 0 1.5% 24px 1.5%;
  display: list-item inline;
  font: 17px/27px "Source Code Pro", Inconsolata, "Lucida Console",
  Terminal, "Courier New", Courier;
  text-align: center;
  
}

.name {
  font: 13px/27px "Times New Roman";
  line-height:29px;
  text-align: center;
  margin-top: -19%;
  margin-left: 91%;
    width: 140px;
    height:35px;
}
.application--wrap{
  background-image: url("https://ru.inshaker.com/assets/common/body-bg-bf9928ee232a5a485e2d840111ee4bb2b7affb0509ecc283e6c81d4956ca3038.jpg");
  height: auto;
  background-repeat: repeat-y;
}
.main{
  height: 1%;
  margin-top:122%;
  margin-left: -18%;
background-attachment: blue;

}
.main1{
  width: 120px;
  margin-top: -370%;
  height: 300px;
  margin-left: -15%;
  background: white;
}
section {
  background-attachment: blue;
  margin-top: -42%;
    float: left;
    width: 260px;

}
.aside {
    margin-top: -145%;
    float: right;
    margin-left:0%;
    height:100px;
    width: 900px;
    border-radius: 80px;
}
footer {
  clear: both;
  margin-bottom: 0;
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
    left: 89.5%;
    top: 20%;
    font-size: 34px;
    content: '  +  ';
    color: #ccc;
}
.cocktail-item-good:first-child:before {
  left: 83%;
    content: '=';
}
.image{
  width: 100px;
  height: auto;
  position: left;
    display: block;
    margin-left:110% ;
    margin-top:10% ;
    max-width: 100%;
    max-height: 310px;
    min-width: 20px;
    min-height: 20px;
    border-radius: 10px;
    background: #ccc;
}
.size{
  display: block;
  margin-top:-95%;
  margin-left:22%;
    max-width: 100%;
    max-height: 310px;
    min-width: 20px;
    min-height: 20px;
    border-radius: 6px;
    background: #ccc;
    width: 100px;
}
.search-results{
  width: 100px;
  
  margin-top:110%;
  background: #ccc;
}
</style>
