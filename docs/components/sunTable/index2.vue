<template>
  <div class="sun-table">
    <sunTable :page="page" :data="tableData" :column="tableColumn" :spanMethod="objectSpanMethod" @selection-change="handleSelectionChange" @size-change="handleSizeChange" @current-change="handleCurrentChange">
      <template #tag="{row}">
        <div class="app-tag">
          <div class="app-tag-item" v-for="(item, index) in row.tag" :key="index">{{ item }}</div>
        </div>
      </template>
    </sunTable>
  </div>
</template>

<script setup>
import { h, reactive, computed } from 'vue'
import data from '@gw0420/hooks'

const { sunTable } = data

const tableData = [
  {
    id: 10,
    type: 'orange',
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: ['tag1', 'tag2'],
    price: 99,
    subTotal: '',
    total: ''
  },
  {
    id: 10,
    type: 'orange',
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: ['tag1', 'tag2'],
    price: 99,
    subTotal: '',
    total: ''
  },
  {
    id: 20,
    type: 'purple',
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: ['tag1', 'tag2'],
    price: 77,
    subTotal: '',
    total: ''
  },
  {
    id: 20,
    type: 'purple',
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: ['tag1', 'tag2'],
    price: 77,
    subTotal: '',
    total: ''
  },
  {
    id: 30,
    type: 'black',
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: ['tag1', 'tag2'],
    price: 88,
    subTotal: '',
    total: ''
  }
]
const tableColumn = [
  // {
  //   type: 'selection',
  //   prop: 'id',
  //   label: 'id',
  //   width: 60
  // },
  {
    prop: 'id',
    label: 'id',
    width: 50
  },
  {
    prop: 'type',
    label: 'Type',
    width: 120
  },
  {
    prop: 'date',
    label: 'Date',
    width: 120
  },
  {
    prop: 'name',
    label: 'Name',
    width: 120
  },
  {
    prop: 'state',
    label: 'State',
    width: 120,
  },
  // {
  //   prop: 'city',
  //   label: 'City',
  //   width: 120
  // },
  // {
  //   prop: 'address',
  //   label: 'Address',
  //   width: 120,
  //   toolTip: true,
  //   render(params) {
  //     return h('div', {
  //       style: {
  //         color: 'orange',
  //         overflow: 'hidden',
  //         whiteSpace: 'nowrap',
  //         textOverflow: 'ellipsis'
  //       }
  //     }, params.row.address)
  //   }
  // },
  {
    prop: 'zip',
    label: 'Zip',
    width: 120
  },
  {
    prop: 'tag',
    label: 'Tag',
    width: 200,
    slot: 'tag'
  },
  {
    prop: 'price',
    label: 'price',
    width: 120
  },
  {
    prop: 'subTotal',
    label: 'subTotal',
    width: 120,
    render: (params) => {
      let subTotal = 0
      let arr = tableData.filter(item => item.id === params.row.id)
      arr.forEach(item => {
        subTotal += item.price
      })
      return h('div', subTotal)
    }
  },
  {
    prop: 'total',
    label: 'total',
    width: 120,
    render: (params) => {
      let total = 0
      tableData.forEach(item => {
        total += item.price
      })
      return h('div', total)
    }
  }
]

// page-size 改变时触发
const page = reactive({
  pageNum: 1,
  pageSize: 30,
  small: true,
  total: 200
})
const handleSizeChange = (size) => {
  page.pageSize = size
}

// current-page 改变时触发
const handleCurrentChange = (num) => {
  page.pageNum = num
}

// 表格合并
const objectSpanMethod = ({
  row,
  column,
  rowIndex,
  columnIndex,
}) => {
  // 控制那一列需要合并
  if (columnIndex === 0 || columnIndex === 8) {
    // 二维数组存储的数据 取出
    const _row = spanArr.value[rowIndex]
    const _col = _row > 0 ? 1 : 0
    return {
      rowspan: _row,
      colspan: _col
    }
  } else if (columnIndex === 9) {
    const _rows = tableData.map((item, index) => {
      if (index === 0) {
        return tableData.length
      } else {
        return 0
      }
    })
    const _row = _rows[rowIndex]
    const _col = _row > 0 ? 1 : 0
    return {
      rowspan: _row,
      colspan: _col
    }
  } else {
    return false
  }
}
const spanArr = computed(() => {
  return getMergeNum(tableData, "id")
})

const getMergeNum = function (data, contentType) {
  // 页面展示的数据，不一定是全部的数据，所以每次都清空之前存储的 保证遍历的数据是最新的数据。以免造成数据渲染混乱
  let integral = []
  let pos = 0
  // 遍历数据
  data.forEach((item, index) => {
    // 判断是否是第一项
    if (index === 0) {
      integral.push(1)
      pos = 0
      //  分类项
      item.classifyIndex = index
      //  分类包含的项
      item.classifyIncludeIndex = [index]
    } else {
      // 不是第一项时，就根据标识去存储
      if (data[index][contentType] === data[index - 1][contentType]) {
        // 查找到符合条件的数据时每次要把之前存储的数据+1
        integral[pos] += 1
        integral.push(0)
      } else {
        // 没有符合的数据时，要记住当前的index
        integral.push(1)
        pos = index
        //  分类项
        item.classifyIndex = index
        //  分类包含的项
        item.classifyIncludeIndex = [index]
      }
    }
  })
  return integral
}


</script>

<style lang="scss" scoped>
.sun-table {
  height: 310px;
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
