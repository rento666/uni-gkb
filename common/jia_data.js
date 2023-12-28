// 假数据文件，dev模式下使用
// 首页 => 通告栏（假）、轮播图（假）、按钮功能
const home_notice = "骨康宝是一款与骨密度健康有关的微信小程序。"
const home_swiperList = [
  {"image_src" : 'https://ts1.cn.mm.bing.net/th/id/R-C.16adf2a414994b01e7d744a19e1bca6d?rik=nqnZFgbCu0U44g&riu=http%3A%2F%2Fwww.kidgrow.com%2Fcontent%2Fupload%2F201801146365154225800029875210853.gif&ehk=xwT734oUl58vzmEK4bU2lmZrrVeV4MG54snY%2BiUmHX4%3D&risl=&pid=ImgRaw&r=0'},
  {"image_src" : 'https://news-cdn.medlive.cn/uploadfile/ueditor/php/upload/image/20201020/1603183902239189.jpg'},
  {"image_src" : 'https://ts1.cn.mm.bing.net/th/id/R-C.ca5fa658c416f7eab5090be7cb336959?rik=RzSPq92K3VDdEg&riu=http%3a%2f%2fwww.kidgrow.com%2fcontent%2fupload%2f201801146365154208792411775684132.gif&ehk=4T3zrnNRol23veVlFA0%2fAPWdA39y7I7It3bXThxLbzs%3d&risl=&pid=ImgRaw&r=0'}
]
const home_btnList = [
  {'menu': 'jkzc',"title": '健康自测', "footer": '一分钟急速小测试', "img" : '/static/btn_icons/1.png'},
  {'menu': 'bgjd',"title": '报告解读', "footer": '分析解读报告', "img" : '/static/btn_icons/2.png'},
  {'menu': 'sm',"title": '睡眠', "footer": '睡眠质量分析', "img" : '/static/btn_icons/3.png'},
  {'menu': 'ys',"title": '饮食', "footer": '均衡饮食搭配', "img" : '/static/btn_icons/4.png'},
  {'menu': 'yd',"title": '运动', "footer": '一起动起来', "img" : '/static/btn_icons/5.png'}
]

// 我的 => 功能按钮
const my_btnList = [
  {'title': '基本资料','icon':{color: '#4cd964',size: '22',type: 'info'},'url': '/subpkg/my_info/my_info'},
  {'title': '我的家庭','icon':{color: '#ff0000',size: '22',type: 'home'},'url': '/subpkg/my_family/my_family'},
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
// 成员信息
const family_userinfoList = [
  {'type': 'text_type', 'title': '亲属关系'},
  {'type': 'input', 'title': '姓名'},
  {'type': 'radio', 'title': '性别'},
  {'type': 'picker', 'title': '出生年月'},
  {'type': 'text', 'title': '年龄'}
]
// 往期数据
// answerid为 健康自测 答案 在数据库的id，reportid为 报告解读 在数据库的id
// 算了吧，url有点难搞，还是写成answer吧，但是数据库就不改了。。。
const my_wqsjList = [
  {
    'id': 8,
    'userid': '888',
    'time': '2020-01-02',
    'title': '您进行了骨龄报告分析解读',
    'tips': '健康状况：良好',
    'url': 'report/report?id=6',
  },
  {
    'id': 7,
    'userid': '888',
    'time': '2020-01-02',
    'title': '您进行了骨龄报告分析解读',
    'tips': '健康状况：良好',
    'url': 'report/report?id=5',
  },
  {
    'id': 6,
    'userid': '888',
    'time': '2020-01-02',
    'title': '您进行了骨龄报告分析解读',
    'tips': '健康状况：良好',
    'url': 'report/report?id=4',
  },
  {
    'id': 5,
    'userid': '888',
    'time': '2020-01-02',
    'title': '您进行了骨龄报告分析解读',
    'tips': '健康状况：良好',
    'url': 'report/report?id=3',
  },
  {
    'id': 4,
    'userid': '888',
    'time': '2020-01-02',
    'title': '您进行了骨龄报告分析解读',
    'tips': '健康状况：良好',
    'url': 'report/report?id=2',
  },
  {
    'id': 3,
    'userid': '888',
    'time': '2020-01-01',
    'title': '您进行了骨龄报告分析解读',
    'tips': '健康状况：良好',
    'url': 'report/report?id=1',
  },
  {
    'id': 2,
    'userid': '888',
    'time': '2020-01-01',
    'title': '您提交了健康自测调查表',
    'tips': '得分：88分',
    'url': 'answer/answer?id=1',
  },
  {
    'id': 1,
    'userid': '888',
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
const rt_question_boy = [
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
const rt_question_girl = [
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

// 睡眠问题的一些固定数据
const sm_list = [
  {
    'id': 1,
    'title': '指导方案',
    'extra': '主要思想',
    'description': '保持黑暗无光。多项研究表明，入睡前和睡眠时暴露于光线之下，褪黑激素分泌会受到抑制，进而影响睡眠质量。所以，入睡前应关闭或遮挡所有发光源。若窗户漏光或习惯睡懒觉，可安装遮光窗帘。如果休息空间无法做到完全遮光，也可选择戴眼罩睡觉。',
  },
  {
    'id': 2,
    'title': '入睡困难',
    'extra': '问题描述',
    'description': '我们晚上22点左右上床睡觉，但是翻来覆去一直睡不着，到了24点甚至于到了凌晨一点两点还没睡着。后面可能迷迷糊糊的睡一下，睡得也并不安神，第二天就出现了头昏脑涨，精神疲惫，等等一些失眠的痛苦症状。',
    'answer': "1、调整呼吸法。通过呼吸调整可以缓解难以入眠的焦虑心理，先进行有规律的呼吸，逐渐的将呼吸变得平稳、缓慢，一般呼吸缓慢以后大概十分钟就可以进入睡眠状态。<br>2、分散注意力。在人精神高度紧张的时候容易出现入睡困难的情况，所以要想快速的入睡就要将高度集中的注意力分散。在睡觉前不要想着赶快入睡，可以回忆白天发生的一些事情或者是幻想自己比较感兴趣的事情，一般很快就可以入睡了。<br>3、下午3点之后避免饮用或食用一些含咖啡因，或者引起神经兴奋的东西。例如咖啡、酒，也不要大量的饮水。<br>4、睡前冲个热水澡。睡前1小时洗个热水澡，水温不低于38℃，时间不少于20分钟，可以帮助入眠。<br>5、经常运动有助于睡眠。但是，失眠的人睡前两小时内不要做剧烈的运动<br>。6、降低卧室室温。当卧室温度在18C-24℃、床上温度为27C时，睡眠质量最好。<br>7、睡前3小时最好不要进食。否则容易导致胃酸反流，影响睡眠。<br>8、睡前可以喝一杯牛奶。牛奶能有效的改善失眠的状况，起到镇静安眠的作用。<br>9、尽量保持规律的作息。每天按时起床，按时睡觉，保持规律的作息习惯。慢慢的身体就会适应什么时候必须入睡。<br>10、不要补觉。晚上没睡好，第二天白天再去补觉，会让身体逐渐习惯白天睡觉晚上清醒的规律。时间一长，自己就会养成这个习惯，更难调整了。如果白天感觉困倦，可以小憩一会儿，但不要长时间睡眠。<br>11、白噪音。失眠的人可以聆听平淡而有节律的白噪音。例如：风声、水声以及春雨淅沥淅沥的声音，可以加快入睡速度，减少睡眠被干扰中断。也可以在【好眠】内找到“助眠音乐”，帮助你快速入睡。<br>12、睡前读书。可以在床头准备一本书，越难看懂的越好，认真看几页翻一翻感觉累自然瞌睡就来了。<br>13、睡前冥想。平时可以做一些冥想的练习，调节自己的情绪，缓解睡眠障碍。<br>14、多运动多晒太阳。做运动除了令身体有感疲倦外，更可透过运动时所吸收新鲜空气及阳光，抑制体内的褪黑激素，减少焦虑及抑郁等负面情绪，有助带着放松的好心情入睡，提升睡眠质素。<br>15、营造入睡氛围。卧室里的气氛绝对有助睡眠，昏暗的灯光、20℃至23℃的温度、加上少许有助舒缓神经的熏衣草香气都可以帮助我们安然入睡。<br>16、绿色果汁助眠。改善睡眠先决条件必须提高睡眠的褪黑激素，这是一种调节睡眠生理时钟的荷尔蒙。每天早上或是入睡前2小时喝一些新鲜的果汁，每晚能增加长达90分钟的睡眠时间。<br>17、保持黑暗无光。多项研究表明，入睡前和睡眠时暴露于光线之下，褪黑激素分泌会受到抑制，进而影响睡眠质量。所以，入睡前应关闭或遮挡所有发光源。若窗户漏光或习惯睡懒觉，可安装遮光窗帘。如果休息空间无法做到完全遮光，也可选择戴眼罩睡觉。<br>18、好质量的床上用品。买一张舒适可靠的床垫。这份投资很值得，因为你要花你人生的三分之一时间在床上。使用柔软舒适的床单和被子，可以让你的身体得到放松，有助于你快速入睡。<br>19、转动眼珠法。闭上双眼，然后慢慢转动眼珠三次。据专家解释，当人们处于睡眠状态时，眼珠会不断转动，所以此法是模拟沉睡状态下的眼睛运动，它会刺激褪黑素（助眠荷尔蒙）的分泌，让你迅速入睡。<br>20、睡眠环境空气流畅，隔音效果好。睡眠环境也是影响睡眠质量的一大原因，所以保证我们的空气流畅，隔音效果好很重要！",
  }
]

// 推荐运动的一些数据，type=1为户外，type=2为户内
const yd_list = [
  {
    type: '1',
    url: 'https://cdn.colorhub.me/J1ljmghVz-k/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vMzYvODUvNGI5NzFiY2MwYmU2Njg3ZTUzMmJhNjNhYzI5M2IxMzcxMDdiMzY4NS5qcGVn.webp',
    text:'徒步',
  },
  {
    type: '1',
    url: 'https://cdn.colorhub.me/ej85jxYklSU/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vMGMvNmIvZDM3MmQzZTJlZWNmNDFmZWEzZTgwMTc4NmNjYzc0ZDg5YWNmMGM2Yi5qcGc.webp',
    text:'滑雪',
  },
  {
    type: '1',
    url: 'https://cdn.colorhub.me/nBuUK30b9s8/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vMjEvNWQvYWI2ZGQ5ZGFlNTVmZTc1MDRkY2Q3Y2I0OWE1OTIxZWVhOTg0MjE1ZC5qcGVn.webp',
    text: '钓鱼',
  },
  {
    type: '2',
    url: 'https://cdn.colorhub.me/xy6joC_dbq8/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vNTgvMGEvNzJjZTdlZmMzNTY0NjVkZWUwN2E3YTlmODRhNmM4NDU2MTZkNTgwYS5qcGVn.webp',
    text:'乒乓球',
  },
  {
    type: '2',
    url: 'https://cdn.colorhub.me/hjmi-AKf8dc/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vZDQvM2EvYzczNGIzM2Y3ZThiOWVmYThjMTY3Yzk2ZTIxMzVmODNiOWQyZDQzYS5qcGVn.webp',
    text:'瑜伽',
  },
  {
    type: '2',
    url: 'https://cdn.colorhub.me/RStmC6aaTmY/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vM2IvNmYvYTEzNThmNGNkZDdjZTg1MDQyNTQwZjQxODU4OWJjZjQwOGJjM2I2Zi5qcGc.webp',
    text:'跳绳',
  },
]
const ydsc = [{'id':1,'title':'户外运动时长','time': '19:12'},{'id':2,'title':'户内运动时长','time':'02:35'}]
// pid => parentid 父类别序号（父类的id），为0表示根节点
// level => 第几节点，根为0，子为1，孙为2，……
const ys_list = [
  {
    'id': 1,
    'name': '蔬菜',
    'pid': 0,
    'level': 0,
    'icon': '',
    'children':[
      {
        'id': 3,
        'name': '叶菜类',
        'pid': 1,
        'level': 1,
        'icon': '',
        'children': [
          {
            'id': 5,
            'name': '芥菜',
            'pid': 3,
            'level': 2,
            'icon': 'https://ts1.cn.mm.bing.net/th?id=OIP-C.7cHW9AUikxF4etVnl3VF1gHaHa&w=174&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
          },
          {
            'id': 6,
            'name': '生菜',
            'pid': 3,
            'level': 2,
            'icon': 'https://ts1.cn.mm.bing.net/th?id=OIP-C.gmR7yetDhEegaQERozwCTwHaGt&w=176&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
          },
          {
            'id': 7,
            'name': '菠菜',
            'pid': 3,
            'level': 2,
            'icon': 'https://ts1.cn.mm.bing.net/th?id=OIP-C.gtibDYQnrb2I91dZepSu_gHaHa&w=174&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
          },
          {
            'id': 8,
            'name': '油菜',
            'pid': 3,
            'level': 2,
            'icon': 'https://ts1.cn.mm.bing.net/th?id=OIP-C.V_ArF_1SB16y8YLLllvDUQHaHa&w=174&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
          },
          {
            'id': 9,
            'name': '白菜',
            'pid': 3,
            'level': 2,
            'icon': 'https://ts1.cn.mm.bing.net/th?id=OIP-C.sxbJvdY2WfF6THheFYD8WQHaFj&w=176&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
          },
        ]
      },
      {
        'id': 4,
        'name': '根菜类',
        'pid': 1,
        'level': 1,
        'icon': '',
        'children': [
          {
            'id': 6,
            'name': '芦笋',
            'pid': 3,
            'level': 2,
            'icon': 'https://ts1.cn.mm.bing.net/th?id=OIP-C.U4KJ-e7yDQv_d70Kfd4hkQHaE7&w=188&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
          },
          {
            'id': 7,
            'name': '萝卜',
            'pid': 3,
            'level': 2,
            'icon': 'https://ts1.cn.mm.bing.net/th?id=OIP-C.btn-4eDFmH_NEOoV7pUjAgHaHN&w=193&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
          },
          {
            'id': 8,
            'name': '土豆',
            'pid': 3,
            'level': 2,
            'icon': 'https://ts1.cn.mm.bing.net/th?id=OIP-C.ysM_r7FJmVQoqE-CvXmnqwHaHa&w=175&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
          },
          {
            'id': 9,
            'name': '洋葱',
            'pid': 3,
            'level': 2,
            'icon': 'https://ts1.cn.mm.bing.net/th?id=OIP-C.-syQ-4028Wrm13Ry1zx2ZwHaFj&w=176&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
          },
          {
            'id': 10,
            'name': '芋头',
            'pid': 3,
            'level': 2,
            'icon': 'https://ts1.cn.mm.bing.net/th?id=OIP-C.Ax-y6BJzaS4NZd1DSXKLaAHaHa&w=184&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
          }
        ]
      },
    ]
  },
  {
    'id': 2,
    'name': '水果',
    'pid': 0,
    'level': 0,
    'icon': '',
    'children':[
      {
        'id': 1,
        'name': '瓜果类',
        'children': [
          {
            'id': 1,
            'name': '西瓜',
            'icon': 'https://ts1.cn.mm.bing.net/th?id=OIP-C.7Er0Nhw8eotl3r6O7KXAKAHaFj&w=176&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
          },
          {
            'id': 2,
            'name': '哈密瓜',
            'icon': 'https://ts1.cn.mm.bing.net/th?id=OIP-C.ityisltgHl54ld_zNGj-GgHaHa&w=187&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
          },
          {
            'id': 3,
            'name': '甜瓜',
            'icon': 'https://ts1.cn.mm.bing.net/th?id=OIP-C.CVWpdve7eQyGL66ifl4VUAHaHa&w=174&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
          }
        ]
      },
      {
        'id': 2,
        'name': '浆果类',
        'children': [
          {
            'id': 1,
            'name': '葡萄',
            'icon': 'https://ts1.cn.mm.bing.net/th?id=OIP-C.Bn681LBe3Ap4mx2jxGIvvQHaE8&w=190&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
          },
          {
            'id': 2,
            'name': '草莓',
            'icon': 'https://ts1.cn.mm.bing.net/th?id=OIP-C.ZGoSBlBQp1LjScOEznPxcwHaFU&w=188&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
          },
          {
            'id': 3,
            'name': '蓝莓',
            'icon': 'https://ts1.cn.mm.bing.net/th?id=OIP-C.t7fC1z0_2pMY1FT2DHW0VgHaE7&w=176&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
          }
        ]
      },
      {
        'id': 3,
        'name': '核果类',
        'children': [
          {
            'id': 1,
            'name': '桃',
            'icon': 'https://ts1.cn.mm.bing.net/th?id=OIP-C.42VnqwtTI1ok_8eKVNb02QHaE8&w=176&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
          },
          {
            'id': 2,
            'name': '李',
            'icon': 'https://ts1.cn.mm.bing.net/th?id=OIP-C.UUYmfUR8OGOEFvxnJo7H_AHaE8&w=185&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
          },
          {
            'id': 3,
            'name': '杏',
            'icon': 'https://ts1.cn.mm.bing.net/th?id=OIP-C.ZPtDfrkiGOP7QJwWYFY-oAHaE7&w=169&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
          }
        ]
      },
      {
        'id': 4,
        'name': '仁果类',
        'children': [
          {
            'id': 1,
            'name': '苹果',
            'icon': 'https://ts1.cn.mm.bing.net/th?id=OIP-C.jLlKVzDi7SKjb3VmaA9FXQHaHa&w=177&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
          },
          {
            'id': 2,
            'name': '梨',
            'icon': 'https://ts1.cn.mm.bing.net/th?id=OIP-C.jowsZs0OsYaiCsx6cRmY_wHaLH&w=138&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
          }
        ]
      }
    ]
  },
  {
    'id': 3,
    'name': '肉蛋奶',
    'children':[
      {
        'id': 1,
        'name': '肉类',
        'children': [
          {
            'id': 1,
            'name': '猪肉',
            'icon': 'https://t8.baidu.com/it/u=3821240178,2509962689&fm=3035&app=3035&size=f242,162&n=0&g=0n&f=JPEG?s=19F377D94C37FC155988D4E003003055&sec=1702530497&t=6753e6db892255d4b66b61ced597a8d5'
          },
          {
            'id': 2,
            'name': '牛肉',
            'icon': 'https://img1.baidu.com/it/u=2679892178,3925039333&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1702573200&t=41807f1ffea7af48815ff12f2bbbe203'
          },
          {
            'id': 3,
            'name': '羊肉',
            'icon': 'https://img2.baidu.com/it/u=197223610,2040955794&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1702573200&t=64fc4d9bc00bbe496e68edb63ab1eccb'
          },
          {
            'id': 4,
            'name': '鸭肉',
            'icon': 'https://t8.baidu.com/it/u=2214400679,1514521783&fm=3035&app=3035&size=f242,162&n=0&g=0n&f=JPEG?s=999025DFFEAB5F0769AB44EB0300E01A&sec=1702530547&t=e3b136db58b6c3765dc9ed87e12d5455'
          },
          {
            'id': 5,
            'name': '鸡肉',
            'icon': 'https://paimgcdn.baidu.com/435F9582CBDCE4DF?src=http%3A%2F%2Fms.bdimg.com%2Fdsp-image%2F14464350287.jpg&rz=urar_2_968_600&v=0'
          }
        ]
      },
      {
        'id': 2,
        'name': '蛋类',
        'children': [
          {
            'id': 1,
            'name': '鸡蛋',
            'icon': 'https://img0.baidu.com/it/u=131771638,1709011280&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1702573200&t=af9accb1236cd55539ce0467fd9877ff'
          },
          {
            'id': 2,
            'name': '鸭蛋',
            'icon': 'https://img2.baidu.com/it/u=1436581123,3240868371&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1702573200&t=231486c12ed90b252376f7ee0963b838'
          },
          {
            'id': 3,
            'name': '鹅蛋',
            'icon': 'https://gimg3.baidu.com/topone/src=https%3A%2F%2Fbkimg.cdn.bcebos.com%2Fsmart%2Fd1a20cf431adcbef0108b98da6af2edda3cc9f79-bkimg-process%2Cv_1%2Crw_1%2Crh_1%2Cmaxl_300%2Cpad_1%3Fx-bce-process%3Dimage%2Fformat%2Cf_auto%26x-bce-process%3Dimage%2Fresize%2Cm_pad%2Cw_348%2Ch_348%2Ccolor_ffffff&refer=http%3A%2F%2Fwww.baidu.com&app=2011&size=w931&n=0&g=0n&er=404&q=75&fmt=auto&maxorilen2heic=2000000?sec=1702573200&t=11da1c6d992ac28dd70558fd41d57da2'
          }
        ]
      },
      {
        'id':3,
        'name': '奶类',
        'children': [
          {
            'id': 1,
            'name': '牛奶',
            'icon': 'https://img1.baidu.com/it/u=795271070,1499089258&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1702573200&t=88888daf5f6fe43aed8d33d033b697aa'
          },
          {
            'id': 1,
            'name': '羊奶',
            'icon': 'https://img1.baidu.com/it/u=374248075,3423430544&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1702573200&t=d6846a879b3852c6769fb3c7d85dd042'
          },
          {
            'id': 1,
            'name': '酸奶',
            'icon': 'https://img2.baidu.com/it/u=1974857531,1693447141&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1702573200&t=7134f2e26b717a3cb19d99e8bdb85efa'
          },
          {
            'id': 1,
            'name': '奶酪',
            'icon': 'https://img0.baidu.com/it/u=2821807080,1880084769&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1702573200&t=dda25bb3a7774b036ed5f45dfeec144e'
          }
        ]
      }
    ]
  }
]

const token = ''
export {
  home_swiperList,home_notice,home_btnList,
  rt_question,rt_question_boy,rt_question_girl,
  my_btnList,token,
  my_userinfoList,my_wqsjList,family_userinfoList,
  sm_list,yd_list,ydsc,ys_list
}