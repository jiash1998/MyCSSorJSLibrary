<template>
  <div id="ElemPagination">
    <!-- total:总条数，currentPage:当前页数-->
    <!-- pageSizes:每页展示数据区间，pageSize:首次展示区间  -->
    <!-- layout[total:总数,sizes:每页多少条，
    ->：右侧展示,prev:回退，next:前进，pager:页码列表，jumper:跳页]-->
    <el-pagination
      background
      :total="list.length"
      :current-page="1"
      :page-size="5"
      :page-sizes="[5,10,20,30,40]"
      layout="total,sizes, prev, pager, next,jumper"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    ></el-pagination>
    <el-table :data="list.slice((current-1)*pageSizes, current*pageSizes)" border>
      <el-table-column label="name" prop="name"></el-table-column>
      <el-table-column label="age" prop="age"></el-table-column>
      <el-table-column label="sex" prop="sex"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "ElmPagination",
  data() {
    return {
      list: [
        {
          name: "1",
          age: 123,
          sex: "man"
        },
        {
          name: "1",
          age: 123,
          sex: "man"
        },
        {
          name: "1",
          age: 123,
          sex: "man"
        },
        {
          name: "1",
          age: 123,
          sex: "man"
        },
        {
          name: "1",
          age: 123,
          sex: "man"
        },
        {
          name: "1",
          age: 123,
          sex: "man"
        },
        {
          name: "1",
          age: 123,
          sex: "man"
        },
        {
          name: "1",
          age: 123,
          sex: "man"
        },
        {
          name: "1",
          age: 123,
          sex: "man"
        },
        {
          name: "1",
          age: 123,
          sex: "man"
        },
        {
          name: "1",
          age: 123,
          sex: "man"
        },
        {
          name: "112",
          age: 12123,
          sex: "m12an"
        },
        {
          name: "1",
          age: 123,
          sex: "man"
        },
        {
          name: "1",
          age: 123,
          sex: "man"
        },
        {
          name: "1",
          age: 123,
          sex: "man"
        },
        {
          name: "1",
          age: 123,
          sex: "man"
        },
        {
          name: "1",
          age: 123,
          sex: "man"
        },
        {
          name: "1",
          age: 123,
          sex: "man"
        },
        {
          name: "1",
          age: 123,
          sex: "man"
        },
        {
          name: "1",
          age: 123,
          sex: "man"
        },
        {
          name: "1",
          age: 123,
          sex: "man"
        },
        {
          name: "1",
          age: 123,
          sex: "man"
        },
        {
          name: "1",
          age: 123,
          sex: "man"
        },
        {
          name: "1",
          age: 123,
          sex: "man"
        },
        {
          name: "1",
          age: 123,
          sex: "man"
        },
        {
          name: "1",
          age: 123,
          sex: "man"
        },
        {
          name: "1",
          age: 123,
          sex: "man"
        }
      ],
      current: 1,
      pageSizes: 5
    };
  },
  methods: {
    //当前页码
    handleCurrentChange(val) {
      console.log(val);
      this.current = val;
    },
    //每页多少条数据
    handleSizeChange(val) {
      console.log(val);
      this.pageSizes = val;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/css_CSS/ElemPagination.scss";
</style>