// @ts-ignore
import delay from '../utils/delay'

interface User {
    id: number | string
    name: string,
    username: string,
    position: string, // 岗位
    departmentId: number | string // 所属机构
}

const getUserData = (): User[] => {
    return [
        {
            "id": 11,
            "name": "张三",
            "username": "zhangsan",
            "position": "高级前端工程师",
            "departmentId": 1
        },
        {
            "id": 22,
            "name": "李四",
            "username": "lisi",
            "position": "市场经理",
            "departmentId": 2
        },
        {
            "id": 33,
            "name": "王五",
            "username": "wangwu",
            "position": "后端开发工程师",
            "departmentId": 3
        },
        {
            "id": 34,
            "name": "王六",
            "username": "wangliu",
            "position": "后端开发工程师",
            "departmentId": 3
        },
        {
            "id": 44,
            "name": "赵六",
            "username": "zhaoliu",
            "position": "销售顾问",
            "departmentId": 4
        },
        {
            "id": 55,
            "name": "钱七",
            "username": "qianqi",
            "departmentId": 5,
            "position": "客服代表"
        }
    ]
}


const query = (params: Partial<User & { departmentId: number | string }>) => {
    return delay(getUserData())
}

const userApi = {
    query,
}

export default userApi
