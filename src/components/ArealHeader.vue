<template>
  <div>
    <div class="desktop-header">
      <a
        class="logo"
        href="/"
      >
        <img src="https://ru.inshaker.com/assets/common/logo-4bfdb85cfd6f55be4eeedd5b57c908c01806a711f88622a932aad9abb34fce11.svg"></a>
      <div class="links">
        <a
          v-for="(link,index) in links"
          :key="index"
          class="link"
          :href="link.href"
        > {{ link.name }}</a>
      </div>
    </div>
    <div class="filter">
      <p
        v-for="(val,index) in filter"
        :key="index"
        class="selected"
      >
        {{ val }}
      </p>
    </div>
    <noscript>
      <strong>
      We're sorry but this project doesn't work properly without JavaScript enabled.
      Please enable it to continue.
      </strong>
    </noscript>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      filter: [
        'Алкогольность:',
        'Цвет:',
        'Состав:',
      ],
      links: [
        {
          href: 'https://ru.inshaker.com/',
          name: 'Тренды',
        },
        {
          href: 'https://ru.inshaker.com/missions',
          name: 'Миссии',
        },
        {
          href: 'https://ru.inshaker.com/user_barmen',
          name: 'Бармены',
        },
        {
          href: 'https://ru.inshaker.com/cocktails',
          name: 'Тренды',
        },
        {
          href: 'https://ru.inshaker.com/goods',
          name: 'Миссии',
        },
      ],
    };
  },
};
</script>
<style>
  .filter {
    justify-content: space-around;
    border-radius: 10px;
    width: 20.98%;
    height: 300px;
    margin-left: 0.4%;
    margin-top: 0.5%;
    background: white;
    font-size: 18px;
    position: fixed;

  }

  .selected {
    font: 15px/27px "Times New Roman";
    margin-top: 12%;
    margin-left: 7%;
  }

  .link {
    font-size: 18px;
    font-weight: bold;
    color: white;
    text-shadow: 0 1px 0 #000, 0 1px 0 rgba(0, 0, 0, 0.5);
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
</style>
