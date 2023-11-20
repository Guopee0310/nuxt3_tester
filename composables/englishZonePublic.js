// 熱門資訊選單 start
export function englishZoneHotMenu(id) {
  const mainMenuData = reactive([
    {
      id: '18994911',
      title: '最新消息',
      toSrc: '/zone/english/news/toNewsList'
    },
    {
      id: '51041235',
      title: '精選文章',
      toSrc: '/zone/english/article/toArticleList'
    },
    {
      id: '93486291',
      title: '英文講座',
      toSrc: '/zone/english/lecture/toLectureList'
    }
  ])
  // 新增駐點屬性 start
  mainMenuData.forEach((element) => {
    if (element.id === id) {
      element.isActive = true
    } else {
      element.isActive = false
    }
  })
  // 新增駐點屬性 end
  provide('passmainmenu', mainMenuData)
}
// 熱門資訊選單 end

// 學員心得選單 start
// 學員心得選單 end
