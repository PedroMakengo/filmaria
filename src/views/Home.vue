<template>
  <div id="home">
    <Loading v-if="loading" />
    <div v-else class="lista-filmes">
      <article class="file" v-for="(filme, index) in filmes" :key="index">
        <strong>{{ filme.nome }}</strong>
        <img :src="filme.foto" :alt="filme.nome" />
        <router-link :to="`/filme/${filme.id}`">Acessar</router-link>
      </article>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";
import api from "../service/api.js";
export default {
  name: "HomeView",
  components: {
    Loading,
  },
  data() {
    return {
      filmes: [],
      loading: true,
    };
  },

  async created() {
    const response = await api.get("?api=filmes");
    this.filmes = await response.data;
    this.loading = false;
  },
};
</script>

<style lang="scss" scoped>
#home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  .lista-filmes {
    margin: 15px;

    strong {
      padding-bottom: 15px;
      font-size: 20px;
    }

    article {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #fff;
      margin: 15px;
      padding: 15px;
      border-radius: 0.5px;

      a {
        text-decoration: none;
        color: #fff;
        font-size: 20px;
        font-weight: 300;
        background-color: brown;
        width: 100%;
        height: 40px;
        margin-top: -30px;

        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        border-bottom-left-radius: 0.5px;
      }
    }
  }
}
</style>
