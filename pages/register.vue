<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">Register!</h2>

          <!--          <Notification :message="error" v-if="error"/>-->

          <form method="post" @submit.prevent="register">
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input
                    type="text"
                    class="input"
                    name="name"
                    v-model="form.name"
                >
                <span class="text-danger" v-if="errors.name">
                  {{ errors.name[0] }}
                </span>
              </div>
            </div>
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
              <button type="submit" class="button is-dark is-fullwidth">Register</button>
            </div>
          </form>

          <div class="has-text-centered" style="margin-top: 20px">
            Already got an account?
            <nuxt-link to="/login">Login</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Notification from '~/components/Notification'
import User from "~/plugins/User";

export default {
  components: {
    Notification,
  },

  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
      },
      errors: []
    }
  },

  methods: {
    register() {
      User.register(this.form)
          .then(() => {
            this.$router.push('/login')
          })
          .catch(error => {
            if (error.response.status === 422) {
              this.errors = error.response.data.errors
            }
          })
      // try {
      //   await this.$axios.post('register', {
      //     username: this.username,
      //     email: this.email,
      //     password: this.password
      //   })
      //
      //   await this.$auth.loginWith('local', {
      //     data: {
      //       email: this.email,
      //       password: this.password
      //     },
      //   })
      //
      //   this.$router.push('/')
      // } catch (e) {
      //   this.error = e.response.data.message
      // }
    }
  }
}
</script>
