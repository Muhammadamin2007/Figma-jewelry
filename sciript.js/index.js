$(document).ready(function() {
    drawPic(data);
})

let floName;

for (let i = 0; i < document.querySelectorAll(".forBtn").length; i++) {
    document.querySelectorAll(".forBtn")[i].addEventListener("click", function () {
        floName = this.innerHTML;
        nameFilter(floName);
    })
}

function nameFilter () {
    let floNamePro = data.filter((elem) => {
        if (floName === elem.for) {
            return true;
        }
    })
    drawPic(floNamePro)
}

function коллекцииFilter() {
    let коллекцииName = document.getElementById("коллекцииBtn").innerHTML
    let  коллекцииNamePro = data.filter((elem) => {
        if(коллекцииName === elem.collection){
            return true;
        }
    })
    drawPic(коллекцииNamePro)
}

function highToLowFilter() {
    let filterPrice = data.sort((a, b) => {
      return a.rarity - b.rarity
    })
    drawPic(filterPrice)
  } 


function drawPic(arr) {
    let formatted = '';


    arr.forEach(function (item, index) {
        formatted += `
        <div class="col card myCardBorder gy-0 gx-1" style="width: 15rem;">
          <img src=${item.img} class="card-img-top"></div>
        `
        $('#flowers').empty();
        $('#flowers').append(formatted);
    })
}
