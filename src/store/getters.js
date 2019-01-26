const getters = {
    isFullScren: state => state.common.isFullScren,//全屏
    isdisplay: state => state.common.isdisplay,//隐藏图表
    theme: state => state.common.theme,
    themeName: state => state.common.themeName,
    zdinfo: state => state.common.zdinfo,//终端故障标注
    zdinfocontent: state => state.common.zdinfocontent,//终端故障信息
    selectplace: state => state.common.selectplace,//地址选择器选择的地点
    }
export default getters