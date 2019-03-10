export const fakeAuth = {
  isAuthenticated: false,
  login (cb) {
    this.isAuthenticated = true
    setTimeout(cb, 500)
  },
  logout (cb) {
    this.isAuthenticated = false
    setTimeout(cb, 500)
  }
}
