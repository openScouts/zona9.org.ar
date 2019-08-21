<template>
  <div>
    <Menu></Menu>

    <CabeceraMini></CabeceraMini>

    <!-- Page Content -->
    <div class="container">
      <br />
      <nuxt></nuxt>
    </div>
    <!-- /.container -->

    <Pie></Pie>
  </div>
</template>

<script>
import Menu from "../components/Menu";
import Pie from "../components/Pie";
import CabeceraMini from "../components/CabeceraMini";

export default {
  components: {
    Menu,
    CabeceraMini,
    Pie
  },
  created: function() {}
};
</script>