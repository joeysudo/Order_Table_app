<template>
    <table>
        <thead>
            <tr>
                <th v-for="(obj,ind) in config" :key="ind">{{obj.title}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row,index) in theData.data" :key="index">
                <td v-for="(obj,ind) in config" :key="ind">{{row[obj.key]}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
props:['theData','config']
}
  </script>

  <style lang="scss">
   table {
        border-collapse: collapse;
        width: 100.1%;
        th {
            position: sticky;
            top: 0;
            background: #ccc;
            padding: 10px 5px;
            text-align: left;
            border-bottom: 1px solid #999;
        }
        
        td {
            padding: 5px 5px;
            text-align: left;
        }
    }


  </style>