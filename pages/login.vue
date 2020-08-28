<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">Welcome back!</h2>

          <Notification :message="error" v-if="error"/>

          <form method="post" @submit.prevent="login">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                    type="email"
                    class="input"
                    name="email"
                    v-model="form.email"
                >
                <span class="text-danger" v-if="errors.email">
                  {{ errors.email[0] }}
                </span>
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                    type="password"
                    class="input"
                    name="password"
                    v-model="form.password"
                >
                <span class="text-danger" v-if="errors.password">
                  {{ errors.password[0] }}
                </span>
              </div>
            </div>
            <div class="control">
              <button type="submit" class="button is-dark is-fullwidth">Log In</button>
            </div>
          </form>
          <div class="has-text-centered" style="margin-top: 20px">
            <p>
              Don't have an account?
              <nuxt-link to="/register">Register</nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Notification from '~/components/Notification'
import User from "~/plugins/User";
import error from "~/layouts/error";

export default {
  components: {
    Notification,
  },

  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      errors: []
    }
  },

  methods: {
    login() {
      User.login(this.form)
          .then( () => {
            localStorage.setItem('auth', 'true');
            this.$router.push('/profile');
          })
          .catch(error => {
            if (error.response.status === 422) {
              this.errors = error.response.data.errors;
            }
          })
    }
  }
}
</script>
