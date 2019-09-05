<template>
  <div>
<div class="desktop-header"><a class="logo" href="/">
  <img src="https://ru.inshaker.com/assets/common/logo-4bfdb85cfd6f55be4eeedd5b57c908c01806a711f88622a932aad9abb34fce11.svg"></a>
<div class="links"><a class="link" href="/">Тренды</a>
    <a class="link" href="https://ru.inshaker.com/missions">Миссии</a>
    <a class="link" href="https://ru.inshaker.com/user_barmen">Бармены</a>
    <a class="link" href="https://ru.inshaker.com/cocktails">Коктейли</a>
    <a class="link" href="https://ru.inshaker.com/goods">Ингредиенты</a></div>
    </div><div class="filter"><p class="selected">Алкогольность:</p><p class="selected">Цвет:</p>
    <p class="selected">Состав:</p></div>

    <noscript>
      <strong>
        We're sorry but this project doesn't work properly without JavaScript enabled.
        Please enable it to continue.
      </strong>
    </noscript>

  </div>
</template>
<script>
module.exports = {
  data() {
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
  justify-content: space-around;
    border-radius: 80px;
    width: 20.98%;
    height: 300px;
    margin-left:0.4%;
    margin-top:0.5%;
    background: white;
    font-size: 18px;
    position: fixed;

}
.selected{
  font: 16px/27px "Times New Roman";
  margin-top: 12%;
  margin-left: 7%;
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
    margin-left: -7%;
}
.logo {
    margin-left: 25px;
    bottom: 0;
    display: flex;
    align-items: center;
}
.desktop-header {
    z-index: 500;
    width: 100%;
    height: 70px;
    margin: -10px 0 25px;
    background: #666068;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
}
body{
  background-image: url("https://ru.inshaker.com/assets/common/body-bg-bf9928ee232a5a485e2d840111ee4bb2b7affb0509ecc283e6c81d4956ca3038.jpg");
  height: auto;
  background-repeat: repeat-y;
}
  </style>
