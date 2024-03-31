
var siteUrl= document.getElementById("urlsite"); 
var siteName= document.getElementById("namesite");

var arrUrl = [];
if (localStorage.getItem("arraykey")!=null){
    arrUrl = JSON.parse(localStorage.getItem("arraykey"));
    showdata()
}


showdata()


function works(){
    pushdata()
    showdata()
    clearinputs()
}

function pushdata(){
    var dataobjects ={
        dataone : siteUrl.value ,
        datatwo : siteName.value
    }
    arrUrl.push(dataobjects);
    localStorage.setItem("arraykey", JSON.stringify(arrUrl))
}

function showdata(){
    var displayhtml=``
    for (var i=0 ; i<arrUrl.length ; i++ ){
        displayhtml+=`
        <td>${i+1}</td>
            <td>${arrUrl[i].datatwo}</td>
            <td>  <button class="my-btn3 rounded-4 ms-4" onclick="addquotes()"> <a href="${arrUrl[i].dataone}" class="text-decoration-none" target="_blank">Visit <i class="bi bi-box-arrow-up-right ms-1"></i> </a>  </button><div class="circle-green"></div> </td>
            <td><button onclick="deleturl(${i})" class="my-btn2 ms-4 rounded-4 ">Delete <i class="bi bi-trash "></i> </button>  <div class="circle-red"> </div> </td>
        </tr>
        `
    }
    document.getElementById("addeditems").innerHTML=displayhtml
}


function clearinputs(){
        siteName.value = ""
        siteUrl.value = ""
}

function deleturl(index){
    arrUrl.splice(index , 1)
    localStorage.setItem("arraykey", JSON.stringify(arrUrl))
    showdata()
}
