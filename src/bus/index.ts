// 引入mitt插件：mitt是一个方法，返回执行会返回bus对象
import mitt from 'mitt';
const $bus = mitt();
export default $bus;