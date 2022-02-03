<template>

  <form class="card auth-card" @submit.prevent="submitHandler">
  <div class="card-content">
    <Loader v-if="loading "/>
    <span class="card-title">Зарегистрируйтесь</span>
  <div class="input-field">
      <input
          id="email"
          type="text"
          v-model.trim="email"

          :class="{invalid:($v.email.$dirty && !$v.email.required || !$v.email.email)}"

      >
      <label for="email">Email</label>
      <small
       class="helper-text invalid"
       v-if="$v.email.$dirty && !$v.email.required"
       >поле email не должно быть пустым</small>
        <small
       class="helper-text invalid"
       v-else-if="$v.email.$dirty && !$v.email.email"
       >введите корректный email</small>
    </div>
    <div class="input-field">
      <input
          id="password"
          type="password"
          v-model.trim="password"
          :class="{invalid:($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
      >
      <label for="password">Пароль</label>
      <small
       class="helper-text invalid"
       v-if="$v.password.$dirty && !$v.password.required"
       >введите пароль</small>
       <small
       class="helper-text invalid"
       v-else-if="$v.password.$dirty && !$v.password.minLength"
       >пароль должен быть {{$v.password.$params.minLength.min}} символов
       сeйчас он {{password.length}}</small>
    </div>
    <div class="input-field">
      <input
          id="name"
          type="text"
          v-model.trim="name"
          :class="{invalid:($v.name.$dirty && !$v.name.required)}"
      >
      <label for="name">Имя</label>
      <small
      class="helper-text invalid"
      v-if="$v.name.$dirty && !$v.name.required"
      >введите ваше имя</small>
    </div>,
     <div class="input-field">
      <input
          id="surname"
          type="text"
          v-model.trim="surname"
          :class="{invalid:($v.surname.$dirty && !$v.surname.required)}"
      >
      <label for="surname">Фамилия</label>
      <small
      class="helper-text invalid"
      v-if="$v.surname.$dirty && !$v.surname.required"
      >введите вашу фамилию</small>
    </div>
    <p>
      <label>
        <input type="checkbox" v-model="agree" />
        <span>С правилами согласен</span>
      </label>
    </p>
  </div>
  <div class="card-action">
    <div>
      <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
      >
        Зарегистрироваться
        <i class="material-icons right">send</i>
      </button>
    </div>

    <p class="center">
      Уже есть аккаунт?
      <router-link to="/login">Войти!</router-link>
    </p>
  </div>
</form>
</template>
<script>
import { email, required, minLength } from 'vuelidate/lib/validators'
import messages from '@/utils/messages'
export default {
  metaInfo () {
    return {
      title: 'Register'
    }
  },
  name: 'register',

  data: () => ({
    email: '',
    password: '',
    name: '',
    surname: '',
    agree: false
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
    name: { required },
    surname: { required },
    agree: { checcked: v => v }
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
      // eslint-disable-next-line no-unused-vars
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name,
        surname: this.surname
      }
      // console.log(formData)
      try {
        await this.$store.dispatch('register', formData)
        this.$message('Пользователь успешно зарегистрирован')
        this.$router.push('/vot')
      // eslint-disable-next-line no-empty
      } catch (e) { }
    }
  }

}
</script>
