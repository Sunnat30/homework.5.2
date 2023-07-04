
// let h = document.querySelector('.h');
// let m = document.querySelector('.m');
// let s = document.querySelector('.s');
// let hours = document.querySelector('.hours');
// let minutes = document.querySelector('.minutes');

// console.log(h,m,s,hours,minutes);


// let x = 0;

// function rec() {
//     console.log(x);
//     if (x < 10){
//         x++;

//         setTimeout(() => {
//             rec()
//         }, 1000)
//     }
// }

// rec()


// let x = 0;

// function rec() {
//     console.log(x);
//     let a;

//     if (x == 20) {
//         clearInterval(a);
//     } else if (x < 50){
//         x++;
//         a = setTimeout(() => {
//             rec()
//         }, 1000);
//     }
// }

// rec()




//*     new Date() - Kompyuterdagi hozirgi vaqtni oladi
//*     getSeconds() - Kompyuterdagi soniyani oladigan method  
//*     getMinutes() - Kompyuterdagi daqiqani oladigan method
//*     getHours() - Kompyuterdagi soatni oladigan method



let h = document.querySelector('.h');
let m = document.querySelector('.m');
let s = document.querySelector('.s');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');

function clock() {
    const time = new Date();
    let hourArrow = time.getHours()
    let minuteArrow = time.getMinutes()
    let secondArrow = time.getSeconds()
    // console.log(hourArrow, minuteArrow, secondArrow);
    // h.style.transform = `rotate(90deg)`

    h.style.transform = `rotate(${hourArrow * 30}deg)`
    m.style.transform = `rotate(${minuteArrow * 6}deg)`
    s.style.transform = `rotate(${secondArrow * 6}deg)`

    setTimeout(() => {
        clock()
    }, 1000)

    hours.innerHTML = hourArrow < 10 ? '0' + hourArrow : hourArrow;
    minutes.innerHTML = minuteArrow < 10 ? '0' + minuteArrow : minuteArrow;
}

clock()




let tabsItem = document.querySelectorAll('.tabsItem');
let tabsContentItem = document.querySelectorAll('.tabsContentItem');


for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', function () {

        for (let k = 0; k < tabsItem.length; k++) {
            tabsItem[k].classList.remove('active')
            tabsContentItem[k].classList.remove('active')
        }

        tabsItem[i].classList.add('active')
        tabsContentItem[i].classList.add('active')
    })
}



let stopWatch = document.querySelector(".stopwatch__clock")

let watchBtn = document.querySelector(".stopwatch__btn")
let stopwatch__hours = document.querySelector(".stopwatch__hours")
let stopwatch__minutes = document.querySelector(".stopwatch__minutes")
let stopwatch__seconds = document.querySelector(".stopwatch__seconds")
let tabLink = document.querySelector(".tabsLink__span")


watchBtn.addEventListener("click", function click() {
    if (this.innerHTML == "start") {
        this.innerHTML = "stop"
     
    } else if (this.innerHTML == "stop") {
        this.innerHTML = "clear"
        
    } else if (this.innerHTML == "clear") {
        this.innerHTML = "start"
    }

})

function rec() {
    if (watchBtn.innerHTML == "stop") {
        stopwatch__seconds.innerHTML++
        if (stopwatch__seconds.innerHTML > 59) {
            stopwatch__seconds.innerHTML = 0
            stopwatch__minutes.innerHTML++
            if (stopwatch__minutes.innerHTML>59) {
                stopwatch__minutes.innerHTML = 0
                stopwatch__hours.innerHTML++
            }
        }
    }else if (watchBtn.innerHTML == "start" ) {
        stopwatch__seconds.innerHTML = 0
        stopwatch__minutes.innerHTML = 0
        stopwatch__hours.innerHTML = 0
    }
    
    setTimeout(() => {
        rec()
    }, 10);



}
rec()

