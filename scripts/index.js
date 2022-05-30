// Add the coffee to local storage with key "coffee"
const url = `https://masai-mock-api.herokuapp.com/coffee/menu`
let add = document.getElementById("menu")
fetch(url)
.then(function(value){
   return value.json()
})
.then(function(data){
   
   displayAppend(data.menu.data)
})


function displayAppend(data){

   
   data.forEach(function(el){
      

      let parent = document.createElement("div")
      
      
      let img = document.createElement("img")
      
      img.src = el.image
       
      let name = document.createElement("h3")
      name.innerText = el.title
      
      let price = document.createElement("p")
      price.innerText = el.price
      
      let btn = document.createElement("button")
      btn.id = "add_to_bucket"
      btn.innerText ="Add to Bucket"
      btn.addEventListener('click',function(){
         addtobucket(el)
      })
      
      parent.append(img,name,price,btn)

      add.append(parent)
      
   })
    

}

var arr =JSON.parse(localStorage.getItem("coffee"))  ||[]
function addtobucket(el){
   
   arr.push(el)
  
   
  localStorage.setItem("coffee",JSON.stringify(arr))
  let length = arr.length
  
  let x = document.getElementById("coffee_count")
  x.innerText =length
 

}
