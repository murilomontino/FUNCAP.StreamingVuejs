<template>
  <form class="" action="index.html">
          <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" class="form-control mb-0" id="exampleInputEmail2" placeholder="Enter Full Name" autocomplete="off" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                    <label>E-mail</label>
                    <input type="email" class="form-control mb-0" id="exampleInputEmail3" placeholder="Enter email" autocomplete="off" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control mb-0" id="exampleInputEmail2" placeholder="First Name" autocomplete="off" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control mb-0" id="exampleInputEmail3" placeholder="Last Name" autocomplete="off" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control mb-0" id="exampleInputPassword2" placeholder="Password" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                    <label>Repeat Password</label>
                    <input type="password" class="form-control mb-0" id="exampleInputPassword2" placeholder="Password" required>
                </div>
              </div>

          </div>
          <div class="custom-control custom-radio my-2">
              <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
              <label class="custom-control-label" for="customRadio1">Premium-$39 / 3 Months
                with a 5 day free trial</label>
            </div>
            <div class="custom-control custom-radio my-2">
              <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
              <label class="custom-control-label" for="customRadio2"> Basic- $19 / 1 Month</label>
            </div>
            <div class="custom-control custom-radio my-2">
              <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input">
              <label class="custom-control-label" for="customRadio3">Free-Free</label>
            </div>

          <button type="submit" class="btn btn-hover btn-hover my-2">Sign Up</button>

        </form>
</template>

<script>

export default {
  name: 'SignUp1Form'

}
</script>
<style scoped>
.btn-hover { background: var(--iq-primary-hover); border: 1px solid var(--iq-primary-hover); color: var(--iq-white); transition: color 0.3s ease; display: inline-block; vertical-align: middle; -webkit-transform: perspective(1px) translateZ(0); transform: perspective(1px) translateZ(0); box-shadow: 0 0 1px rgba(0, 0, 0, 0); position: relative; border-radius: 5px; }
</style>
