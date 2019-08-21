<template>
  <mdb-container>
    <section class="my-5">
      <h2 class="h1-responsive font-weight-bold text-center my-5">Why is it so great?</h2>
      <p
        class="lead grey-text w-responsive text-center mx-auto mb-5"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      <mdb-row>
        <mdb-col md="4" class="md-0 mb-5">
          <mdb-row>
            <mdb-col lg="2" md="3" size="2">
              <mdb-icon icon="bullhorn" size="2x" class="blue-text" />
            </mdb-col>
            <mdb-col lg="10" md="9" size="10">
              <h4 class="font-weight-bold">Marketing</h4>
              <p
                class="grey-text"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              <mdb-btn color="primary" size="sm">Learn more</mdb-btn>
            </mdb-col>
          </mdb-row>
        </mdb-col>
        <mdb-col md="4" class="md-0 mb-5">
          <mdb-row>
            <mdb-col lg="2" md="3" size="2">
              <mdb-icon icon="cogs" size="2x" class="pink-text" />
            </mdb-col>
            <mdb-col lg="10" md="9" size="10">
              <h4 class="font-weight-bold">Customization</h4>
              <p
                class="grey-text"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              <mdb-btn color="pink" size="sm">Learn more</mdb-btn>
            </mdb-col>
          </mdb-row>
        </mdb-col>
        <mdb-col md="4" class="md-0 mb-5">
          <mdb-row>
            <mdb-col lg="2" md="3" size="2">
              <mdb-icon icon="tachometer-alt" size="2x" class="purple-text" />
            </mdb-col>
            <mdb-col lg="10" md="9" size="10">
              <h4 class="font-weight-bold">Support</h4>
              <p
                class="grey-text"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              <mdb-btn color="purple" size="sm">Learn more</mdb-btn>
            </mdb-col>
          </mdb-row>
        </mdb-col>
      </mdb-row>
    </section>
  </mdb-container>
</template>

<script>
export default {};
</script>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbIcon, mdbBtn } from "mdbvue";
export default {
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbBtn
  }
};
</script>