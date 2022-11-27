<template>
  <div id="meus-filmes">
    <h1>Meus filmes</h1>
    <span v-if="filmes.length <= 0">Você não possui nenhum filme salvo :(</span>

    <ul>
      <li v-for="(filme, index) in filmes" :key="index">
        <span>{{ filme.nome }}</span>
        <div>
          <router-link :to="`/filme/${filme.id}`">Ver detalhes</router-link>
          <button @click="excluir(filme.id)">Excluir</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filmes: [],
    };
  },

  async created() {
    const minhaLista = localStorage.getItem("myFilme");
    this.filmes = JSON.parse(minhaLista) || [];
  },

  methods: {
    excluir(id) {
      let filtroFilmes = this.filmes.filter(filme => filme.id !== id);

      return (this.filmes = filtroFilmes);
    },
  },
  watch: {
    filmes() {
      localStorage.setItem("myFilme", JSON.stringify(this.filmes));
    },
  },
};
</script>

<style lang="scss" scoped>
#meus-filmes {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;

  ul {
    padding: 0;
    margin-top: 2rem;

    li {
      padding: 0;
      list-style: none;
      min-width: 600px;
      margin-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        font-size: 25px;
      }
      a,
      button {
        margin-left: 1rem;
        background: #ccc;
        border: 0;
        padding: 10px;

        color: #000;
        text-decoration: none;
      }
    }
  }
}
</style>
