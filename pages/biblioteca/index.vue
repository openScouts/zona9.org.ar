<template>
  <mdb-container>
    <h1 class="h1-responsive">Biblioteca Zonal</h1>
    <hr />
    <div class="embed-responsive embed-responsive-16by9">
      <iframe
        class="embed-responsive-item"
        src="https://drive.google.com/embeddedfolderview?id=1Qgu-h-DrWsdakHyj5G985vxtyOoKheJN#list"
        allowfullscreen
      ></iframe>
    </div>
  </mdb-container>
</template>



<script>
import { mdbContainer } from "mdbvue";
export default {
  components: {
    mdbContainer
  },

  head() {
    return {
      title: "Biblioteca Zonal"
    };
  }
};
</script>