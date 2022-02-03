<template >
<div class="app-main-layout">
  <div id="nav">
      <router-link to="/">Кандидаты в призиденты</router-link> |
      <router-link to="/register">Проголосовать</router-link>|
      <router-link to="/login">History</router-link>
      <!-- <router-link to="/test">Test</router-link> -->
    </div>
<router-view/>
</div>
</template>
<script>
import messages from '@/utils/messages'
export default {
  computed: {
    error () {
      return this.$store.getters.error
    }

  },
  watch: {
    error (fbError) {
      console.log(fbError)
      this.$error(messages[fbError.code] || 'Что-то пошло не ак')
    }
  }
}
</script>
