var show=0;
var more=document.querySelector(".more-less")

more.style.height="50px";
more.style.overflow="hidden";

function showmorefun(){
show++;
var but=document.querySelector("button")
if(show%2==1){
    var more=document.querySelector(".more-less")
    more.style.height="auto";
    more.style.overflow="show";
    but.innerText="showless.. "
   

}
else{
    var more=document.querySelector(".more-less")
    more.style.height="50px";
    more.style.overflow="hidden";
    but.innerText="showmore.."

}
}


  var Data1 =JSON.parse(localStorage.getItem("product"))||{
      image_url1:"https://images-static.nykaa.com/media/catalog/product/5/3/539a903NYKAC00000160_1.jpg",
        image_url2:"https://images-static.nykaa.com/media/catalog/product/5/3/539a903NYKAC00000160_2.jpg",
        image_url3:"https://images-static.nykaa.com/media/catalog/product/5/3/539a903NYKAC00000160_3.jpg",
        image_url4:"https://images-static.nykaa.com/media/consc/cruelty.jpg",
        image_url5:"https://images-static.nykaa.com/media/catalog/product/5/3/539a903NYKAC00000160_4.jpg" ,
        shade:"makeup shades",
        heading:"Matte Foundation",
        info:"Nykaa All Day Matte Long Wear Liquid Foundation With Pump - Ivory 01",
        Rating:"4.3/5",
        price:"599",
}



var image1= document.querySelector("#img1");
var im1=document.createElement("img");
im1.setAttribute("src",Data1.image_url1)
image1.append(im1)

var image2= document.querySelector("#img2");
var im2=document.createElement("img")
im2.setAttribute("src",Data1.image_url2)
image2.append(im2);

var image3= document.querySelector("#img3");
var im3=document.createElement("img")
im3.setAttribute("src",Data1.image_url3)
image3.append(im3);
var image4= document.querySelector("#img4");
var im4=document.createElement("img")
im4.setAttribute("src",Data1.image_url4)
image4.append(im4);
var image5= document.querySelector("#img5");
var im5=document.createElement("img")
im5.setAttribute("src",Data1.image_url5)
image5.append(im5)



var pric=document.querySelector("#price");
var span1=document.createElement("span");
span1.innerText="₹";
var span2=document.createElement("span");
span2.innerText=Data1.price;

pric.append(span1,span2)

var colar=document.querySelector("#price+p")
colar.innerText=Data1.color;

var buto=document.querySelector("#add")

buto.addEventListener("click",function(){
     console.log(Data1)
  buttonfunction(Data1)
   
})






var data2=[
    {
        image_url1:"https://images-static.nykaa.com/media/catalog/product/5/3/539a903NYKAC00000160_1.jpg",
        image_url2:"https://images-static.nykaa.com/media/catalog/product/5/3/539a903NYKAC00000160_2.jpg",
        image_url3:"https://images-static.nykaa.com/media/catalog/product/5/3/539a903NYKAC00000160_3.jpg",
        image_url4:"https://images-static.nykaa.com/media/consc/cruelty.jpg",
        image_url5:"https://images-static.nykaa.com/media/catalog/product/5/3/539a903NYKAC00000160_4.jpg" ,
       
        shade:"makeup shades",
        heading:"Matte Foundation",
        info:"Nykaa All Day Matte Long Wear Liquid Foundation With Pump - Ivory 01",
        Rating:"4.3/5",
        price:"599",
    },
       
    
   
    {
        image_url1:"https://images-static.nykaa.com/media/catalog/product/l/a/lakm_-absolute-blur-perfect-makeup-primer.jpg",
        image_url2:"https://images-static.nykaa.com/media/catalog/product/a/6/a62cd0d8901030561924_1.jpg",
        image_url3:"https://images-static.nykaa.com/media/catalog/product/a/6/a62cd0d8901030561924_2.jpg",
        image_url4:"https://images-static.nykaa.com/media/catalog/product/p/r/primer_4.jpg",
        image_url5:"https://images-static.nykaa.com/media/catalog/product/8/9/8901030561924_3.jpg" ,
       
        shade:"makeup shades",
        heading:"Makeup Primer",
        info:"Lakme Absolute Blur Perfect Makeup Primer",
        Rating:"4.4/5",
        price:"503",
    },
    {
        image_url1:"https://images-static.nykaa.com/media/catalog/product/4/1/41554247725.1.jpg",
        image_url2:"https://images-static.nykaa.com/media/catalog/product/4/1/41554247725.2.jpg",
        image_url3:"https://images-static.nykaa.com/media/catalog/product/4/1/41554247725.3.jpg",
        image_url4:"https://images-static.nykaa.com/media/catalog/product/4/1/41554247725.4.jpg",
        image_url5:"https://images-static.nykaa.com/media/catalog/product/4/1/41554247725.5.jpg" ,
       
        shade:"makeup shades",
        heading:"Concealer",
        info:"Maybelline New York Fit Me Concealer - 25 Medium(6.8ml)",
        Rating:"4.3/5",
        price:"399",
    },
    {
        image_url1:"https://images-static.nykaa.com/media/catalog/product/d/0/d09329a773602010578_rv__1.jpg",
        image_url2:"https://images-static.nykaa.com/media/catalog/product/d/0/d09329a773602010578_rv__2.jpg",
        image_url3:"https://images-static.nykaa.com/media/catalog/product/d/0/d09329a773602010578_rv__3.jpg",
        image_url4:"https://images-static.nykaa.com/media/catalog/product/d/0/d09329a773602010578_rv__4.jpg",
        image_url5:"https://images-static.nykaa.com/media/catalog/product/d/0/d09329amac-nykaa-authenticity-cert.jpg" ,
       
        shade:"makeup shades",
        heading:"Fix Powder Plus Foundation",
        info:"M.A.C Studio Fix Powder Plus Foundation - NC50(15gm)",
        Rating:"4.5/5",
        price:"2900",
    } ,
    {
        image_url1:"https://images-static.nykaa.com/media/catalog/product/0/4/04a129c6902395487432__1_.png",
        image_url2:"https://images-static.nykaa.com/media/catalog/product/0/4/04a129c6902395487432__1_.jpg",
        image_url3:"https://images-static.nykaa.com/media/catalog/product/0/4/04a129c6902395487432__2_.jpg",
        image_url4:"https://images-static.nykaa.com/media/catalog/product/0/4/04a129c6902395487432__2_.png",
        image_url5:"https://images-static.nykaa.com/media/catalog/product/0/4/04a129c6902395487432__3_.png" ,
       
        shade:"makeup shades",
        heading:"Multi-Use Concealer",
        info:"Maybelline New York Instant Age Rewind Eraser Multi-Use Concealer - Medium",
        Rating:"4.2/5",
        price:"665",
    }  ,
    {
       
        
        image_url1:"https://images-static.nykaa.com/media/catalog/product/9/9/994fd0d8901030583612_h.jpg",
        image_url2:"https://images-static.nykaa.com/media/catalog/product/9/9/994fd0d8901030583612_1.jpg",
        image_url3:"https://images-static.nykaa.com/media/catalog/product/9/9/994fd0d8901030583612_2.jpg",
        image_url4:"https://images-static.nykaa.com/media/catalog/product/9/9/994fd0d8901030583612_3.jpg",
        image_url5:"https://images-static.nykaa.com/media/catalog/product/9/9/994fd0d8901030583612_4.jpg",
       
        shade:"makeup shades",
        heading:"CC Cream",
        info:"Lakme 9 To 5 Complexion Care Face CC Cream SPF 30 PA++ - Beige",
        Rating:"4.4/5",
        price:"279",
    },      
    {
        image_url1:"https://images-static.nykaa.com/media/catalog/product/3/9/39000098904325001211_1.jpg",
        image_url2:"https://images-static.nykaa.com/media/catalog/product/3/9/39000098904325001211_2.jpg",
        image_url3:"https://images-static.nykaa.com/media/catalog/product/3/9/3900009swissb_acert.jpg",
        
        shade:"makeup shades",
        heading:"Makeup Fixer",
        info:"Swiss Beauty Long Lasting Makeup Fixer Natural Aloe Vera With Vitamin-E",
        Rating:"4.3/5",
        price:"212",

    },    {
        image_url1:"https://images-static.nykaa.com/media/catalog/product/c/d/cdba38e693102093188.jpg",
       
        shade:"makeup shades",
        heading:"Foundation",
        info:"OFRA Pro Makeup Palette - Foundation(50gm)",
        Rating:"3.3/5",
        price:"6000",

    },    {
        image_url1:"https://images-static.nykaa.com/media/catalog/product/d/6/d686189KAYBE00000054_2.jpg",
        image_url2:"https://images-static.nykaa.com/media/catalog/product/d/6/d686189KAYBE00000054_3.jpg",
        image_url3:"https://images-static.nykaa.com/media/catalog/product/d/6/d686189KAYBE00000054_4.jpg",
        image_url4:"https://images-static.nykaa.com/media/consc/cruelty.jpg",
        image_url5:"https://images-static.nykaa.com/media/catalog/product/d/6/d686189KAYBE00000054_5.jpg" ,
       
        shade:"makeup shades",
        heading:"Blush",
        info:"Kay Beauty Creme Blush - Cosy Coral(10ml)",
        Rating:"4.5/5",
        price:"799",

    },    {
        image_url1:"https://images-static.nykaa.com/media/catalog/product/3/f/3fc4da8IBAHA00000088_1.jpg",
        image_url2:"https://images-static.nykaa.com/media/catalog/product/3/f/3fc4da8IBAHA00000088_2.jpg",
        image_url3:"https://images-static.nykaa.com/media/catalog/product/3/f/3fc4da8IBAHA00000088_3.jpg",
        image_url4:"https://images-static.nykaa.com/media/catalog/product/3/f/3fc4da8IBAHA00000088_4.jpg",
        image_url5:"https://images-static.nykaa.com/media/catalog/product/3/f/3fc4da8Iba_Halal_ACERT.jpg" ,
       
        shade:"makeup shades",
        heading:" Makeup kit",
        info:"IBA Must Have Complete Makeup Box (Fair)(52.5ml + 70.35gm)",
        Rating:"4.6/5",
        price:"4100",

    },
        {
            image_url1:"https://images-static.nykaa.com/media/catalog/product/3/d/3d25c62689304184595_1.jpg",
            image_url2:"https://images-static.nykaa.com/media/catalog/product/3/d/3d25c62689304184595_2.jpg",
           
            shade:"makeup shades",
            heading:"Contour",
            info:"Anastasia Beverly Hills Contour Kit-Light To Medium(18gm)",
            Rating:"4.3/5",
            price:"4500", 
    
    },   
    {
        image_url1:"https://images-static.nykaa.com/media/catalog/product/g/0/g042806_a.jpg",
        image_url2:"https://images-static.nykaa.com/media/catalog/product/g/0/g042806_b.jpg",
        image_url3:"https://images-static.nykaa.com/media/catalog/product/g/0/g042806_e.jpg",
        image_url4:"https://images-static.nykaa.com/media/catalog/product/g/0/g042806_f.jpg",
        image_url5:"https://images-static.nykaa.com/media/catalog/product/i/m/img-20190628-wa0015_1__1_2.jpg" ,
       
        shade:"makeup shades",
        heading:"Fluid Foundation",
        info:"Guerlain L'Essentiel Fluid Foundation - 03C Naturel Rose(30ml)",
        Rating:"4.6/5",
        price:"5400",

    }];



var pass=JSON.parse(localStorage.getItem("product"))||{}
function myfunction(car){

pass=car

localStorage.setItem("product",JSON.stringify(pass));
window.scrollTo(0,0);
window.location.reload();



}

var data3=[
    {
    
        image_url1:"https://images-static.nykaa.com/media/catalog/product/g/0/g042806_a.jpg",
        image_url2:"https://images-static.nykaa.com/media/catalog/product/g/0/g042806_b.jpg",
        image_url3:"https://images-static.nykaa.com/media/catalog/product/g/0/g042806_e.jpg",
        image_url4:"https://images-static.nykaa.com/media/catalog/product/g/0/g042806_f.jpg",
        image_url5:"https://images-static.nykaa.com/media/catalog/product/i/m/img-20190628-wa0015_1__1_2.jpg" ,
       
        shade:"makeup shades",
        heading:"Fluid Foundation",
        info:"Guerlain L'Essentiel Fluid Foundation - 03C Naturel Rose(30ml)",
        Rating:"4.6/5",
        price:"5400",
},
{
    image_url1:"https://images-static.nykaa.com/media/catalog/product/3/d/3d25c62689304184595_1.jpg",
            image_url2:"https://images-static.nykaa.com/media/catalog/product/3/d/3d25c62689304184595_2.jpg",
           
            shade:"makeup shades",
            heading:"Contour",
            info:"Anastasia Beverly Hills Contour Kit-Light To Medium(18gm)",
            Rating:"4.3/5",
            price:"4500",
},

]
   


// <--shade part-->
var cart=JSON.parse(localStorage.getItem("cartdata"))||[];
var bool=false
var svalue;
var shades=document.querySelectorAll("#shades>div")
    for(var i=0;i< shades.length;i++){
        shades[i].addEventListener("click",shadefunction)
    }
    function shadefunction(){
          
        var  shadesvalue=(event.target.innerText)
        svalue=shadesvalue
            bool=true
        console.log(shadesvalue)
        }  

//------add to cart part---->

function buttonfunction(el){

    console.log(el)
    if(bool==false){
        alert("Please select shade")
    }
    else if(bool==true){
     el["shades"]=(svalue);
    cart.push(el);
    localStorage.setItem("cartdata",JSON.stringify(cart))
    alert("Item Added to Cart");
    window.location.reload();
   
    }
}
function carthtml(){
    window.location.href="cart.html";
}
