let ram = [{id:1, title:"sarees", price:500, image:"shopping(1).webp", rating:4.1, views:50},
             {id:2, title:"dress", price:250, image:"shopping(2).webp", rating:4.0, views:20},
             {id:3, title:"lehanga", price:700, image:"shopping.webp", rating:4.5, views:60},
             {id:4, title:"Jean-coats", price:900, image:"shopping(3).webp", rating:4.7, views:90},
             {id:5, title:"T-shirt", price:300, image:"shopping(4).webp", rating:4.0, views:30},
             {id:6, title:"Bracelet", price:600, image:"shopping(5).webp", rating:4.2, views:70},
             {id:7, title:"Rings", price:150, image:"shopping(6).webp", rating:4.3, views:40},
             {id:8, title:"Chains", price:200, image:"shopping(7).webp", rating:4.4, views:65},
             {id:9, title:"Ear-rings", price:350, image:"shopping(8).webp", rating:4.6, views:80}];
let data = "";
ram.map(function cardsfunction(items){
   data += `
          <div class="col-lg-4">
            <div class="cards-product">
             <img src=${items.image} alt="">
             <h4>title: <span>${items.title}</span></h4>
             <h6>price: <span>${items.price}</span></h6>
             <h6>rating: <span>${items.rating}</span></h6>
             <h6>views: <span>${items.views}</span></h6>
              <button onclick ="deleteButton(${items.id})">Delete</button>
            </div>
          </div>
 `    
document.querySelector(".cards-ecommerce").innerHTML = data;
});
function deleteButton(id){
    const deleteItems = document.querySelector(`[data-id = "${id}"]`);
    deleteItems.style.display = "none";
    const filterArray = ram.filter(function filterfunction(items){
      return items.id !== id;
    });
    ram = filterArray;
    console.log(ram);
};