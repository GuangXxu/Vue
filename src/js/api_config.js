const domain = 'http://vue.studyit.io/api'

export default {
    //获取轮播图
    getLB: `${ domain }/getlunbo`,
    // 获取新闻列表
    getNL: `${ domain }/getnewslist`,
    //获取新闻详细资讯
    getND: `${ domain }/getnew`,
    //获取评论列表
    getComL:`${ domain }/getcomments`,
    //提交评论
    postComment:`${ domain }/postcomment`,

    //获取图片列表
    getIL: `${ domain }/getimages`,
    //获取分类图片
    getIC: `${ domain }/getimgcategory`,
    //获取图片详情
    getID:`${ domain }/getimageInfo`,
    //获取缩滤图
    getImg:`${ domain }/getthumimages`,

   // 商品相关接口
   goodsL: `${domain}/getgoods/`,          // 该接口后面需要一个页码: /getgoods/?pageindex=number
   goodsD: `${domain}/goods/getdesc/`,     // 该接口后面需要一个商品id: /getdesc/:id
   goodsT: `${domain}/getthumimages/`,     // 该接口后面需要一个商品id: /getthumimages/:id
   goodsP: `${domain}/goods/getinfo/`,           // 该接口后面需要一个商品id: /getinfo/:id

   // 购物车相关接口
   shopcL: `${domain}/goods/getshopcarlist/`,  // 该接口后面需要一串id: /getshopcarlist/:ids

   // 评论相关接口
   commentL: `${domain}/getcomments/`,     // 该接口后面需要一个id: /getcomments/:id
   commentS: `${domain}/postcomment/`,     // 该接口后面需要一个id: /postcomment/:id, 该需要content内容

}