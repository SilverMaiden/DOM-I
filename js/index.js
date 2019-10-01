const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1-1": "DOM",
    "h1-2": " Is",
    "h1-3": " Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navText = document.getElementsByTagName('a');

let counter = 1;
for (var node of navText) {
    node.textContent = siteContent["nav"][`nav-item-${counter}`];
    counter += 1
}

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"])

let button = document.querySelector("button")
let cta_h1 = document.querySelector("h1");

let multipleSelections = document.querySelectorAll("h4");
let multipleTextContent = document.querySelectorAll(".text-content");
let bottomContent = document.querySelector(".bottom-content");

let break1 = document.createElement("br");
let break2 = document.createElement("br");

let num1 = document.createTextNode(siteContent["cta"]["h1-1"]);
let num2 = document.createTextNode(siteContent["cta"]["h1-2"]);
let num3 = document.createTextNode(siteContent["cta"]["h1-3"]);

let buttonText = document.createTextNode(siteContent["cta"]["button"]);

cta_h1.appendChild(num1);
cta_h1.appendChild(break1)
cta_h1.appendChild(num2);
cta_h1.appendChild(break2)
cta_h1.appendChild(num3);
button.appendChild(buttonText);

//Features header and text
let featuresHeader = document.createTextNode(siteContent["main-content"]["features-h4"]);
let featuresText = document.createTextNode(siteContent["main-content"]["features-content"]);

//About header and text
let aboutHeader = document.createTextNode(siteContent["main-content"]["about-h4"]);
let aboutText = document.createTextNode(siteContent["main-content"]["about-content"]);

//services, products, vision
//Services header and text
let servicesHeader = document.createTextNode(siteContent["main-content"]["services-h4"]);
let servicesText = document.createTextNode(siteContent["main-content"]["services-content"]);

//Product header and text
let productHeader = document.createTextNode(siteContent["main-content"]["product-h4"]);
let productText = document.createTextNode(siteContent["main-content"]["product-content"]);

let visionHeader = document.createTextNode(siteContent["main-content"]["vision-h4"]);
let visionText = document.createTextNode(siteContent["main-content"]["vision-content"]);

bottomContent.style.display = "flex";
bottomContent.style.justifyContent = "space-around";
let bottomBoxes = bottomContent.children;
let newCounter = 0;
for (var element of bottomBoxes) {
    element.style.paddingRight = "5%";
    newCounter += 1
}


console.log(bottomBoxes)

multipleSelections[0].appendChild(featuresHeader);
multipleSelections[1].appendChild(aboutHeader);
multipleSelections[2].appendChild(servicesHeader);
multipleSelections[3].appendChild(productHeader);
multipleSelections[4].appendChild(visionHeader);

multipleTextContent[0].appendChild(featuresText)
multipleTextContent[1].appendChild(aboutText);
multipleTextContent[2].appendChild(servicesText);
multipleTextContent[3].appendChild(productText);
multipleTextContent[4].appendChild(visionText);


let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])


