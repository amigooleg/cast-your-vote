<template>
<div class="#f3e5f5 purple lighten-5 empty-layout">
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
