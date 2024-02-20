import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'antd';
import fru1 from '../../src/assets/images/product/fruits/Banana.jpeg'
import fru2 from '../../src/assets/images/product/fruits/Mango.jpeg'
import fru3 from '../../src/assets/images/product/fruits/Orange.jpeg'
import fru4 from '../../src/assets/images/product/fruits/Pineapple.jpeg'
import fru5 from '../../src/assets/images/product/fruits/Pomegranate.jpeg'
import fru6 from '../../src/assets/images/product/fruits/Dragon Fruits.jpeg'
import fru7 from '../../src/assets/images/product/fruits/Grapes.jpeg'
import fru8 from '../../src/assets/images/product/fruits/Guava.jpeg'
import fru9 from '../../src/assets/images/product/fruits/Litchi.jpeg'
import fru10 from '../../src/assets/images/product/fruits/Papaya.jpeg'
import fru11 from '../../src/assets/images/product/fruits/Sapota.jpeg'
import fru12 from '../../src/assets/images/product/fruits/Watermelon.jpeg'
import fru13 from '../../src/assets/images/product/fruits/Pears.jpeg'
import fru14 from '../../src/assets/images/product/fruits/Amla.jpeg'
import fru15 from '../../src/assets/images/product/fruits/Cashew.jpeg'
import fru16 from '../../src/assets/images/product/fruits/Walnut.jpeg'
import fru17 from '../../src/assets/images/product/fruits/Almonds.jpeg'
import fru18 from '../../src/assets/images/product/fruits/Apricot.jpeg'
import fru19 from '../../src/assets/images/product/fruits/Dry Fig.jpeg'
import fru20 from '../../src/assets/images/product/fruits/Pistachio.jpeg'
import fru21 from '../../src/assets/images/product/fruits/Raisins.jpeg'
import fru22 from '../../src/assets/images/product/fruits/Makhana-The-Healthy-Indian-Snack.jpg'


function Fruitsdryfruits() {
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
  
    const handleItemClick = (item) => {
      setSelectedItem(item);
      setOpen(true);
    };
    const products = [
      
        {
          id: 2,
          type: "FRUITS-DRYFRUITS",
          items: [
            {
              image: fru1,
              title: "Banana",
              description: "The export of food products from India is on the rise year after year. Banana export fromIndia is one of the rapidly growing export markets. Being one of the largest banana exportersin the world, Indian banana exporter has successfully entered the global market. For exportof banana, health and quality standards have to be maintained.",
            },
            {
              image: fru2,
              title: "Mango",
              description: "Mango is one of the most famous fruits of India. It is known as “King of fruits”. The productionof mangoes in India is around 15.03 million tons, contributing to 40.48% of the total worldproduction of mango. Mango export from India has been increased by Rs. 209 crores in2010-2011 from Rs 142 crores in 2006-200707. The indian mango export has thus grown by47%. Export of mango from India is now a good opportunity for growth in the internationalmarket..",
            },
            {
              image: fru3,
              title: "Orange",
              description: "Oranges are one of the most popular citrus fruits in the world. Oranges can be consumedraw, in salads, juices, smoothies, desserts and in such other forms. Due to the rise in thedemand for orange across the world Indian orange exporter has also increased the numberof exports. India is the third-largest orange producer in the world. Therefore, the growth fororange export from India is also immense.",
            },
            {
              image: fru4,
              title: "Pineapple",
              description: "Pineapple is one of the most popular tropical fruits. 7% of the world's pineapple production isdone in India. Thus Indian pineapple exporter export pineapple to various countries in theworld. Pineapple is cultivated in the states of Kerala, Tripura and West Bengal and thenpineapple export from India takes place. Export of pineapple takes place in many countriesaround the world.",
            },
            {
              image: fru5,
              title: "Pomegranate",
              description: "Pomegranates are one of the most loved fruits globally. They are generally sweet in taste witha bit of acidic nature. The Indian pomegranate exporter exports tonnes of pomegranatesevery year to many countries in the world. The global demand for pomegranates has seen arise which has in turn increased the pomegranate export from India.",
            },
            {
              image: fru6,
              title: "Dragon Fruits",
              description: "Dragon fruits are a very popular fruit among foodies and health enthusiasts. It is basically atropical fruit known for its vibrant red skin. Dragon fruits exporter in India exports a largenumber of dragon fruits abroad every year. Due to the increasing popularity of this fruit inthe global market, Dragon Fruits export from India has been on the rise for a few years.",
            },
            {
              image: fru7,
              title: "Grapes",
              description: "Grapes are fruits that grow in clusters of 15 to 300. They can be green, black, pink and ofsuch other colors. The Indian grapes exporter exports tonnes of grapes to various countriestoday. The global demand for grapes has been on the rise since a few years considering itsuses in different cuisines and its nutritional benefits. The grapes export from India has thussignificantly grown.",
            },
            {
              image: fru8,
              title: "Guava",
              description: "Guava is an evergreen shrub which is grown for its delicious edible fruits. Guavas can beeaten in several ways and have various health benefits. The Indian guava exporter exportstonnes of guavas to different parts of the world each year. The guava export from India hasbeen rapidly growing due to the growing demand of the fruit worldwide. The export of guavafrom India is a good business opportunity for many local farmers and vendors today.",
            },
            {
              image: fru9,
              title: "Litchi",
              description: "Litchis are small, oval to roundish fruits of a Chinese tree called Litchi chinensis. These fruits have diverse usesand delicious taste. The Indian Litchi exporter exports tonnes of Litchis each year. Due to the various uses andbenefits of these fruits, the Litchi export from India has been on a rise over the years. The export of Litchi fromIndia is now a good business opportunity for local farmers and vendors to export their products and expandtheir business.",
            },
            {
              image: fru10,
              title: "Papaya",
              description: "Papaya is a tropical fruit generally eaten for its orange, sweet and juicy pulp. The Indianpapaya exporter exports tonnes of papayas abroad each year. The papaya export from Indiahas been increasing over the years due to the growing popularity of the fruit worldwide. Theexport of Papaya is a good opportunity for local farmers and vendors to expand theirbusiness and enter the international marketplace.",
            },
            {
              image: fru11,
              title: "Sapota",
              description: "Manilkara zapota popularly known as chikoo or Sapota is a long-lived, evergreen tree native tosouthern Mexico, Central America and the Caribbean. The Indian sapota exporter exports tonnes offruits abroad each year. Due to the various uses and benefits of the fruits, the Sapota export fromIndia has been increasing over the years. The export of Sapota from India is now a good businessopportunity for local farmers and vendors to expand their business and enter the internationalmarket.",
            },
            {
              image: fru12,
              title: "Watermelon",
              description: "Watermelon is a popular large spherical fruit. It is dark green in color and has a smooth rind.It has a sweet, juicy, refreshing flesh of reddish colour. The Indian watermelon exporterexports watermelon from India which is worth 8.35 USD million. Due to the growingpopularity of Watermelons, Watermelon export from India has been increasing over time.",
            },
            {
              image: fru13,
              title: "Pears",
              description: "Pears are fruits that are sweeter and of a softer texture compared to apples. Pears aregenerally elongated, narrow at the stem end, and broader at the opposite end. The IndianPears exporter exports tonnes of the fruit abroad from India. This Pears export from Indiahas been increasing over the years.",
            },
            {
              image: fru14,
              title: "Amla",
              description: "Green chillies are one of the most important parts of Indian cuisine. Green chilli exporter inIndia exports tonnes of chillies abroad each year. The growing popularity of the green chilliesis because of its unique flavour and aroma. Green chilli export from India is thus a goodbusiness opportunity for our local farmers and vendors to enter the international market.Green chilli import from India includes the import of different types and qualities of chillies.",
            },
            {
              image: fru15,
              title: "Cashew",
              description: "Cashew is an average-sized tropical evergreen tree from the Anacardiaceae family. This treeis generally cultivated for its curved edible seeds. The Cashew Nuts exporter in India exportscashews to around 61 countries in the world. The combined value of the total Cashew Nutsexport from India is around 41.64 USD million.",
            },
            {
              image: fru16,
              title: "Walnut",
              description: "Walnuts are rounded, single-seeded stone fruits of the walnut tree. Walnuts are rich in fats,fiber, vitamins and minerals. The Walnut exporter in India exports tonnes of the productabroad from India. This Walnut export from India has been increasing over the years. Thismay be because of the several health and medicinal benefits of walnuts",
            },
            {
              image: fru17,
              title: "Almonds",
              description: "Almonds are popularly referred to as nuts and are teardrop-shaped edible seeds. Almondsare primarily fruits of the almond tree. The Almond Nuts exporter in India exports tonnes ofnuts abroad every year. The popularity of Almond Nuts has been growing in the world. Thismay be a reason why Almond Nuts export from India has also been growing rapidly",
            },
            {
              image: fru18,
              title: "Apricot",
              description: "Apricots are stone fruits that are very nutritious. The Apricots exporter in India exportsapricots to almost 95 countries in the world. The combined value of the total Apricots exportfrom India is around 27.97 USD million. The Indian Apricots Exporter exports various varietiesof Apricots to many countries including the Netherlands, China, USA, France and the UnitedKingdom. The Apricots export for these top five countries is worth about 17.4 USD million.",
            },
            {
              image: fru19,
              title: "Dry Fig",
              description: "Figs grow on the Ficus tree of the Mulberry family. The majority of figs are dried, either byexposure to sunlight or through an artificial process. The Dry fig exporter in India exportshuge quantities of the figs each year. Due to the rising popularity of Dry Fig, Dry Fig exportfrom India has been increasing rapidly over the decades. The Indian Dry Fig exporter,therefore, is exporting more and more products each year.",
            },
            {
              image: fru20,
              title: "Pistachio",
              description: "The Pistachio nuts are the edible seeds of the Pistacia vera tree. They contain healthy fatsand are rich in protein, fiber, and antioxidants. The Pistachio exporter in India exports a hugequantity of the nuts each year. Due to the growing popularity of Pistachios, Pistachio exportfrom India has also been on a rise.",
            },
            {
              image: fru21,
              title: "Raisins",
              description: "Raisins are basically dried grapes. They are shrivelled, bite-sized morsels of sweetness. Theyare a great and healthy snack option. The Raisins exporter in India exports tonnes of theproduct each year to many countries. The Raisins export from India has been increasing overtime due to the growing popularity and the uses of the product.",
            },
            {
              image: fru22,
              title: "Makhanas",
              description: "Makhanas are rich in nutrients and are a highly potent source of manganese, potassium, magnesium, thiamine, protein, and phosphorus. Roasted makhanas are an excellent teatime snack and a perfect tiffin option for kids. In India, people also make dishes such as kheer, curry, raita, and cutlets using makhanas."
            },
    
          ],
        },
      ]
  return (
    <div>
           <div className="common-outer">
        <div className="common-content">
          <div className="title">Fruits & Dryfruits</div>
          <div> <Link to="/">Home</Link> <span><i class="fas fa-angle-right"></i></span>Fruits & Dryfruits</div>
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

export default Fruitsdryfruits