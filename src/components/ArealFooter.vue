<template>
  <div id="footer">
    <div class="groups">
      <div class="group desktop">
        <div class="title">Главное</div>
        <a v-for="(link,index) in links" :key="index" :href="link.href"> {{link.name}}</a>
      </div>
      <div class="group">
        <div class="title">Полезное</div>
        <a v-for="(link,index) in links1" :key="index" :href="link.href"> {{link.name}}</a>
      </div>
      <div class="group">
        <div class="title">Inshaker</div>
        <a v-for="(ins, index) in inshaker" :key="index" :href="ins.href" :class="ins.class">{{ins.name}}</a>
      </div>
      <div class="languages desktop">
        <div class="group">
          <div class="title">Выбор языка</div>
          <a class="lang-link" v-for="(language,index) in languages" :key="index"> {{language.name}}</a>
        </div>
      </div>
      </div>
  </div>
</template>
<script>
module.exports = {
  data() {
    return {
      title:[
        'Полезное',
        'Inshaker'
      ],
      inshaker:[
        {
          href:'http://localhost:8080/private_policy',
          name:'Правила',
          class:''
        },
        {
          href:'http://localhost:8080/o-proekte',
          name:'О проекте',
          class:'desktop'
        },
        {
          href:'mailto:editorial@inshaker.com',
          name:'Контакты',
          class:''
        },
      ],
      languages: [
        { name: 'English UK' },
        {
          name: 'Deutsch' },
        {
          name: 'Español' },
        {
          name: 'English US' },
        {
          name: 'Français' },
          {
          name: 'Українська' },
          {
          name: 'Русский' },
          {
          name: 'Italiano' },
      ],
      links1: [
        { href:'https://ru.inshaker.com/collections',
          name: 'Коллекции коктейлей' },
        { href:'https://ru.inshaker.com/ratings',
          name: 'Рейтинг коктейлей' },
        { href:'https://ru.inshaker.com/barmen',
          name: 'Звёзды' },
        { href:'https://ru.inshaker.com/bounties/5',
          name: 'Премия Inshaker' },
      ],
      links: [
        { href:'https://ru.inshaker.com/',
          name: 'Тренды' },
        { href:'https://ru.inshaker.com/missions',
          name: 'Миссии' },
        { href:'https://ru.inshaker.com/user_barmen',
          name: 'Бармены' },
        { href:'https://ru.inshaker.com/cocktails',
          name: 'Тренды' },
        { href:'https://ru.inshaker.com/goods',
          name: 'Миссии' }
      ]
    };
  }
}
</script>
