<template>
  <div>
    <h2 class="h1-responsive">Inclusión</h2>
    <hr />
    <mdb-row>
      <mdb-col md="6">
        <img
          class="w-100"
          src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
          alt="image"
        />
      </mdb-col>
      <mdb-col>
        <h5 class="mt-0">Columns with stretched link</h5>
        <p>
          Desde esta casilla de correo queremos brindar apoyo a todos los dirigentes de la zona que se encuentren con alguna situación complicada referida a nuestros beneficiarios.
          A través de la misma podes hacer tu consulta y te asesoraremos sobre los pasos a seguir. Violencia familiar, trastornos de personalidad, psicológicos, emocionales, problemas físicos y legales.
          Siempre listos
          Equipo de inclusión zona9
          inclusion@zona9.org.ar
        </p>
      </mdb-col>
    </mdb-row>
  </div>
</template>

<script>
import { mdbStretchedLink, mdbCol, mdbRow } from "mdbvue";
export default {
  components: {
    mdbCol,
    mdbRow,
    mdbStretchedLink
  }
};
</script>