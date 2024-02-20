import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'antd';
import vege1 from '../../src/assets/images/product/vegetables/p1.webp'
import vege2 from '../../src/assets/images/product/vegetables/p2.jpeg'
import vege3 from '../../src/assets/images/product/vegetables/p3.jpeg'
import vege4 from '../../src/assets/images/product/vegetables/p4.jpeg'
import vege5 from '../../src/assets/images/product/vegetables/p5.jpeg'
import vege6 from '../../src/assets/images/product/vegetables/p6.jpeg'
import vege7 from '../../src/assets/images/product/vegetables/p7.jpeg'
import vege8 from '../../src/assets/images/product/vegetables/p8.jpeg'
import vege9 from '../../src/assets/images/product/vegetables/p9.jpeg'
import vege10 from '../../src/assets/images/product/vegetables/p10.jpeg'
import vege11 from '../../src/assets/images/product/vegetables/p11.jpeg'
import vege12 from '../../src/assets/images/product/vegetables/p12.jpeg'
import vege13 from '../../src/assets/images/product/vegetables/p13.jpeg'
import vege14 from '../../src/assets/images/product/vegetables/p14.jpeg'
import vege15 from '../../src/assets/images/product/vegetables/p15.jpeg'
import vege16 from '../../src/assets/images/product/vegetables/p16.jpeg'
import vege17 from '../../src/assets/images/product/vegetables/p17.jpeg'
import vege18 from '../../src/assets/images/product/vegetables/p18.jpeg'
import vege19 from '../../src/assets/images/product/vegetables/p19.jpeg'
function Vegetables() {

    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
  
    const handleItemClick = (item) => {
      setSelectedItem(item);
      setOpen(true);
    };

    const products = [
        {
          id: 1,
          type: "VEGETABLES",
          items: [
            {
              image: vege1,
              title: "Onion",
              description: "This variety of onions are generally characterised by dark red bulbs and areglobular round in shape. They have tight skin and are moderately pungent. Theonion crop matures in 90-100 days after transplanting. The Agrifound Dark Redvariety gives an average yield of 300 q/ha.",
            },
            {
              image: vege2,
              title: "Musroom",
              description: "Mushrooms have been a non-traditional cash crop in India. Grown indoors,both as a seasonal crop and under the controlled environmental conditions,mushroom export in India is on the rise. Some of the major export destinationsfor the mushroom exporter in India include the US, Israel and Mexico.Mushroom import from India includes importing fresh and processedmushrooms.",
            },
            {
              image: vege3,
              title: "Potato",
              description: "Potato is one of the main food crops in India. It is used in vegetables, salads,curries and so on. India is said to be the second-largest potato exporter in theworld and exports potatoes to more than 30 countries around the world. Mostof the export potato from India are grown in states like Uttar Pradesh, Bihar andGujarat. Potato import from India is conducted by several countries with Nepalbeing the largest importer of potatoes.",
            },
            {
              image: vege4,
              title: "Broccoli",
              description: "Broccoli is an edible green vegetable of the cabbage family whose large floweryhead and stalk are eaten. India being one of the largest broccoli producers inthe world, broccoli exporter in India export tonnes of Broccoli each year.Broccoli export is on the rise due to its several health and medicinal benefits.Many countries around the globe conduct broccoli import from india."
            },
            {
              image: vege5,
              title: "Spinach/Palak",
              description: "Spinach is one of the most nutritious green leafy vegetables. Indian spinachexporter exports spinach to around 40 countries in the world. In the year 2019-2020 spinach export from india was worth 0.37 USD million. The total spinachimport from india in 2019-2020 was around 338210 metric tons.",
            },
            {
              image: vege6,
              title: "Cabbage",
              description: "Cabbage is a highly nutritious leafy vegetable. Used in several cuisines across the world, theindian cabbage exporter is increasing exports year after year. Cabbage export from India hasnow thus become a good source of revenue for many exporters. With the numerousbenefits, one gets from consuming cabbage and its increasing use in various fields, cabbageimport from India is bound to grow in the coming years.",
            },
            {
              image: vege7,
              title: "Brinjal",
              description: "India has been blessed with great climatic and soil conditions. Therefore, fruits anf vegetablesthrive well in India. The business of Indian brinjal exporter has been growing since the pastfew years. India ranks around second in the world in the production of many vegetablesincluding Brinjal. Brinjal export from India involves several processes includingdocumentation, health and safety measures and so on. Many varieties are brinjals areinvolves in the brinjal import from India.",
            },
            {
              image: vege8,
              title: "Cauliflower",
              description: "Cauliflower is a vegetable from the species Brassica oleracea. It is a vegetable used in manycuisines around the world. The cauliflower exporter in India exports tonnes of cauliflower todifferent parts of the world. The cauliflower export has been on a rise since a few years dueto its growing popularity. Cauliflower import from India is worth around a huge amount now.",
            },
            {
              image: vege9,
              title: "Drumstick",
              description: "The pods of the Drumstick or Moringa tree are generally long, smooth-skinned, dark green incolor, and three-sided. Drumstick exporter in India export tonnes of Drumsticks every year todifferent countries in the world. Drumsticks can be used in many recipes and are known fortheir nutritional qualities. This may be one of the reasons why Drumstick export from Indiahas increased. The Drumstick import from India is now a growing business opportunity."
            },
            {
              image: vege10,
              title: "Lady Finger",
              description: "Ladyfinger is a long finger-like green vegetable that has a small tip at the tapering end. Thisvegetable is known to have various health and nutritional benefits. The Ladyfinger exporter inIndia exports tonnes of ladyfinger abroad. This increase in ladyfinger export is mostlybecause of its growing popularity worldwide. The ladyfinger import from India takes placefrom Gujarat, Madhya Pradesh, West Bengal, Bihar, Orissa, and such other states.",
            },
            {
              image: vege11,
              title: "Green Chilli",
              description: "Green chillies are one of the most important parts of Indian cuisine. Green chilli exporter inIndia exports tonnes of chillies abroad each year. The growing popularity of the green chilliesis because of its unique flavour and aroma. Green chilli export from India is thus a goodbusiness opportunity for our local farmers and vendors to enter the international market.Green chilli import from India includes the import of different types and qualities of chillies.",
            },
            {
              image: vege12,
              title: "Cucumber",
              description: "Cucumber is a widely cultivated creeping vine widely used as a vegetable. The IndianCucumber exporter exports tonnes of cucumber to various countries in the world. Cucumberhas various uses and benefits and is, therefore, the Cucumber export from India has been ona rise over the years. The export of Cucumber is now a great business opportunity for thelocal vendors and farmers in India..",
            },
            {
              image: vege13,
              title: "Carrots",
              description: "Carrot or Daucus carota is a root vegetable and is known to be perfect health food. It iscrunchy, tasty, and highly nutritious. The Carrots exporter in India exports huge quantitiesof the vegetable each year. Due to its various health and medicinal uses and benefits, theCarrots export from India has been increasing rapidly over the decades.",
            },
            {
              image: vege14,
              title: "Curry Leaves",
              description: "Curry leaves are a part of a small deciduous aromatic shrub, scientifically named Murrayakoenigii, belonging to the family Rutaceae. It may be considered a natural medicinal plant.South Asia is home to this plant, and it is found in countries like Sri Lanka, Bangladesh,China and India.",
            },
            {
              image: vege15,
              title: "Coriander",
              description: "Coriander is a herb that’s popularly used in various cuisines across the world. It comesfrom the Coriandrum sativum plant and is closely related to parsley, carrots, and celery.The Coriander exporter in India exports tonnes of the product abroad from India. ThisCoriander export from India has been increasing over the years.",
            },
            {
              image: vege16,
              title: "Spring Onion",
              description: "Spring onions are characterised by dark green hollow-tubed leaves and a white bulb.Being a versatile vegetable it is widely used in the Asian cuisines. It is said to be anexcellent source of vitamin C and dietary fibre. The Spring Onion exporter in India exportstonnes of Spring Onions abroad each year.",
            },
            {
              image: vege17,
              title: "Mint",
              description: "Mint includes peppermint, spearmint, and such other varieties that belong to the genusMentha. Mint is particularly known for the cooling sensation they impart. Mint is used invarious cuisines across the world. The Mint exporter in India exports tonnes of Mint everyyear. Due to the various health and medicinal benefits of this herb, the Mint export fromIndia has been on a rise over the years.",
            },
            {
              image: vege18,
              title: "Methi/Fenugreek",
              description: "Fenugreek is a herb used in cooking, medicine, and to hide the taste of other medicines.Fenugreek seeds have a smell and taste similar to maple syrup. Fenugreek leaves are alsoeaten as a vegetable in India. The Fenugreek exporter in India exports fenugreek toaround 131 countries in the world.",
            },
            {
              image: vege19,
              title: "Lemon",
              description: "Lemon is one of the most popular types of citrus fruit. The fruit, juice, and peel have variousmedicinal uses. The Lemon exporter in India exports a huge quantity of the fruit each year.Due to the growing popularity of Lemons, Lemon export from India has also been on a rise.",
            }
    
          ],
        },
    ]
  return (
    <div>
    <div className="common-outer">
        <div className="common-content">
          <div className="title">Vegetables</div>
          <div> <Link to="/">Home</Link> <span><i class="fas fa-angle-right"></i></span>Vegetables</div>
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

export default Vegetables