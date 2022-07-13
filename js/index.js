//立即执行函数自调用，可以防止命名污染
//行业柱状图
(function () {
  var myChart = echarts.init(document.querySelector('.bar .chart'))

  var option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: ["旅游", "教育", "游戏", "医疗", "电商", "社交", "金融"],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          color: 'rgba(255,255,255,.6)',
          fontSize: "12"
        },
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          color: 'rgba(255,255,255,.6)',
          fontSize: "12"
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          }
        },
        //分割线样式
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "直接访问",
        type: "bar",
        barWidth: "35%",
        data: [10, 52, 200, 334, 390, 330, 220],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5
        }
      }
    ]
  };

  myChart.setOption(option)

  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//语言柱状图
(function () {
  var myChart = echarts.init(document.querySelector('.bar2 .chart'))
  // 声明颜色数组
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  var option = {
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%",
    },
    xAxis: {
      show: false
    },
    yAxis: [
      {
        type: 'category',
        data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
        inverse: true,
        axisLabel: {
          color: '#fff',
          fontSize: "12"
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
      },
      {
        data: [702, 350, 610, 793, 664],
        inverse: true,
        axisLabel: {
          color: '#fff',
          fontSize: "12"
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
      }
    ],
    series: [
      {
        name: '条',
        type: 'bar',
        // 柱子之间的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 10,
        itemStyle: {
          "normal": {
            barBorderRadius: 20,
            //柱子颜色
            //写成一个函数，可以设置不同的颜色
            color: function (param) {
              return myColor[param.dataIndex]
            },
          }
        },
        // 图形上的文本标签
        label: {
          normal: {
            show: true,
            // 图形内显示
            position: "inside",
            // 文字的显示格式
            formatter: "{c}%"
          }
        },
        yAxisIndex: 0,
        data: [70, 34, 60, 78, 69],
      },
      {
        name: "框",
        type: "bar",
        barCategoryGap: 50,
        barWidth: 15,
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15
        },
        yAxisIndex: 1,
        data: [100, 100, 100, 100, 100],
      }
    ]
  };

  myChart.setOption(option)

  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//人员折线图
(function () {
  var yearData = [
    {
      year: "2021", // 年份
      data: [
        // 两个数组是因为有两条线
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ]
    },
    {
      year: "2022", // 年份
      data: [
        // 两个数组是因为有两条线
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
      ]
    }
  ];
  var myChart = echarts.init(document.querySelector(".line .chart"));
  var option = {
    // 通过这个color修改两条线的颜色
    color: ["#00f2f1", "#ed3f35"],
    tooltip: {
      trigger: "axis"
    },
    legend: {
      // 如果series 对象有name 值，则 legend可以不用写data
      // 修改图例组件 文字颜色
      textStyle: {
        color: "#4c9bfd"
      },
      // 这个10% 必须加引号
      right: "10%"
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true, // 显示边框
      borderColor: "#012f4a", // 边框颜色
      containLabel: true // 包含刻度文字在内
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ],
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: "#4c9bfd" // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: "value",
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: "#4c9bfd" // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a" // 分割线颜色
        }
      }
    },
    series: [
      {
        name: "新增粉丝",
        type: "line",
        // true 可以让我们的折线显示带有弧度
        smooth: true,
        data: yearData[0].data[0]
      },
      {
        name: "新增游客",
        type: "line",
        smooth: true,
        data: yearData[0].data[1]
      }
    ]
  };

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });

  // 5.点击切换效果
  $(".line h2").on("click", "a", function () {
    // alert(1);
    // console.log($(this).index());
    // 点击 a 之后 根据当前a的索引号 找到对应的 yearData的相关对象
    // console.log(yearData[$(this).index()]);
    var obj = yearData[$(this).index()];
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    // 需要重新渲染
    myChart.setOption(option);
  });
})();