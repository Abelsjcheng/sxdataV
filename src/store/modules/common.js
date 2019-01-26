import {
    setStore,
    getStore,
} from '@/util/store'
const common = {

    state: {
        isFullScren: false,
        isdisplay: true,
        theme: getStore({ name: 'theme' }) || '',
        themeName: getStore({ name: 'themeName' }) || '',
        zdinfo: getStore({ name: 'zdinfo' }) || '',
        selectplace: getStore({ name: 'selectplace' }) || '',
        zdinfocontent: getStore({ name: 'zdinfocontent' }) || '',
        
    },
    actions: {
        //获取字典公用类
        GetDic(params, dic) {
            return new Promise((resolve) => {
                if (dic instanceof Array) {
                    Promise.all(dic.map(ele => getDic(ele))).then(data => {
                        let result = {};
                        dic.forEach((ele, index) => {
                            result[ele] = data[index].data;
                        })
                        resolve(result)
                    })
                }
            })
        }
    },
    mutations: {
        SET_FULLSCREN: (state) => {
            state.isFullScren = !state.isFullScren;
        },
        SET_DISPLAY: (state) => {
            state.isdisplay = !state.isdisplay;
        },
        SET_THEME_NAME: (state, themeName) => {
            state.themeName = themeName;
            setStore({
                name: 'themeName',
                content: state.themeName,
            })
        },
        SET_THEME: (state, theme) => {
            state.theme = theme;
            setStore({
                name: 'theme',
                content: state.theme,
            })
        },
        SET_ZDINFO: (state, zdinfo) => {
            state.zdinfo = zdinfo;
            setStore({
                name: 'zdinfo',
                content: state.zdinfo,
            })
        },  
        SET_SELECTPLACE: (state, selectplace) => {
            state.selectplace = selectplace;
            setStore({
                name: 'selectplace',
                content: state.selectplace,
            })
        },  
        SET_ZDINFOCONTENT: (state, zdinfocontent) => {
            state.zdinfocontent = zdinfocontent;
            setStore({
                name: 'zdinfocontent',
                content: state.zdinfocontent,
            })
        }, 
    }
}
export default common