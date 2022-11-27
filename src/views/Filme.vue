<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="filmes">
    <div class="container" v-if="loading">
      <Loading />
    </div>
    <div v-else class="container">
      <h2>{{ filme.nome }}</h2>
      <img :src="filme.foto" :alt="filme.nome" />

      <h3>Sinopse</h3>
      <p>{{ filme.sinopse }}</p>

      <div class="botoes">
        <router-link to="/">Ver mais filmes</router-link>
        <button>Salvar</button>
        <button>Trailer</button>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/service/api.js";
import Loading from "@/components/Loading.vue";
export default {
  props: ["id"],
  components: { Loading },
  data() {
    return {
      filme: {},
      loading: true,
    };
  },
  async created() {
    const response = await api.get(`?api=filmes/${this.id}`);
    this.filme = response.data;
    this.loading = false;
  },
};
</script>
