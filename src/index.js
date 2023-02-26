/*
 * @Author: Chaoyue
 * @Date: 2023-02-26 16:08:32
 * @LastEditors: Chaoyue
 * @LastEditTime: 2023-02-26 21:14:08
 * @FilePath: \vuecode\src\index.js
 * @FileDescribe: Vue input
 */

import { initMixin } from './init'
function Vue (options) {
    this._init(options)
    
}

initMixin(Vue)

export default Vue