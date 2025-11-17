export function generateRandomClassName(prefix = 'x') {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
  const length = Math.floor(Math.random() * 5) + 8
  let result = prefix
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

export function detectBlocking(element) {
  if (!element) return false
  
  const styles = window.getComputedStyle(element)
  const rect = element.getBoundingClientRect()
  
  if (styles.display === 'none' || 
      styles.visibility === 'hidden' || 
      styles.opacity === '0' ||
      rect.height === 0 ||
      rect.width === 0) {
    return true
  }
  
  return false
}

export function obfuscateString(str) {
  return btoa(str).split('').reverse().join('')
}

export function deobfuscateString(str) {
  return atob(str.split('').reverse().join(''))
}

export function createFallbackBlock(adData, containerId) {
  const container = document.getElementById(containerId)
  if (!container) return
  
  const wrapperId = generateRandomClassName('x')
  const linkId = generateRandomClassName('y')
  const imgId = generateRandomClassName('z')
  const titleId = generateRandomClassName('a')
  const descId = generateRandomClassName('b')
  
  const wrapper = document.createElement('div')
  wrapper.id = wrapperId
  wrapper.setAttribute('data-x', 'true')
  wrapper.style.cssText = 'background-color: rgb(17, 24, 39); border: 1px solid transparent; border-radius: 0.5rem; overflow: hidden;'
  
  const link = document.createElement('a')
  link.id = linkId
  link.href = `/api/link/${adData.hash}`
  link.setAttribute('data-y', 'true')
  link.style.cssText = 'display: block; position: relative; min-height: 200px; overflow: hidden;'
  link.target = '_blank'
  link.rel = 'noopener noreferrer'
  
  const clickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    window.open(adData.url, '_blank', 'noopener,noreferrer')
  }
  
  link.addEventListener('click', clickHandler, true)
  link.addEventListener('mousedown', clickHandler, true)
  
  if (adData.image) {
    const bgDiv = document.createElement('div')
    bgDiv.id = imgId
    bgDiv.setAttribute('data-bg', 'true')
    bgDiv.style.cssText = `position: absolute; inset: 0px; background-image: url(${adData.image}); background-size: cover; background-position: center; transition: transform 0.5s;`
    link.appendChild(bgDiv)
    
    link.addEventListener('mouseenter', () => {
      bgDiv.style.transform = 'scale(1.1)'
    })
    link.addEventListener('mouseleave', () => {
      bgDiv.style.transform = 'scale(1)'
    })
  }
  
  const gradient = document.createElement('div')
  gradient.style.cssText = 'position: absolute; inset: 0px; background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.6), rgba(0,0,0,0.4));'
  link.appendChild(gradient)
  
  const content = document.createElement('div')
  content.style.cssText = 'position: relative; z-index: 10; padding: 1rem; height: 100%; display: flex; flex-direction: column; justify-content: flex-end;'
  
  const badge = document.createElement('div')
  badge.style.cssText = 'margin-bottom: 0.5rem;'
  const badgeSpan = document.createElement('span')
  badgeSpan.style.cssText = 'display: inline-flex; align-items: center; gap: 0.375rem; padding: 0.25rem 0.5rem; background-color: rgba(27, 217, 106, 0.2); backdrop-filter: blur(4px); border: 1px solid rgba(27, 217, 106, 0.3); border-radius: 0.25rem; font-size: 0.75rem; font-weight: 600; color: rgb(27, 217, 106);'
  badgeSpan.innerHTML = '<svg style="width: 0.75rem; height: 0.75rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>Партнёр'
  badge.appendChild(badgeSpan)
  content.appendChild(badge)
  
  const title = document.createElement('h4')
  title.id = titleId
  title.style.cssText = 'font-size: 0.875rem; font-weight: 700; color: white; margin-bottom: 0.5rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.5));'
  title.textContent = adData.title
  content.appendChild(title)
  
  if (adData.description) {
    const desc = document.createElement('p')
    desc.id = descId
    desc.style.cssText = 'font-size: 0.75rem; color: rgb(209, 213, 219); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));'
    desc.textContent = adData.description
    content.appendChild(desc)
  }
  
  link.appendChild(content)
  wrapper.appendChild(link)
  
  setTimeout(() => {
    container.appendChild(wrapper)
    
    setTimeout(() => {
      if (detectBlocking(wrapper)) {
        wrapper.remove()
        if (container.parentNode) {
          const newContainerId = `promo-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
          const newContainer = document.createElement('div')
          newContainer.id = newContainerId
          newContainer.style.cssText = container.style.cssText || ''
          container.parentNode.insertBefore(newContainer, container.nextSibling)
          createFallbackBlock(adData, newContainerId)
        }
      }
    }, 500)
  }, 100)
}

export function mutateDOMPeriodically(element) {
  if (!element) return
  
  const interval = setInterval(() => {
    if (element.parentNode) {
      const classes = element.className.split(' ').filter(c => c)
      if (classes.length > 0) {
        const randomClass = classes[Math.floor(Math.random() * classes.length)]
        element.classList.remove(randomClass)
        setTimeout(() => {
          element.classList.add(randomClass)
        }, 50)
      }
    } else {
      clearInterval(interval)
    }
  }, 5000)
  
  return interval
}

