const metroLines = [
    {
        name: "1",
        color: "#009ace",
        stations: [
            { name: "八卦洲大桥南" },
            { name: "笆斗山" },
            { name: "燕子矶" },
            { name: "吉祥庵" },
            { name: "晓庄" },
            { name: "迈皋桥" },
            { name: "南京站" },
            { name: "新模范马路" },
            { name: "玄武门" },
            { name: "鼓楼",  },
            { name: "珠江路" },
            { name: "新街口" },
            { name: "张府园" },
            { name: "三山街" },
            { name: "中华门" },
            { name: "安德门" },
            { name: "天隆寺" },
            { name: "软件大道" },
            { name: "花神庙" },
            { name: "南京南站" },
            { name:"双龙大道" },
            { name:"河定桥" },
            { name:"胜太路" },
            { name:"百家湖" },
            { name:"小龙湾" },
            { name:"竹山路" },
            { name:"天印大道" },
            { name:"南医大·江苏经贸学院" },
            { name:"南京交院" },
            { name:"中国药科大学" }
        ]
    },
    {
        name: "2",
        color: "#A6093D",
        stations: [
            { name: "鱼嘴" },
            { name: "天保街" },
            { name: "青莲街" },
            { name: "螺塘路" },
            { name: "油坊桥" },
            { name: "雨润大街" },
            { name: "元通" },
            { name: "奥体东" },
            { name: "兴隆大街" },
            { name: "集庆门大街" },
            { name: "云锦路" },
            { name: "莫愁湖" },
            { name: "汉中门" },
            { name: "上海路" },
            { name: "新街口" },
            { name: "大行宫" },
            { name: "西安门" },
            { name: "明故宫" },
            { name: "苜蓿园" },
            { name: "下马坊" },
            { name: "孝陵卫" },
            { name: "钟灵街" },
            { name: "马群" },
            { name: "金马路" },
            { name: "仙鹤门" },
            { name: "学则路" },
            { name: "仙林中心" },
            { name: "羊山公园" },
            { name: "南大仙林校区" },
            { name: "经天路" }
        ]
    },
    {
        name: "3",
        color: "#009A44",
        stations: [
            { name: "林场" },
            { name: "星火路" },
            { name: "东大成贤学院" },
            { name: "泰冯路" },
            { name: "天润城" },
            { name: "柳洲东路" },
            { name: "上元门" },
            { name: "五塘广场" },
            { name: "小市" },
            { name: "南京站" },
            { name: "南京林业大学·新庄" },
            { name: "鸡鸣寺" },
            { name: "浮桥" },
            { name: "大行宫" },
            { name: "常府街" },
            { name: "夫子庙" },
            { name: "武定门" },
            { name: "雨花门" },
            { name: "卡子门" },
            { name: "大明路" },
            { name: "明发广场" },
            { name: "南京南站" },
            { name: "宏运大道" },
            { name: "胜太西路" },
            { name: "天元西路" },
            { name: "九龙湖" },
            { name: "诚信大道" },
            { name: "东大九龙湖校区" },
            { name: "秣周东路" }
        ]
    },
    {
        name: "4",
        color: "#7D55C7",
        stations: [
            { name: "龙江" },
            { name: "草场门" },
            //{ name: "云南路" },
            { name: "云南路" },
            { name: "鼓楼" },
            { name: "鸡鸣寺" },
            { name: "九华山" },
            { name: "岗子村" },
            { name: "蒋王庙" },
            { name: "王家湾" },
            { name: "聚宝山" },
            { name: "苏宁总部·徐庄" },
            { name: "金马路" },
            { name: "汇通路" },
            { name: "灵山" },
            { name: "东流" },
            { name: "孟北" },
            { name: "西岗桦墅" },
            { name: "仙林湖" }
        ]
    },
    {
        name: "5",
        color: "#FDDA24",
        stations: [
            { name: "吉印大道" },
            { name: "九龙湖南" },
            { name: "诚信大道" },
            { name: "前庄" },
            { name: "科宁路" },
            { name: "竹山路" },
            { name: "新亭路" },
            { name: "东山" },
            { name: "文靖路" },
            { name: "东山香樟园" },
            { name: "神机营" },
            { name: "大校场" },
            { name: "七桥瓮" },
            { name: "石门坎" },
            { name: "光华门" },
            { name: "通济门" },
            { name: "夫子庙" },
            { name: "三山街" },
            { name: "朝天宫" },
            { name: "上海路" },
            { name: "五台山" },
            { name: "云南路" },
            { name: "青春广场" },
            { name: "虹桥" },
            { name: "福建路" },
            { name: "盐仓桥" },
            { name: "下关" },
            { name: "静海寺" },
            { name: "南京西站" },
            { name: "方家营" } 
        ]
    },
    {
        name: "6",
        color: "#00B2A9",
        stations: [
           
            { name: "栖霞山" },
            { name: "金陵石化" },
            { name: "十月广场" },
            { name: "兴智街" },
            { name: "兴学路" },
            { name: "燕江新城" },
            { name: "万寿" },
            { name: "营苑南路" },
            { name: "红山新城" },
            { name: "花园路" },
            { name: "岗子村" },
            
            { name: "富贵山" },
            { name: "明故宫" },
            { name: "光华门" },
            { name: "中和桥" },
            { name: "应天东街" },
            { name: "市中医院" },
            { name: "机场跑道旧址" },
            { name: "夹岗" },
            { name: "南京南站" }
        ]
    },


    {
        name: "7",
        color: "#4A772A",
        stations: [
            { name: "仙新路" },
            { name: "尧化门" },
            { name: "尧化新村" },
            { name: "丁家庄南" },
            { name: "丁家庄" },
            { name: "万寿" },
            { name: "晓庄" },
            { name: "幕府山" },
            { name: "五塘广场" },
            { name: "幕府西路" },
            { name: "钟阜路" },
            { name: "福建路" },
            { name: "古平岗" },
            { name: "草场门" },
            { name: "清凉山" },
            { name: "莫愁湖" },
            { name: "大士茶亭" },
            { name: "南湖" },
            { name: "应天大街" },
            { name: "梦都大街东" },
            { name: "新城科技园" },
            { name: "中胜" },
            { name: "嘉陵江东街" },
            { name: "永初路" },
            { name: "太清路" },
            { name: "螺塘路" },
            { name: "西善桥" }
             
        ]
    },
    



    {
        name: "10",
        color: "#B99858",
        stations: [
            
            { name: "雨山路" },
            { name: "文德路" },
            { name: "龙华路" },
            { name: "南京工业大学" },
            { name: "浦口万汇城" },
            { name: "临江·青奥体育公园" },
            { name: "江心洲" },
            { name: "绿博园" },
            { name: "梦都大街" },
            { name: "奥体中心" },
            { name: "元通" },
            { name: "中胜"},
            { name: "小行" },
            { name: "安德门" } ,
        ]
    },



















    {
        name: "S1",
        color: "#00B2A9",
        stations: [
            { name: "南京南站" },
            { name: "翠屏山" },
            { name: "河海大学·佛城西路" },
            { name: "吉印大道" },
            { name: "正方中路" },
            { name: "翔宇路北" },
            { name: "翔宇路南" },
            { name: "禄口机场" },
            { name: "空港新城江宁" }
        ]
    },


    {
        name: "S3",
        color: "#b06c96",
        stations: [
            { name: "南京南站" },  
            { name: "景明佳园" }, 
            { name: "铁心桥" },  
            { name: "春江路" },  
            { name: "贾西" },  
            { name: "油坊桥" },  
            { name: "永初路" },  
            { name: "平良大街" },  
            { name: "吴侯街" },  
            { name: "高庙路" },  
            { name: "天保" },  
            { name: "刘村" },  
            { name: "马骡圩" },  
            { name: "兰花塘" },  
            { name: "双垅" },
            { name: "石碛河" }, 
            { name: "桥林新城" }, 
            { name: "林山" }, 
            { name: "高家冲" }
        ]
    },






    {
        name: "S6",
        color: "#B48CD7",
        stations: [

            { name: "马群" },
            { name: "百水桥" },
            { name: "麒麟门" },
            { name: "东郊小镇" },
            { name: "南京猿人洞" },
            { name: "汤山" },
            { name: "泉都大街" },
            { name: "黄梅" },
            { name: "童世界" },
            { name: "华阳" },
            { name: "崇明" },
            { name: "句容" }
        ]
    },




    {
        name: "S7",
        color: "#E99DAE",
        stations: [

            { name: "空港新城江宁" },
            { name: "柘塘" },
            { name: "空港新城溧水" },
            { name: "群力" },
            { name: "卧龙湖" },
            { name: "溧水" },
            { name: "中山湖" },
            { name: "幸庄" },
            { name: "无想山" }
        ]
    },


    {
        name: "S8",
        color: "#EA7600",
        stations: [

            { name: "金牛湖" },
            { name: "八百桥" },
            { name: "沈桥" },
            { name: "方州广场" },
            { name: "凤凰山公园" },
            { name: "雄州" },
            { name: "龙池" },
            { name: "六合开发区" },
            { name: "化工园" },
            { name: "长芦" },
            { name: "葛塘" },
            { name: "大厂" },
            { name: "卸甲甸" },
            { name: "信息工程大学" },
            { name: "高新开发区" },
            { name: "泰冯路" },
            { name: "泰山新村" },  
            { name: "毛纺厂路" }, 
            { name: "长江大桥北" }
        ]
    },



    {
        name: "S9",
        color: "#F9BB28",
        stations: [
            
            { name: "翔宇路南" },
            { name: "铜山" },
            { name: "石湫" },
            { name: "明觉" },
            { name: "团结圩" },
            { name: "高淳" }
        ]
    },
    {
        name: "接驳",
        color: "#034ba0",
        stations: [
            
            { name: "大明路" }
            
        ]
    },
];
