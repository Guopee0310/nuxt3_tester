// 陣列說明：根據需求在此或頁面內設定「陣列」，因component ZoneTemplate的寫法，provide的key以「左邊Swiper選單：passmainmenu」、「右邊白選單：passsubmenu」命名，「屬性名」同Api。
// Swiper選單寬：設定固定寬讓Swiper功能出現或隱藏，provide的key以「passmainmenuwidth」命名。
// 駐點說明：根據需求新增「isActive」屬性做判斷；頁面切換請見搜尋關鍵字「專區選單設定」。
// 跳窗說明：有需要再新增「isModal」、「toModal」，跳窗內容請使用元件，例：ZoneGraduateModalContent。

import ZoneGraduateModalContent from '@/components/views/zone/ZoneGraduateModalContent.vue' // 跳窗內容

// 升學專區研究所共用選單 start
export function zoneGraduateMenu(id) {
  const mainMenuData = reactive([
    {
      examId: '04721883',
      examName: '考試科目投考組合',
      examIcon: 'fa-solid fa-graduation-cap',
      isModal: true, // 點擊為跳窗
      toSrc: null,
      toModal: ZoneGraduateModalContent // 跳窗內容
    },
    {
      examId: '18380935',
      examName: '研究所推甄',
      examIcon: 'fa-solid fa-user-group',
      isModal: false, // 點擊為連結
      toSrc: '/schoolZone/toInterview'
    },
    {
      examId: '35351663',
      examName: '研究所留學',
      examIcon: 'fa-solid fa-school',
      isModal: false,
      toSrc: '/schoolZone/toStudyAbroad'
    }
  ])
  const subMenuData = reactive([
    {
      examId: '41726330',
      examName: '簡章下載',
      examIcon: 'fa-solid fa-paste',
      isModal: false,
      toSrc: '/brochureAndExamDate/toBrochureList'
    },
    {
      examId: '63278050',
      examName: '考古題',
      examIcon: 'fa-solid fa-map',
      isModal: false,
      toSrc: '/instituteArchaeology/toSchoolList'
    },
    {
      examId: '87277281',
      examName: '考科組合',
      examIcon: 'fa-solid fa-chart-pie',
      isModal: false,
      toSrc: '/examSubCompose/toSearch'
    },
    {
      examId: '99042412',
      examName: '交叉查榜',
      examIcon: 'fa-solid fa-file-waveform',
      isModal: false,
      toSrc: '/mutualChabang/toChabang'
    }
  ])
  // 新增駐點屬性 start
  mainMenuData.forEach((element) => {
    if (element.isModal !== true && element.examId === id) {
      element.isActive = true
    } else {
      element.isActive = false
    }
  })
  subMenuData.forEach((element) => {
    if (element.isModal !== true && element.examId === id) {
      element.isActive = true
    } else {
      element.isActive = false
    }
  })
  // 新增駐點屬性 end
  provide('passmainmenu', mainMenuData)
  provide('passsubmenu', subMenuData)
  provide('passmainmenuwidth', 'md:w-[280px] lg:w-[360px] px-3 md:px-0')
}
// 升學專區研究所共用選單 end

// 升學專區轉學考共用選單 start
// 升學專區轉學考共用選單 end
