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
  data() {
    return {
      structuredData: {
        "@context": "http://schema.org/",
        "@type": "Organization",
        "name": "Zona 9 - Scouts de Argentina",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Pelagio Luna 2235",
          "addressLocality": "Caseros",
          "addressRegion": "Buenos Aires",
          "postalCode": "B1678"
        },
        "telephone": "0"
      }
    }
  },
   head() {
    return {
      __dangerouslyDisableSanitizers: ['script'],
      script: [{ innerHTML: JSON.stringify(this.structuredData), type: 'application/ld+json' }]
    }
  },
  created: function() {}
};
</script>
