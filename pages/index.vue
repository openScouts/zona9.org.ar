<template>
  <div>
    <!-- Marketing Icons Section -->
    <div class="row text-center">
      <div class="col-sm-4 align-items-stretch">
        <div class="feature-item animated cargando m-2 p-2">
          <nuxt-link to="/noticias" class="c-black">
            <div class="icon-block">
              <h2 class="mdc-text-green-500">
                <i class="zmdi zmdi-format-subject zmdi-hc-3x animated infinite pulse zmdi-hc-fw"></i>
              </h2>
              <h5>Noticias</h5>
              <p class="mdc-text-grey-700">Enterate de las ultimas novedades de nuestra zona 9</p>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="col-sm-4 align-items-stretch">
        <div class="feature-item animated cargando m-2 p-2">
          <nuxt-link to="/comite" class="c-black">
            <div class="icon-block">
              <h2 class="mdc-text-green-500">
                <i class="zmdi zmdi-accounts-alt zmdi-hc-3x animated infinite pulse zmdi-hc-fw"></i>
              </h2>
              <h5>Comite</h5>
              <p class="mdc-text-grey-700">Conoce como esta compuesto nuestro equipo Zonal</p>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="col-sm-4 align-items-stretch">
        <div class="feature-item animated cargando m-2 p-2">
          <a href="https://mirincon.com.ar/" class="c-black">
            <div class="icon-block">
              <h2 style="fill:green" class="text-center">
                <svg>
                  <image class="change-my-color" xlink:href="/imagenes/links/mirincon.svg" />
                </svg>
              </h2>
              <p
                class="mdc-text-grey-700"
              >Este es tu espacio, aqui podrás ver tu formación e inscribirte a las experiencias</p>
            </div>
          </a>
        </div>
      </div>

      <div class="col-sm-4 align-items-stretch">
        <div class="feature-item animated cargando m-2 p-2">
          <nuxt-link to="/fotos" class="c-black">
            <div class="icon-block">
              <h2 class="mdc-text-green-500">
                <i class="zmdi zmdi-puzzle-piece zmdi-hc-3x animated infinite pulse zmdi-hc-fw"></i>
              </h2>
              <h5>Fotos</h5>
              <p class="mdc-text-grey-700">Conoce a la gente de nuestra zona</p>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="col-sm-4 align-items-stretch">
        <div class="feature-item animated cargando m-2 p-2">
          <nuxt-link to="/calendario" class="c-black">
            <div class="icon-block">
              <h2 class="mdc-text-green-500">
                <i class="zmdi zmdi-calendar zmdi-hc-3x animated infinite pulse zmdi-hc-fw"></i>
              </h2>
              <h5>Calendario</h5>
              <p
                class="mdc-text-grey-700"
              >Conoce todas las fechas importantes dentro de nuestra zona</p>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="col-sm-4 align-items-stretch">
        <div class="feature-item animated cargando m-2 p-2">
          <nuxt-link to="/biblioteca" class="c-black">
            <div class="icon-block">
              <h2 class="mdc-text-green-500">
                <img src="/imagenes/links/cds.svg" />
              </h2>
              <h5>Cruz del Sur</h5>
              <p
                class="mdc-text-grey-700"
              >Accede a todos los ultimos documentos, que facilitan tu tarea.</p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
    <!-- /.row -->

    <!-- Seccion Noticias -->

    <h2 class="h1-responsive">Ultimas Noticias</h2>
    <hr />
    <mdb-card-group column>
      <template v-for="noti in noticias.data">
        <mdb-card sm="4" v-if="noti.full_picture" :key="noti.created_time" wide>
          <mdb-view hover cascade>
            <a to="#!">
              <mdb-card-image :src="noti.full_picture"></mdb-card-image>
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body class="text-center" cascade>
            <mdb-card-text>{{ noti.message}}</mdb-card-text>
          </mdb-card-body>
        </mdb-card>
      </template>
    </mdb-card-group>

    <!-- /.row -->

    <!-- Features Section -->
    <div class="row">
      <div class="col-lg-6">
        <h2>Modern Business Features</h2>
        <p>The Modern Business template by Start Bootstrap includes:</p>
        <ul>
          <li>
            <strong>Bootstrap v4</strong>
          </li>
          <li>jQuery</li>
          <li>Font Awesome</li>
          <li>Working contact form with validation</li>
          <li>Unstyled page elements for easy customization</li>
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</p>
      </div>
      <div class="col-lg-6">
        <img class="img-fluid rounded" src="https://placehold.it/700x450" alt />
      </div>
    </div>
    <!-- /.row -->

    <hr />

    <!-- Call to Action Section -->
    <div class="row mb-4">
      <div class="col-md-8">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.</p>
      </div>
      <div class="col-md-4">
        <a class="btn btn-lg btn-secondary btn-block" to="#">Call to Action</a>
      </div>
    </div>
  </div>
</template>
    

<script>
const moment = require("moment");
import axios from "axios";
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardImage,
  mdbCardHeader,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbCardFooter,
  mdbCardUp,
  mdbCardAvatar,
  mdbCardGroup,
  mdbBtn,
  mdbView,
  mdbMask,
  mdbIcon
} from "mdbvue";

export default {
  layout: "inicio",

  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardHeader,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbCardFooter,
    mdbCardUp,
    mdbCardAvatar,
    mdbCardGroup,
    mdbBtn,
    mdbView,
    mdbMask,
    mdbIcon
  },

  data() {
    return {
      noticias: {}
    };
  },
  filters: {
    fecha: function(value) {
      return moment(value).format("DD/MM/YYYY");
    }
  },
  mounted: function() {
    console.log("Hola Mundo");
    this.getDatosFb();
  },
  methods: {
    getDatosFb() {
      //http://meanandroid.com/latestposts/how-never-expiring-facebook-access-token/
      var self = this;
      this.$axios
        .get("https://graph.facebook.com/v3.3/zona9scoutsargentina/feed", {
          params: {
            access_token:
              "EAAG7eaYW56ABAAVhCpRXDbaSf8nRDysihxKWfJo7wjQPHElAG98pqtWi05kQfpLI7tH2pVtqDhcRRTpiID4iATORcDmZBMEZB7NU1Oh3KEAD1WjQO73KKuNJ10YzkV2f3zne8M7LQfVZAbBFIjNpzosM67Arr13ZC1CIosVYUAZDZD",
            fields:
              "created_time,full_picture,message,story,permalink_url,shares,via,comments,picture,sharedposts",
            //fields: 'created_time,event,expanded_width,expanded_height,feed_targeting,from,full_picture,height,icon,id,message,message_tags,parent_id,picture,place,privacy,promotable_id,promotion_status,properties,scheduled_publish_time,shares,story,story_tags,subscribed,target,targeting,timeline_visibility,updated_time,via,video_buying_eligibility,width,comments{application,attachment,can_comment,can_like,can_remove,can_reply_privately,comment_count,created_time,from,id,is_private,like_count,live_broadcast_timestamp,message,message_tags,object,parent,permalink_url,private_reply_conversation,user_likes,is_hidden,comments},permalink_url',
            limit: 10,
            transport: "cors"
          }
        })
        .then(function(response) {
          self.noticias = response.data;
          //console.log(response);
        });
    }
  }
};
</script>
