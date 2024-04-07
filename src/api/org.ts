// api.ts
// @ts-ignore
import { Department } from './organization-types';

// 模拟 API 调用获取部门数据
export const getDepartments = async (): Promise<Department[]> => {
    // 这里是模拟数据，实际应用中应该从后端 API 获取
    const departments: Department[] = [
        {
            "id": 1,
            "name": "总公司",
            "children": [
                {
                    "id": 2,
                    "name": "研发部门",
                },
                {
                    "id": 3,
                    "name": "市场部门"
                },
                {
                    "id": 4,
                    "name": "人事部门",
                },
                {
                    "id": 5,
                    "name": "总经办",
                },
            ]
        },
        {
            "id": 6,
            "name": "分公司",
            "children": [
                {
                    "id": 7,
                    "name": "销售团队"
                },
                {
                    "id": 8,
                    "name": "客服团队"
                }
            ]
        }
    ]
    return Promise.resolve(departments);
};