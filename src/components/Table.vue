<template>
<div class="overflow-auto">
    <input class="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search"/>
    <b-table id="my-table"
      :items="theData.data"
      :per-page="perPage"
      :current-page="currentPage"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      responsive="sm"
      small>
    </b-table>
    <div class="pagination">
 <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      :align="center"
      aria-controls="my-table"
    ></b-pagination>
    <span class="mt-3">Total: {{ theData.data.length }}</span>
</div>
</div>
</template>

<script>

export default {
props:['theData','config'],
data(){
    return{
        perPage: 5,
        currentPage: 1,
        sortBy: 'product',
        sortDesc: false,
        fields: [
         { key:'order_name', sortable: true},
          {key:'create_time',sortable: true },
          {key:'company_name',sortable: true },
          {key:'customer_name',sortable: true },
          { key: 'product', sortable: true },
          { key: 'delivered_amount', sortable: true },
          { key: 'total_amount', sortable: true }
        ],
    }
},
computed: {
      rows() {
        return this.theData.data.length
      }
    }
}
  </script>

  <style lang="scss">
.pagination{
    margin-left: 20%;
}
.mt-3{
    margin-left: 5%;
}

  </style>