
// @ts-ignore 防抖事件
function useDebounce<T extends Function>(fn: T, delay: number): T {
    let timeoutId: null = null;
    // @ts-ignore
    return function (...args: any[]): Promise<void> {
        // @ts-ignore
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            // @ts-ignore
            fn.apply(this, args as any);
        }, delay) as unknown as Promise<void>;
    } as T;
}
export default useDebounce