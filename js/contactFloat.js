
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

let iconText = `<div class="banner_Contact_Icon">
<div class="whatsapp"> 
    <a href="https://api.whatsapp.com/send?phone=+84777428742&text=Hi AD,%0D%0A%0D%0AI would like to know the quotation for the Apartment Code ___.%0D%0A%0D%0AOur check in date is ____.%0D%0A%0D%0AOur check out date is ___.%0D%0A%0D%0AThank you very much!">
        <img src="./img/whatsapp.png" alt="Whatsapp:+84777428742">
    </a>
</div>
<div class="facebook">
    <a href="https://m.me/anh.dung.758?text=Hi AD,%0D%0A%0D%0AI would like to know the quotation for the Apartment Code ___.%0D%0A%0D%0AOur check in date is ____.%0D%0A%0D%0AOur check out date is ___.%0D%0A%0D%0AThank you very much!">
        <img src="./img/messenger.png" alt="Facebook Messenger">
    </a>
    
</div>
<div class="zalo">
    <a href="http://zaloapp.com/qr/p/14l7a7zteqhn">
        <img src="./img/zalo.png" alt="Zalo:+84777428742">
    </a>
   
</div>
<div class="telegram">
    
    <a href="https://t.me/banmoitruong?text=Hi AD,%0D%0A%0D%0AI would like to know the quotation for the Apartment Code ___.%0D%0A%0D%0AOur check in date is ____.%0D%0A%0D%0AOur check out date is ___.%0D%0A%0D%0AThank you very much!">
        <img src="./img/telegram.png" alt="Telegram:+84777428742">
    </a>
      
</div>
<div class="phone">
    <a href="tel:+84777428742" class="col-sm-7">
    <img src="./img/phone.png" alt="Phone call:+84777428742">
</a>
</div>
<div class="email">
    <a href="mailto:banmtg@gmail.com?subject=Quotation for Apartment Code ___&body=Hi AD,%0D%0A%0D%0AI would like to know the quotation for the Apartment on the title.%0D%0A%0D%0AOur check in date is ____.%0D%0A%0D%0AOur check out date is ___.%0D%0A%0D%0AThank you very much!">
        <img src="./img/email.png" alt="Email to: banmtg@gmail.com">
    </a>
</div>

</div>
</div>`;

function add2eachProperty(theDiv) {

   let directContactDiv = document.createElement('div');  

   directContactDiv.innerHTML = `<div class="banner_Contact">   
   <div class="directBooking">
        <span>Direct Booking?</span>
    </div>` + iconText;

    theDiv.insertAdjacentElement('afterend', directContactDiv);
    console.log(theDiv);
}

function addFloatingContact(screenWidth)
{

    let propertyList=document.getElementsByClassName('propertyItem');
    for (let i = 0; i < propertyList.length; i++) {
        add2eachProperty(propertyList.item(i));
        console.log(i);
    }


    let directContactDiv_V = document.createElement('div');

    directContactDiv_V.innerHTML = `<div class="banner_Contact_V">   
    <div class="directBooking_V">
    <img src="./img/directBooking_V.png" alt="sample">
    </div>` + iconText;  

    document.body.appendChild(directContactDiv_V);

    if (screenWidth<=400) {      
       

        // them sau moi listing
    }

    if (screenWidth>400) {

        // cho float
    }

}

// window.addEventListener("resize", (e) => {
//     screenWidth = e.target.innerWidth;
//     screenHeight = e.target.innerHeight;
//     console.log(`screenWidth`, screenWidth);
//     console.log(`screenHeight`, screenHeight);    

// });

addFloatingContact(screenWidth);
console.log(`screenWidth`, screenWidth);
console.log(`screenHeight`, screenHeight);