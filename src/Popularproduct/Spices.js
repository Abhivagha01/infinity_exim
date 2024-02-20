import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'antd';
import spi1 from '../../src/assets/images/product/spice/Turmeric.jpeg'
import spi2 from '../../src/assets/images/product/spice/Ginger.jpeg'
import spi3 from '../../src/assets/images/product/spice/Star Anise.jpeg'
import spi4 from '../../src/assets/images/product/spice/Cinnamon.jpeg'
import spi5 from '../../src/assets/images/product/spice/Asafoetida.jpeg'
import spi6 from '../../src/assets/images/product/spice/Nutmeg.jpeg'
import spi7 from '../../src/assets/images/product/spice/Cumin Seeds.jpeg'
import spi8 from '../../src/assets/images/product/spice/Black Pepper.jpeg'
import spi9 from '../../src/assets/images/product/spice/Garlic.jpeg'
import spi10 from '../../src/assets/images/product/spice/Clove.jpeg'
import spi11 from '../../src/assets/images/product/spice/Mustard Seeds.jpeg'
import spi12 from '../../src/assets/images/product/spice/Bay Leaf.jpeg'
import spi13 from '../../src/assets/images/product/spice/Chilli Pepper.jpeg'
import spi14 from '../../src/assets/images/product/spice/Coriander.jpeg'
import spi15 from '../../src/assets/images/product/spice/Saffron.jpeg'
import spi16 from '../../src/assets/images/product/spice/Carom.jpeg'
import spi17 from '../../src/assets/images/product/spice/Green Cardamom.jpeg'
import spi18 from '../../src/assets/images/product/spice/Green Chilli Pepper.jpeg'
import spi19 from '../../src/assets/images/product/spice/Red Chilli Powder.jpeg'
import spi20 from '../../src/assets/images/product/spice/Corriander Powder.jpeg'
import spi21 from '../../src/assets/images/product/spice/Cumin Powder.jpeg'
import spi22 from '../../src/assets/images/product/spice/Tumeric powder.jpeg'
import spi23 from '../../src/assets/images/product/spice/Ginger powder.jpeg'
import spi24 from '../../src/assets/images/product/spice/Garlic po.jpeg'
import spi25 from '../../src/assets/images/product/spice/Onion powder.jpeg'
import spi26 from '../../src/assets/images/product/spice/Jaggery powder.jpeg'
import spi27 from '../../src/assets/images/product/spice/moringa-powder.jpg'

function Spices() {
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
  
    const handleItemClick = (item) => {
      setSelectedItem(item);
      setOpen(true);
    };
    const products=[
        {
            id: 3,
            type: "SPICES",
            items: [
              {
                image: spi1,
                title: "Turmeric",
                description: "From curing ulcers and preventing heart diseases to being a common ingredient in dishes,Turmeric is one of nature’s most special gifts. This magnificent spice not just makes your foodget a unique taste, but is also one of the best natural medicines in the world. This is preciselywhy turmeric has always been and will continue to remain in high demand all across theglobe.",
              },
              {
                image: spi2,
                title: "Ginger",
                description: "Ginger is said to be one of the earliest known oriental spices. It is extensively used in Indiancuisine and other cuisines across the globe. The Ginger family is a tropical group and is foundin abundance in the Indo-Malaysian region. Ginger export from India is, therefore, increasingrapidly for a few years.",
              },
              {
                image: spi3,
                title: "Star Anise",
                description: "Star anise is the fruit of a small oriental tree. It is star-shaped and has five to ten pointedboat-shaped sections. These hard sections are seed pods. Star anise trees are short,compact and pleasant-looking. It has the flavour which is reminiscent of licorice. Star anise issometimes confused with anise due to the similarity of name and flavour, but the two spicesare unrelated.",
              },
              {
                image: spi4,
                title: "Cinnamon",
                description: "Cinnamon is a dried bark of various laurel trees in the Cinnamomum family. The 'TrueCinnamon' is the dried inner stem bark of Cinnamomum Verum. Cinnamon plants are grownas bushes. One of the more common trees Cinnamon is derived from is the cassia. Cinnamonhas a sweet taste and a woody fragrance in both grounds and sticks forms. Due to the risingpopularity of Cinnamon, cinnamon export from India is rising day by dayPineapple is one ofthe most popular tropical fruits.",
              },
              {
                image: spi5,
                title: "Asafoetida",
                description: "Asafoetida is basically the dried sap obtained from the roots of Ferula plants. Native toAfghanistan and Iraq, asafoetida is dried, ground into a spice, and used as a spice in variouscuisines across the world. The Asafoetida exporter in India exports tonnes of Asadfoetida tovarious countries in the world. Besides, its unique flavor and aroma, Asafoetida also hasmany health benefits. Asafoetida export from India has thus been increasing over a period oftime.",
              },
              {
                image: spi6,
                title: "Nutmeg",
                description: "Nutmeg is basically the seed or ground spice of several species of the genus Myristica.Nutmeg exporter from India export tonnes of Nutmeg abroad every year. The annualproduction of Nutmeg in India is around 14,000 - 16,000 Metric Tons. Nutmeg export fromIndia thus has been increasing year after year.",
              },
              {
                image: spi7,
                title: "Cumin Seeds",
                description: "Being the third most consumed spices in the world, the aromatic and spicy-sweet flavour ofCumin has amazed the entire planet. The seeds have been used since ancient times and arestill a signature ingredient in many lovely dishes across the world. At Pisum, we are leadingexporters of the best quality Cumin seeds.",
              },
              {
                image: spi8,
                title: "Black Pepper",
                description: "Black Pepper is one of the most commonly used spices in the world. Originally from SouthIndia, black pepper is grown in several tropical countries in the world. Black Pepper exporterin India export tonnes of black pepper abroad each year. Black pepper export from India wasaround 17600 metric tonnes last year.",
              },
              {
                image: spi9,
                title: "Garlic",
                description: "Garlic is a species in the onion genus and is primarily grown all around the world. The garlicexporter in India exports tonnes of garlic to various countries each year. Due to the uniquetaste and aroma of garlic, the garlic export from India has been on a rise. This is a goodopportunity for the Indian Garlic exporter to expand his business and enter the internationalmarketplace. The garlic export from India includes the export of various varieties of Garlic.",
              },
              {
                image: spi10,
                title: "Clove",
                description: "Cloves are primarily the aromatic flower buds of a tree in the family Myrtaceae. The Cloveexporter in India exports cloves to around 149 countries in the world. The Clove export fromIndia has been growing over the years due to the popularity of spice all over the world. This isa good business opportunity for the Indian Clove exporter to expand his business and exportcloves worldwide. The clove export from India involves exporting various varieties of thespice.",
              },
              {
                image: spi11,
                title: "Mustard Seeds",
                description: "Mustard is a condiment primarily made from the seeds of a mustard plant. The MustardSeeds exporter in India exports tonnes of mustard products from India. Due to the varioususes and benefits of Mustard, the Mustard Seeds export from India has been on a rise. This isconsidered as a good opportunity for the Indian Mustard Seeds exporter to expand hisbusiness and enter the international market",
              },
              {
                image: spi12,
                title: "Bay Leaf",
                description: "The Bay leaf is aromatic and has several culinary uses. The Bay Leaf exporter in India exportstonnes of Bay leaves abroad each year. Due to its various uses and benefits, the Bay Leafexport from India has been on a rise over the last few years. This is a good opportunity forthe Indian Bay Leaf exporter to expand his business and enter the international marketplace",
              },
              {
                image: spi13,
                title: "Chilli Pepper",
                description: "Chilli Pepper is one of the most important spices in India and all over the world. IndianChillies are popular across the world. The Chilli Pepper exporter in India exports tonnes ofchillies abroad each year. Due to various culinary uses of Chilli pepper, the popularity of thisspice is growing. The Chilli Pepper export from India has thus also been on a rise over theyears.",
              },
              {
                image: spi14,
                title: "Coriander",
                description: "Coriander seeds are plump and usually brown in colour. They have a hollow cavity whichbears essential oils that flavour of the dishes when used in cooking. The Coriander Seedsexporter in India exports huge quantities of the product each year. Coriander Seeds exportfrom India is considered a great business opportunity for our local vendors and farmers toexpand their businesses and enter the international market.",
              },
              {
                image: spi15,
                title: "Saffron",
                description: "Saffron is a spice harvested by hand from the Crocus sativus flower, commonly known as the“saffron crocus.” The term “saffron” points to the flower's stigma. Saffron is the mostexpensive spice in the world with 1 pound costing between around 500 and 5,000 U.S.dollars. The Saffron exporter in India exports huge quantities of Saffron each year to manycountries.",
              },
              {
                image: spi16,
                title: "Carom",
                description: "Thyme is primarily a Mediterranean herb with dietary, medicinal, and ornamental uses. Theflowers, leaves, and oil of thyme have been used to treat a range of symptoms since ancienttimes. The Carom Seeds exporter in India exports a large quantity of the products each year.The Thyme export from India has been growing over the years due to the various health andmedicinal benefits of the product.",
              },
              {
                image: spi17,
                title: "Green Cardamom",
                description: "Green Cardamom is a spice with an intense, slightly sweet flavour that can be compared tomint. Even though Green Cardamom originated in India, it is used all over the world today.The Green Cardamom exporter in India exports tonnes of Cardamom abroad. GreenCardamom is used in various sweet and savoury dishes.",
              },
              {
                image: spi18,
                title: "Green Chilli Pepper",
                description: "Green Chilli pepper is basically the fruit of plants from the genus Capsicum from the familySolanaceae. Chilli peppers are used in numerous cuisines to add heat to dishes. The GreenChilli Pepper exporter in India exports tonnes of the product each year to many countries.The Green Chilli pepper export from India has been increasing over time due to the growingpopularity and the uses of the product.",
              },
              {
                image: spi19,
                title: "Red Chilli Powder",
                description: "Red Chillis were first introduced in India by the Portuguese at Goa. Soon enough, theirpopularity spread across the Indian subcontinent. When the great Maratha king Shivajimoved against the Mughals, the chilli went with him and was introduced to Northern India.Today India is the largest producer of red chilli in the world.",
              },
              {
                image: spi20,
                title: "Corriander Powder",
                description: "Considering the frequency of their use together, the coriander-cumin powder provides theperfect balance of flavour. Also known as dhaana-jeeru powder, this is a widely used spicecombination in western India.",
              },
              {
                image: spi21,
                title: "Cumin Powder",
                description: "Considering the frequency of their use together, the coriander-cumin powder provides theperfect balance of flavour. Also known as dhaana-jeeru powder, this is a widely used spicecombination in western India.",
              },
              {
                image: spi22,
                title: "Cumin Powder",
                description: "Grapes are fruits that grow in clusters of 15 to 300. They can be green, black, pink and ofsuch other colors. The Indian grapes exporter exports tonnes of grapes to various countriestoday. The global demand for grapes has been on the rise since a few years considering itsuses in different cuisines and its nutritional benefits. The grapes export from India has thussignificantly grown.",
              },
              {
                image: spi23,
                title: "Tumeric powder",
                description: "Turmeric is a deep, golden-orange spice known for adding color, flavor and nutrition to foods.A relative of ginger, turmeric comes from the rhizome (root) of a native Asian plant and hasbeen used in cooking for hundreds of years. It has also been used in ayurvedic and otherforms of traditional medicine in China and India.",
              },
              {
                image: spi24,
                title: "Ginger powder",
                description: "Dried and powdered ginger. Popularly used in masalas, curry and stews.Ginger has a very long history of use in various forms of traditional/alternative medicine. Ithas been used to help digestion, reduce nausea and help",
              },
              {
                image: spi25,
                title: "Onion powder",
                description: "Onion powder may be used as a seasoning atop a variety of foods and dishes, such aspasta,pizza, andgrilledchicken. It is also a primary ingredient inbeau monde seasoning.[2]It is alsosometimes used as ameat rub.[1]Onion powder is also an ingredient in some commerciallyprepared foods, such as sauces, soups,[11]and salad dressings. It can also be used in manyother recipes such as burgers or meatloaf",
              },
              {
                image: spi26,
                title: "Jaggery powder",
                description: "ORGANIC INDIA Jaggery Powder is made from certified organic sugar cane harvested fromorganic farms. Free from pesticides and chemical additives, ORGANIC INDIA jaggery naturallycontains vitamins and minerals also. It is a delicious and healthy alternative to processedsugar. Use it to enhance the taste of tea, coffee, and other beverages.",
              },
              {
                image: spi27,
                title: "Moringa powder",
                description: "Moringa powder can be used to protect tissue (liver, kidneys, heart, and lungs), and to reduce pain. Antioxidants help protect cells against free radicals, which are produced by digesting food, smoking, and exposure to radiation. Antioxidants from plant-based sources such as moringa powder are considered best.",
              },
            ],
          },
    ]
  return (
    <div>
         <div className="common-outer">
        <div className="common-content">
          <div className="title">Spices</div>
          <div> <Link to="/">Home</Link> <span><i class="fas fa-angle-right"></i></span>Spices</div>
        </div>
      </div>

      <div className="container">
        <div className="item row justyfy-content-center ">
          {products.map((category) => (
            category.items.map((item) => (
              <div key={item.title} className="item col-lg-3 col-md-6 col-sm-12" onClick={() => handleItemClick(item)}>
                <div className="product-item">
                  <div className="image-block">
                    <img src={item.image} alt={item.title} />

                  </div>
                  <div className="content-box">
                    {item.title}
                  </div>
                </div>
              </div>
            ))
          ))}
          <Modal
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            footer={false}
            width={750}
          >
            {selectedItem && (
              <div className="row modal-item align-items-center">
                <div className="col-lg-6 item">
                  <img src={selectedItem.image} alt={selectedItem.title} />
                </div>
                <div className="col-lg-6 item">
                  <div className="description">
                    <div className='title'>{selectedItem.title}</div>
                    {selectedItem.description}
                  </div>
                </div>
              </div>
            )}
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Spices