import $ from 'jquery'

// QA 收合樣式
export const accordion = function () {
  $.each($('.accordion'), (_, e) => {
    let item = $(e).find('.acc-item')
    if (item.length < 1) return
    // 如果有className有.show，就展開
    for (let i = 0; i < item.length; i++) {
      const _item = $(item[i])
      if (_item.hasClass('show')) {
        _item.find('.acc-button').addClass('active')
        const _content = _item.find('.acc-button').siblings()
        _content.show(0)
      }
    }
    const button = item.find('.acc-button')
    button.on('click', function () {
      $(this).toggleClass('active')
      item = $(this).parent('.acc-item')
      item.toggleClass('show')
      const content = $(this).siblings()
      content.slideToggle(200)
    })
  })
}

// 流程收合樣式
export const collapseSop = function () {
  $.each($('.collapse-sop'), (_, e) => {
    let item = $(e).find('.collapse-sop-item')
    if (item.length < 1) return

    // 如果有className有.show，就展開
    for (let i = 0; i < item.length; i++) {
      const _item = $(item[i])
      if (_item.hasClass('show-sop')) {
        _item.find('.collapse-sop-button').addClass('active')
        const _content = _item.find('.collapse-sop-button').siblings()
        _content.show(0)
      }
    }
    const button = item.find('.collapse-sop-button')
    button.on('click', function () {
      $(this).toggleClass('active')
      item = $(this).parent('.collapse-sop-item')
      item.toggleClass('show')
      const content = $(this).siblings()
      content.slideToggle(200)
    })
  })
}
