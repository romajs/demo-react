export const BAR = 'bar'
export const BAZ = 'baz'
export const HOME = 'home'
export const PRIVATE_BAR = 'privateBar'
export const PRIVATE_BAZ = 'privateBaz'
export const PRIVATE_HOME = 'privateHome'

const flags = {
  [BAR]: false,
  [BAZ]: false,
  [HOME]: false,
  [PRIVATE_BAR]: false,
  [PRIVATE_BAZ]: false,
  [PRIVATE_HOME]: false,
  set: featureFlags => {
    featureFlags.forEach(flag => {
      flags[flag.key] = flag.enabled
    })
  }
}

const proxy = new Proxy(flags, {
  get: (target, property) => target[property],
  set: () => null // prevent property reassign
})

export default proxy
