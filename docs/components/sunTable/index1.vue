<template>
  <div class="sun-table">
    <sunTable :page="page" :data="tableData" :height="250" :border="true" :column="tableColumn" :rowClassName="rowClassName" @selection-change="handleSelectionChange" @size-change="handleSizeChange" @current-change="handleCurrentChange">
      <template #tag="{row}">
        <div class="app-tag">
          <div class="app-tag-item" v-for="(item, index) in row.tag" :key="index">{{ item }}</div>
        </div>
      </template>
      <template #operate>
        <el-row :gutter="16">
          <el-col :span="12"> <el-tag class="ml-2" type="danger">删除</el-tag>
          </el-col>
          <el-col :span="12"> <el-tag class="ml-2" type="primary">确认</el-tag></el-col>
        </el-row>
      </template>
    </sunTable>
  </div>
</template>

<script setup>
import { h, reactive } from 'vue'
import data from '@gw0420/hooks'

const { sunTable } = data

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: ['orange', 'purple']
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: ['orange', 'purple']
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: ['orange', 'purple']
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: ['orange', 'purple']
  }
]

const tableColumn = [
  {
    type: 'selection',
    width: 60
  },
  {
    prop: 'date',
    label: 'Date',
    width: 180
  },
  {
    prop: 'name',
    label: 'Name',
    width: 180
  },
  {
    prop: 'state',
    label: 'State',
    width: 180,
  },
  {
    prop: 'city',
    label: 'City',
    width: 180
  },
  {
    prop: 'address',
    label: 'Address',
    width: 180,
    toolTip: true,
    formatter: (row) => {
      return h('div', {
        style: {
          color: '#000',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis'
        }
      }, row.address)
    }
  },
  {
    prop: 'zip',
    label: 'Zip',
    width: 180
  },
  {
    prop: 'tag',
    label: 'Tag',
    width: 300,
    slot: 'tag'
  },
  {
    prop: 'operate',
    label: 'Operate',
    width: 120,
    slot: 'operate',
    fixed: 'right'
  }
]

const page = reactive({
  pageNum: 1,
  pageSize: 30,
  small: true,
  total: 200
})

// 当选择项发生变化时会触发该事件
const handleSelectionChange = (data) => {
  console.log('data=>', data);
}

// page-size 改变时触发
const handleSizeChange = (size) => {
  page.pageSize = size
}

// current-page 改变时触发
const handleCurrentChange = (num) => {
  page.pageNum = num
}

const rowClassName = ({ row, column, rowIndex, columnIndex }) => {
  if (rowIndex === 2) {
    return 'table-background'
  }
}
</script>

<style lang="scss" scoped>
.sun-table {
  height: 300px;
}
.app-tag {
  display: flex;
  align-items: center;
  gap: 16px;
  .app-tag-item {
    padding: 2px 8px;
    background: #ffa500;
    color: #fff;
    white-space: nowrap;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>
