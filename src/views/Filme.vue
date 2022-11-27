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
        <button @click="salvarFilme">Salvar</button>
        <button>
          <a
            :href="`https://youtube.com/results?search_query=${filme.nome}`"
            target="blank"
            >Trailer</a
          >
        </button>
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
      salvos: [],
    };
  },
  async created() {
    const response = await api.get(`?api=filmes/${this.id}`);
    this.filme = response.data;
    this.loading = false;
  },
  methods: {
    salvarFilme() {
      const minhaLista = localStorage.getItem("myFilme");

      let filmes = JSON.parse(minhaLista) || [];

      //Tiver um filme com id igual ao que está tentando adicionar devolve true
      const hasFilme = filmes.some(filme => filme.id == this.filme.id);

      if (hasFilme) return;

      filmes.push(this.filme);

      //Salvar no localStorage
      localStorage.setItem("myFilme", JSON.stringify(filmes));
      alert("Filme salvo com sucesso");
    },
  },
};
</script>

<style lang="scss" scoped>
.filmes {
  .container {
    width: 70%;
    background: #fff;
    padding: 1rem;

    h2 {
      padding-bottom: 1rem;
    }
    img {
      width: 100%;
      margin-bottom: 1rem;
    }

    h3 {
      font-weight: 300;
      margin-bottom: 1rem;
    }

    .botoes {
      margin-top: 1rem;
      display: flex;
      width: 60%;
      justify-content: space-between;

      a,
      button {
        width: 32%;
        height: 6vh;

        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

        border: 0;
        text-decoration: none;
        background: #ccc;

        color: #000;
        transition: background 0.3s;

        &:hover {
          background: brown;
          color: white;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
