/**
 * 判断是否是邮箱
 * @example
 * ```js
 * import {isEmail} from 'doraemon'
 * isEmail('xxx@qq.com') => true
 * ```
 */
function isEmail(email) {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?$/.test(email);
}

/**
 * 判断是否是手机号码
 * @example
 * ```js
 * import {isPhone} from 'doraemon'
 * isPhone('13333333333') => true
 * ```
 */
function isPhone(phone) {
  return /(((\+?86)|(\+?860))?[1][34578][0-9]{9})/.test(phone);
}

export { isEmail, isPhone };
//# sourceMappingURL=d.esm.js.map
