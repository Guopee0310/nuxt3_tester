<template>
  <div>
    <div
      class="ml-auto mr-auto flex w-full items-center justify-center rounded-3xl bg-gradient-to-r from-[#FFF1EA] to-white py-2 md:w-[560px]"
    >
      <div class="-ml-2 mr-2 w-[36px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 23.91">
          <g id="b18ee82a-05b5-40c7-8e38-3a160ed804a3" data-name="圖層 2">
            <g id="f6ecc03b-2515-4e0f-9578-bebd60a0fbf6" data-name="圖層 1">
              <g id="afdae5d4-3f5f-4d95-b3ba-49e71b141c6e" data-name="组 10">
                <g id="b53c5569-5b23-4c86-b7d3-ca9962671b34" data-name="组 9">
                  <g id="bf7e3d7a-dce1-47de-a9ed-fcab8ada4fd7" data-name="组 8">
                    <path
                      id="b14a9411-92df-494c-82b5-42cda08dc0d8"
                      data-name="路径 1"
                      d="M24.94,15.44a4.92,4.92,0,0,0-2-6.68l-.09,0-.3,1.1a3.92,3.92,0,0,1,1.51,4.89Z"
                      style="fill: #707070"
                    />
                    <path
                      id="b620ac3c-1b55-4832-90cb-a785c3c0e4d9"
                      data-name="路径 2"
                      d="M28.93,16c1.37-1.62,1.22-4.29.61-6.25s-2-4.26-4-4.81L25,6.77c1.08.28,2.18,1.71,2.75,3.55s.47,3.64-.25,4.48Z"
                      style="fill: #707070"
                    />
                    <path
                      id="e9d471aa-a0dd-4f4d-b284-861e4ccb2be9"
                      data-name="路径 3"
                      d="M34.36,17.1c2.13-2.5,1.89-6.64,1-9.67S32.23.86,29.06,0L28.3,2.8c1.66.45,3.36,2.66,4.24,5.5s.72,5.62-.39,6.93Z"
                      style="fill: #707070"
                    />
                  </g>
                </g>
                <path
                  id="f82d5a99-6bdc-4875-a79c-e9c7b7f2e081"
                  data-name="路径 4"
                  d="M22.89,20.79A35.67,35.67,0,0,0,8.82,22.93L5.08,13.55a27.48,27.48,0,0,0,11.5-8.47Z"
                  style="fill: #ffb297"
                />
                <path
                  id="a7329ca3-bd3e-4c6e-8ca9-4919e6fc8834"
                  data-name="路径 5"
                  d="M8.2,23.16C.39,26.72-3.68,16.54,4.44,13.75Z"
                  style="fill: #ef6262"
                />
                <path
                  id="fa7bdefe-079d-4ce7-b04a-b984b35b7fcd"
                  data-name="路径 6"
                  d="M24.56,20.88l-1.19-.14L17,4.78l.79-.88C20,9.48,22.34,15.3,24.56,20.88Z"
                  style="fill: #ef6262"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div class="flex-1 overflow-hidden">
        <div class="marquee marquee--text" data-speed="25">
          <div class="marquee__row marquee__row--text">
            <!-- 說明：移動中的字雖顯眼，但不好閱讀，字數請精簡。 -->
            <a
              v-for="(item, index) in marqueeItems"
              :key="index"
              class="marquee__item marquee__item--text"
              :href="item.link"
              target="_blank"
              >{{ item.text }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const marqueeItems = reactive([
  {
    text: '銀行招考線上考古題詳解限時免費解鎖｜上榜銀路人，帶你成為大銀家',
    link: 'https://www.tkbgo.com.tw/news/toNews.jsp?print_id=1694&news_id=4793'
  },
  {
    text: '奮發兔強 越來越強｜最新出版銀行招考題庫書任務正式開跑！',
    link: 'https://www.tkbgo.com.tw/news/toNews.jsp?news_id=4865'
  },
  {
    text: '銀行招考線上考古題詳解限時免費解鎖｜上榜銀路人，帶你成為大銀家',
    link: 'https://www.tkbgo.com.tw/news/toNews.jsp?print_id=1694&news_id=4793'
  },
  {
    text: '奮發兔強 越來越強｜最新出版銀行招考題庫書任務正式開跑！',
    link: 'https://www.tkbgo.com.tw/news/toNews.jsp?news_id=4865'
  },
  {
    text: '銀行招考線上考古題詳解限時免費解鎖｜上榜銀路人，帶你成為大銀家',
    link: 'https://www.tkbgo.com.tw/news/toNews.jsp?print_id=1694&news_id=4793'
  }
])
onMounted(() => {
  const marqueeArr = document.querySelectorAll('.marquee')
  marqueeArr.forEach((marquee) => {
    const marqueeRow = marquee.querySelector('.marquee__row')
    for (let i = 0; i < 2; i++) {
      const clone = marqueeRow.cloneNode(true)
      marquee.appendChild(clone)
    }

    const marqueeMove = (dir) => {
      const rows = marquee.querySelectorAll('.marquee__row')
      const rowWidth = rows[0].getBoundingClientRect().width
      const currentX = Number(getComputedStyle(marquee).getPropertyValue('--pos-x'))
      let newX = 0
      switch (dir) {
      case 'left':
        newX = currentX ? currentX - 1 : -rowWidth
        newX < -2 * rowWidth && (newX = -rowWidth)
        break
      default:
        newX = currentX ? currentX + 1 : -rowWidth
        newX > 0 && (newX = -rowWidth)
      }
      marquee.style.setProperty('--pos-x', newX)
    }

    const speed = Number(marquee.getAttributeNode('data-speed').value)
    let direction = 'left'
    let marqueeInterval = setInterval(marqueeMove, speed, direction)
    marquee.onmouseenter = () => {
      clearInterval(marqueeInterval)
    }
    marquee.onmousemove = () => {
      clearInterval(marqueeInterval)
    }
    marquee.onmouseleave = () => {
      clearInterval(marqueeInterval)
      marqueeInterval = setInterval(marqueeMove, speed, direction)
    }

    let posY = 0
    const changeDir = () => {
      clearInterval(marqueeInterval)
      const scrollTop = document.documentElement.scrollTop
      direction = scrollTop > posY ? 'right' : 'left'
      marqueeMove(direction)
      marqueeMove(direction)
      marqueeInterval = setInterval(marqueeMove, speed, direction)
      posY = scrollTop
    }
  })
})
</script>
<style lang="scss" scoped>
.marquee {
  --pos-x: 0;
  width: 100vw;
  display: flex;
  overflow-x: hidden;
}

.marquee__row {
  --translateX: calc(var(--pos-x) * 1px);
  flex-shrink: 0;
  min-width: 100vw;
  display: flex;
  justify-content: space-around;
  transform: translateX(var(--translateX));
}

.marquee__item--text {
  font-size: 16px;
  color: #707070;
  margin: 0;
  margin: 0.2em 0.4em 0.2em 4em;
}

.marquee--nezuko {
  background-color: pink;
}

.marquee__item--nezuko {
  --height: calc(100px + 50px * ((var(--viewport) - 375) / 1065));
  height: var(--height);
  margin: calc(0.1 * var(--height)) calc(0.3 * var(--height));
}
</style>
