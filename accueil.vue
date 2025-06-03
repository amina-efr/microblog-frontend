<template>
  <div class="accueil">
    <div class="content">
      <h1 class="title">Bienvenue sur Microblog</h1>
      <div class="buttons">
        <router-link to="/connexion" class="btn">Connexion</router-link>
        <router-link to="/inscription" class="btn">Créer un compte</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.accueil {
  height: 100vh;
  background: linear-gradient(135deg, #ffc0cb, #ff69b4);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.content {
  color: white;
}

.logo {
  width: 80px;
  margin-bottom: 1rem;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.btn {
  background-color: white;
  color: #ff69b4;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
}

.btn:hover {
  background-color: #ffe4e1;
}
</style>
