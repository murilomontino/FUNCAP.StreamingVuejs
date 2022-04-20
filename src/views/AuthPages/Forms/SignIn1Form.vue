<template>
<ValidationObserver ref="form">
  <form class="mt-4" novalidate >
    <ValidationProvider vid="email" name="CPF" :rules="{ required: true, regex: /(\d{3}\.\d{3}\.\d{3}\-\d{2}) | (\d{2}\.\d{3}\.\d{3}\/0001-\d{2}) / }" v-slot="{ errors }">
      <div class="form-group">
        <input type="text" v-mask="['###.###.###-##','##.###.###/####-##']" masked="true" :class="
              'form-control mb-0' + (errors.length > 0 ? ' is-invalid' : '')
            " id="cpfInput" aria-describedby="emailHelp" v-model="user.cpf" placeholder="CPF/CNPJ" required />
        <div class="invalid-feedback">
          <span>CPF/CNPJ inválido !!</span>
        </div>
      </div>
    </ValidationProvider>
    <ValidationProvider vid="password" name="Password" rules="required" v-slot="{ errors }">
      <div class="form-group">
        <input type="password" :class="
              'form-control mb-0' + (errors.length > 0 ? ' is-invalid' : '')
            " id="passwordInput" v-model="user.password" placeholder="Senha" required />
        <div class="invalid-feedback">
          <span>Senha Incorreta!</span>
        </div>
      </div>
    </ValidationProvider>
    <div class="sign-info">
      <button type="submit" class="btn btn-hover" v-on:click.prevent="handleSubmit">Entrar</button>
      <p>{{this.info}}</p>
    </div>
  </form>
</ValidationObserver>
</template>

<script>
import { mapActions } from "vuex"

export default {
  name: "SignIn1Form",
  data: () => ({
    user: {
      cpf: "",
      password: ""
    },
    info: ""
  }),
  methods: {
    ...mapActions("Auth", ["ActionDoLogin"]),
    handleSubmit () {
      this.ActionDoLogin({ user: this.user })
    }
  }
}
</script>
