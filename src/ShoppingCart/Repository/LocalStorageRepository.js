export default class LocalStorageRepository {
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  get(key) {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  }
}
