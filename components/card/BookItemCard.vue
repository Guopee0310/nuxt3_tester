<template>
  <nuxt-link class="card-line" :to="url">
    <div class="card-line-tag">
      <div class="card-line-tag-content">2023最新版</div>
      <div class="card-line-tag-horn"></div>
    </div>
    <div class="card-line-content">
      <div class="card-line-head">
        <img src="~/assets/img/book/card-book-01.webp" alt="水處理工程(上)給水篇" />
      </div>
      <div class="card-line-body">
        <div class="card-line-title">研究所2021試題大補帖【電路學】(105~109年試題)</div>
        <div class="card-line-name">
          張晉, 劉力(劉澤融),張晉, 劉力(劉澤融),張晉, 劉力(劉澤融),張晉, 劉力(劉澤融)
        </div>
        <div class="card-line-price">
          <div class="card-line-price-orig">$400</div>
          <div class="card-line-price-sale">
            <span>優惠價</span><span class="sale-txt">$360</span>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>
<script setup>
defineProps({
  url: {
    type: String,
    default: ''
  }
})
</script>
<style lang="scss" scoped>
.card-line {
  position: relative;
  display: block;
  width: 100%;
  text-decoration: none;
  padding-left: 6px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.card-line-tag {
  position: absolute;
  top: 5px;
  left: 0px;
  display: inline-block;
}

.card-line-tag-content {
  display: flex;
  font-size: 12px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0.08em;
  white-space: nowrap;
  color: theme('colors.white');
  background-color: theme('colors.primary.500');
  border-top-left-radius: 6px;
  padding-right: 4px;
  padding-left: 8px;

  &::after {
    content: '';
    position: absolute;
    top: 0px;
    right: -10px;
    display: block;
    width: 0px;
    height: 0px;
    border-top: 13px solid transparent;
    border-right: none;
    border-bottom: 13px solid transparent;
    border-left: 10px solid theme('colors.primary.500');
  }
  .info-p {
    text-shadow: 2px 2px 1px rgba(57, 56, 56, 0.1);
  }
  .tag-txt {
    color: #f4ec20;
  }
}

.card-line-tag-horn {
  width: 6px;
  height: 6px;
  background-color: theme('colors.primary.500');
  border-bottom-left-radius: 6px;
  overflow: hidden;
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: #a66301;
    border-top-left-radius: 6px;
  }
}

.card-line-content {
  width: 100%;
  border: 1px solid theme('colors.base.200');
  background-color: theme('colors.white');
  border-radius: 4px;
}

.card-line-head {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  > img {
    display: block;
    object-fit: cover;
  }
}

.card-line-body {
  padding: 0px 12px;
  margin-bottom: 10px;
}

.card-line-title {
  height: 45px;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 0.08em;
  margin-bottom: 4px;

  // 溢出
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.card-line-name {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  font-size: 12px;
  margin-bottom: 4px;
}

.card-line-price {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 12px;
  font-weight: 700;
}

.card-line-price-orig {
  text-decoration: line-through;
}

.card-line-price-sale {
  letter-spacing: 0.08em;
  > *:last-child {
    font-size: 14px;
    color: theme('colors.danger.600');
    margin-left: 4px;
  }
}
</style>
