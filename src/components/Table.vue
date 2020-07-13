<template>
<div>
        <div class="input-group mb-3">
            <span class="search" >Search</span>
         <input class="form-control" v-model="filters.name.value" /> 
         </div>
          <p >Total Amount: {{theData.data.length}}</p>
      <v-table
      class="table"
        :data="theData.data"
        :currentPage.sync="currentPage"
        :pageSize="5"
        :filters="filters"
        @totalPagesChanged="totalPages = $event"
      >
        <thead slot="head">
          <v-th sortKey="order_name">Order Name</v-th>
          <v-th sortKey="company_name">Customer Company</v-th>
          <v-th sortKey="customer_name">Customer Name</v-th>
          <v-th sortKey="create_time">Create Time</v-th>
          <v-th sortKey="delivered_amount">Delivered Amount</v-th>
          <v-th sortKey="total_amount">Toal Amount</v-th>
        </thead>
        <tbody slot="body" slot-scope="{displayData}">
        <tr v-for="row in displayData" :key="row.guid">
          <td v-for="(obj,ind) in config" :key="ind">{{ row[obj.key] }}</td>
        </tr>
        </tbody>
      </v-table>
    <div class="pagination pagination-sm">
      <smart-pagination
        :currentPage.sync="currentPage"
        :totalPages="totalPages"
      />
      </div>
    </div>
</template>

<script>

export default {
props:['theData','config'],
 name: 'Pagination',
  data: () => ({
    currentPage: 1,
    totalPages: 0,
    filters: {
      name: { value: '', keys: ['product','order_name'] }
    }
  })
}
  </script>

  <style lang="scss">
.search{
   font-size: 20px;
   margin-right:20px;
}
.table{
    font-size: 11px;
}
.pagination{
    margin-left: 30%;
    margin-top:10px;
}
  </style>