import {
    setStore,
    getStore,
} from '@/util/store'
const common = {

    state: {
        isFullScren: false,
        theme: getStore({ name: 'theme' }) || '',
        themeName: getStore({ name: 'themeName' }) || '',
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
          
    }
}
export default common