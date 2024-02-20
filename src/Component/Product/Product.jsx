import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'antd';
import vege1 from '../../assets/images/product/vegetables/p1.webp'
import vege2 from '../../assets/images/product/vegetables/p2.jpeg'
import vege3 from '../../assets/images/product/vegetables/p3.jpeg'
import vege4 from '../../assets/images/product/vegetables/p4.jpeg'
import vege5 from '../../assets/images/product/vegetables/p5.jpeg'
import vege6 from '../../assets/images/product/vegetables/p6.jpeg'
import vege7 from '../../assets/images/product/vegetables/p7.jpeg'
import vege8 from '../../assets/images/product/vegetables/p8.jpeg'
import vege9 from '../../assets/images/product/vegetables/p9.jpeg'
import vege10 from '../../assets/images/product/vegetables/p10.jpeg'
import vege11 from '../../assets/images/product/vegetables/p11.jpeg'
import vege12 from '../../assets/images/product/vegetables/p12.jpeg'
import vege13 from '../../assets/images/product/vegetables/p13.jpeg'
import vege14 from '../../assets/images/product/vegetables/p14.jpeg'
import vege15 from '../../assets/images/product/vegetables/p15.jpeg'
import vege16 from '../../assets/images/product/vegetables/p16.jpeg'
import vege17 from '../../assets/images/product/vegetables/p17.jpeg'
import vege18 from '../../assets/images/product/vegetables/p18.jpeg'
import vege19 from '../../assets/images/product/vegetables/p19.jpeg'
import fru1 from '../../assets/images/product/fruits/Banana.jpeg'
import fru2 from '../../assets/images/product/fruits/Mango.jpeg'
import fru3 from '../../assets/images/product/fruits/Orange.jpeg'
import fru4 from '../../assets/images/product/fruits/Pineapple.jpeg'
import fru5 from '../../assets/images/product/fruits/Pomegranate.jpeg'
import fru6 from '../../assets/images/product/fruits/Dragon Fruits.jpeg'
import fru7 from '../../assets/images/product/fruits/Grapes.jpeg'
import fru8 from '../../assets/images/product/fruits/Guava.jpeg'
import fru9 from '../../assets/images/product/fruits/Litchi.jpeg'
import fru10 from '../../assets/images/product/fruits/Papaya.jpeg'
import fru11 from '../../assets/images/product/fruits/Sapota.jpeg'
import fru12 from '../../assets/images/product/fruits/Watermelon.jpeg'
import fru13 from '../../assets/images/product/fruits/Pears.jpeg'
import fru14 from '../../assets/images/product/fruits/Amla.jpeg'
import fru15 from '../../assets/images/product/fruits/Cashew.jpeg'
import fru16 from '../../assets/images/product/fruits/Walnut.jpeg'
import fru17 from '../../assets/images/product/fruits/Almonds.jpeg'
import fru18 from '../../assets/images/product/fruits/Apricot.jpeg'
import fru19 from '../../assets/images/product/fruits/Dry Fig.jpeg'
import fru20 from '../../assets/images/product/fruits/Pistachio.jpeg'
import fru21 from '../../assets/images/product/fruits/Raisins.jpeg'
import fru22 from '../../assets/images/product/fruits/Makhana-The-Healthy-Indian-Snack.jpg'
import spi1 from '../../assets/images/product/spice/Turmeric.jpeg'
import spi2 from '../../assets/images/product/spice/Ginger.jpeg'
import spi3 from '../../assets/images/product/spice/Star Anise.jpeg'
import spi4 from '../../assets/images/product/spice/Cinnamon.jpeg'
import spi5 from '../../assets/images/product/spice/Asafoetida.jpeg'
import spi6 from '../../assets/images/product/spice/Nutmeg.jpeg'
import spi7 from '../../assets/images/product/spice/Cumin Seeds.jpeg'
import spi8 from '../../assets/images/product/spice/Black Pepper.jpeg'
import spi9 from '../../assets/images/product/spice/Garlic.jpeg'
import spi10 from '../../assets/images/product/spice/Clove.jpeg'
import spi11 from '../../assets/images/product/spice/Mustard Seeds.jpeg'
import spi12 from '../../assets/images/product/spice/Bay Leaf.jpeg'
import spi13 from '../../assets/images/product/spice/Chilli Pepper.jpeg'
import spi14 from '../../assets/images/product/spice/Coriander.jpeg'
import spi15 from '../../assets/images/product/spice/Saffron.jpeg'
import spi16 from '../../assets/images/product/spice/Carom.jpeg'
import spi17 from '../../assets/images/product/spice/Green Cardamom.jpeg'
import spi18 from '../../assets/images/product/spice/Green Chilli Pepper.jpeg'
import spi19 from '../../assets/images/product/spice/Red Chilli Powder.jpeg'
import spi20 from '../../assets/images/product/spice/Corriander Powder.jpeg'
import spi21 from '../../assets/images/product/spice/Cumin Powder.jpeg'
import spi22 from '../../assets/images/product/spice/Tumeric powder.jpeg'
import spi23 from '../../assets/images/product/spice/Ginger powder.jpeg'
import spi24 from '../../assets/images/product/spice/Garlic po.jpeg'
import spi25 from '../../assets/images/product/spice/Onion powder.jpeg'
import spi26 from '../../assets/images/product/spice/Jaggery powder.jpeg'
import spi27 from '../../assets/images/product/spice/moringa-powder.jpg'
import her1 from '../../assets/images/product/herbs/Neem.jpeg'
import her2 from '../../assets/images/product/herbs/Ashwagandha.jpeg'
import her3 from '../../assets/images/product/herbs/Aloe Vera.jpeg'
import her4 from '../../assets/images/product/herbs/Sage.jpeg'
import her5 from '../../assets/images/product/herbs/Giloy.jpeg'
import her6 from '../../assets/images/product/herbs/Curry Leaves.jpeg'
import her7 from '../../assets/images/product/herbs/Tulsi.jpeg'
import her8 from '../../assets/images/product/herbs/Senna leaves.jpeg'
import her9 from '../../assets/images/product/herbs/Carom.jpeg'
import her10 from '../../assets/images/product/herbs/Senna Pods.jpeg'
import her11 from '../../assets/images/product/herbs/Senna Extract.jpeg'
import her12 from '../../assets/images/product/herbs/Bay Leaf.jpeg'
import her13 from '../../assets/images/product/herbs/Chickpea.jpeg'
import her14 from '../../assets/images/product/herbs/Pea.jpeg'
import her15 from '../../assets/images/product/herbs/Kidney Beans.jpeg'
import her16 from '../../assets/images/product/herbs/Soya Bean.jpeg'
import her17 from '../../assets/images/product/herbs/Pigeon Pea.jpeg'
import her18 from '../../assets/images/product/herbs/CowpeaBlack-eyes beans.jpeg'
import her19 from '../../assets/images/product/herbs/Horse Gram.jpeg'
import her20 from '../../assets/images/product/herbs/Masoor Dal  Red Lentil.jpeg'
import her21 from '../../assets/images/product/herbs/Green gram  Mung bean.jpeg'
import her22 from '../../assets/images/product/herbs/Black Gram.jpeg'
import her23 from '../../assets/images/product/herbs/Chana Dal.jpeg'
import her24 from '../../assets/images/product/herbs/Urad Dal Split.jpeg'
import her25 from '../../assets/images/product/herbs/Urad Dal Gota.jpeg'
import her26 from '../../assets/images/product/herbs/Coffee seeds.jpeg'
import her27 from '../../assets/images/product/herbs/Coffee powder.jpeg'

function Product() {
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
    {
      id: 4,
      type: "HERBS-PULSES-COFFEE",
      items: [
        {
          image: her1,
          title: "Neem",
          description: "Neem is a useful leaf of the Neem tree. The barks and seeds of this tree are also used formedicinal purposes. The Neem exporter in India exports a huge amount of neem to differentcountries in the world. The Neem export from India has been rising steadily for a few yearsnow. This may be because of the several benefits and uses of Neem.",
        },
        {
          image: her2,
          title: "Ashwagandha",
          description: "Ashwagandha is also said to be a wonder herb. This is due to the fact that it has severalmedicinal properties and uses. The Ashwagandha exporter in India exports tonnes ofAshwagandha abroad every year. The Ashwagandha export from India has been increasingover the years due to the growing popularity of the product. The Indian Ashwagandhaexporter thus has a good reputation worldwide due to the premium quality of productsexported.",
        },
        {
          image: her3,
          title: "Aloe Vera",
          description: "Aloe Vera is an evergreen perennial plant grown for its agricultural and medicinal uses. TheAloe Vera exporter in India exports Aloe Vera to various countries in the world. The popularityof Aloe vera creams, lotions, gels and so on has been rising which has, in turn, led to the risein the Aloe Vera export from India. This is considered as a great opportunity for the IndianAloe Vera exporter to expand his business and enter the international marketplace.",
        },
        {
          image: her4,
          title: "Sage",
          description: "Sage is a staple herb that has a strong aroma and an earthy flavor. It is a powerhouse ofnutrients and minerals. The Sage exporter in India exports huge quantities of the product todifferent regions of the world. Due to its various health benefits, the popularity of Sage hasrisen across the world. This popularity has lead to an increase in Sage export from India. TheIndian Sage exporter exports premium quality of the product abroad following all the healthand safety regulations.",
        },
        {
          image: her5,
          title: "Giloy",
          description: "Giloy is an Ayurvedic herb that is said to have been used and advocated in Indian medicinefrom ancient times. The stem of Giloy is said to be the most useful while the root is also used.The Giloy exporter in India exports tonnes of Giloy every year. Due to the various health andmedicinal benefits of this herb, the Giloy export from India has been on a rise over the years.",
        },
        {
          image: her6,
          title: "Curry Leaves",
          description: "Curry leaves are the foliage of the curry tree. The leaves are highly aromatic and have aunique flavour. The Curry Leaves exporter in India exports tonnes of curry leaves productsevery year. Due to the various culinary and medicinal uses of the curry leaves, the CurryLeaves export from India has been increasing over the years.",
        },
        {
          image: her7,
          title: "Tulsi",
          description: "Tulsi is an upright bushy shrub known for its health and medicinal uses. The Tulsi exporter inIndia exports huge quantities of the plant each year. Due to the rising popularity of Tulsi, Tulsiexport from India has been increasing rapidly over the decades. The Indian Tulsi exporter,therefore, is exporting more and more products each year. These Tulsi export include theexport of various varieties and qualities of the products.",
        },
        {
          image: her8,
          title: "Senna leaves",
          description: "Senna contains anthraquinones, including dianthrone glycosides (1.5% to 3%), sennosides Aand B (rhein dianthrones), and sennosides C and D (rhein aloe-emodin heterodianthrones).Numerous minor sennosides have been identified and appear to contribute to senna’slaxative effect. The plant also contains free anthraquinones in small amounts, including rhein,aloe-emodin, chrysophanol, and their glycosides.",
        },
        {
          image: her9,
          title: "Carom",
          description: "Thyme is primarily a Mediterranean herb with dietary, medicinal, and ornamental uses. Theflowers, leaves, and oil of thyme have been used to treat a range of symptoms since ancienttimes. The Carom Seeds exporter in India exports a large quantity of the products each year.The Thyme export from India has been growing over the years due to the various health andmedicinal benefits of the product.",
        },
        {
          image: her10,
          title: "Senna Pods",
          description: "Senna may cause diarrhea, loss of fluids, hypokalemia, and abdominal pain/cramping. Thelong-term use of senna has resulted in pigmentation of the colon, reversible finger clubbing,cachexia, and laxative dependence. Children, particularly those wearing diapers, mayexperience severe diaper rash, blister formation, and skin sloughing.",
        },
        {
          image: her11,
          title: "Senna Extract",
          description: "Senna Leaf is commonly known as senna or Alexandrian senna, and its scientific name isCassia angustifolia. Senna has been used since the 9th century by Arabian physicians as alaxative and has been known as the cleansing herb. Only the leaves and the pods of theherb are therapeutically useful, states Herbs 2000. Senna is often taken as a tea, capsule,tablet or liquid extract. Senna leaf acts on the intestinal walls, causing contractions that leadto bowel movements.",
        },
        {
          image: her12,
          title: "Bay Leaf",
          description: "The bay leaf is anaromaticleaf commonly used as aherbin cooking. It can be used whole,either dried or fresh, in which case it is removed from the dish before consumption, or lesscommonly used in ground form. The flavor that a bay leaf imparts to a dish has not beenuniversally agreed upon, but most agree it is a subtle addition",
        },
        {
          image: her13,
          title: "Chickpea",
          description: "Known to be one of the world's largest producer of chickpeas, the chickpea exporter in Indiais exporting more and more chickpeas each year. There are broadly two varieties ofchickpeas known as 'Kabuli' and 'Desi'. Chickpea export from India includes both thesevarieties and many more. The Indian chickpea exporter export premium quality chickpeasfrom India..",
        },
        {
          image: her14,
          title: "Pea",
          description: "Due to the growing popularity of peas around the world, the pea exporter in India has toincrease the exports accordingly. Peas are healthy to eat and are generally used to manycuisines leading to the increase of pea export from India. Peas can be exported in the freshor frozen form. The Indian pea exporter, export both these varieties of peas. Besides these,there are many other varieties of pea export from India.",
        },
        {
          image: her15,
          title: "Kidney Beans",
          description: "The kidney beans are a variety of the common beans that are dried and are generallyavailable throughout the year. They are reddish-brown in color and are shaped like a kidney.They have a unique taste and are used in both hot and cold recipes. Therefore, kidney beansexporter in India, export kidney beans to numerous countries in the world. These beans aremajorly used in Mexican and Indian cuisine to make curries, salads so on, and so forth.",
        },
        {
          image: her16,
          title: "Soya Bean",
          description: "India has a favorable climate and soil conditions for the growth of many fruits, vegetables,pulses, grains so on and so forth. Soybean exporter in India export tonnes of Soybeanabroad every year. Soya bean export from India is on the rise due to the growing popularityof soybean worldwide..",
        },
        {
          image: her17,
          title: "Pigeon Pea",
          description: "Pigeon pea is one of the most popular tropical and subtropical legumes. It is fast-growing andalso known to be drought resistant. The pigeon pea exporter in India exports tonnes ofpigeon pea each year. Pigeon peas are used to many cuisines across the world includingIndia and Indonesia. Thus the pigeon pea export from India has been on the rise.",
        },
        {
          image: her18,
          title: "Cowpea/Black-eyes beans",
          description: "The Cowpea is an annual herbaceous legume and it primarily self pollinates. The cowpeaexporter in India exports tonnes of cowpea abroad. People are now understanding theimportance and uses of Cowpea. The black-eyed beans export from India has thus been on arise for a few years. For an Indian cowpea exporter, this is a good business opportunity. Thecowpea export from India includes different varieties being exported..",
        },
        {
          image: her19,
          title: "Horse Gram",
          description: "Horse gram is a low growing and sub-erect annual or perennial herb. It grows best on tropicsand subtropics. The Horse gram exporter in India exports tonnes of Horse Gram each year tomany countries. Horse Gram is also known as a miraculous superfood. Therefore, horsegram export from India has been increasing over time.",
        },
        {
          image: her20,
          title: "Masoor Dal / Red Lentil",
          description: "Red Lentils are known across the world for their great nutritional values. The red lentilexporter in India exports tonnes of red lentil abroad each year. These lentils can be eaten indifferent forms and have a delicious taste. The Red Lentil export from India has beenincreasing over the years. It is a good opportunity for the Indian Red Lentil exporter to enterthe international market and expand his business.",
        },
        {
          image: her21,
          title: "Green gram / Mung bean",
          description: "The green gram, also known as Mung Bean is basically a plant species in the legume family.The green gram exporter in India exports tonnes of green gram abroad every year. Thepopularity of green gram has been growing in the world. This may be a reason why greengram export from India has also been growing rapidly.",
        },
        {
          image: her22,
          title: "Black Gram",
          description: "Black Gram also called Black lentil, is one of the most widely consumed lentils in India. Thelentils are round and black in colour and are slightly elongated with a sticky texture and blandflavour. The Black Gram exporter in India exports tonnes of Black Gram to various countriesin the world. Due to the increasing global demand of Black Gram, the Black Gram export fromIndia has been on a rise over the years.",
        },
        {
          image: her23,
          title: "Chana Dal",
          description: "Chana dal is a split lentil. They are primarily baby chickpeas which have been split andpolished. The Chana Dal exporter in India exports tonnes of Chana Dal to various countries inthe world. Chana Dal is highly nutritious and also delicious to taste. Therefore, black-eyedbeans export from India has been on a rise over the years.",
        },
        {
          image: her24,
          title: "Urad Dal Split",
          description: "Urad Dal Split also known as split black lentils. This dal retains the skin and has a strongflavour. It can be ground into a flour or a paste and used in various recipes. The Urad DalSplit exporter in India exports a large quantity of Dal every year. Due to its various uses andhealth benefits, the Urad Dal Split export from India has been growing over the years.",
        },
        {
          image: her25,
          title: "Urad Dal Gota",
          description: "Urad dal is also known as Split Black Gram. It is one of the most popular lentils and is usedwidely in the southern part of Asia. The Urad Dal Gota exporter in India exports tonnes ofUrad Dal products from India. Due to the various uses and benefits of Urad Dal, the Urad DalGota export from India has been on a rise. This is considered as a good opportunity for theIndian Urad Dal Gota exporter to expand his business and enter the international market",
        },
        {
          image: her26,
          title: "Coffee seeds",
          description: "Coffee Seeds from India. We understand what is involved in exporting, and can make theprocess simple for anyone looking to import our Coffee Seeds.",
        },
        {
          image: her27,
          title: "Coffee powder",
          description: "Coffee is one of the most popular beverages across the world. It is brewed from roastedcoffee beans. These beans are seeds of the berries from the Coffea species. These seeds arepicked, processed, and then dried. Coffee is known to be a great energy booster. Coffeeproduction in India is dominated by the southern states.",
        }
      ],
    },
  ]
  return (


    <div>
      
      <div className="common-outer">
        <div className="common-content">
          <div className="title">Product</div>
          <div> <Link to="/">Home</Link> <span><i class="fas fa-angle-right"></i></span>Product</div>
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

export default Product