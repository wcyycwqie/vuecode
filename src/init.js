/*
 * @Author: Chaoyue
 * @Date: 2023-02-26 20:50:04
 * @LastEditors: Chaoyue
 * @LastEditTime: 2023-02-26 22:27:23
 * @FilePath: \vuecode\src\init.js
 * @FileDescribe: 
 */
export function initMixin(Vue) {
    Vue.prototype._init = function (options) {
        const vm = this
        vm.$options = options

        initState(vm)
    }
}


function initState(vm) {
    const opts = vm.$options

    opts.data && initData(vm)
}

function initData(vm) {
    let data = vm.$options.data
    console.log('data');
    console.log(typeof data);
    typeof data === 'function' && (data = data.call(vm))
    
    console.log(data);
    
    

}