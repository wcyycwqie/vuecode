import { observe } from './observe/index'

export function initState (vm) {
    const opts = vm.$options
    opts.data && initData(vm)
}

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
