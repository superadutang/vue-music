import jsonp from '../common/js/jsonp'
import { commonParams, options } from './config'
export function getTopList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'
  const data = {
    ...commonParams,
    uin: 0,
    platform: 'h5',
    needNewCode: 1
  }
  return jsonp(url, data, options)
}
