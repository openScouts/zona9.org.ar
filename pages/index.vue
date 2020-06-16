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
  mounted() {
    this.getDatosFb()
  },
  methods: {
    getDatosFb() {
      // http://meanandroid.com/latestposts/how-never-expiring-facebook-access-token/
      const self = this
      this.$axios
        .get('https://graph.facebook.com/v3.3/zona9scoutsargentina/feed', {
          params: {
            access_token:
              'EAAG7eaYW56ABAH7TJgZBNwtLyhQynUi9POjMycZB4iS8tIdXNKauel5iSABpomNiuEl1R0WO1VA4g0lR40mBB3k6e168QHBmRycKNc8EEYyrrIyv1q8RVaaoO7J8al0sZA9BZChuVb1JVzQVPrU0ZCNytYJymHZBEvcY6ZBxX4lKgZDZD',
            fields:
              'created_time,full_picture,message,story,permalink_url,shares,via,comments,picture,sharedposts,attachments.limit(10){description}',
            // fields: 'created_time,event,expanded_width,expanded_height,feed_targeting,from,full_picture,height,icon,id,message,message_tags,parent_id,picture,place,privacy,promotable_id,promotion_status,properties,scheduled_publish_time,shares,story,story_tags,subscribed,target,targeting,timeline_visibility,updated_time,via,video_buying_eligibility,width,comments{application,attachment,can_comment,can_like,can_remove,can_reply_privately,comment_count,created_time,from,id,is_private,like_count,live_broadcast_timestamp,message,message_tags,object,parent,permalink_url,private_reply_conversation,user_likes,is_hidden,comments},permalink_url',
            limit: 20,
            transport: 'cors',
          },
        })
        .then(function (response) {
          self.noticias = response.data
          // console.log(response);
        })
    },
  },
}
</script>
