<template>
  <div class="form-page">
    <h2>Inscription</h2>
    <form @submit.prevent="sInscrire">
      <input v-model="nom" type="text" placeholder="Nom" required />
      <input v-model="prenom" type="text" placeholder="Prénom" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="tel" type="tel" placeholder="Téléphone" required />
      <input v-model="password" type="password" placeholder="Mot de passe" required />
      <button type="submit">S'inscrire</button>

      <p v-if="message" :class="{'confirmation': success, 'error': !success}">
        {{ message }}
      </p>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      nom: '',
      prenom: '',
      email: '',
      tel: '',
      password: '',
      message: '',
      success: false
    }
  },
  methods: {
    async sInscrire() {
      this.message = ''
      this.success = false

      try {
        const response = await axios.post('http://localhost:3000/api/register', {
          nom: this.nom,
          prenom: this.prenom,
          email: this.email,
          tel: this.tel,
          password: this.password
        })

        this.message = response.data.message
        this.success = true
        this.nom = ''
        this.prenom = ''
        this.email = ''
        this.tel = ''
        this.password = ''
      } catch (err) {
        this.message = err.response?.data?.message || "Une erreur est survenue."
        this.success = false
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
</style>
