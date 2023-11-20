/* 
    Youtube LazyLoad & Blurry Thumbnail Fixed
    @Author Real
    2021.08.05
 */

export default function () {
  const youtube = document.getElementsByClassName('youtube')
  const thumbnail = document.getElementsByClassName('thumbnail')

  function youtubeLazyLoad(i, t, s, callback) {
    let para = '?autoplay=1&mute=0&enablejsapi=1&rel=0'
    i.setAttribute('frameborder', 0)
    i.setAttribute('allowfullscreen', '')
    i.setAttribute(
      'allow',
      'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
    )
    if (s.indexOf('?') > 1) para = '&autoplay=1&mute=0&enablejsapi=1&rel=0'
    i.src = s + para
    t.parentNode.appendChild(i)
    t.parentNode.classList.add('lazied')
    callback(t)
  }

  for (let i = 0; i < youtube.length; i++) {
    const src = youtube[i].getAttribute('data-lazy-embed')
    if (src != null && src !== '') {
      const embed = src.lastIndexOf('embed')
      let videoID = ''
      // 加入設定影片開始時間的判斷
      if (src.indexOf('?') < 1) videoID = src.substring(embed + 6)
      else videoID = src.substring(embed + 6, src.indexOf('?'))
      thumbnail[i].style.backgroundImage =
        'url("https://i.ytimg.com/vi_webp/' + videoID + '/maxresdefault.webp")'
      thumbnail[i].onclick = function () {
        const iframe = document.createElement('iframe')
        youtubeLazyLoad(iframe, this, src, function (t) {
          t.remove()
        })
      }
    }
  }
}
