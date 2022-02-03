<template>
<div>

  <!-- <Loader v-if = "loading"/> -->
 <h5 id="count">{{this.info.count}}</h5>

<votCandidates
@apdatevot ="newRezalt"
:key="rezaltvot.length + updatecount"

 />
 <!-- <p  class="center">Пока не проголосовали</p> -->

</div>
</template>
<script>
import votCandidates from '@/components/votCandidates'
// import Loader from '../components/Loader.vue'
import { mapGetters } from 'vuex'
// import Vue from 'vue'

export default {
  name: 'vot',
  data: () => ({
    // votPerson: [],
    // person: [],
    rezaltvot: [],
    loading: true,
    updatecount: 0,
    candidatcount: {}
  }),
  components: {
    votCandidates
    // Loader
  },
  computed: {
    ...mapGetters(['info'])
  },
  async mounted () {
    if (!Object.keys(this.$store.getters.info).length) {
      this.rezaltvot = await this.$store.dispatch('fetchInfo')
      this.candidatcount = this.info
      // console.log('rezaltvot:=', this.candidatcount)
    }
    // if (!Object.keys(this.$store.getters.billhistory).length) {
    // this.person = await this.$store.dispatch('fetchInfoHistory')
    // await this.$store.dispatch('fetchInfo')
    this.loading = false
    // }
  },
  methods: {
    newRezalt (rezalt) {
      this.info.cepbill = rezalt.cepbill
      this.info.lukabill = rezalt.lukabill
      this.info.tihbill = rezalt.tihbill
      this.info.putinbill = rezalt.putinbill
      this.info.buidonbill = rezalt.buidonbill
      this.info.pinbill = rezalt.pinbill
      this.info.contrarybill = rezalt.contrarybill
      this.info.count = rezalt.count
      this.updatecount++
    }
  }
}
</script>
<style scoped>
#count{
  color: crimson;
  font-weight: bold;
}
</style>
