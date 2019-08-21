<template>
  <mdb-container>
    <h2 class="h1-responsive">Grupos</h2>
    <hr />

    <!--
    <h2 class="h1-responsive font-weight-bold text-center my-5">Recent posts</h2>
    <p class="text-center w-responsive mx-auto mb-5">
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>-->

    <template v-for="grupo in grupos">
      <mdb-row :key="grupo.id">
        <mdb-col lg="5" xl="4">
          <mdb-view class="mb-lg-0 mb-4">
            <img class="img-fluid" :src="'/imagenes/panuelos/'+grupo.id+'.svg'" alt="Sample image" />
            <a>
              <mdb-mask overlay="white-slight" waves />
            </a>
          </mdb-view>
        </mdb-col>
        <mdb-col lg="7" xl="8">
          <h3 class="font-weight-bold mb-3 p-0">
            <strong>{{grupo.nombre}} -- Nro {{grupo.id}}</strong>
          </h3>
          <p class="dark-grey-text">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
            possimus, omnis voluptas assumenda est, omnis dolor repellendus et aut officiis debitis cum soluta nobis est eligendi
            placeat facere aut rerum.
          </p>
          <p>
            Fundado el {{grupo.fundacion}}
            <br />
            Direccion {{grupo.direccion}}
            <br />
            localidad de {{grupo.localidad}}
            <br />
            Partido de {{grupo.partido}}
            <br />

            <mdb-btn color="primary" size="md">Read More</mdb-btn>
          </p>
        </mdb-col>
      </mdb-row>
      <hr class="my-5" />
    </template>
  </mdb-container>
</template>



<script>
import Grupos from "./grupos.json";
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

  data() {
    return {
      grupos: Grupos
    };
  }
};
</script>