const metroLines = [
    {
        name: "1",
        color: "#009ace",
        stations: [
            { name: "八卦洲大桥南", isTransferStation: false },
            { name: "笆斗山", isTransferStation: false },
            { name: "燕子矶", isTransferStation: false },
            { name: "吉祥庵", isTransferStation: false },
            { name: "晓庄", isTransferStation: true },
            //{ name: "幕府山", isTransferStation: false },
            { name: "迈皋桥", isTransferStation: false },
            { name: "南京站", isTransferStation: true },
            { name: "新模范马路", isTransferStation: false },
            { name: "玄武门", isTransferStation: false },
            { name: "鼓楼",  },
            { name: "珠江路", isTransferStation: false },
            { name: "新街口", isTransferStation: true },
            { name: "张府园", isTransferStation: false },
            { name: "三山街", isTransferStation: true },
            { name: "中华门", isTransferStation: false },
            { name: "安德门", isTransferStation: true },
            { name: "天隆寺", isTransferStation: false },
            { name: "软件大道", isTransferStation: false },
            { name: "花神庙", isTransferStation: false },
            { name: "南京南站", isTransferStation: true },
            { name:"双龙大道",isTransferStation:false },
            { name:"河定桥",isTransferStation:false },
            { name:"胜太路",isTransferStation:false },
            { name:"百家湖",isTransferStation:false },
            { name:"小龙湾",isTransferStation:false },
            { name:"竹山路",isTransferStation:true },
            { name:"天印大道",isTransferStation:false },
            { name:"南医大·江苏经贸学院",isTransferStation:false },
            { name:"南京交院",isTransferStation:false },
            { name:"中国药科大学",isTransferStation:false }
        ]
    },
    {
        name: "2",
        color: "#A6093D",
        stations: [
            { name: "鱼嘴", isTransferStation: false },
            { name: "天保街", isTransferStation: false },
            { name: "青莲街", isTransferStation: false },
            { name: "螺塘路", isTransferStation: true },
            { name: "油坊桥", isTransferStation: true },
            { name: "雨润大街", isTransferStation: false },
            { name: "元通", isTransferStation: true },
            { name: "奥体东", isTransferStation: false },
            { name: "兴隆大街", isTransferStation: false },
            { name: "集庆门大街", isTransferStation: false },
            { name: "云锦路", isTransferStation: false },
            { name: "莫愁湖", isTransferStation: false },
            { name: "汉中门", isTransferStation: false },
            { name: "上海路", isTransferStation: false },
            { name: "新街口", isTransferStation: true },
            { name: "大行宫", isTransferStation: true },
            { name: "西安门", isTransferStation: false },
            { name: "明故宫", isTransferStation: false },
            { name: "苜蓿园", isTransferStation: false },
            { name: "下马坊", isTransferStation: false },
            { name: "孝陵卫", isTransferStation: false },
            { name: "钟灵街", isTransferStation: false },
            { name: "马群", isTransferStation: true },
            { name: "金马路", isTransferStation: true },
            { name: "仙鹤门", isTransferStation: false },
            { name: "学则路", isTransferStation: false },
            { name: "仙林中心", isTransferStation: false },
            { name: "羊山公园", isTransferStation: false },
            { name: "南大仙林校区", isTransferStation: false },
            { name: "经天路", isTransferStation: false }
        ]
    },
    {
        name: "3",
        color: "#009A44",
        stations: [
            { name: "林场", isTransferStation: false },
            { name: "星火路", isTransferStation: false },
            { name: "东大成贤学院", isTransferStation: false },
            { name: "泰冯路", isTransferStation: true },
            { name: "天润城", isTransferStation: false },
            { name: "柳洲东路", isTransferStation: false },
            { name: "上元门", isTransferStation: false },
            { name: "五塘广场", isTransferStation: true },
            { name: "小市", isTransferStation: false },
            { name: "南京站", isTransferStation: true },
            { name: "南京林业大学·新庄", isTransferStation: false },
            { name: "鸡鸣寺", isTransferStation: true },
            { name: "浮桥", isTransferStation: false },
            { name: "大行宫", isTransferStation: true },
            { name: "常府街", isTransferStation: false },
            { name: "夫子庙", isTransferStation: true },
            { name: "武定门", isTransferStation: false },
            { name: "雨花门", isTransferStation: false },
            { name: "卡子门", isTransferStation: false },
            { name: "大明路", isTransferStation: true },
            { name: "明发广场", isTransferStation: false },
            { name: "南京南站", isTransferStation: true },
            { name: "宏运大道", isTransferStation: false },
            { name: "胜太西路", isTransferStation: false },
            { name: "天元西路", isTransferStation: false },
            { name: "九龙湖", isTransferStation: false },
            { name: "诚信大道", isTransferStation: true },
            { name: "东大九龙湖校区", isTransferStation: false },
            { name: "秣周东路", isTransferStation: false }
        ]
    },
    {
        name: "4",
        color: "#7D55C7",
        stations: [
            { name: "龙江", isTransferStation: false },
            { name: "草场门", isTransferStation: true },
            //{ name: "云南路", isTransferStation: true },
            { name: "云南路", isTransferStation: false },
            { name: "鼓楼", isTransferStation: true },
            { name: "鸡鸣寺", isTransferStation: true },
            { name: "九华山", isTransferStation: false },
            { name: "岗子村", isTransferStation: true },
            { name: "蒋王庙", isTransferStation: false },
            { name: "王家湾", isTransferStation: false },
            { name: "聚宝山", isTransferStation: false },
            { name: "苏宁总部·徐庄", isTransferStation: false },
            { name: "金马路", isTransferStation: true },
            { name: "汇通路", isTransferStation: false },
            { name: "灵山", isTransferStation: false },
            { name: "东流", isTransferStation: false },
            { name: "孟北", isTransferStation: false },
            { name: "西岗桦墅", isTransferStation: false },
            { name: "仙林湖", isTransferStation: false }
        ]
    },
    {
        name: "5",
        color: "#FDDA24",
        stations: [
            { name: "吉印大道", isTransferStation: true },
            { name: "九龙湖南", isTransferStation: false },
            { name: "诚信大道", isTransferStation: true },
            { name: "前庄", isTransferStation: false },
            { name: "科宁路", isTransferStation: false },
            { name: "竹山路", isTransferStation: true },
            { name: "新亭路", isTransferStation: false },
            { name: "东山", isTransferStation: false },
            { name: "文靖路", isTransferStation: false },
            { name: "东山香樟园", isTransferStation: false },
            { name: "神机营", isTransferStation: false },
            { name: "大校场", isTransferStation: false },
            { name: "七桥瓮", isTransferStation: false },
            { name: "石门坎", isTransferStation: false },
            { name: "光华门", isTransferStation: false },
            { name: "通济门", isTransferStation: false },
            { name: "夫子庙", isTransferStation: true },
            { name: "三山街", isTransferStation: true },
            { name: "朝天宫", isTransferStation: false },
            { name: "上海路", isTransferStation: true },
            { name: "五台山", isTransferStation: false },
            { name: "云南路", isTransferStation: true },
            { name: "青春广场", isTransferStation: false },
            { name: "虹桥", isTransferStation: false },
            { name: "福建路", isTransferStation: true },
            { name: "盐仓桥", isTransferStation: false },
            { name: "下关", isTransferStation: true },
            { name: "静海寺", isTransferStation: false },
            { name: "南京西站", isTransferStation: false },
            { name: "方家营", isTransferStation: false } 
        ]
    },
    {
        name: "6",
        color: "#00B2A9",
        stations: [
            { name: "南京南站", isTransferStation: true },
            { name: "夹岗", isTransferStation: false },
            { name: "十月广场", isTransferStation: false },
            { name: "兴智街", isTransferStation: false },
            { name: "兴学路", isTransferStation: false },
            { name: "燕江新城", isTransferStation: false },
            { name: "万寿", isTransferStation: true },
            { name: "营苑南路", isTransferStation: false },
            { name: "红山新城", isTransferStation: false },
            { name: "花园路", isTransferStation: false },
            { name: "岗子村", isTransferStation: true },
           /* { name: "大校场", isTransferStation: false },
            { name: "七桥瓮", isTransferStation: false },
            { name: "石门坎", isTransferStation: false },
            { name: "光华门", isTransferStation: false },
            { name: "通济门", isTransferStation: false },
            { name: "夫子庙", isTransferStation: true },
            { name: "三山街", isTransferStation: true },
            { name: "朝天宫", isTransferStation: false },
            { name: "上海路", isTransferStation: true },
            { name: "五台山", isTransferStation: false },
            { name: "云南路", isTransferStation: true },
            { name: "青春广场", isTransferStation: false },
            { name: "虹桥", isTransferStation: false },
            { name: "福建路", isTransferStation: true },
            { name: "盐仓桥", isTransferStation: false },
            { name: "下关", isTransferStation: true },
            { name: "静海寺", isTransferStation: false },*/
            { name: "金陵石化", isTransferStation: false },
            { name: "栖霞山", isTransferStation: false } 
        ]
    },


    {
        name: "7",
        color: "#4A772A",
        stations: [
            { name: "仙新路", isTransferStation: false },
            { name: "尧化门", isTransferStation: false },
            { name: "尧化新村", isTransferStation: false },
            { name: "丁家庄南", isTransferStation: false },
            { name: "丁家庄", isTransferStation: false },
            { name: "万寿", isTransferStation: false },
            { name: "晓庄", isTransferStation: true },
            { name: "幕府山", isTransferStation: false },
            { name: "五塘广场", isTransferStation: true },
            { name: "幕府西路", isTransferStation: false },
            { name: "钟阜路", isTransferStation: false },
            { name: "福建路", isTransferStation: false },
            { name: "古平岗", isTransferStation: false },
            { name: "草场门", isTransferStation: true },
            { name: "清凉山", isTransferStation: false },
            { name: "莫愁湖", isTransferStation: true },
            { name: "大士茶亭", isTransferStation: false },
            { name: "南湖", isTransferStation: false },
            { name: "应天大街", isTransferStation: false },
            { name: "梦都大街东", isTransferStation: false },
            { name: "新城科技园", isTransferStation: false },
            { name: "中胜", isTransferStation: true },
            { name: "嘉陵江东街", isTransferStation: false },
            { name: "永初路", isTransferStation: true },
            { name: "太清路", isTransferStation: false },
            { name: "螺塘路", isTransferStation: true },
            { name: "西善桥", isTransferStation: false }
             
        ]
    },
    



    {
        name: "10",
        color: "#B99858",
        stations: [
            
            { name: "雨山路", isTransferStation: false },
            { name: "文德路", isTransferStation: false },
            { name: "龙华路", isTransferStation: false },
            { name: "南京工业大学", isTransferStation: false },
            { name: "浦口万汇城", isTransferStation: false },
            { name: "临江·青奥体育公园", isTransferStation: false },
            { name: "江心洲", isTransferStation: false },
            { name: "绿博园", isTransferStation: false },
            { name: "梦都大街", isTransferStation: false },
            { name: "奥体中心", isTransferStation: false },
            { name: "元通", isTransferStation: true },
            { name: "中胜", isTransferStation: true},
            { name: "小行", isTransferStation: false },
            { name: "安德门", isTransferStation: true } ,
        ]
    },



















    {
        name: "S1",
        color: "#00B2A9",
        stations: [
            { name: "南京南站", isTransferStation: true },
            { name: "翠屏山", isTransferStation: false },
            { name: "河海大学·佛城西路", isTransferStation: false },
            { name: "吉印大道", isTransferStation: true },
            { name: "正方中路", isTransferStation: false },
            { name: "翔宇路北", isTransferStation: false },
            { name: "翔宇路南", isTransferStation: true },
            { name: "禄口机场", isTransferStation: false },
            { name: "空港新城江宁", isTransferStation: true }
        ]
    },


    {
        name: "S3",
        color: "#b06c96",
        stations: [
            { name: "南京南站", isTransferStation: true },  
            { name: "景明佳园", isTransferStation: false }, 
            { name: "铁心桥", isTransferStation: false },  
            { name: "春江路", isTransferStation: false },  
            { name: "贾西", isTransferStation: false },  
            { name: "油坊桥", isTransferStation: true },  
            { name: "永初路", isTransferStation: true },  
            { name: "平良大街", isTransferStation: false },  
            { name: "吴侯街", isTransferStation: false },  
            { name: "高庙路", isTransferStation: false },  
            { name: "天保", isTransferStation: false },  
            { name: "刘村", isTransferStation: false },  
            { name: "马骡圩", isTransferStation: false },  
            { name: "兰花塘", isTransferStation: false },  
            { name: "双垅", isTransferStation: false },
            { name: "石碛河", isTransferStation: false }, 
            { name: "桥林新城", isTransferStation: false }, 
            { name: "林山", isTransferStation: false }, 
            { name: "高家冲", isTransferStation: false }
        ]
    },






    {
        name: "S6",
        color: "#B48CD7",
        stations: [

            { name: "马群", isTransferStation: true },
            { name: "百水桥", isTransferStation: false },
            { name: "麒麟门", isTransferStation: false },
            { name: "东郊小镇", isTransferStation: false },
            { name: "南京猿人洞", isTransferStation: false },
            { name: "汤山", isTransferStation: false },
            { name: "泉都大街", isTransferStation: false },
            { name: "黄梅", isTransferStation: false },
            { name: "童世界", isTransferStation: false },
            { name: "华阳", isTransferStation: false },
            { name: "崇明", isTransferStation: false },
            { name: "句容", isTransferStation: false }
        ]
    },




    {
        name: "S7",
        color: "#E99DAE",
        stations: [

            { name: "空港新城江宁", isTransferStation: true },
            { name: "柘塘", isTransferStation: false },
            { name: "空港新城溧水", isTransferStation: false },
            { name: "群力", isTransferStation: false },
            { name: "卧龙湖", isTransferStation: false },
            { name: "溧水", isTransferStation: false },
            { name: "中山湖", isTransferStation: false },
            { name: "幸庄", isTransferStation: false },
            { name: "无想山", isTransferStation: false }
        ]
    },


    {
        name: "S8",
        color: "#EA7600",
        stations: [

            { name: "金牛湖", isTransferStation: false },
            { name: "八百桥", isTransferStation: false },
            { name: "沈桥", isTransferStation: false },
            { name: "方州广场", isTransferStation: false },
            { name: "凤凰山公园", isTransferStation: false },
            { name: "雄州", isTransferStation: false },
            { name: "龙池", isTransferStation: false },
            { name: "六合开发区", isTransferStation: false },
            { name: "化工园", isTransferStation: false },
            { name: "长芦", isTransferStation: false },
            { name: "葛塘", isTransferStation: false },
            { name: "大厂", isTransferStation: false },
            { name: "卸甲甸", isTransferStation: false },
            { name: "信息工程大学", isTransferStation: false },
            { name: "高新开发区", isTransferStation: false },
            { name: "泰冯路", isTransferStation: true },
            { name: "泰山新村", isTransferStation: false },  
            { name: "毛纺厂路", isTransferStation: false }, 
            { name: "长江大桥北", isTransferStation: false }
        ]
    },



    {
        name: "S9",
        color: "#F9BB28",
        stations: [
            
            { name: "翔宇路南", isTransferStation: true },
            { name: "铜山", isTransferStation: false },
            { name: "石湫", isTransferStation: false },
            { name: "明觉", isTransferStation: false },
            { name: "团结圩", isTransferStation: false },
            { name: "高淳", isTransferStation: false }
        ]
    },
    {
        name: "接驳",
        color: "#034ba0",
        stations: [
            
            { name: "大明路", isTransferStation: true }
            
        ]
    },
];
