<template>
<div class ="v-table">

  <div class = "v-table_header">
        <!-- <p>#
           <i class="material-icons">swap_vert</i>
           </p> -->
        <p @click="sortByCount">Номер
          <i class="material-icons">swap_vert</i>
        </p>
        <p @click="sortById">id
          <i class="material-icons">swap_vert</i>
        </p>
        <p @click="sortByName">выбран
          <i class="material-icons">swap_vert</i>
        </p>
        <p @click="sortByDate">Дата
          <i class="material-icons">swap_vert</i>
        </p>

  </div>
  <div class="v-table_body">

    <Vtablerow v-for="row in items"
    :key="row.id"
    :row_data="row" />
  </div>
<!-- <div class="v-table_paginations">
  <div class="page" v-for="page in pages" :key="page"
  :class="{'page_selcted' :page === pageNumber}"
   @click="pageClick(page)">
    {{page}}
    </div>
  </div> -->
<Paginate
  v-model="page"
  :page-count="pageCount"
  :click-handler="pageChangeHandler"
  :prev-text="'Назад'"
  :next-text="'Вперед'"
  :container-class="'pagination'"
  :page-class="'waves-effect'"
/>
 <!-- <Paginate
 :page-count="20"
  :click-handler="pageChangeHandler"
  :prev-text="'Prev'"
  :next-text="'Next'"
  :container-class="'className'">
 /> -->
  </div>

</template>
<script>
import paginationMixin from '@/mixins/pagination.mixin'
import Vtablerow from '@/components/v_table_row'
import { mapGetters } from 'vuex'
export default {
  name: 'v-table',
  mixins: [paginationMixin],
  components: {
    Vtablerow
  },
  // props: ['personHistory'],
  // props: {
  //   users_data: {
  //     type: Object,
  //     default: () => {
  //       return {}
  //     }
  //     // required: true
  //   }
  // },
  data: () => ({
    // userPerPages: 5,
    personHistory: []
    // pageNumber: 1
  }),
  computed: {
    ...mapGetters(['USERS'])
    // !!!!!!!!!

    // pages () {
    //   return Math.ceil(this.personHistory.length / this.userPerPages)
    // },
    // paginateUser () {
    //   // const from = (this.pageNumber - 1) * this.userPerPages
    //   // const to = from + this.userPerPages
    //   // return this.personHistory.slice(from, to)
    //   return this.personHistory
    // }
    // !!!!!!!
  },
  async mounted () {
    this.personHistory = await this.$store.dispatch('fetchInfoHistory')
    this.setupPagination(this.personHistory)
  },
  methods: {
    // pageChangeHandler () {},

    // pageClick (page) {
    //   this.pageNumber = page
    // },
    sortByName () {
      this.items.sort((a, b) => a.name.localeCompare(b.name))
    },
    sortByDate () {
      this.items.sort((a, b) => a.dates.localeCompare(b.dates))
    },
    sortByCount () {
      this.items.sort((a, b) => a.count - b.count)
    },
    sortById () {
      this.items.sort((a, b) => a.id.localeCompare(b.id))
    }
  }
}
</script>
<style scoped>
.v-table {
margin: 0 auto;
}
.v-table_header {
display: flex;
justify-content: space-around;

}
 .v-table_header p {
display: flex;
justify-content: center;
flex-basis: 20%;
text-align: left;
align-items: center;
/* text color: #red; */
border-bottom: solid 1px #e7e7e7;
cursor: pointer

}
p {
color: purple;
font-style: normal;
font-size: 25px;
}
.page {
  padding:10px;
  border: solid 1px  purple;
  margin-right: 5px;
}
.v-table_paginations{
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 margin-top: 30px;
}
.page:hover {
  background: #aeaeae;
  cursor: pointer;
  color: #eaeaea;

}
.page_selcted {
  background: #aeaeae;

}
</style>
