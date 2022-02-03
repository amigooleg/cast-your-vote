
<template>

<form @submit.prevent="submitHandler" class="card auth-card">
  <div class="card-content">
    <Loader v-if="loading "/>
    <span class="card-title">Авторизация</span>
    <div class="input-field">
      <input
          id="email"
          type="text"

          v-model.trim="email"
          :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
      >
      <label for="email"> Email</label>
      <small
      class="helper-text invalid"
      v-if="$v.email.$dirty && !$v.email.required"
      >Поле Email не должно быть пустым</small>
      <small
      class="helper-text invalid"
      v-else-if="$v.email.$dirty && !$v.email.email"
      >Введите корректный Email </small>

    </div>
    <div class="input-field">
      <input
          id="password"
          type="password"
          v-model.trim ="password"
          :class="{invalid:($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
      >
      <label for="password">Пароль</label>
      <small
      class="helper-text invalid"
      v-if="$v.password.$dirty && !$v.password.required"
      >Поле Password не должно быть пустым</small>
      <small
      class="helper-text invalid"
      v-else-if ="$v.password.$dirty && !$v.password.minLength"
      >Пароль должен быть {{$v.password.$params.minLength.min}} символов. Сейчас он {{password.length}}</small>

    </div>
  </div>
  <div class="card-action">
    <div>
      <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
      >
        Войти
        <i class="material-icons right">send</i>
      </button>
    </div>

    <p class="center">
      Нет аккаунта?
      <a href="/register">Зарегистрироваться</a>
    </p>
  </div>
</form>

</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators'
import messages from '@/utils/messages'
import Loader from '@/components/Loader'

export default {
  metaInfo () {
    return {
      title: 'login'
    }
  },
  name: 'login',
  data: () => ({
    email: '',
    password: '',
    louding: true
  }),
  component: {
    Loader
  },
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  mounted () {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message])
    }
  },

  methods: {

    async submitHandler () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        email: this.email,
        password: this.password
      }
      try {
        await this.$store.dispatch('login', formData)
        this.$router.push('/history')
      } catch (e) {
        console.log('что-то  пошло не так')
      }
      // await this.$store.dispath('login', formData)
      // console.log(formData)
      // louding = "false"
    }
  }

}
</script >
