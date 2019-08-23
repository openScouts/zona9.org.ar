<template>
  <div v-if="showInstallBanner">
    <mdb-modal frame position="bottom" direction="bottom" :show="showInstallBanner" @close="showInstallBanner = false">
        <mdb-modal-body class="text-center">
            <span>Instalar como Aplicacion ?</span>
            <mdb-btn color="secondary" @click.native="showInstallBanner = false">Cancelar</mdb-btn>
            <mdb-btn color="primary" @click.prevent="install">Instalar</mdb-btn>
        </mdb-modal-body>
    </mdb-modal>
  </div>
</template>



<script>
let installEvent;
import { mdbModal, mdbModalBody, mdbBtn } from 'mdbvue';

export default {
  name: 'installPrompt',
   components: {
      mdbModal,
      mdbModalBody,
      mdbBtn
    },
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