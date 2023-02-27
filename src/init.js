/*
 * @Author: Chaoyue
 * @Date: 2023-02-26 20:50:04
 * @LastEditors: Chaoyue
 * @LastEditTime: 2023-02-27 23:41:30
 * @FilePath: \vuecode\src\init.js
 * @FileDescribe: 
 */

import { initState } from './state'


export function initMixin(Vue) {
    Vue.prototype._init = function (options) {
        const vm = this
        vm.$options = options
        initState(vm)
    }
}
