<template>
  <div>
    <header>	
<div class="desktop-header"><a class="logo" href="/">
  <img src="https://ru.inshaker.com/assets/common/logo-4bfdb85cfd6f55be4eeedd5b57c908c01806a711f88622a932aad9abb34fce11.svg"></a>
<a class="link" href="/">Тренды</a>
    <a class="link" href="/missions">Миссии</a>
    <a class="link" href="/user_barmen">Бармены</a>
    <a class="link" href="/cocktails">Коктейли</a>
    <a class="link" href="/goods">Ингредиенты</a></div> </header>
    <noscript>
      <strong>
        We're sorry but this project doesn't work properly without JavaScript enabled.
        Please enable it to continue.
      </strong>
    </noscript><div class="filter"></div>
   
  </div>
</template>
<script>
  module.exports= {
  data:function () {
    return {
    };
  },
};
  </script>
  <style>
.search-input {
    flex-grow: 1;
}
.filter {
    width: 26.98%;
    height: 570px;
    margin-left:-35%;
    margin-top:-1%;
    background: #ccc;
    font-size: 18px;
}
.link {
    font-size: 18px;
    font-weight: bold;
    color: white;
    text-shadow: 0 1px 0 #000, 0 1px 0 rgba(0,0,0,0.5);
    margin: 0 10px;
    padding: 10px;
}
.links {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 24px;
}
.logo {
    margin-left: 25px;
    bottom: 0;
    display: flex;
    align-items: center;
}
body{
  margin: 0;
    min-width: 960px;
    min-height: 100px;
    position: relative;
    background: #121212 center top;
    color: #000;
  background-image: url("https://ru.inshaker.com/assets/common/body-bg-bf9928ee232a5a485e2d840111ee4bb2b7affb0509ecc283e6c81d4956ca3038.jpg");
}
.desktop-header {
    z-index: 500;
    width: 165%;
    height: 70px;
    margin: -1.2% -1.6% 0px;
    background: #8B0000;
    display: flex;
    align-items: center;
    font-size: 18px;
}
a { 
    text-decoration: none; /* Отменяем подчеркивание у ссылки */
   }
  </style>