<template>
<div>
    <img src='https://ru.inshaker.com/uploads/billboard/promo/53/1565109005-banner_premia.jpg' alt="альтернативный текст" width="100%">
<div class="desktop-header desktop"><a class="logo" href="/">
  <img src="https://ru.inshaker.com/assets/common/logo-4bfdb85cfd6f55be4eeedd5b57c908c01806a711f88622a932aad9abb34fce11.svg"></a>
  <div class="links"><a class="link" href="/">Тренды</a>
    <a class="link" href="/missions">Миссии</a>
    <a class="link" href="/user_barmen">Бармены</a>
    <a class="link" href="/cocktails">Коктейли</a>
    <a class="link" href="/goods">Ингредиенты</a>
    </div> </div>
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
  <<style>
  .center {
       width: 1050px; /* Ширина элемента в пикселах */
       padding: 10px; /* Поля вокруг текста */
       margin: auto; /* Выравниваем по центру */
       background: #000;
      }
      .search-input {
    margin-bottom: 12px;
    border: 1px solid #d9d9d9;
    border-radius: 3px;
    background: white;
    padding: 4px 16px;
    box-sizing: border-box;
    font-size: 30px;
}
.search-input {
    flex-grow: 1;
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
.filter {
  z-index: 500;
    width: 16.98%;
    height: 570px;
    margin: -25px 29px 0px;
    background: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
}
body{
  margin: 0;
    min-width: 960px;
    min-height: 100%;
    position: relative;
    background: #121212 center top;
    color: #000;
  background-image: url("https://ru.inshaker.com/assets/common/body-bg-bf9928ee232a5a485e2d840111ee4bb2b7affb0509ecc283e6c81d4956ca3038.jpg");
}
.desktop-header {
    z-index: 500;
    width: 100%;
    height: 70px;
    margin: -10px 0 0px;
    background: #8B0000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
}
a { 
    text-decoration: none; /* Отменяем подчеркивание у ссылки */
   }
  </style>