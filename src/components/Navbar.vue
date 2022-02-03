<template>

    <div id="nav">

      <router-link to="/">Кандидаты в призиденты</router-link> |
      <router-link to="/register">Проголосовать</router-link>|
      <router-link to="/login">History</router-link>|
      <router-link to="/test">Test</router-link>
       <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" @click.prevent="logout">
                exit
              </a>
            </li>
    </div>
</template>
<script>
export default {
  methods: {
    async logout () {
      await this.$store.dispatch('logout')
      this.$router.push('/login?message=logout')
    }
  }
}

</script>
