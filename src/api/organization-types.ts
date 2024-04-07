// organization-types.ts
export interface Department {
    id: number;
    name: string;
    children?: Department[]; // 如果有子部门，则此字段非空
}
