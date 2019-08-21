<template>
  <div>
    <Menu></Menu>

    <Cabecera></Cabecera>

    <!-- Page Content -->
    <div class="container">
      <nuxt></nuxt>
    </div>
    <!-- /.container -->

    <Pie></Pie>
  </div>
</template>

<script>
import Menu from "../components/Menu";
import Pie from "../components/Pie";
import Cabecera from "../components/Cabecera";

export default {
  components: {
    Menu,
    Cabecera,
    Pie
  },
  created: function() {}
};
</script>