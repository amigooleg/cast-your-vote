<template>
<div>
<!-- <div><canvas id="myChart" width="400" height="400" ></canvas></div> -->
<div class="history">
   <!-- <h3>История голосования</h3> -->

<Vtable/>

</div>
<!-- <Paginate
:page-count="20"
  :click-handler="pageChangeHandler"
  :prev-text="'Назад'"
  :next-text="'Вперед'"
  :container-class="'pagination'"
  :page-class="'waves-effect'"
/> -->
<!-- <canvas ref = "canvas"  ></canvas> -->

</div>

</template>
<script>
// import paginationMixin from '@/mixins/pagination.mixin'
import Vtable from '@/components/V_table'
import { mapActions, mapGetters } from 'vuex'
// import LineChart from '@/components/LineChart'
import { Pie } from 'vue-chartjs'

export default {
  metaInfo () {
    return {
      title: 'History'
    }
  },
  name: 'history',
  // mixins: [paginationMixin],
  extends: Pie,
  date: () => ({
    // personHistory: [],
    userPerPage: 10,
    updateCount: 0
  }),

  components: {
    Vtable
  },
  methods: {
    ...mapActions(['fetchInfoHistory'])

  },
  computed: {
    ...mapGetters(['USERS'])
    // pages () {
    //   return Math.cell(this.person.length / 10)
    // }
  },

  async mounted () {
    // this.renderChart({
    //   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //   datasets: [{
    //     label: '# of Votes',
    //     data: [12, 19, 3, 5, 2, 3],
    //     backgroundColor: [
    //       'rgba(255, 99, 132, 0.2)',
    //       'rgba(54, 162, 235, 0.2)',
    //       'rgba(255, 206, 86, 0.2)',
    //       'rgba(75, 192, 192, 0.2)',
    //       'rgba(153, 102, 255, 0.2)',
    //       'rgba(255, 159, 64, 0.2)'
    //     ],
    //     borderColor: [
    //       'rgba(255, 99, 132, 1)',
    //       'rgba(54, 162, 235, 1)',
    //       'rgba(255, 206, 86, 1)',
    //       'rgba(75, 192, 192, 1)',
    //       'rgba(153, 102, 255, 1)',
    //       'rgba(255, 159, 64, 1)'
    //     ],
    //     borderWidth: 1
    //   }]
    // })
  }

}

</script>
<style scoped>
.small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>
