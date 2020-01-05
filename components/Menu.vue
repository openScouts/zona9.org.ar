<template>
  <mdb-navbar dark color="primary" position="top">
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        <mdb-nav-item to="/" active>Inicio</mdb-nav-item>
        <mdb-nav-item to="/comite">Comite</mdb-nav-item>
        <mdb-nav-item to="/grupos">Grupos</mdb-nav-item>
        <mdb-nav-item to="/biblioteca">Biblioteca</mdb-nav-item>
        <mdb-nav-item to="/calendario">Calendario</mdb-nav-item>
        <mdb-nav-item to="/juventud">Juventud</mdb-nav-item>
        <mdb-nav-item to="/inclusion">Inclusión</mdb-nav-item>
      </mdb-navbar-nav>
      <!--
      <mdb-navbar-nav right class="d-inline">
        <a href="https://www.facebook.com/zona9scoutsargentina" class="text-white p-2">
          <mdb-icon fab icon="facebook" />
        </a>
        <a href="https://github.com/caseroft/zona9.org.ar" class="text-white p-2">
          <mdb-icon fab icon="github" />
        </a>
        <a href="https://www.instagram.com/zona9saac/" class="text-white p-2">
          <mdb-icon fab icon="instagram" />
        </a>
      </mdb-navbar-nav>-->

      <ul class="navbar-nav nav-flex-icons">
        <li class="nav-item">
          <a
            class="nav-link"
            href="https://www.facebook.com/zona9scoutsargentina"
          >
            <i class="fab fa-lg fa-facebook-f"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://github.com/caseroft/zona9.org.ar">
            <i class="fab fa-lg fa-github"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.instagram.com/zona9saac/">
            <i class="fab fa-lg fa-instagram"></i>
          </a>
        </li>
      </ul>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
import { mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler } from 'mdbvue'
export default {
  name: 'NavigationPage',
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler
  }
}
</script>
