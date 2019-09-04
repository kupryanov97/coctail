<template>
  <div>
<div class="desktop-header"><a class="logo" href="/">
  <img src="https://ru.inshaker.com/assets/common/logo-4bfdb85cfd6f55be4eeedd5b57c908c01806a711f88622a932aad9abb34fce11.svg"></a>
<div class="links"><a class="link" href="/">Тренды</a>
    <a class="link" href="/missions">Миссии</a>
    <a class="link" href="/user_barmen">Бармены</a>
    <a class="link" href="/cocktails">Коктейли</a>
    <a class="link" href="/goods">Ингредиенты</a></div>
    </div><div class="filter"></div>
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
    width: 16.98%;
    height: 420px;
    margin-left:0.9%;
    margin-top:0%;
    background: #ccc;
    font-size: 18px;
    border-radius: 10px;
    position: fixed;

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
    padding: 0 201px;
}
.logo {
    margin-left: 25px;
    bottom: 0;
    display: flex;
    align-items: center;
}
.desktop-header {
    z-index: 500;
    height: 70px;
    margin: 0 0 25px;
    background: #1b2326;
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
