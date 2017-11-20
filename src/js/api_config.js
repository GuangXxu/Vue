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
    getImg:`${ domain }/getthumimages`

}