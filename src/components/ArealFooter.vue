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
                  <a href="/private_policy">Правила</a>
                  <a href="/o-proekte">О проекте</a>
                  <a class="desktop" href="mailto:editorial@inshaker.com">Контакты</a>
            </div>
            <div class="languages desktop">
                    <div class="group">
                       <div class="title">Выбор языка</div>
                       <a class="lang-link" v-for="language in languages"> {{language.name}}</a>
                    </div>
            </div>
      </div>
  </div>
</template>
<script>
module.exports = {
  data() {
    return {
      languages: [
        {
          name: 'English UK' },
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
