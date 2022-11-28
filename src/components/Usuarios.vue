<template>

  <section>
    <div class="jumbotron">
      <h2>Usuarios</h2>
      <hr>
      <hr>
      <br>



      <button class="btn btn-success my-3 mr-2" @click="getUsuarios()">GET USERS</button>

      <div v-if="this.$store.requestResolved == true && this.$store.usuarios.length == 0">No se encontraron usuarios
      </div>
      <div v-else>
        <div class="media alert alert-info" v-for="(usuario, index) in this.$store.state.usuarios" :key="index">

          <div class="media-body">
            <h4 class="mt-0"><u>Usuario {{ index + 1 }} - ID: {{ usuario.id }}</u></h4>
            <br>
            <p>Nombre: <b>{{ usuario.nombre }}</b></p>
            <p>Email: <i>{{ usuario.email }}</i></p>
            <p>Edad: {{ usuario.edad }}</p>

          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>

export default {
  name: 'src-components-usuarios',
  props: [],
  mounted() {
  },
  data() {
    return {
    }
  },
  methods: {



  },
  computed: {

  }
}


</script>

<style scoped lang="css">
.jumbotron {
  background-color: navy;
  color: white;
}

hr {
  background-color: #bbb;
}

pre {
  color: white;
}
</style>
