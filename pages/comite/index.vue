<template>
  <div>
    <h2 class="h1-responsive">Comite Zonal</h2>
    <hr />

    <mdb-row>
      <template v-for="integrante in comite">
        <mdb-col sm="4" :key="integrante.codigo" class="mb-4 w-100">
          <mdb-card wide>
            <mdb-view hover cascade>
              <a href="#!">
                <mdb-card-image :src="'/imagenes/comite/' + integrante.codigo + '.jpg'"></mdb-card-image>
                <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
              </a>
            </mdb-view>

            <mdb-card-body cascade>
              <h5 class="pink-text pb-2 pt-1">{{ integrante.funcion}}</h5>
              <mdb-card-title>
                <strong>{{ integrante.nombre}}</strong>
              </mdb-card-title>
              <mdb-card-text>{{ integrante.descripcion}}</mdb-card-text>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </template>
    </mdb-row>
  </div>
</template>


<script>
import Comite from "./comite.json";
import axios from "axios";
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardImage,
  mdbCardHeader,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbCardFooter,
  mdbCardUp,
  mdbCardAvatar,
  mdbCardGroup,
  mdbBtn,
  mdbView,
  mdbMask,
  mdbIcon
} from "mdbvue";

export default {
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardHeader,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbCardFooter,
    mdbCardUp,
    mdbCardAvatar,
    mdbCardGroup,
    mdbBtn,
    mdbView,
    mdbMask,
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
