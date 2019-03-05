// import {isEmail, isPhone} from '../src/reg'
import * as reg from '../src/reg'

describe('reg test', ()=>{
  describe('是否为email:isEmail',()=>{
    test(`isEmail('xxxx@qq.com' 返回true)`, ()=>{
      expect(reg.isEmail('xxxx@qq.com')).toEqual(true)
    })
    test(`isEmail('xxxx' 返回false)`, ()=>{
      expect(reg.isEmail('xxxx')).toEqual(false)
    })
  })


  describe('是否为phone:isPhone',()=>{
    test(`isPhone('13322222222' 返回true)`, ()=>{
      expect(reg.isPhone('13322222222')).toEqual(true)
    })
    test(`isPhone('xxxx')`, ()=>{
      expect(reg.isPhone('xxxx')).toEqual(false)
    })
  })
})

