<template>
<nav class="navbar navbar-dark danger-color fixed-bottom"  v-if="showInstallBanner">
  <a class="navbar-brand" href="#" @click.prevent="install">Instalar como Aplicacion</a>
</nav>

</template>


<script>
let installEvent;
export default {
  name: 'installPrompt',
  data() {
    return {
      showInstallBanner: true
    };
  },
  created() {
    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault();
      installEvent = e;
      this.showInstallBanner = true;
    });
    this.install();
  },
  methods: {
    install() {
      this.showInstallBanner = false;
      installEvent.prompt();
      installEvent.userChoice.then(() => {
        installEvent = null;
      });
    }
  }
};
</script>