// On clicking remove button the item should be removed from DOM as well as localstorage.

let arr = JSON.parse(localStorage.getItem("coffee"))

console.log(arr)
let total =arr.reduce(function(sum,price){
    return sum +price;
},0)





arr.map(function(el,index){
    var parent = document.createElement("div")
        let img=document.createElement("img");
        img.src=el.image;
        let name=document.createElement("h2");
        name.innerText=el.title;
        let price=document.createElement("h2");
        price.innerText=el.price;

        let remove = document.createElement("button")
        remove.innerText="Remove"
        remove.setAttribute("id","remove_coffee")
        remove.addEventListener("click",function(){
            removes(el,index)
        })

        parent.append(img,name,price,remove)
        document.querySelector("#bucket").append(parent)
    
    
})
function removes(el,index){
    arr.splice(index,1)
    localStorage.setItem("coffee",JSON.stringify(arr))
    window.location.reload();
}