let hour_devision = 1     //24 hour
let second_devision = 15  //15 seconds

let hour_total = 24
let second_total = 60

let hour_devision_number = hour_total / hour_devision        //ანუ 24 საათს  1 საათზე მივიღებთ რომ სულ გვაქვს 24 ნაწილი
let second_devision_number = second_total / second_devision  //ანუ 60 წუთს თუ გავყოფთ 15 წუთზე მივიღებთ რომ გვაქვს 4 ნაწილი
let timeArray = ['ASAP']
for (let h = 0; h <= hour_devision_number; h++) {
    if (h == 24) {
        let hour = h * hour_devision
        let second = '0'
        let time = hour.toString() + ':' + second
        timeArray.push(time)
    } else {
        for (let s = 0; s < second_devision_number; s++) {
            let hour = h * hour_devision
            let second = s * second_devision
            let time = hour.toString() + ':' + second.toString()
            timeArray.push(time)
        }
    }

}


let scrollingTimeWrapper = document.getElementById('scrolling-time-body');
scrollingTimeWrapper.addEventListener('scroll',function (event){
    scrollHandler(scrollingTimeWrapper)
})


timeArray.forEach(time => {
    let timeContainer = document.createElement("div");
    timeContainer.setAttribute('class','time-div')
    timeContainer.innerHTML = time+'<hr class="time-hr">'
    scrollingTimeWrapper.appendChild(timeContainer)


    timeContainer.addEventListener('click',function (event){
        getTime(time)
    })
    // timeContainer.setAttribute("onclick", "getTime(" + time + ")");

})

function getTime(time){
  console.log('clicked time',time)

}
function scrollHandler(scrollingTimeWrapper) {

console.log(scrollingTimeWrapper.scrollTop)
    console.log(event)
}
// console.log(timeArray)



