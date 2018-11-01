<template>
    <div id="echarts" :style="{width: '1200px', height: '775px'}"></div>
</template>

<script>
    export default {
      props:['message'],
      name: "echarts",
      data(){
        return{
          myChart:'',
          listData1:[],
          sT:'',
          option:{
            tooltip : {
              trigger: 'item',
              formatter: '{b}'
            },
            series : [
              {
                name: '中国',
                type: 'map',
                mapType: 'china',
                selectedMode : 'single',
                itemStyle:{
                  normal: {//未选中状态
                    borderWidth:2,//边框大小
                    borderColor:'#84679a',
                    areaColor: '#614775',//背景颜色
                    label: {
                      show: true,//显示名称
                      textStyle:{
                        color:'#ffffff',
                        fontSize:'12'
                      }
                    }
                  },
                  emphasis: {// 也是选中样式
                    borderWidth:2,
                    borderColor:'#84679a',
                    areaColor: '#ede8e3',
                    label: {
                      show: true,
                      textStyle: {
                        color: '#eb9000',
                        fontSize:'14',
                        fontWeight:'bold'
                      }
                    }
                  }
                },
                data:[
                  {name:'广东',selected:false},
                  {name:'安徽',selected:false},
                  {name:'黑龙江',selected:false},
                  {name:'吉林',selected:false},
                  {name:'辽宁',selected:false},
                  {name:'北京',selected:false},
                  {name:'天津',selected:false},
                  {name:'内蒙古',selected:false},
                  {name:'河北',selected:false},
                  {name:'山东',selected:false},
                  {name:'山西',selected:false},
                  {name:'宁夏',selected:false},
                  {name:'河南',selected:false},
                  {name:'新疆',selected:false},
                  {name:'青海',selected:false},
                  {name:'甘肃',selected:false},
                  {name:'陕西',selected:false},
                  {name:'西藏',selected:false},
                  {name:'四川',selected:false},
                  {name:'重庆',selected:false},
                  {name:'云南',selected:false},
                  {name:'贵州',selected:false},
                  {name:'广西',selected:false},
                  {name:'湖北',selected:false},
                  {name:'湖南',selected:false},
                  {name:'海南',selected:false},
                  {name:'澳门',selected:false},
                  {name:'香港',selected:false},
                  {name:'江西',selected:false},
                  {name:'江苏',selected:false},
                  {name:'浙江',selected:false},
                  {name:'福建',selected:false},
                  {name:'上海',selected:false},
                  {name:'台湾',selected:false},
                  {name:'南海诸岛',selected:false},
                ]
              }
            ]
          }
        }
      },
      methods:{
        drawLine(){
          // 基于准备好的dom，初始化echarts实例
          this.myChart = this.$echarts.init(document.getElementById('echarts'))
          // 绘制图表
          this.myChart.setOption(this.option);
        },
        postList:function () {

        }
      },
      watch: {
        message(newValue, oldValue) {
          this.sT = newValue;
          console.log(this.sT);
          var arr = this.option.series[0].data;
          for(var i = 0;i<arr.length;i++){
            this.option.series[0].data[i].selected = false;
            if(newValue == arr[i].name){
              this.option.series[0].data[i].selected = true
            }
          }
          this.myChart.setOption(this.option);
        }
      },
      mounted(){
        const _this = this;
        this.drawLine();
        console.log(this.myChart)
        this.myChart.on('click', function (param){
          console.log(param.name);
          _this.$emit('clickP',param.name);
          _this.$api.axiosPost('/index/Service/key',0,{
            name:param.name
          },function (data) {
            console.log(data)
            _this.listData1 = data.data.key;
            _this.$emit('data',data)
          })
        });
      },
    }
</script>

<style scoped>

</style>
