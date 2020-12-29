<template>
  <mdb-container>
    <h1 class="h1-responsive font-weight-bold text-center my-5">
      Juventud en la Zona 9
    </h1>
    <template v-for="item in items.juventud">
      <div :key="item.img">
        <mdb-row>
          <mdb-col lg="5" xl="4">
            <mdb-view hover class="rounded z-depth-1-half mb-lg-0 mb-4">
              <img
                class="img-fluid"
                :src="'/imagenes/juventud/' + item.img"
                :alt="item.titulo"
              />
              <a>
                <mdb-mask overlay="white-slight" waves />
              </a>
            </mdb-view>
          </mdb-col>
          <mdb-col lg="7" xl="8">
            <h3 class="font-weight-bold mb-3 p-0">
              <strong>{{ item.titulo }}</strong>
            </h3>
            <p class="dark-grey-text">{{ item.descripcion }}</p>
            <p>
              <a class="font-weight-bold">Email de Contacto:</a>
              {{ item.email }}
            </p>
          </mdb-col>
        </mdb-row>
        <hr class="my-5" />
      </div>
    </template>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbMask, mdbView } from 'mdbvue'
import Juventud from '../../config/juventud.json'
export default {
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbMask,
    mdbView,
  },
  data() {
    return {
      items: Juventud,
    }
  },
  head() {
    return {
      title: 'Juventud Zonal',
    }
  },
}
</script>
