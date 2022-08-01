var chart_76d45e639ae04ff9827b2de95e79a124 = echarts.init(
    document.getElementById('76d45e639ae04ff9827b2de95e79a124'), 'white', {renderer: 'canvas'});
var option_76d45e639ae04ff9827b2de95e79a124 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597"
    ],
    "series": [
        {
            "type": "pie",
            "name": "\u8bbf\u95ee\u6765\u6e90",
            "clockwise": true,
            "data": [
                {
                    "name": "\u76f4\u8fbe",
                    "value": 335
                },
                {
                    "name": "\u8425\u9500\u5e7f\u544a",
                    "value": 679
                },
                {
                    "name": "\u641c\u7d22\u5f15\u64ce",
                    "value": 1548
                }
            ],
            "radius": [
                0,
                "30%"
            ],
            "center": [
                "50%",
                "50%"
            ],
            "label": {
                "show": false,
                "position": "top",
                "margin": 8
            },
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "formatter": "{a} <br/>{b}: {c} ({d}%)",
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        },
        {
            "type": "pie",
            "name": "\u8bbf\u95ee\u6765\u6e90",
            "clockwise": true,
            "data": [
                {
                    "name": "\u76f4\u8fbe",
                    "value": 335
                },
                {
                    "name": "\u8425\u9500\u5e7f\u544a",
                    "value": 310
                },
                {
                    "name": "\u641c\u7d22\u5f15\u64ce",
                    "value": 234
                },
                {
                    "name": "\u90ae\u4ef6\u8425\u9500",
                    "value": 135
                },
                {
                    "name": "\u8054\u76df\u5e7f\u544a",
                    "value": 1048
                },
                {
                    "name": "\u89c6\u9891\u5e7f\u544a",
                    "value": 251
                },
                {
                    "name": "\u767e\u5ea6",
                    "value": 147
                },
                {
                    "name": "\u8c37\u6b4c",
                    "value": 102
                }
            ],
            "radius": [
                "40%",
                "55%"
            ],
            "center": [
                "50%",
                "50%"
            ],
            "label": {
                "show": false,
                "position": "top",
                "margin": 8
            },
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "formatter": "{a} <br/>{b}: {c} ({d}%)",
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u76f4\u8fbe",
                "\u8425\u9500\u5e7f\u544a",
                "\u641c\u7d22\u5f15\u64ce",
                "\u90ae\u4ef6\u8425\u9500",
                "\u8054\u76df\u5e7f\u544a",
                "\u89c6\u9891\u5e7f\u544a",
                "\u767e\u5ea6",
                "\u8c37\u6b4c"
            ],
            "selected": {},
            "show": true,
            "left": "left",
            "orient": "vertical",
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
    "title": [
        {
            "padding": 5,
            "itemGap": 10
        }
    ]
};
chart_76d45e639ae04ff9827b2de95e79a124.setOption(option_76d45e639ae04ff9827b2de95e79a124);