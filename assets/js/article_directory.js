/* 
    jQuery文章目錄產生器
    @Author Real
    2022.01.27
    說明:依文章內的h2,h3標籤自動生成目錄。
    如果文章同時有h2、h3 -> 目錄有兩層，h2是目錄第一層，h3是目錄的第二層
    如果文章只有h3 -> 目錄只有一層
*/

import $ from 'jquery'
/*  
  target 要產生目錄的目標範圍
  createDirectory 是否產生目錄
  isShow 是否顯示目錄
*/
export default function (target, createDirectory = true, isShow = true) {
  if ($(target).length < 1) return
  let mainId = 0 // 第一層的Id
  let subId = 0 // 第二層的Id
  const list = []
  const all = $(target).find('h2,h3')
  const h2 = $(target).find('h2')
  const h3 = $(target).find('h3')

  // 新增錨點在標題前，避免標題被浮動的header蓋住
  const setAnchor = (anchor, el) => {
    const header = $('header')[0] || $('#header')[0] || ''
    if (header) {
      const headerHeight = $(header).height()
      $(anchor).css({
        height: headerHeight,
        marginTop: -1 * headerHeight
      })
    }
    $(el).before($(anchor))
  }
  $.each(all, function (_, e) {
    // h2、h3標題插入序號
    const anchor = document.createElement('div')
    if (h2.length > 0) {
      if (e.nodeName === 'H2') {
        if (!createDirectory) {
          $(e).addClass('unlistTitle') // 無目錄版本的h2標題樣式
        } else {
          mainId++
          subId = 0
          // 文章內的所有h2設定id
          $(anchor).attr('id', `anchor${mainId}`)
          // 非同步新增錨點
          setTimeout(() => {
            setAnchor(anchor, e)
          }, 1000)
          $(e).attr('data-id', `anchor${mainId}`)
          $(e).attr('data-title', mainId)
        }
      } else if (e.nodeName === 'H3') {
        if (!createDirectory) {
          $(e).addClass('unlistSubTitle') // 無目錄版本的h3標題樣式
        } else {
          subId++
          // 文章內的所有h3設定id
          $(anchor).attr('id', `anchor${mainId}-${subId}`)
          setTimeout(() => {
            setAnchor(anchor, e)
          }, 1000)
          $(e).attr('data-id', `anchor${mainId}-${subId}`)
          $(e).attr('data-title', `${mainId}-${subId}`)
        }
      }
    } else if (!createDirectory) {
      $(e).addClass('unlistSubTitle') // 無目錄版本的h3標題樣式
    } else {
      subId++
      $(anchor).attr('id', `anchor${subId}`)
      setTimeout(() => {
        setAnchor(anchor, e)
      }, 1000)
      $(e).attr('data-id', `anchor${subId}`)
      $(e).attr('data-title', subId)
    }
    // 將所有h2、h3整合成一組目錄資料
    list.push({
      main: e.nodeName,
      text: $(e).text(),
      id: $(e).attr('data-id'),
      in: []
    })
  })

  const firstH2 = h2[0]
  const firstH3 = h3[0]
  const h2Lens = h2.length
  const h3Lens = h3.length
  const directory = document.createElement('div')
  const ul1 = document.createElement('ul')
  const collapseBtn = document.createElement('button') // 目錄收合按鈕
  let collapse = true // 預設目錄是開啟狀態
  let collapseHeight = 0

  if (createDirectory) {
    if (isShow) directory.style.display = 'block'
    else directory.style.display = 'none'
  } else {
    directory.style.display = 'none'
  }

  directory.className = 'directory'
  directory.innerHTML = '<h1>內容目錄</h1>'
  ul1.className = 'ul1'
  collapseBtn.innerHTML = '<i class="fas fa-list"></i>'
  collapseBtn.type = 'button'
  collapseBtn.className = 'collaspe_btn'
  directory.append(ul1)
  directory.append(collapseBtn)

  let newList = []
  let i = 0
  if (h2Lens > 0) {
    // 文章如果有h2
    list.forEach((obj, index) => {
      if (list[index].main === 'H2') {
        newList.push(obj)
        i++
      } else if (list[index].main === 'H3') {
        if (newList[i - 1] === undefined) return
        newList[i - 1].in.push(obj)
      }
    })

    firstH2.before(directory)
  } else if (h3Lens > 0) {
    // 文章只有h3，就以h3產生一層目錄
    newList = list
    firstH3.before(directory)
  } else {
    // 文章沒有h2、h3就不產生目錄
    return
  }

  // 渲染
  for (let i = 0; i < newList.length; i++) {
    const li = `<li><a href="#${newList[i].id}">${i + 1}. ${newList[i].text}</a></li>`
    $('.directory .ul1').append(li)
    const ul2 = document.createElement('ul')
    ul2.className = 'ul2'
    if (newList[i].in.length > 0) {
      for (let j = 0; j < newList[i].in.length; j++) {
        const s = `<li><a href="#${newList[i].in[j].id}">${i + 1}-${j + 1}. ${
          newList[i].in[j].text
        }</a></li>`
        $(ul2).append(s)
      }
      $('.directory .ul1>li').eq(i).append(ul2)
    }
  }

  // 目錄收合
  collapseHeight = $('.directory .ul1').height() // 展開的高度
  if (collapse) {
    $('.directory .ul1').height(collapseHeight)
  } else {
    $('.directory .ul1').height(0)
    $('.directory').addClass('hide')
  }
  $(collapseBtn).on('click', () => {
    if (collapse) {
      $('.directory .ul1').height(collapseHeight)
      $('.directory .ul1').animate({ height: 0 }, 20, 'linear', function () {
        $('.directory').addClass('hide')
        setTimeout(() => {
          $('.directory .ul1').attr('style', '')
        }, 200)
      })
    } else {
      $('.directory .ul1').animate({ height: collapseHeight }, 20, 'linear', function () {
        $('.directory').removeClass('hide')
        setTimeout(() => {
          $('.directory .ul1').attr('style', '')
        }, 200)
      })
    }
    collapse = !collapse
  })
}
