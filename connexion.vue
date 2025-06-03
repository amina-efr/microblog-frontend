<template>
  <div class="form-page">
    <h2>Connexion</h2>
    <form @submit.prevent="seConnecter">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Mot de passe" required />
      <button type="submit">Se connecter</button>

      <p v-if="message" :class="{'confirmation': success, 'error': !success}">
        {{ message }}
      </p>

      <p v-if="token" class="token-display">
        🎟️ Token : {{ token }}
      </p>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      password: '',
      message: '',
      token: '',
      success: false
    }
  },
  methods: {
    async seConnecter() {
      this.message = ''
      this.token = ''
      this.success = false

      try {
        const response = await axios.post('http://localhost:3000/api/login', {
          email: this.email,
          password: this.password
        })

        if (response.data.token) {
          this.token = response.data.token
          this.message = "✅ Connexion réussie !"
          this.success = true
          localStorage.setItem('token', this.token)
          this.email = ''
          this.password = ''
        } else {
          this.message = "Une erreur est survenue."
        }
      } catch (err) {
        this.message = err.response?.data?.message || "Erreur lors de la connexion."
      }
    }
  }
}
</script>

<style scoped>
.form-page {
  max-width: 400px;
  margin: 100px auto;
  text-align: center;
}

input {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 0.7rem;
  border-radius: 8px;
  border: 1px solid #ccc;
}

button {
  padding: 0.7rem 2rem;
  background-color: #ff69b4;
  color: white;
  border: none;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
}

.confirmation {
  margin-top: 1rem;
  color: green;
  font-weight: bold;
}

.error {
  margin-top: 1rem;
  color: red;
  font-weight: bold;
}

.token-display {
  margin-top: 1rem;
  font-size: 0.8rem;
  color: #444;
  word-break: break-word;
}
</style>
