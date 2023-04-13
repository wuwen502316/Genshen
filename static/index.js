function INITBODY() {
    // ~(function () {
    //     //初始化背景图
    //     let bg = ["bg1.gif", "bg2.gif"];
    //     let len = bg.length;
    //     let n = Math.floor(Math.random() * 100) % len;
    //     let body = document.querySelector("body");
    //     body.style.backgroundImage = `url('./static/images/${bg[n]}')`;
    // }())

    ~(function () {
        //特殊日子使页面变灰色
        const attribute = {
            "href": "./static/css/MemorialDay.css",
            "name": "MemorialDay",
            "title": "公祭日",
            "type": "text/css",
            "rel": "stylesheet"
        }
        let date = new Date();
        let _month = date.getMonth() + 1;
        let _day = date.getDate();
        let MemorialDay = ["4.4", "12.13", '4.9'];
        for (const key of MemorialDay) {
            let month = key.split(".")[0];
            let day = key.split(".")[1];
            if (_month == month && _day == day) {
                let link = document.createElement("link");
                for (const attr in attribute) {
                    if (Object.hasOwnProperty.call(attribute, attr)) {
                        link[attr] = attribute[attr];
                    }
                }
                document.querySelector("head").appendChild(link);
            }
        }
    }())

    ~(function () {
        //适配屏幕
        const devicePixelRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
        let scale = 1.0 / devicePixelRatio;
        let meta = document.createElement("meta");
        meta.name = "viewport";
        meta.content =
            `width=device-width, initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}, user-scalable=no`;
        document.querySelector("head").appendChild(meta);
    }())
}
INITBODY();