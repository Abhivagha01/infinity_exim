import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'antd';
import her1 from '../../src/assets/images/product/herbs/Neem.jpeg'
import her2 from '../../src/assets/images/product/herbs/Ashwagandha.jpeg'
import her3 from '../../src/assets/images/product/herbs/Aloe Vera.jpeg'
import her4 from '../../src/assets/images/product/herbs/Sage.jpeg'
import her5 from '../../src/assets/images/product/herbs/Giloy.jpeg'
import her6 from '../../src/assets/images/product/herbs/Curry Leaves.jpeg'
import her7 from '../../src/assets/images/product/herbs/Tulsi.jpeg'
import her8 from '../../src/assets/images/product/herbs/Senna leaves.jpeg'
import her9 from '../../src/assets/images/product/herbs/Carom.jpeg'
import her10 from '../../src/assets/images/product/herbs/Senna Pods.jpeg'
import her11 from '../../src/assets/images/product/herbs/Senna Extract.jpeg'
import her12 from '../../src/assets/images/product/herbs/Bay Leaf.jpeg'
import her13 from '../../src/assets/images/product/herbs/Chickpea.jpeg'
import her14 from '../../src/assets/images/product/herbs/Pea.jpeg'
import her15 from '../../src/assets/images/product/herbs/Kidney Beans.jpeg'
import her16 from '../../src/assets/images/product/herbs/Soya Bean.jpeg'
import her17 from '../../src/assets/images/product/herbs/Pigeon Pea.jpeg'
import her18 from '../../src/assets/images/product/herbs/CowpeaBlack-eyes beans.jpeg'
import her19 from '../../src/assets/images/product/herbs/Horse Gram.jpeg'
import her20 from '../../src/assets/images/product/herbs/Masoor Dal  Red Lentil.jpeg'
import her21 from '../../src/assets/images/product/herbs/Green gram  Mung bean.jpeg'
import her22 from '../../src/assets/images/product/herbs/Black Gram.jpeg'
import her23 from '../../src/assets/images/product/herbs/Chana Dal.jpeg'
import her24 from '../../src/assets/images/product/herbs/Urad Dal Split.jpeg'
import her25 from '../../src/assets/images/product/herbs/Urad Dal Gota.jpeg'
import her26 from '../../src/assets/images/product/herbs/Coffee seeds.jpeg'
import her27 from '../../src/assets/images/product/herbs/Coffee powder.jpeg'


function Herbs() {
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setOpen(true);
    };
    const products = [
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
        <div>   <div className="common-outer">
            <div className="common-content">
                <div className="title">Herbs & Pulses &Coffee</div>
                <div> <Link to="/">Home</Link> <span><i class="fas fa-angle-right"></i></span>Herbs & Pulses &Coffee</div>
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
            </div></div>
    )
}

export default Herbs