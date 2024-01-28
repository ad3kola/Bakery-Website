import img3 from "@/assets/stock-image-3-croissant.jpg";
import img4 from "@/assets/stock-image-4-cookies.jpg";
import img5 from "@/assets/stock-image-5-bagel.jpg";
import img11 from "@/assets/stock-images-11-catering-dishes.jpg";
import img12 from "@/assets/stock-image-12-donuts.jpg";
import img13 from "@/assets/stock-image-13-cocktail-drinks.jpg";

import {
  BakeryProps,
  FeaturesProps,
  FooterProps,
  TopMenuContentProps,
} from "./typings";
import {
  FaceSmileIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import {
  CakeIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const navLinks = [
  "Menu",
  "Services",
  "Food",
  "About",
  "Contact",
];

export const topMenuContent: TopMenuContentProps[] = [
  {
    image: img3,
    title: "Golden Flake Croissant",
    desc: "Immerse yourself in the luxurious experience of our Golden Flake Croissant. Each bite promises a crispy delight, with layers of perfection that melt in your mouth. Elevate your senses with a heavenly fusion of:",
    ingredients: [
      "Orange blossom honey-infused butter",
      "Almond praline filling",
      "Edible gold leaf flakes",
      "Lavender-infused sugar",
      "Toasted pistachio crumble",
    ],
    orders: getRandomNumber(10000, 500000),
  },
  {
    image: img4,
    title: "Pillow Puff Delights",
    desc: "Indulge in the heavenly clouds of our Pillow Puff Delights, a delightful twist on the classic puff puff. Each bite offers a light and airy experience, a true pillow of flavor. Immerse yourself in the richness of:",
    ingredients: [
      "Sun-dried tomatoes",
      "Rosemary-infused olive oil",
      "Roasted garlic",
      "Asiago Cheese",
      "Black sesame seeds",
    ],
    orders: getRandomNumber(10000, 500000),
  },
  {
    image: img5,
    title: "Savory Orbit Bagel",
    desc: "Embark on a journey of flavor with our Savory Orbit Bagel. Each bite promises a crispy delight, with layers that melt in your mouth. Experience the perfect fusion of:",
    ingredients: [
      "Smoked salmon",
      "Capers",
      "Dill-infused cream cheese",
      "Red onion relish",
      "Everything bagel seasoning",
    ],
    orders: getRandomNumber(10000, 500000),
  },
];

export const features: FeaturesProps[] = [
  {
    image: img12,
    name: "Donuts & Fritters",
  },
  {
    image: img11,
    name: "Catering & Events",
  },
  {
    image: img13,
    name: "Refreshing Cocktail Drinks",
  },
];

export const bakery: BakeryProps[] = [
  {
    Icon: UserIcon,
    title: "Meet Our Talented Bakers",
    desc: "Step into a world where culinary artistry meets expertise. Our team of skilled bakers is dedicated to creating a symphony of flavors that transcend ordinary treats. With years of experience and a passion for perfection, they meticulously craft each pastry and bread, ensuring a delightful experience with every bite. Join us on a journey of taste and discover the artistry behind our bakery creations.",
  },
  {
    Icon: ShoppingCartIcon,
    title: "Explore Our Diverse Collection",
    desc: "Embark on a culinary adventure as you explore our extensive collection of freshly baked goods. From time-honored classics to innovative creations, our offerings cater to a spectrum of tastes and preferences. Every product is a testament to our commitment to quality, using only the finest ingredients to bring you a delightful array of pastries, bread, and confections. Take a moment to savor the rich tapestry of flavors awaiting you at our bakery.",
  },
  {
    Icon: ShoppingBagIcon,
    title: "Indulge in Pure Sweet Delights",
    desc: "Immerse yourself in a world of sweetness and joy with our handcrafted pastries and desserts. Each treat is a labor of love, made with care and attention to detail. Our commitment to using premium ingredients ensures that every bite is a moment of pure indulgence. From flaky pastries to decadent cakes, our bakery is a haven for those with a sweet tooth. Treat yourself to a shopping experience filled with delightful surprises and take home a piece of happiness in every bag.",
  },
];

export const pastries: BakeryProps[] = [
  {
    Icon: CakeIcon,
    title: "Exquisite Cake Creations",
    desc: "Immerse yourself in the world of indulgence with our exquisite cake creations. Our pastry chefs pour their passion into crafting each cake, meticulously layering flavors and textures to create a symphony for your senses. From timeless classics to innovative masterpieces, our cakes serve as the centerpiece for your celebrations, offering a taste of elegance and sweetness in every slice.",
  },
  {
    Icon: FaceSmileIcon, // Using a generic icon as a placeholder for croissant
    title: "Buttery Croissants & Danishes",
    desc: "Embark on a journey of flaky perfection with our buttery croissants and delectable danishes. Baked to golden-brown perfection, each layer unfolds to reveal a delicate dance of textures and flavors. Whether enjoyed with a steaming cup of coffee or savored as a delightful breakfast treat, our croissants and danishes stand as a testament to our commitment to quality, ensuring every bite is a moment of pure bliss.",
  },
  {
    Icon: ShoppingCartIcon, // Using a shopping cart icon as a placeholder for cupcakes
    title: "Irresistible Cupcake Delights",
    desc: "Dive into a world of sweetness with our irresistible cupcake delights. Each cupcake is a small masterpiece, a harmony of flavors and creativity. From classic favorites to innovative creations, our cupcakes cater to every palate and celebration. Perfect for indulging your sweet cravings or adding a touch of joy to any occasion, our cupcakes promise a delightful experience in every heavenly bite.",
  },
];

export const footer: FooterProps[] = [
  {
    head: "COMPANY",
    list: ["About", "Careers", "Brand Center", "Blog"],
  },
  {
    head: "HELP CENTER",
    list: [
      "Discord Server",
      "Twitter",
      "Facebook",
      "Contact Us",
    ],
  },
  {
    head: "LEGAL",
    list: [
      "Privacy Policy",
      "Licensing",
      "Terms & Conditions",
    ],
  },
  {
    head: "DOWNLOAD",
    list: ["iOS", "Android", "Windows", "MacOS"],
  },
];
