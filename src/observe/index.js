/*
 * @Author: Chaoyue
 * @Date: 2023-02-27 23:20:15
 * @LastEditors: Chaoyue
 * @LastEditTime: 2023-02-28 08:09:15
 * @FilePath: \vuecode\src\observe\index.js
 * @FileDescribe: 数据监听劫持
 */
class Observer {
    constructor(data) {
        this.walk(data)
    }

    walk(data) {
        // 遍历数据对象,对属性进行劫持,将会重新定义属性(性能损耗 )
        Object.keys(data).forEach(key => defineReactive(data, key, data[key]))
    }
}


export function defineReactive(target, key, value) { // 闭包 属性劫持
    observe(value) // 对所有的对象进行属性劫持
    Object.defineProperty(target, key, {
        get() {
            console.log(`get ${key} value`);
            return value
        },
        set(newValue) {
            console.log(`set ${key} value`);
            console.log(newValue);
            if (newValue === value) return
            typeof newValue === 'object' && (observe(newValue))
            value = newValue
        }

    })
}


// 数据劫持
export function observe(data) {
    // 判断是否是对象或者空数据
    if (typeof data !== 'object' || data == null) {
        return // 
    }
    return new Observer(data)
}