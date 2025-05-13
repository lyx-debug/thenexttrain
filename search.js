function loadScript(url, callback, args) {
    // Adding the script tag to the head as suggested before
    var head = document.head;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = () => callback(args);
    script.onload = () => callback(args);
    script.async = true;

    // Fire the loading
    head.appendChild(script);
}

// 页面加载完成时自动聚焦到输入框
window.onload = function() {
    document.getElementById("stationInput").focus(); // 页面加载完成后，自动聚焦到搜索框
    showSuggestions(document.getElementById("stationInput").innerText);
};

function matchesPinyin(input, pinyin) {
    if (!pinyin) return false;
    if (pinyin.toLowerCase().includes(input.toLowerCase())) {
        return true;
    }
    const initials = pinyin.split('').filter(c => /[a-z]/.test(c)).join('');
    return initials.toLowerCase().includes(input.toLowerCase());
}

let firstStation = "";

function showSuggestions(input) {
    console.log("Show suggestions " + input);
    const autocompleteList = document.getElementById("autocomplete-list");
    autocompleteList.innerHTML = "";
    
    // Group stations by name to handle transfer stations
    const stationMap = new Map();
    
    metroLines.forEach(line => {
        line.stations.forEach(station => {
            const pinyin = pinyinPro.pinyin(station.name, { toneType: 'none' }) || "";
            const pinyinInitials = pinyin.split(" ").map(s => s[0]).join("");
            const match1 = station.name.toLowerCase().includes(input.toLowerCase());
            const match2 = pinyinInitials.toLowerCase().includes(input.toLowerCase());
            if (match1 || match2) {
                if (!stationMap.has(station.name)) {
                    stationMap.set(station.name, {
                        station: station,
                        lines: []
                    });
                }
                stationMap.get(station.name).lines.push(line);
            }
        });
    });

    firstStation = "";

    // Create suggestions from the map
    stationMap.forEach((value, stationName) => {
        if (firstStation == "") {
            firstStation = stationName;
        }

        const item = document.createElement("div");
        item.className = "autocomplete-item";
        
        // Create line circles
        const lineCircles = value.lines.map(line => {
            return `<span style="
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
            ">${line.name}</span>`;
        }).join("");
        
        item.innerHTML = `
            <strong>${stationName}</strong>
            ${lineCircles}
        `;
        
        item.addEventListener("click", () => {
            document.getElementById("stationInput").value = stationName;
            searchStation();
            autocompleteList.innerHTML = "";
        });
        
        autocompleteList.appendChild(item);
    });
}

function searchStation() {
    const autocompleteList = document.getElementById("autocomplete-list");
    autocompleteList.innerHTML = "";
    const input = document.getElementById("stationInput").value.trim();
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    // 确保点击搜索时聚焦到输入框
    document.getElementById("stationInput").focus();

    if (!input) {
        resultDiv.innerHTML = "<div>请输入站点名称</div>";
        return;
    }

    const foundLines = metroLines.filter(line => 
        line.stations.some(station => 
            station.name.toLowerCase() === input.toLowerCase()
        )
    );

    if (foundLines.length === 0) {
        resultDiv.innerHTML = "<div>未找到相关站哦，请重试～</div>";
        return;
    }

    const output = document.createElement("div");
    output.innerHTML = `<div class="station-name">${input}</div>`;

    const lineNames = foundLines.map(line => {
        // 判断是否为数字
        return isNaN(line.name) ? `${line.name}线` : `${line.name}号线`;
    }).join(" ");

    // 判断站点是否为换乘站
    const isTransferStation = foundLines.some(line =>
        line.stations.some(station => 
            station.name.toLowerCase() === input.toLowerCase() && station.isTransferStation
        )
    );

    const lineInfo = document.createElement("div");
    lineInfo.className = "line-info";
    lineInfo.style.background = isTransferStation 
        ? `linear-gradient(to right, ${foundLines.map(line => line.color).join(", ")})`
        : foundLines[0].color;

    lineInfo.innerHTML = `
        <h3>${lineNames}</h3>
    `;
    /*const stationHtmlMapping = {
        "龙江": "./station/4/龙江.html",
        "草场门": "./station/interchangestation/草场门.html",
        "云南路": "./station/4/云南路.html",
        "鼓楼": "./station/interchangestation/鼓楼.html",
        "鸡鸣寺": "./station/interchangestation/鸡鸣寺.html",
        "九华山": "./station/4/九华山.html",
        // 继续添加其他站点和对应的 HTML 页面
    };*/
    function updateStatus() {
        table = document.getElementById("lineInfo");
        table.innerHTML = "";
        clearInterval();
        for (_ of foundLines.map(line => [line.name, line.color])) {
            i = _[0]; col = _[1];
            table.innerHTML += `\
            <h1 style="-webkit-background-clip: text!important; background: ${col};">${isNaN(i) ? `${i}线` : `${i}号线`} ${input} </h1>\
            <table>\
                <thead>\
                    <tr>\
                        <th>终点站</th>\
                        <th>到站时间</th>\
                        <th>状态</th>\
                        <th>模式</th>\
                        <th>状态</th>\
                    </tr>\
                </thead>\
                <tbody id='train-table-body-${i}'>\
                </tbody>\
            </table>`;
            const moduleName = "./beautified_js/" + input + "_" + i + ".js";
            function callback(args) {
                updateTable("train-table-body-" + args, getArrivalTimesForToday(arrivalTimes));
            }
            loadScript(moduleName, callback, i);
        }
        // const htmlPage = stationHtmlMapping[input] || "./default.html";
        // window.location.href = htmlPage;
    }
    updateStatus();
    lineInfo.addEventListener("click", () => {
        const htmlPage = stationHtmlMapping[input] || "./default.html";
        window.location.href = htmlPage;
    });
    output.appendChild(lineInfo);

    resultDiv.appendChild(output);
}