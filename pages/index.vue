<template>
  <div>
    <links></links>
    <!-- Seccion Noticias -->
    <h1 class="h1-responsive">Ultimas Noticias</h1>
    <hr />
    <mdb-card-group column>
      <template v-for="noti in noticias.data">
        <mdb-card v-if="noti.full_picture" :key="noti.created_time" sm="4" wide>
          <mdb-view hover cascade>
            <a :href="noti.permalink_url" target="_blank">
              <mdb-card-image :src="noti.full_picture"></mdb-card-image>
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body class="text-center" cascade>
            <mdb-card-text v-if="noti.attachments">{{
              noti.attachments.data[0].description
            }}</mdb-card-text>
            <mdb-card-text v-else>{{ noti.message }}</mdb-card-text>
          </mdb-card-body>
        </mdb-card>
      </template>
    </mdb-card-group>
  </div>
</template>

<script>
import {
  mdbCard,
  mdbCardImage,
  mdbCardBody,
  mdbCardText,
  mdbCardGroup,
  mdbView,
  mdbMask,
} from 'mdbvue'
import links from '../components/Links'
const moment = require('moment')

export default {
  layout: 'inicio',
  components: {
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardText,
    mdbCardGroup,
    mdbView,
    mdbMask,
    links,
  },
  filters: {
    fecha(value) {
      return moment(value).format('DD/MM/YYYY')
    },
  },
  data() {
    return {
      noticias: {},
    }
  },
  computed: {
    token() {
      // return process.env.FACEBOOK_TOKEN
      return 'EAAG7eaYW56ABAMiJCzAbmBhGXfNe1d3BPYxGM4LkgwrsRzayoLQ5oIErJ02nwCNhi8hlL6ixhunHWNv6hhNt97ovmD3vxhZB6i9dLqj4uiDtv0IcJZAktirs0x9LHsUA24nHQYF7gL2daR0CJZAQPwmBoQjryp5JBaHFkA7HQZDZD'
    },
  },
  mounted() {
    this.getDatosFb()
  },
  methods: {
    getDatosFb() {
      // http://meanandroid.com/latestposts/how-never-expiring-facebook-access-token/
      this.$axios
        .get('https://graph.facebook.com/v3.3/zona9scoutsargentina/feed', {
          params: {
            access_token: this.token,
            fields:
              'created_time,full_picture,message,story,permalink_url,shares,via,comments,picture,sharedposts,attachments.limit(10){description}',
            limit: 20,
            transport: 'cors',
          },
        })
        .then((response) => {
          this.noticias = response.data
        })
    },
  },
}
</script>
