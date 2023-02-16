const slider = document.querySelector('#myRange');
const views = document.querySelector('#pageViews');
const cash = document.querySelector('#cash');
const checkbox = document.querySelector('#switch');

function switching(){
    switch(slider.value){
        case "1":
            slider.style.background = `linear-gradient(90deg, hsl(174,77%,80%) 0%, hsl(224,65%,95%)0%)`;
            views.innerHTML = "10K PAGEVIEWS";
            checkbox.checked == false ? cash.innerHTML = `<strong id="cash">$8.00</strong><small>/ month</small>` : cash.innerHTML = `<strong id="cash">$6.00</strong><small>/ month</small>`;
            break;
        case "2":
            slider.style.background = `linear-gradient(90deg, hsl(174,77%,80%) 25%, hsl(224,65%,95%)25%)`;
            views.innerHTML = "50K PAGEVIEWS";
            checkbox.checked == false ? cash.innerHTML = `<strong id="cash">$12.00</strong><small>/ month</small>` : cash.innerHTML = `<strong id="cash">$9.00</strong><small>/ month</small>`;
            break;
        case "3":
            slider.style.background = `linear-gradient(90deg, hsl(174,77%,80%) 50%, hsl(224,65%,95%)50%)`;
            views.innerHTML = "100K PAGEVIEWS";
            checkbox.checked == false ? cash.innerHTML = `<strong id="cash">$16.00</strong><small>/ month</small>` : cash.innerHTML = `<strong id="cash">$12.00</strong><small>/ month</small>`;
            break;
        case "4":
            slider.style.background = `linear-gradient(90deg, hsl(174,77%,80%) 75%, hsl(224,65%,95%)75%)`;
            views.innerHTML = "500K PAGEVIEWS";
            checkbox.checked == false ? cash.innerHTML = `<strong id="cash">$24.00</strong><small>/ month</small>` : cash.innerHTML = `<strong id="cash">$18.00</strong><small>/ month</small>`;
            break;
        case "5":
            slider.style.background = `linear-gradient(90deg, hsl(174,77%,80%) 100%, hsl(224,65%,95%)100%)`;
            views.innerHTML = "1M PAGEVIEWS";
            checkbox.checked == false ? cash.innerHTML = `<strong id="cash">$36.00</strong><small>/ month</small>` : cash.innerHTML = `<strong id="cash">$27.00</strong><small>/ month</small>`;
            break;
        default:
            slider.style.background = `linear-gradient(90deg, hsl(174,77%,80%) 50%, hsl(224,65%,95%)50%)`;
            views.innerHTML = "100K PAGEVIEWS";
            checkbox.checked == false ? cash.innerHTML = `<strong id="cash">$16.00</strong><small>/ month</small>` : cash.innerHTML = `<strong id="cash">$12.00</strong><small>/ month</small>`;
            break;
    }
}
slider.addEventListener('input',switching);
checkbox.addEventListener('click',switching)