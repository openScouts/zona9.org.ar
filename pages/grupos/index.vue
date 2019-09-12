<template>
  <mdb-container>
    <h1 class="h1-responsive">Grupos</h1>
    <hr />

    <!--
    <h2 class="h1-responsive font-weight-bold text-center my-5">Recent posts</h2>
    <p class="text-center w-responsive mx-auto mb-5">
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>-->

    <mdb-btn color="primary" size="md" @click="filtrar(1)">Distrito 1</mdb-btn>
    <mdb-btn color="primary" size="md" @click="filtrar(2)">Distrito 2</mdb-btn>
    <mdb-btn color="primary" size="md" @click="filtrar(3)">Distrito 3</mdb-btn>
    <mdb-btn color="primary" size="md" @click="filtrar(4)">Distrito 4</mdb-btn>
    <mdb-btn color="primary" size="md" @click="filtrar(5)">Distrito 5</mdb-btn>
    <mdb-btn color="primary" size="md" @click="filtrar(6)">Distrito 6</mdb-btn>
    <mdb-btn color="primary" size="md" @click="filtrar(7)">Distrito 7</mdb-btn>
    <mdb-btn color="primary" size="md" @click="filtrar(0)">Todos</mdb-btn>

    <hr />
    <template v-for="grupo in grupos">
      <div :key="grupo.id">
        <mdb-row>
          <mdb-col lg="5" xl="4">
            <mdb-view class="mb-lg-0 mb-4">
              <img
                class="img-fluid"
                :src="'/imagenes/panuelos/'+grupo.id+'.svg'"
                alt="Sample image"
              />
              <a>
                <mdb-mask overlay="white-slight" waves />
              </a>
            </mdb-view>
          </mdb-col>
          <mdb-col lg="7" xl="8">
            <h3 class="font-weight-bold mb-3 p-0">
              <strong>{{grupo.nombre}} -- Nro {{grupo.id}}</strong>
            </h3>
            <!--
          <p class="dark-grey-text">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
            possimus, omnis voluptas assumenda est, omnis dolor repellendus et aut officiis debitis cum soluta nobis est eligendi
            placeat facere aut rerum.
            </p>-->
            <ul class="list-group list-group-flush">
              <li class="list-group-item" v-if="grupo.fundacion">Fundado el {{grupo.fundacion}}</li>
              <li class="list-group-item">Direccion {{grupo.direccion}}</li>
              <li class="list-group-item">localidad de {{grupo.localidad}}</li>
              <li class="list-group-item">Partido de {{grupo.partido}}</li>
              <li class="list-group-item" v-if="grupo.distrito != 0 ">Distrito {{grupo.distrito}}</li>
              <li class="list-group-item" v-if="grupo.id < 3000 ">Email  grupo{{grupo.id}}@scouts.org.ar</li>
              
            </ul>
          </mdb-col>
        </mdb-row>
        <hr class="my-5" />
      </div>
    </template>
  </mdb-container>
</template>



<script>
import Grupos from "../../config/grupos.json";
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardBody,
  mdbMask,
  mdbIcon,
  mdbView,
  mdbBtn
} from "mdbvue";
export default {
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbMask,
    mdbIcon,
    mdbView,
    mdbBtn
  },

  head() {
    return {
      title: "Grupos de la Zona"
    };
  },
  data() {
    return {
      grupos: Grupos
    };
  },
  methods: {
    filtrar(distrito) {
      if (distrito == 0) {
        this.grupos = Grupos;
      } else {
        this.grupos = Grupos.filter(function(data) {
          return data.distrito == distrito;
        });
      }
    }
  }
};
</script>
