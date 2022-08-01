var chart_b60e6fbc5bd64263bb98a7cd90abbb9b = echarts.init(
    document.getElementById('b60e6fbc5bd64263bb98a7cd90abbb9b'), 'white', {renderer: 'canvas'});
var option_b60e6fbc5bd64263bb98a7cd90abbb9b = {
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
            "type": "map",
            "name": "\u5546\u5bb6A",
            "label": {
                "show": false,
                "position": "top",
                "margin": 8
            },
            "mapType": "world",
            "data": [
                {
                    "name": "China",
                    "value": 76
                },
                {
                    "name": "Canada",
                    "value": 59
                },
                {
                    "name": "Brazil",
                    "value": 72
                },
                {
                    "name": "Russia",
                    "value": 49
                },
                {
                    "name": "United States",
                    "value": 40
                },
                {
                    "name": "Africa",
                    "value": 63
                },
                {
                    "name": "Germany",
                    "value": 23
                }
            ],
            "roam": true,
            "aspectScale": 0.75,
            "nameProperty": "name",
            "selectedMode": false,
            "zoom": 1,
            "mapValueCalculation": "sum",
            "showLegendSymbol": true,
            "emphasis": {},
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
                "\u5546\u5bb6A"
            ],
            "selected": {
                "\u5546\u5bb6A": true
            },
            "show": true,
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
            "text": "Map-\u4e16\u754c\u5730\u56fe",
            "padding": 5,
            "itemGap": 10
        }
    ],
    "visualMap": {
        "show": true,
        "type": "continuous",
        "min": 0,
        "max": 200,
        "inRange": {
            "color": [
                "#50a3ba",
                "#eac763",
                "#d94e5d"
            ]
        },
        "calculable": true,
        "inverse": false,
        "splitNumber": 5,
        "orient": "vertical",
        "showLabel": true,
        "itemWidth": 20,
        "itemHeight": 140,
        "borderWidth": 0
    }
};
chart_b60e6fbc5bd64263bb98a7cd90abbb9b.setOption(option_b60e6fbc5bd64263bb98a7cd90abbb9b);