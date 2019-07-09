const getters = {
    isFullScren: state => state.common.isFullScren,//全屏
    isdisplay: state => state.common.isdisplay,//隐藏图表
    theme: state => state.common.theme,
    themeName: state => state.common.themeName,
    zdinfo: state => state.common.zdinfo,//终端故障标注
    zdinfocontent: state => state.common.zdinfocontent,//终端故障信息
    selectplace: state => state.common.selectplace,//地址选择器选择的地点
    chartSet: state => state.common.chartSet,//图表数据配置
    warnlocate:state => state.common.warnlocate,//预警信息定位
    newpartyaffairs:state => state.common.newpartyaffairs,//党务公开热点新闻，用于轮播
    }
export default getters