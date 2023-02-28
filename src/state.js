/*
 * @Author: Chaoyue
 * @Date: 2023-02-27 23:14:23
 * @LastEditors: Chaoyue
 * @LastEditTime: 2023-02-28 00:24:31
 * @FilePath: \vuecode\src\state.js
 * @FileDescribe: 数据初始化
 */
import { observe } from './observe/index'


export function initState (vm) {
    const opts = vm.$options
    opts.data && initData(vm)
}

// 数据代理
function proxy (vm, target, key) {
    Object.defineProperty(vm, key, {
        get () {
            return vm[target][key]
        },
        set (newValue) {
            vm[target][key] = newValue
        }

    })
}

function initData (vm) {
    let data = vm.$options.data
    typeof data === 'function' && (data = data.call(vm))

    vm._data = data
    observe(data)

    // 
    for (let key in data) {
        proxy(vm, '_data', key)
    }
}
