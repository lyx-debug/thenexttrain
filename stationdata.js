const metroLines = [
    {
        name: "1",
        color: "#009ace",
        stations: [
            { name: "八卦洲大桥南", isTransferStation: false },
            { name: "笆斗山", isTransferStation: false },
            { name: "燕子矶", isTransferStation: false },
            { name: "吉祥庵", isTransferStation: false },
            { name: "晓庄", isTransferStation: false },
            { name: "幕府山", isTransferStation: false },
            { name: "迈皋桥", isTransferStation: false },
            { name: "南京站", isTransferStation: true },
            { name: "新模范马路", isTransferStation: false },
            { name: "玄武门", isTransferStation: false },
            { name: "鼓楼", isTransferStation: true },
            { name: "珠江路", isTransferStation: false },
            { name: "新街口", isTransferStation: true },
            { name: "张府园", isTransferStation: false },
            { name: "三山街", isTransferStation: true },
            { name: "中华门", isTransferStation: false },
            { name: "安德门", isTransferStation: false },
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
            { name: "螺塘路", isTransferStation: false },
            { name: "油坊桥", isTransferStation: false },
            { name: "雨润大街", isTransferStation: false },
            { name: "元通", isTransferStation: false },
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
            { name: "马群", isTransferStation: false }
        ]
    },
    {
        name: "3",
        color: "#009A44",
        stations: [
            { name: "林场", isTransferStation: false },
            { name: "星火路", isTransferStation: false },
            { name: "东大成贤学院", isTransferStation: false },
            { name: "泰冯路", isTransferStation: false },
            { name: "天润城", isTransferStation: false },
            { name: "柳洲东路", isTransferStation: false },
            { name: "上元门", isTransferStation: false },
            { name: "五塘广场", isTransferStation: false },
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
            { name: "大明路", isTransferStation: false },
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
            { name: "草场门", isTransferStation: false },
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
            { name: "文靖路", isTransferStation: false }
            /*{ name: "东山香樟园", isTransferStation: false },
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
            { name: "方家营", isTransferStation: false } */
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
            { name: "禄口机场", isTransferStation: false }
        ]
    },


    {
        name: "S3",
        color: "#b06c96",
        stations: [
            { name: "南京南站", isTransferStation: true },
            /*{ name: "翠屏山", isTransferStation: false },
            { name: "河海大学·佛城西路", isTransferStation: false },
            { name: "吉印大道", isTransferStation: true },
            { name: "正方中路", isTransferStation: false },
            { name: "翔宇路北", isTransferStation: false },
            { name: "翔宇路南", isTransferStation: true },
            { name: "禄口机场", isTransferStation: false }*/
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
    }
];
