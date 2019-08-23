<template>
  <div v-if="showInstallBanner">
    <mdb-modal frame position="bottom" direction="bottom" :show="showInstallBanner" @close="showInstallBanner = false">
        <mdb-modal-body class="text-center">
            <span>Instalar como Aplicacion ?</span>
            <mdb-btn color="danger" @click.native="showInstallBanner = false">Cancelar</mdb-btn>
            <a href="#" class="btn btn-success" @click.prevent="install">Instalar</a>
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
        showInstallBanner: false
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
