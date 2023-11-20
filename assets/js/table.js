/* 
    Table Responsive
    @Author Real
    2022.03.23
*/
import $ from 'jquery'

export default function () {
  const rwdTable = document.getElementsByClassName('rwd-table')
  if (rwdTable.length) {
    for (let r = 0; r < rwdTable.length; r++) {
      const tr = rwdTable[r].getElementsByTagName('tbody')[0].getElementsByTagName('tr')
      for (let x = 0; x < tr.length; x++) {
        const th = rwdTable[r].getElementsByTagName('thead')[0].getElementsByTagName('th')
        for (let y = 0; y < th.length; y++) {
          const thText = th[y].innerText
          const title = document.createElement('div')
          title.className = 'data-title'
          title.innerText = thText
          const td = tr[x].getElementsByTagName('td')[y]
          const firstTd = tr[x].getElementsByTagName('td')[0]
          let dropdown = false
          if (firstTd) {
            firstTd.addEventListener('click', function () {
              if (!dropdown) this.classList.add('dropdown-open')
              else this.classList.remove('dropdown-open')
              dropdown = !dropdown
            })
          }
          if (td) {
            title.length = td.getElementsByClassName('data-title').length
          }

          if (td && title.length < 1) {
            td.prepend(title)
          }
        }
      }
    }
  }
  /* nl-table 非響應式表格在580px 可左右滑動 */
  $('.nl-table')
    .toArray()
    .forEach((e) => {
      // eslint-disable-next-line quotes
      const nlTableOutter = $("<div class='nl-table-outter'></div>").insertBefore(e)
      nlTableOutter.append(e)
    })
}
