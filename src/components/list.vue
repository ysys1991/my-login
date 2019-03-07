<template>
<div class="list-wrapper">
  <h2>我是用户列表</h2>
  <el-table
    :data="tableData"
    style="width: 50%;margin:1% auto;">
    <el-table-column
      prop="mark"
      label="中文名">
    </el-table-column>
    <el-table-column
      prop="username"
      label="账号">
    </el-table-column>
    <el-table-column
      prop="password"
      label="密码">
    </el-table-column>
    <el-table-column
      prop="phone"
      label="电话">
    </el-table-column>
  </el-table>
</div>
</template>

<script>
import { getUserList } from "@/api/user";

export default {
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    async getUserList() {
      const { data } = await getUserList();
      if (data.userinfo) {
        this.tableData = data.userinfo
      }else{
        this.$message({
          type: "warning",
          message: data.status.reMsg
        });
      }
    }
  },
  mounted() {
    this.getUserList()
  }
}
</script>
<style>
  .list-wrapper>h2 {
    text-align: center;
    margin: 8% auto 0;
  }
  .list-wrapper .el-table{
    border: 1px solid #ccc;
    border-radius: 4px;
  }
</style>
