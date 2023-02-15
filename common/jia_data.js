// 假数据文件，dev模式下使用
// 首页 => 通告栏（假）、轮播图（假）、按钮功能
const home_notice = "当前的页面是首页，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"
const home_swiperList = [
  {"image_src" : 'https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg'},
  {"image_src" : 'https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg'},
  {"image_src" : 'https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg'}
]
const home_btnList = [
  {'menu': 'jkzc',"title": '健康自测', "footer": '一分钟急速小测试', "img" : '/static/btn_icons/1.png'},
  {'menu': 'bgjd',"title": '报告解读', "footer": '分析解读报告', "img" : '/static/btn_icons/2.png'},
  {'menu': 'sm',"title": '睡眠', "footer": '睡眠质量分析', "img" : '/static/btn_icons/3.png'},
  {'menu': 'ys',"title": '饮食', "footer": '均衡饮食搭配', "img" : '/static/btn_icons/4.png'},
  {'menu': 'yd',"title": '运动', "footer": '一起动起来', "img" : '/static/btn_icons/5.png'}
]
// 资讯 => 文章概要（假）
const news_articleCover = [
  {
    'id': 1,
    'title': '骨质疏松所致髋部骨折的风险管理',
    'author': '美羊羊1',
    'img' : 'https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
    'cover': '骨质疏松所致髋部骨折是一个严峻的健康问题，其发病率、死亡率及致残率均给“居高临下”，且手术风险大。',
    'time': '2022-10-07 23:17:45'
  },
  {
    'id': 2,
    'title': '骨质疏松日｜预防骨质疏松 不能一“钙”而论！',
    'author': '美羊羊2',
    'img' : '/static/tab_icons/my.png',
    'cover': '骨质疏松症已经成为 我国50岁以上人群的重要健康问题 中老年女性骨质疏松问题尤为严重...',
    'time': '2023-01-18 13:11:36'
  },
  {
    'id': 3,
    'title': '老年人光靠补钙远远不够！',
    'author': '美羊羊3',
    'img' : 'https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
    'cover': '骨质疏松作为老年人常见的慢性疾病，光靠补钙是远远不够的。',
    'time': '2023-02-10 18:07:41'
  }
]
// 资讯详情 => 文章详情（假）
const news_articleDetail = [
  {
    'id' : 1,
    'title' : '骨质疏松所致髋部骨折的风险管理',
    'author': '美羊羊1',
    'content':  `<p>这里是内容段落一，下面放置了第一个视频oo丧尸da大大da大大oooooooooooooooooooooooooo</p>
            <p><video controls="controls">
            <source src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-042c6b2e-63dd-4fe1-b729-b6327b68450a/d906ba15-9041-4137-bc3f-44a413c855e0.mp4" type="video/mp4" /></video></p>
            <p>这里是内容段落二，下面放置了第二个视频</p>
            <p><video controls="controls">
            <source src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-042c6b2e-63dd-4fe1-b729-b6327b68450a/ae4a89d7-5c7e-48d2-b6f9-0da5c848bbda.mp4" type="video/mp4" /></video></p>
            <p>后面其它更多内容...</p>  对于髋部骨质疏松骨折，应尽早手术治疗，以便患者可以早期功能锻炼，早期下床活动，降低长期卧床带来的并发症、致残率以及死亡率。
  很多患者在突然因外因所致骨折前均都忽略了骨质疏松症评估。当发生骨折时其实往往再骨折风险会成几何倍数增加。
![111.jpg](http://43.138.43.222:8088/api/file/eb44e0629bb141d5aa61e3a59c443b41.jpg)
预防骨质疏松症及骨质疏松性骨折的小建议：

1.注意合理膳食营养，多食用含钙、磷高的食品：如鱼、虾、牛奶、乳制品、鸡蛋、豆类、杂粮、绿叶蔬菜等。

2.坚持科学的生活方式：如坚持适当适量的体育锻炼，多接受日光浴。

3.避免不良的生活方式习惯：如不吸烟、不饮酒、少喝咖啡、浓茶及含碳酸饮料。

4.如既往曾骨折过，或因患有某些疾病正在或曾服用过影响骨骼健康的药物；需明确告知医生并接受相应检测，必要时需接受药物治疗。
![222.jpg](http://43.138.43.222:8088/api/file/0493dc65fa7546e4bd17759b829d3246.jpg)`,
    'time': '2022-10-07 23:17:45'
  },
  {
    'id' : 2,
    'title' : '骨质疏松日｜预防骨质疏松 不能一“钙”而论！',
    'author': '美羊羊2',
    'content': `沸羊羊你八个雅鹿~  对于髋部骨质疏松骨折，应尽早手术治疗，以便患者可以早期功能锻炼，早期下床活动，降低长期卧床带来的并发症、致残率以及死亡率。
  很多患者在突然因外因所致骨折前均都忽略了骨质疏松症评估。当发生骨折时其实往往再骨折风险会成几何倍数增加。
![111.jpg](http://43.138.43.222:8088/api/file/eb44e0629bb141d5aa61e3a59c443b41.jpg)
预防骨质疏松症及骨质疏松性骨折的小建议：
<img src="https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg" />
1.注意合理膳食营养，多食用含钙、磷高的食品：如鱼、虾、牛奶、乳制品、鸡蛋、豆类、杂粮、绿叶蔬菜等。

2.坚持科学的生活方式：如坚持适当适量的体育锻炼，多接受日光浴。

3.避免不良的生活方式习惯：如不吸烟、不饮酒、少喝咖啡、浓茶及含碳酸饮料。

4.如既往曾骨折过，或因患有某些疾病正在或曾服用过影响骨骼健康的药物；需明确告知医生并接受相应检测，必要时需接受药物治疗。
![222.jpg](http://43.138.43.222:8088/api/file/0493dc65fa7546e4bd17759b829d3246.jpg)
预防骨质疏松症及骨质疏松性骨折的小建议：

1.注意合理膳食营养，多食用含钙、磷高的食品：如鱼、虾、牛奶、乳制品、鸡蛋、豆类、杂粮、绿叶蔬菜等。

2.坚持科学的生活方式：如坚持适当适量的体育锻炼，多接受日光浴。

3.避免不良的生活方式习惯：如不吸烟、不饮酒、少喝咖啡、浓茶及含碳酸饮料。

4.如既往曾骨折过，或因患有某些疾病正在或曾服用过影响骨骼健康的药物；需明确告知医生并接受相应检测，必要时需接受药物治疗。
![222.jpg](http://43.138.43.222:8088/api/file/0493dc65fa7546e4bd17759b829d3246.jpg)
预防骨质疏松症及骨质疏松性骨折的小建议：

1.注意合理膳食营养，多食用含钙、磷高的食品：如鱼、虾、牛奶、乳制品、鸡蛋、豆类、杂粮、绿叶蔬菜等。

2.坚持科学的生活方式：如坚持适当适量的体育锻炼，多接受日光浴。

3.避免不良的生活方式习惯：如不吸烟、不饮酒、少喝咖啡、浓茶及含碳酸饮料。

4.如既往曾骨折过，或因患有某些疾病正在或曾服用过影响骨骼健康的药物；需明确告知医生并接受相应检测，必要时需接受药物治疗。
![222.jpg](http://43.138.43.222:8088/api/file/0493dc65fa7546e4bd17759b829d3246.jpg)`,
    'time': '2023-01-18 13:11:36'
  },
  {
    'id' : 3,
    'title' : '老年人光靠补钙远远不够！',
    'author': '美羊羊3',
    'content': '沸羊羊你八个雅鹿~',
    'time': '2023-02-10 18:07:41'
  }
]
// 我的 => 功能按钮
const my_btnList = [
  {'title': '基本资料','icon':{color: '#4cd964',size: '22',type: 'info'},'url': '/subpkg/my_info/my_info'},
  {'title': '我的家庭','icon':{color: '#ff0000',size: '22',type: 'home'},'url': '/subpkg/my_home/my_home'},
  {'title': '往期数据','icon':{color: '#5555ff',size: '22',type: 'refresh'},'url': '/subpkg/my_wqsj/my_wqsj'}
]
// 资料信息
const my_userinfoList = [
  {'type': 'avatar', 'title': '头像'},
  {'type': 'nickName', 'title': '昵称'},
  {'type': 'input', 'title': '姓名'},
  {'type': 'radio', 'title': '性别'},
  {'type': 'picker', 'title': '出生年月'},
  {'type': 'text', 'title': '年龄'}
]
// 往期数据
// answerid为 健康自测 答案 在数据库的id，reportid为 报告解读 在数据库的id
const my_wqsjList = [
  {
    'id': 8,
    'openid': '888',
    'time': '2020-01-02',
    'title': '您进行了骨龄报告分析解读',
    'tips': '健康状况：良好',
    'url': 'report/report?id=6',
  },
  {
    'id': 7,
    'openid': '888',
    'time': '2020-01-02',
    'title': '您进行了骨龄报告分析解读',
    'tips': '健康状况：良好',
    'url': 'report/report?id=5',
  },
  {
    'id': 6,
    'openid': '888',
    'time': '2020-01-02',
    'title': '您进行了骨龄报告分析解读',
    'tips': '健康状况：良好',
    'url': 'report/report?id=4',
  },
  {
    'id': 5,
    'openid': '888',
    'time': '2020-01-02',
    'title': '您进行了骨龄报告分析解读',
    'tips': '健康状况：良好',
    'url': 'report/report?id=3',
  },
  {
    'id': 4,
    'openid': '888',
    'time': '2020-01-02',
    'title': '您进行了骨龄报告分析解读',
    'tips': '健康状况：良好',
    'url': 'report/report?id=2',
  },
  {
    'id': 3,
    'openid': '888',
    'time': '2020-01-01',
    'title': '您进行了骨龄报告分析解读',
    'tips': '健康状况：良好',
    'url': 'report/report?id=1',
  },
  {
    'id': 2,
    'openid': '888',
    'time': '2020-01-01',
    'title': '您提交了健康自测调查表',
    'tips': '得分：88分',
    'url': 'answer/answer?id=1',
  },
  {
    'id': 1,
    'openid': '888',
    'time': '2019-12-30',
    'title': '您第一次登录注册骨康宝',
    'tips': '初次认识',
    'url': null,
  }
]
// 健康自测数据
const rt_question = [
  {
    'id': 1,
    'allow': '所有人',
    'title': '父母曾被诊断有骨质疏松或在轻微跌倒后骨折？',
    'answer': 2,
    'score': 5
  },
  {
    'id': 2,
    'allow': '所有人',
    'title': '父母中一人是驼背？',
    'answer': 2,
    'score': 5
  },
  {
    'id': 3,
    'allow': '所有人',
    'title': '年龄大于40岁？',
    'answer': 2,
    'score': 5
  },
  {
    'id': 4,
    'allow': '所有人',
    'title': '是否成年后曾因为轻摔发生骨折？',
    'answer': 2,
    'score': 5
  },
  {
    'id': 5,
    'allow': '所有人',
    'title': '是否经常摔到（去年大于3次），或因为身体较虚弱而担心摔倒？',
    'answer': 2,
    'score': 5
  },
  {
    'id': 6,
    'allow': '所有人',
    'title': '40岁后身高是否减少大于3cm？',
    'answer': 2,
    'score': 5
  },
  {
    'id': 7,
    'allow': '所有人',
    'title': '体重是否过轻？(BMI小于19kg/m*2)',
    'little_tip': '（BMI=体重(kg)/身高的平方(m*2) 举例：身高160cm，体重60kg，BMI=60/(1.6*1.6)=23.43）',
    'answer': 2,
    'score': 5
  },
  {
    'id': 8,
    'allow': '所有人',
    'title': '是否曾服用类固醇激素（例如可的松、泼尼松）连续超过3个月？',
    'little_tip' : '（类固醇激素通常用于治疗哮喘、类风湿关节炎和某些炎性疾病）',
    'answer': 2,
    'score': 5
  },
  {
    'id': 9,
    'allow': '所有人',
    'title': '是否患有类风湿关节炎？',
    'answer': 2,
    'score': 5
  },
  {
    'id': 10,
    'allow': '所有人',
    'title': '是否被诊断出有甲状腺功能亢进症或是甲状旁腺功能亢进症、1型糖尿病、克罗恩病或乳糜泻等胃肠疾病或营养不良？',
    'answer': 2,
    'score': 5
  },
  {
    'id': 11,
    'allow': '女',
    'title': '是否在45岁或以前就已经停经？',
    'answer': 2,
    'score': 5
  },
  {
    'id': 12,
    'allow': '女',
    'title': '除了怀孕、绝经或子宫切除外，是否曾停经>12个月？',
    'answer': 2,
    'score': 5
  },
  {
    'id': 13,
    'allow': '女',
    'title': '是否在50岁前切除卵巢又未服用雌、孕激素补充剂',
    'answer': 2,
    'score': 5
  },
  {
    'id': 14,
    'allow': '男生',
    'title': '是否出现过阳痿、性欲减退或其他雄激素过低的相关症状？',
    'answer': 2,
    'score': 5
  },
  {
    'id': 15,
    'allow': '所有人',
    'title': '是否经常大量饮酒，每天饮用超过两个单位的乙醇？',
    'little_tip' : '（相当于啤酒的500g、葡萄酒150g或烈性酒50g）',
    'answer': 2,
    'score': 5
  },
  {
    'id': 16,
    'allow': '所有人',
    'title': '是否目前习惯吸烟，或曾经吸烟？',
    'answer': 2,
    'score': 5
  },
  {
    'id': 17,
    'allow': '所有人',
    'title': '每天运动量<30分钟？',
    'little_tip': '（包括做家务、走路、跑步等）',
    'answer': 2,
    'score': 5
  },
  {
    'id': 18,
    'allow': '所有人',
    'title': '是否不能食用乳制品，又没有服用钙片？',
    'answer': 2,
    'score': 5
  },
  {
    'id': 19,
    'allow': '所有人',
    'title': '每天从事户外活动时间是否<10分钟，又没有服用维生素D？',
    'answer': 2,
    'score': 5
  }
]
// 我的家庭列表数据  一般来说：0-6岁为婴幼儿；7-12岁为少儿；13-17岁为青少年；18-45岁为青年；46-69岁为中年；69岁及以上为老年。
const my_homeList = [
  {'username': '王小二','type': '本人','sex': '1', 'birthday': '2022-07-04', 'age': '22'},
  {'username': '王1','type': '兄弟','sex': '1', 'birthday': '2021-07-04', 'age': '21'},
  {'username': '王2','type': '父亲','sex': '1', 'birthday': '1977-07-04', 'age': '45'},
  {'username': '曹海风','type': '奶奶','sex': '2', 'birthday': '1965-07-04', 'age': '66'}
]

const token = ''
export {
  home_swiperList,home_notice,home_btnList,
  news_articleCover,news_articleDetail,
  rt_question,
  my_btnList,token,
  my_userinfoList,my_wqsjList,my_homeList
}