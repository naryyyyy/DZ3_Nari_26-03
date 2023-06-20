// REG EXP
const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'YOUR NUMBER IS VALID!'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'YOUR NUMBER IS NOT VALID'
        phoneResult.style.color = 'red'
    }
}

// TAB SLIDER

const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')
const tabContent = document.querySelectorAll('.tab_content_block')

const hideTabContent = () => {
    tabContent.forEach(item => {
        item.style.display = 'none'
    })
    tabs.forEach((item)=>{
        item.classList.remove('tab_content_item_active')
    })
}
const showTabContent=(i=0)=>{
    tabContent[i].style.display='block'
    tabs[i].classList.add('tab_content_item_active')
}


hideTabContent()
showTabContent(0)
tabsParent.onclick=(event)=>{
    if(event.target.classList.contains('tab_content_item')){
        tabs.forEach((item, i)=>{
            if(event.target===item){
                hideTabContent()
                showTabContent(i)
            }
        })
    }
}



const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > tabContent.length - 1) {
            i = 0
        }
        hideTabContent()
        showTabContent(i)
    }, 3000)
}
autoSlider()
