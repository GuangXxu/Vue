    //向外导出一个 时间格式化的过滤器
    export default function(tiem){
            var date = new Date(tiem);
            return `${ date.getFullYear() }-${ date.getMonth() + 1 }-${ date.getDate() }`;
    } 
  