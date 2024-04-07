<template>
    <div class="flex-box">
        <el-input
                v-model="searchText"
                placeholder="搜索用户..."
                clearable
                @clear="fetchUsers"
        >
            <template #append>
                <el-button @click="handleInput" type="primary" :icon="Search">搜索</el-button>
            </template>
        </el-input>
        <el-table :data="users" style="width: 100%">
            <!-- 列定义 -->
            <el-table-column type="selection" width="55"/>
            <el-table-column property="name" label="姓名" width="120"/>
            <el-table-column property="username" label="用户名"/>
        </el-table>
    </div>
</template>

<script setup lang="ts">
    import {ref, onMounted, reactive} from 'vue';
    import {ElInput, ElTable, ElButton} from 'element-plus';
    import {Search} from '@element-plus/icons-vue'
    import userApi from '../api/user'
    import $bus from '../bus' // 事件中心。本案例中用于组件间的通讯
    import useDebounce from '../utils/useDebounce' // 防抖事件
    // ...用户数据
    const users = ref([]);

    // ... 本地模拟搜索的数据，实际开发只需要从接口返回数据直接渲染即可,不需要此字段
    const searchUsers = ref([])

    // 搜索框关键字
    const searchText = ref<string>('');
    // 所选中的节点id
    const orgNodeId = ref<number>(undefined);
    // 根据选中的部门和搜索关键字获取用户列表
    // // 这里需要根据实际情况调用API获取数据
    const fetchUsers = async () => {
        getData(orgNodeId.value);
    };

    // 搜索事件
    const searchByKeys = async () => {
        searchUsers.value = []
        console.log('searchByKeys0', users.value, searchText.value)
        users.value.map(item => {
            if (item.name.includes(searchText.value)) {
                searchUsers.value.push(item)
            }
        })
        users.value = searchUsers.value
    }
    // 搜索事件
    const handleInput = (event) => {
        debouncedHandleInput(event);
    }
    // 防抖处理
    const debouncedHandleInput = useDebounce((event) => {
        searchByKeys()
    }, 500);

    const getData = (selectedOrgNodeId) => {
        users.value = []
        userApi.query({
            departmentId: selectedOrgNodeId
        }).then(res => {
            if (!selectedOrgNodeId) {
                users.value = res;
                return
            }
            res.map(item => {
                if (selectedOrgNodeId == item.departmentId) {
                    users.value.push(item)
                }
            })
        })
    }
    onMounted(() => {
        $bus.on("selectedOrgNodeId", (selectedOrgNodeId) => {
            console.log('接收到', selectedOrgNodeId)
            getData(selectedOrgNodeId)
            orgNodeId.value = selectedOrgNodeId
        })
        fetchUsers()
    })

</script>

<style scoped>
    /* 在这里添加一些基本的样式 */
    .el-input {
        margin-bottom: 10px;
    }

    .flex-box {
        display: flex;
        flex-direction: column;
    }
</style>