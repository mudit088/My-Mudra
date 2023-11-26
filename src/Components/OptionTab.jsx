import React from 'react'
import Options from './Options'

import { useState } from 'react'


const OptionTab = () => {
  const data=
  [{
    name: "Aldrich",
    car: "Subaru",
   company: "Thoughtblab",
   email: "azorener0@java.com",
    gender: "Male"
  }, {
    name: "Tanney",
    car: "Acura",
   company: "Wikizz",
   email: "tpettigrew1@census.gov",
    gender: "Male"
  }, {
    name: "Cassandre",
    car: "Lincoln",
   company: "Zoombox",
   email: "csoldi2@meetup.com",
    gender: "Polygender"
  }, {
    name: "Betteanne",
    car: "Honda",
   company: "Devpulse",
   email: "bblanchflower3@dell.com",
    gender: "Female"
  }, {
    name: "Kendra",
    car: "Kia",
   company: "Wikibox",
   email: "kbockett4@who.int",
    gender: "Female"
  }, {
    name: "Fidelity",
    car: "Mercedes-Benz",
   company: "Pixoboo",
   email: "fchapelhow5@jimdo.com",
    gender: "Female"
  }, {
    name: "Crissy",
    car: "Toyota",
   company: "Latz",
   email: "chargreave6@gmpg.org",
    gender: "Female"
  }, {
    name: "Olva",
    car: "BMW",
   company: "Zoovu",
   email: "omeiklem7@cocolog-nifty.com",
    gender: "Female"
  }, {
    name: "Quinn",
    car: "Ford",
   company: "Brainverse",
   email: "qbroome8@technorati.com",
    gender: "Male"
  }, {
    name: "Dniren",
    car: "Volkswagen",
   company: "Wikibox",
   email: "dcastanone9@rakuten.co.jp",
    gender: "Female"
  }, {
    name: "Cathyleen",
    car: "Toyota",
   company: "Jaxbean",
   email: "cfrancescoa@com.com",
    gender: "Female"
  }, {
    name: "Lacy",
    car: "Mitsubishi",
   company: "Gevee",
   email: "lpyneb@apache.org",
    gender: "Female"
  }, {
    name: "Corette",
    car: "Mitsubishi",
   company: "Pixoboo",
   email: "ctrentc@studiopress.com",
    gender: "Female"
  }, {
    name: "Samuele",
    car: "Lexus",
   company: "Twitterworks",
   email: "swoltmand@t-online.de",
    gender: "Male"
  }, {
    name: "Floria",
    car: "Subaru",
   company: "Voonte",
   email: "fclicke@cdc.gov",
    gender: "Female"
  }, {
    name: "Steffie",
    car: "Volvo",
   company: "Yotz",
   email: "snorthenf@google.pl",
    gender: "genderqueer"
  }, {
    name: "Chas",
    car: "Chrysler",
   company: "Vimbo",
   email: "ccolbeckg@stumbleupon.com",
    gender: "genderfluid"
  }, {
    name: "Joel",
    car: "Mercedes-Benz",
   company: "Realblab",
   email: "jpottsh@omniture.com",
    gender: "Male"
  }, {
    name: "Hasty",
    car: "Mitsubishi",
   company: "Miboo",
   email: "hfullilovei@freewebs.com",
    gender: "Male"
  }, {
    name: "Verge",
    car: "Daewoo",
   company: "Vinte",
   email: "vpresnellj@domainmarket.com",
    gender: "Male"
  }, {
    name: "Bernadina",
    car: "GMC",
   company: "Demimbu",
   email: "bcaudreyk@uiuc.edu",
    gender: "Non-binary"
  }, {
    name: "Shawnee",
    car: "Nissan",
   company: "Buzzster",
   email: "shanscomel@elpais.com",
    gender: "Agender"
  }, {
    name: "Merle",
    car: "GMC",
   company: "Rhybox",
   email: "mpiscullim@paypal.com",
    gender: "Male"
  }, {
    name: "Dannie",
    car: "Subaru",
   company: "Edgeclub",
   email: "dbackn@themeforest.net",
    gender: "Male"
  }, {
    name: "Gearalt",
    car: "Toyota",
   company: "Linktype",
   email: "gduroo@timesonline.co.uk",
    gender: "Male"
  }, {
    name: "Granville",
    car: "Citroën",
   company: "Agimba",
   email: "gcottellp@marketwatch.com",
    gender: "Male"
  }, {
    name: "Kingsley",
    car: "Acura",
   company: "Fivespan",
   email: "kpetranekq@infoseek.co.jp",
    gender: "Male"
  }, {
    name: "Winny",
    car: "Pontiac",
   company: "Dynabox",
   email: "wovenr@theglobeandmail.com",
    gender: "Polygender"
  }, {
    name: "Cad",
    car: "Nissan",
   company: "Npath",
   email: "cgerrams@google.com.br",
    gender: "Male"
  }, {
    name: "Jessalin",
    car: "Ford",
   company: "Edgepulse",
   email: "jheadfordt@creativecommons.org",
    gender: "Female"
  }, {
    name: "Devora",
    car: "Chevrolet",
   company: "Jabbersphere",
   email: "dpressmanu@hostgator.com",
    gender: "Female"
  }, {
    name: "Kenon",
    car: "Ford",
   company: "Aivee",
   email: "kmeacev@senate.gov",
    gender: "Male"
  }, {
    name: "Natassia",
    car: "Mazda",
   company: "Quatz",
   email: "npiscopiellow@addthis.com",
    gender: "genderqueer"
  }, {
    name: "Onfre",
    car: "Nissan",
   company: "Dynabox",
   email: "ogrundyx@yellowpages.com",
    gender: "Bigender"
  }, {
    name: "Amalea",
    car: "Chevrolet",
   company: "Flipbug",
   email: "acrossinghamy@apple.com",
    gender: "Female"
  }, {
    name: "Izzy",
    car: "Mercedes-Benz",
   company: "Dablist",
   email: "icallowayz@scribd.com",
    gender: "Male"
  }, {
    name: "Brooks",
    car: "Mercury",
   company: "Roodel",
   email: "bleggen10@wp.com",
    gender: "Male"
  }, {
    name: "Lorelle",
    car: "Ford",
   company: "Dynabox",
   email: "ltrematick11@trellian.com",
    gender: "Female"
  }, {
    name: "Mel",
    car: "Nissan",
   company: "Skivee",
   email: "mfindon12@usa.gov",
    gender: "Male"
  }, {
    name: "Barret",
    car: "Toyota",
   company: "Muxo",
   email: "blottrington13@joomla.org",
    gender: "Male"
  }, {
    name: "Anette",
    car: "Pontiac",
   company: "Eare",
   email: "afideler14@yale.edu",
    gender: "Polygender"
  }, {
    name: "Dasie",
    car: "Ford",
   company: "Kwilith",
   email: "dduffitt15@zdnet.com",
    gender: "Female"
  }, {
    name: "Meir",
    car: "Hyundai",
   company: "Skinix",
   email: "mdanilovic16@histats.com",
    gender: "Male"
  }, {
    name: "Arvin",
    car: "Dodge",
   company: "InnoZ",
   email: "apucker17@tripadvisor.com",
    gender: "Male"
  }, {
    name: "Elga",
    car: "Chevrolet",
   company: "Mynte",
   email: "eseagrave18@imgur.com",
    gender: "Female"
  }, {
    name: "Sybil",
    car: "Mitsubishi",
   company: "Quinu",
   email: "sbecket19@usatoday.com",
    gender: "Female"
  }, {
    name: "Germana",
    car: "Ford",
   company: "Jetwire",
   email: "gdecoursey1a@guardian.co.uk",
    gender: "Female"
  }, {
    name: "Huntington",
    car: "Ford",
   company: "Gigazoom",
   email: "hcoase1b@desdev.cn",
    gender: "Polygender"
  }, {
    name: "Althea",
    car: "BMW",
   company: "Bubblemix",
   email: "amalitrott1c@rambler.ru",
    gender: "Female"
  }, {
    name: "Darbee",
    car: "Chevrolet",
   company: "Vinder",
   email: "dpither1d@yale.edu",
    gender: "Male"
  }]
  const [filteredData, setFilteredData] = useState(data);
  const handleFiltersChange = ({ company, gender }) => {
    let updatedData = data;
    if (company !== '') {
      updatedData = updatedData.filter(item => item.company === company);
    }
    if (gender !== '') {
      updatedData = updatedData.filter(item => item.gender === gender);
      
    }
    setFilteredData(updatedData);
  };
  
 

  return (
<div>
<Options handleFiltersChange={handleFiltersChange}  info={filteredData} array={data}/>

</div>
  )
}


export default OptionTab