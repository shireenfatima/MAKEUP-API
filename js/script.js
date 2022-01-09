//create html elements using DOM

document.body.innerHTML = `<div class="heading-container">
<h1>MAKEUP API</h1>
</div>
<div id="mainContainer" class="main-container"></div>`;

// let makeupData;
const getData = async () => {
    try{
    const data= await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
        const image=await data.json();
        // makeupData = image;

        mainContainer.innerHTML="";
        image.forEach((product) =>{
            displayData(product);
            console.log(product);
        });

    }catch(error){
        console.log(error);
    }

    
    
};
getData();

const displayData = (obj) => {
    console.log(obj.id)
    mainContainer.innerHTML += `
    <div class="container">
    
    <img src="${obj.image_link}" alt="Image Not Found" width="100" height="100"/>
    <p class="parablue">BRAND NAME:<br><span>${obj.brand}</span></p>
    <p class="parablue">PRODUCT NAME:<br><span>${obj.name}</span></p>
    <p class="parablue">PRICE:<br><span>${obj.price}</span></p>
    <p class="parablue">DESCRIPTION:<br><span>${obj.description}</span></p>
    <P>PRODUCT LINK:<br><a href="${obj.product_link}">Click here to purchase product</a></P>
    
    
    </div>`;

};
    
