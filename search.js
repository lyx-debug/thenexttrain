// 动态加载脚本的工具函数
function loadScript(url, callback, args) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.async = true;
    script.onload = script.onreadystatechange = () => callback(args);
    document.head.appendChild(script);
}

// 页面加载完成时自动聚焦到输入框
window.onload = function() {
    document.getElementById("stationInput").focus(); // 页面加载完成后，自动聚焦到搜索框
    showSuggestions(document.getElementById("stationInput").innerText);
};

// 拼音匹配函数
function matchesPinyin(input, pinyin) {
    if (!pinyin) return false;
    const lowerInput = input.toLowerCase();
    const lowerPinyin = pinyin.toLowerCase();
    if (lowerPinyin.includes(lowerInput)) return true;
    const initials = pinyin.split('').filter(c => /[a-z]/.test(c)).join('').toLowerCase();
    return initials.includes(lowerInput);
}

let firstStation = "";

// 显示站点建议列表
function showSuggestions(input) {
    const autocompleteList = document.getElementById("autocomplete-list");
    autocompleteList.innerHTML = "";
    
    const stationMap = new Map();
    
    // 遍历地铁线路和站点，构建站点映射
    metroLines.forEach(line => {
        line.stations.forEach(station => {
            const stationName = getlocale(station.name);
            const pinyin = pinyinPro.pinyin(station.name, { toneType: 'none' }) || "";
            const pinyinInitials = pinyin.split(" ").map(s => s[0]).join("");

            if (stationName.toLowerCase().includes(input.toLowerCase()) || 
                pinyinInitials.toLowerCase().includes(input.toLowerCase())) {
                if (!stationMap.has(stationName)) {
                    stationMap.set(stationName, { station, lines: [] });
                }
                stationMap.get(stationName).lines.push(line);
            }
        });
    });

    firstStation = "";

    // 生成建议列表UI
    stationMap.forEach((value, stationName) => {
        if (!firstStation) firstStation = stationName;

        const item = document.createElement("div");
        item.className = "autocomplete-item";
        
        const lineCircles = value.lines.map(line => `
            <span style="
                display: inline-block;
                width: 20px;
                height: 20px;
                background: ${line.color};
                border-radius: 50%;
                text-align: center;
                line-height: 20px;
                color: white;
                font-size: 12px;
                margin-left: 5px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            ">${line.name}</span>
        `).join("");
        
        item.innerHTML = `<strong>${stationName}</strong>${lineCircles}`;
        
        item.addEventListener("click", () => {
            document.getElementById("stationInput").value = stationName;
            searchStation();
            autocompleteList.innerHTML = "";
        });
        
        autocompleteList.appendChild(item);
    });
}

// 搜索站点信息
function searchStation() {
    const autocompleteList = document.getElementById("autocomplete-list");
    const resultDiv = document.getElementById("result");
    const input = document.getElementById("stationInput").value.trim();
    
    autocompleteList.innerHTML = "";
    resultDiv.innerHTML = "";
    document.getElementById("stationInput").focus();

    if (!input) {
        resultDiv.innerHTML = "<div>Please input the station name.</div>";
        return;
    }

    // 查找包含该站点的所有线路
    const foundLines = metroLines.filter(line => 
        line.stations.some(station => 
            (getlocale(station.name) || "").toLowerCase() === input.toLowerCase()
        )
    );

    if (foundLines.length === 0) {
        resultDiv.innerHTML = "<div>Can not find the station. Please try again.</div>";
        return;
    }

    const output = document.createElement("div");
    output.innerHTML = `<div class="station-name">${input}</div>`;

    const lineNames = foundLines.map(line => getlocale_line(line.name)).join(" ");

    // 检查是否为换乘站
    const isTransferStation = foundLines.some(line =>
        line.stations.some(station => 
            getlocale(station.name).toLowerCase() === input.toLowerCase() && 
            station.isTransferStation
        )
    );

    // 创建线路信息显示
    const lineInfo = document.createElement("div");
    lineInfo.className = "line-info";
    lineInfo.style.background = isTransferStation 
        ? `linear-gradient(to right, ${foundLines.map(line => line.color).join(", ")})`
        : foundLines[0].color;
    lineInfo.innerHTML = `<h3>${lineNames}</h3>`;

    // 更新到站信息
    function updateStatus() {
        const table = document.getElementById("lineInfo");
        table.innerHTML = "";
        clearInterval();
        
        foundLines.forEach(({name: i, color: col}) => {
            table.innerHTML += `
                <h1 style="-webkit-background-clip: text!important; background: ${col};">
                    ${getlocale_line(i)} ${input}
                </h1>
                <table>
                    <thead>
                        <tr>
                            <th>${getlocale("终点站")}</th>
                            <th>${getlocale("到站时间")}</th>
                            <th>${getlocale("状态")}</th>
                            <th>${getlocale("模式")}</th>
                            <th>${getlocale("状态")}</th>
                        </tr>
                    </thead>
                    <tbody id='train-table-body-${i}'></tbody>
                </table>
            `;
            
            const moduleName = "./beautified_js/" + getzh(input) + "_" + i + ".js";
            loadScript(moduleName, args => {
                updateTable("train-table-body-" + args, getArrivalTimesForToday(arrivalTimes));
            }, i);
        });
    }
    
    updateStatus();
    lineInfo.addEventListener("click", () => {
        const htmlPage = stationHtmlMapping[input] || "./default.html";
        window.location.href = htmlPage;
    });
    
    output.appendChild(lineInfo);
    resultDiv.appendChild(output);
}