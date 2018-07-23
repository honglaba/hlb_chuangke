
export function client () {
  let agent = navigator.userAgent
  let client = 'micro' // 默认pc
  if (agent.indexOf('iPhone') > 0) {
    client = 'ios'
  } else if (agent.indexOf('Android') > 0) {
    client = 'android'
  }
  return client
}
