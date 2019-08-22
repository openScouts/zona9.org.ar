<template>
  <mdb-container>
    <h2 class="h1-responsive font-weight-bold text-center my-5">Juventud en la Zona 9</h2>
    <p class="text-center w-responsive mx-auto mb-5">
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>

  <template  v-for="item in items">
    <div :key="item.img">
    <mdb-row>
      <mdb-col lg="5" xl="4">
        <mdb-view hover class="rounded z-depth-1-half mb-lg-0 mb-4">
          <img
            class="img-fluid"
            :src="'/imagenes/juventud/' + item.img "
            :alt="item.titulo"
          />
          <a>
            <mdb-mask overlay="white-slight" waves />
          </a>
        </mdb-view>
      </mdb-col>
      <mdb-col lg="7" xl="8">
        <h3 class="font-weight-bold mb-3 p-0">
          <strong>{{item.titulo}}</strong>
        </h3>
        <p class="dark-grey-text" v-html="item.descripcion">
        </p>
        <p>
          <a class="font-weight-bold">Email de Contacto:</a> {{item.email}}
        </p>
        
      </mdb-col>
    </mdb-row>
    <hr class="my-5" />
    </div>
    </template>

  </mdb-container>
</template>


<script>
import Juventud from "../../config/juventud.json"
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
  head() {
    return {
      title: "Juventud Zonal"
    };
  },
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
  data() {
    return {
      items: Juventud
    };
  },
};
</script>