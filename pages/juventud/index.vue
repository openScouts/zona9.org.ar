<template>
  <mdb-container>
    <h2 class="h1-responsive font-weight-bold text-center my-5">Juventud en la Zona 9</h2>
    <p class="text-center w-responsive mx-auto mb-5">
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <mdb-row>
      <mdb-col lg="5" xl="4">
        <mdb-view hover class="rounded z-depth-1-half mb-lg-0 mb-4">
          <img
            class="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
            alt="Sample image"
          />
          <a>
            <mdb-mask overlay="white-slight" waves />
          </a>
        </mdb-view>
      </mdb-col>
      <mdb-col lg="7" xl="8">
        <h3 class="font-weight-bold mb-3 p-0">
          <strong>Title of the news</strong>
        </h3>
        <p class="dark-grey-text">
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
          possimus, omnis voluptas assumenda est, omnis dolor repellendus et aut officiis debitis cum soluta nobis est eligendi
          placeat facere aut rerum.
        </p>
        <p>
          by
          <a class="font-weight-bold">Jessica Clark</a>, 19/04/2018
        </p>
        <mdb-btn color="primary" size="md">Read More</mdb-btn>
      </mdb-col>
    </mdb-row>
    <hr class="my-5" />
    <mdb-row>
      <mdb-col lg="5" xl="4">
        <mdb-view hover class="rounded z-depth-1-half mb-lg-0 mb-4">
          <img
            class="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Others/images/31.jpg"
            alt="Sample image"
          />
          <a>
            <mdb-mask overlay="white-slight" waves />
          </a>
        </mdb-view>
      </mdb-col>
      <mdb-col lg="7" xl="8">
        <h3 class="font-weight-bold mb-3 p-0">
          <strong>Title of the news</strong>
        </h3>
        <p class="dark-grey-text">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
          quos dolores et quas molestias excepturi sint occaecati cupiditate non provident et accusamus iusto odio dignissimos
          et dolorum fuga.
        </p>
        <p>
          by
          <a class="font-weight-bold">Jessica Clark</a>, 16/04/2018
        </p>
        <mdb-btn color="primary" size="md">Read More</mdb-btn>
      </mdb-col>
    </mdb-row>
    <hr class="my-5" />
    <mdb-row>
      <mdb-col lg="5" xl="4">
        <mdb-view hover class="rounded z-depth-1-half mb-lg-0 mb-4">
          <img
            class="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Others/images/52.jpg"
            alt="Sample image"
          />
          <a>
            <mdb-mask overlay="white-slight" waves />
          </a>
        </mdb-view>
      </mdb-col>
      <mdb-col lg="7" xl="8">
        <h3 class="font-weight-bold mb-3 p-0">
          <strong>Title of the news</strong>
        </h3>
        <p class="dark-grey-text">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, psam voluptatem
          quia consectetur.
        </p>
        <p>
          by
          <a class="font-weight-bold">Jessica Clark</a>, 12/04/2018
        </p>
        <mdb-btn color="primary" size="md">Read More</mdb-btn>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>


<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardBody,
  mdbMask,
  mdbIcon,
  mdbView,
  mdbBtn
} from "mdbvue";
export default {
  name: "BlogPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbMask,
    mdbIcon,
    mdbView,
    mdbBtn
  }
};
</script>