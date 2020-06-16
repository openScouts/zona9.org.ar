<template>
  <mdb-container>
    <section class="my-5">
      <h1 class="h1-responsive font-weight-bold text-center my-5">
        Bienvenidos a la Zona 9 - Gran Bs. As. Noroeste
      </h1>
      <!--
      <p
        class="lead grey-text w-responsive text-center mx-auto mb-5"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      -->
      <mdb-row>
        <template v-for="link in links">
          <mdb-col :key="link.titulo" md="3" class="md-0 mb-5">
            <mdb-row>
              <mdb-col lg="2" md="3" size="2">
                <mdb-icon :icon="link.icono" size="2x" class="blue-text" />
              </mdb-col>
              <mdb-col lg="10" md="9" size="10" style="height: 150px;">
                <h4 class="font-weight-bold">{{ link.titulo }}</h4>
                <p class="grey-text">{{ link.descripcion }}</p>
              </mdb-col>
              <nuxt-link
                v-if="link.to"
                :to="link.to"
                class="stretched-link btn btn-primary"
                >Ingresar</nuxt-link
              >
              <a
                v-if="link.link"
                :href="link.link"
                target="_blank"
                class="stretched-link btn btn-primary"
                >Ingresar</a
              >
            </mdb-row>
          </mdb-col>
        </template>
      </mdb-row>
    </section>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbIcon } from 'mdbvue'
import Links from '../config/links.json'
export default {
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
  },
  data() {
    return {
      links: Links,
    }
  },
}
</script>
