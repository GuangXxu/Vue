export default {
    //存储
    set(key , val){
        localStorage.setItem(key,JSON.stringify(val));
    },
    //获取
    get(key){
        let val = localStorage.getItem(key);
        try{
            val = JSON.parse(val);
        }finally{
            return val;
        }
    },
    //清除
    clear(){
        localStorage.clear();
    }
}