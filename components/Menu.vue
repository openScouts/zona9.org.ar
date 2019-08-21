<template>
  <mdb-navbar position="top" color="primary-color" dark>
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        <mdb-nav-item to="/" active>Inicio</mdb-nav-item>
        <mdb-nav-item to="/comite">Comite</mdb-nav-item>
        <mdb-nav-item to="/grupos">Grupos</mdb-nav-item>
        <mdb-nav-item to="/calendario">Calendario</mdb-nav-item>
        <mdb-nav-item to="/juventud">Juventud</mdb-nav-item>
        <mdb-nav-item to="/inclusion">Inclusion</mdb-nav-item>
        <mdb-nav-item to="/contacto">Contacto</mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
  mdbDropdown,
  mdbDropdownMenu,
  mdbDropdownToggle,
  mdbInput,
  mdbDropdownItem
} from "mdbvue";
export default {
  name: "NavbarPage",
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbDropdown,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbDropdownItem,
    mdbInput
  }
};
</script>