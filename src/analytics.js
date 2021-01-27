function createAnalytics() {
  let counter = 0
  let isDestroyed = false
  const onClickListener = e => counter++
  document.addEventListener('click', onClickListener)

  return {
    destroy() {
      document.removeEventListener('click', onClickListener)
      isDestroyed = true
    },
    getClicks() {
      return isDestroyed ? 'Analytics was destroyed' : counter
    }
  }
}

window.analytics = createAnalytics()