<template>
<form action="index.html">
  <b-container class='w-100'>

    <b-row class="form-group">
      <label>CPF</label>
      <input type="text" class="form-control mb-0" id="exampleInputEmail2" placeholder="Enter Full Name" autocomplete="off" required>
    </b-row>

    <b-row class="form-group">
      <label>Email</label>
      <input type="email" class="form-control mb-0" id="exampleInputEmail3" placeholder="Enter email" autocomplete="off" required>
    </b-row>
    <b-row>
    <b-col class="form-group">
      <label>Nome</label>
      <input type="text" class="form-control mb-0" id="exampleInputEmail2" placeholder="First Name" autocomplete="off" required>
    </b-col>
    <b-col class="form-group">
      <label>Sobrenome</label>
      <input type="text" class="form-control mb-0" id="exampleInputEmail3" placeholder="Last Name" autocomplete="off" required>
    </b-col>
    </b-row>

    <b-row class="form-group">
      <label>Senha</label>
      <input type="password" class="form-control mb-0" id="exampleInputPassword2" placeholder="Senha" required>
    </b-row>
    <b-row class="form-group">
      <label>Repetir Senha</label>
      <input type="password" class="form-control mb-0" id="exampleInputPassword2" placeholder="Repetir Senha" required>
    </b-row>

  </b-container>
  <button type="submit" class="btn btn-hover btn-hover my-2">Cadastrar</button>

</form>
</template>

<script>
export default {
  name: "SignUp1Form",
  components: {

  }

}
</script>

<style scoped>
.form-group label {
  color: #fff;
}

.btn-hover {
  background: var(--iq-primary-hover);
  border: 1px solid var(--iq-primary-hover);
  color: var(--iq-white);
  transition: color 0.3s ease;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  border-radius: 5px;
}
</style>
