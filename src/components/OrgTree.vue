<template>
    <el-tree
            :data="orgData"
            node-key="id"
            :props="props"
            lazy
            :load="loadChildren"
            @node-click="handleNodeClick"
    >
    </el-tree>
</template>

<script setup lang="ts">
    import {ref} from 'vue';
    import {ElTree} from 'element-plus';
    import {getDepartments} from '../api/org' // 模拟接口数据
    import $bus from '../bus'
    console.log(222, $bus)
    // 初始组织架构数据
    const orgData = ref([]);

    const loadingNodes = ref(new Set<string>());
    const selectedOrgNodeId =  ref<number>(undefined);


    const loadChildren = (node, resolve) => {
        if (node.level === 0) {
            fetchTopLevelDepartments()
        } else {
            // 加载子级节点数据
            fetchChildren(node.data.id).then((children) => {
                node.data.children = children;
                resolve(children);
            });
        }
    };

    const fetchChildren = async (parentId: number): Promise<any[]> => {
        // 这里应该是一个API调用，根据parentId获取子节点数据
        console.log('parentId', orgData.value)
        // 模拟API调用结果
        let children = []
        orgData.value.forEach(item => {
            if(parentId == item.id) {
                console.log('模拟API调用结果111', item.children)
               if(item.children) {
                   children = item.children
               } else {
                   return
               }
            }
        })
        return children
    };

    const handleNodeClick = (data) => {
        selectedOrgNodeId.value = data.id;
        console.log('selectedOrgNodeId', selectedOrgNodeId.value)
        // 触发用户表格的查询
        // 这里可以是一个自定义事件或者直接调用用户表格组件的方法
        $bus.emit('selectedOrgNodeId', selectedOrgNodeId.value )
    };
    const props = {
        label: 'name',
        children: 'children',
    }
    // 模拟从后台获取顶级节点数据的方法
    const fetchTopLevelDepartments = () =>{
        getDepartments().then(res => {
            console.log('模拟从后台获取顶级节点数据的方法', res)
            orgData.value = res
        })
    }

</script>