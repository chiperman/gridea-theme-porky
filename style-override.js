const generateOverride = (params = {}) => {
  let result = ''
  /**
   * Write your custom css in here, doc: https://gridea.dev
   */

  //  // 暗黑皮肤
  //  if (params.DarkScheme && params.DarkScheme == 'DarkGreen') {
  //   result += `
  //     @DarkScheme:#1ABC9C;
  //   `
  // }

  if (typeof params.visitCount !== 'undefined' && !params.visitCount) {
    result += `
    .leancloud_visitors{
        display:none;
      }
    `
  }

  return result
}

module.exports = generateOverride
