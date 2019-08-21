<template>
  <mdb-container>
    <section class="my-5">
      <h2 class="h1-responsive font-weight-bold text-center my-5">Inclusión</h2>
      <mdb-row>
        <mdb-col lg="5" class="mb-lg-0 mb-5">
          <img src="/imagenes/inclusion.svg" alt="Sample project image" class="img-fluid rounded" />
        </mdb-col>
        <mdb-col lg="7">
          <mdb-row class="mb-3">
            <mdb-col md="1" size="2">
              <mdb-icon icon="comment" size="2x" class="indigo-text" />
            </mdb-col>
            <mdb-col md="11" size="10">
              <h5 class="font-weight-bold mb-3"></h5>
              <p class="grey-text">
                La zona cuenta con un equipo de apoyo para todos nuestros adultos que tengan una alguna situación complicada referida a nuestros beneficiarios
                a traves de nuestra casilla podes realizar tu consulta y te asesoraremos sobre los pasos a seguir.
                <br />En temas referidos a Violencia familiar, trastornos de personalidad, psicológicos, emocionales, problemas físicos y legales.
                <br />Siempre listos
                <br />Equipo de inclusión zona9
              </p>
            </mdb-col>
          </mdb-row>
          <mdb-row class="mb-3">
            <mdb-col md="1" size="2">
              <mdb-icon icon="at" size="2x" class="indigo-text" />
            </mdb-col>
            <mdb-col md="11" size="10">
              <h5 class="font-weight-bold mb-3">Contactanos</h5>
              <p class="grey-text">inclusion@zona9.org.ar</p>
            </mdb-col>
          </mdb-row>

          <!--
          <mdb-row class="mb-3">
            <mdb-col md="1" size="2">
              <mdb-icon icon="music" size="2x" class="pink-text" />
            </mdb-col>
            <mdb-col md="11" size="10">
              <h5 class="font-weight-bold mb-3">Entertainment</h5>
              <p
                class="grey-text"
              >Lorem ipsum dolor sit amet, consectetur adipisicing. Reprehenderit maiores nam, aperiam minima elit assumenda voluptate velit.</p>
            </mdb-col>
          </mdb-row>
          <mdb-row class="mb-3">
            <mdb-col md="1" size="2">
              <mdb-icon far icon="smile" size="2x" class="blue-text" />
            </mdb-col>
            <mdb-col md="11" size="10">
              <h5 class="font-weight-bold mb-3">Communication</h5>
              <p
                class="grey-text"
              >Lorem ipsum dolor sit amet, consectetur adipisicing. Reprehenderit maiores nam, aperiam minima elit assumenda voluptate velit.</p>
            </mdb-col>
          </mdb-row>
          -->
        </mdb-col>
      </mdb-row>
    </section>
  </mdb-container>
</template>













<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbView,
  mdbMask,
  mdbCard,
  mdbCardBody,
  mdbBtn,
  mdbIcon
} from "mdbvue";
export default {
  name: "ProjectsPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbView,
    mdbMask,
    mdbCard,
    mdbCardBody,
    mdbBtn,
    mdbIcon
  }
};
</script>