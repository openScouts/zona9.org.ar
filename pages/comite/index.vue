<template>
  <mdb-container>
    <section class="text-center">
      <h2 class="h1-responsive font-weight-bold my-5">Comite Zonal</h2>
      <p class="grey-text w-responsive mx-auto mb-5">
        Acompaña y asesora al Director de Zona y Consejo zonal como especialista técnico en su ámbito de competencia.
        <br />Proponer y promover actividades para el fortalecimiento cualitativo del territorio
        <br />
Trabajar interdisciplinariamente
      </p>
      <mdb-row>
        <template v-for="integrante in comite">
          <mdb-col lg="3" md="6" class="mb-lg-0 mb-5" :key="integrante.codigo">
            <mdb-view hover cascade>
              <img
                class="img-fluid pt-2"
                :src="'/imagenes/comite/' + integrante.codigo + '.jpg'"
                :alt="integrante.nombre"
              />
            </mdb-view>
            <h5 class="font-weight-bold mt-4 mb-3">{{ integrante.nombre}}</h5>
            <p class="text-uppercase blue-text">{{ integrante.funcion}}</p>
            <p class="grey-text">{{ integrante.descripcion}}.</p>
            <hr />
          </mdb-col>
        </template>
      </mdb-row>
    </section>
  </mdb-container>
</template>


<script>
import Comite from "./comite.json";
import axios from "axios";
import { mdbContainer, mdbRow, mdbCol, mdbView, mdbIcon } from "mdbvue";

export default {
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbView,
    mdbIcon
  },
  head() {
    return {
      title: "Comite Zonal "
    };
  },

  data() {
    return {
      comite: Comite.comite
    };
  }
};
</script>


<style scoped>
.rounded-circle {
  max-width: 150px;
}
</style>