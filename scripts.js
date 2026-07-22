// Nigerian States and LGAs
const nigeriStatesLGAs = {
    "Abia": ["Aba North", "Aba South", "Arochukwu", "Bende", "Ikwuano", "Isiala Ngwa North", "Isiala Ngwa South", "Isuikwuato", "Obi Ngwa", "Ohafia", "Osisioma", "Ugwunagbo", "Ukwa East", "Ukwa West", "Umuahia North", "Umuahia South", "Umunneochi"],
    "Adamawa": ["Demsa", "Fufure", "Guyuk", "Hong", "Jada", "Madawakin", "Maiduguri", "Mayo Belwa", "Michika", "Mubi North", "Mubi South", "Numan", "Shelleng", "Song", "Toungo", "Yola North", "Yola South"],
    "Akwa Ibom": ["Abak", "Afikpo", "Ahoada", "Ajaokuta", "Akamkpa", "Akpabuyo", "Akwete", "Awe", "Bakassi", "Calabar Municipal", "Calabar South", "Esit Eket", "Essien Udim", "Etim Ekpo", "Etinan", "Iba", "Ibidio", "Ibom", "Ikot Abasi", "Ikot Ekpene", "Ini", "Itu", "Mbo", "Obot Akara", "Okobo", "Onna", "Oron", "Udung Uko", "Ukanafun", "Ukwa", "Ung", "Uruan", "Urue Offong", "Uyo"],
    "Anambra": ["Aguata", "Anambra East", "Anambra West", "Annobi", "Awka North", "Awka South", "Ayamelum", "Dunukofia", "Ekwusigo", "Enugu South", "Idemili North", "Idemili South", "Ihiala", "Njikoka", "Nnewi North", "Nnewi South", "Ogbaru", "Onitsha North", "Onitsha South", "Orumba North", "Orumba South", "Oyi"],
    "Bauchi": ["Alkaleri", "Bauchi", "Bogoro", "Damboa", "Darazo", "Das", "Duguri", "Gamawa", "Ganjuwa", "Giade", "Giwa", "Guzamala", "Gwale", "Gwoza", "Jada", "Jangere", "Jidda", "Jiga", "Jima", "Kachia", "Kafanchan", "Kagarko", "Kaita", "Kajanade", "Kakare", "Kano", "Kantudu", "Karay", "Karaye", "Karim Lamido", "Kaura", "Kauru", "Kaya", "Kayet", "Kazaure", "Kebbe", "Keffi", "Keinde", "Kejeme", "Kella", "Kemboi", "Keminfu", "Kemp", "Kena", "Kendil", "Kengeri", "Kenji", "Kensari", "Kente", "Kenue", "Kepci", "Keraf", "Kerao", "Kerau", "Keray", "Kerbina", "Kerbiya", "Kerei", "Kerfara", "Kerfil", "Kergira", "Kergu", "Keriba", "Keridi", "Kerijer", "Kerim", "Kerina", "Keris", "Kerish", "Kerita", "Kerjang", "Kerji", "Kerkade", "Kerkage", "Kerki", "Kerki South"],
    "Bayelsa": ["Brass", "Nembe", "Ogbia", "Sagbama", "Southern Ijaw", "Yenagoa"],
    "Benue": ["Ado", "Agatu", "Apa", "Buruku", "Gboko", "Guma", "Gwer", "Gwer West", "Idoma", "Ihugh", "Ijaidu", "Ikwo", "Inyamen", "Isua", "Itakpe", "Itondo", "Jikwoyi", "Kachia", "Kadeok", "Kadura", "Kafanchan", "Kaiama", "Kaita", "Kaiton", "Kajuru", "Kakanda", "Kaki", "Kako", "Kalambi", "Kamazo", "Kamda", "Kameja", "Kamen", "Kamenna", "Kamerun", "Kamfara", "Kamfinni", "Kamfoke", "Kamfu", "Kamgafu", "Kamgakofi", "Kamgari", "Kamgari North", "Kamgari South", "Kamgari West", "Kamgatsi", "Kamgatsimu", "Kamgatsini", "Kamgatso", "Kamgetsini", "Kamgiba", "Kamgida", "Kamgidi", "Kamgiga", "Kamgiga South", "Kamgiganfu", "Kamgigara", "Kamgigaro", "Kamgigasa", "Kamgigata", "Kamgigbe"],
    "Cross River": ["Akamkpa", "Akpabuyo", "Bakassi", "Biase", "Boki", "Calabar Municipal", "Calabar South", "Etung", "Ikom", "Obanliku", "Obanlikpa", "Obubra", "Obudu", "Odukpani", "Ogoja", "Ohafia", "Onne", "Osimiri", "Ugep", "Yala"],
    "Delta": ["Aniocha North", "Aniocha South", "Armada", "Asaba", "Awogu", "Bomadi", "Burutu", "Dandume", "Dekina", "Desai", "Desaiwu", "Dichishi", "Dore", "Ebbu", "Efon", "Efugo", "Egbado", "Egba", "Egbejila", "Egbe Ijebu", "Egbe", "Egbede", "Egbega", "Egbeka", "Egbenogbe", "Egberu", "Egbesua", "Egbindagele", "Egbini", "Egbinna", "Egbo", "Egbode", "Egboga", "Egboga South", "Egbogida", "Egbogida South", "Egbogidi", "Egboja", "Egbombe", "Egbonde", "Egbondele", "Egbonka", "Egbonko", "Egbonye", "Egbonza", "Egboo", "Egboola", "Egbooke", "Egbooko", "Egbora", "Egboran", "Egboranga", "Egborek", "Egboreka", "Egboreke", "Egborekedde", "Egborekefun", "Egborekela", "Egborekeleke", "Egborekun", "Egborella", "Egborema", "Egboremaja", "Egberen", "Egbereni", "Egberenije", "Egberenika", "Egberenita", "Egbererano", "Egberede", "Egberederede", "Egberera", "Egberere", "Egberese", "Egberesia", "Egbersina", "Egberudele", "Egberugba", "Egberugo", "Egberuja", "Egberuka", "Egberukedede", "Egberukede", "Egberuke", "Egberundinrin"],
    "Ebonyi": ["Abakaliki", "Afikpo", "Afikpo North", "Afikpo South", "Ebonyi", "Ezza North", "Ezza South", "Ikwo", "Ishielu", "Ivo", "Izzi", "Ohaozara", "Ohaukwu", "Onicha"],
    "Edo": ["Akoko-Edo", "Egor", "Esan Central", "Esan North-East", "Esan South-East", "Esan West", "Etsako Central", "Etsako East", "Etsako West", "Igueben", "Ikpoba-Okha", "Ohuovo", "Oredo", "Ovia North-East", "Ovia South-West", "Owan East", "Owan West", "Uhunmwonde"],
    "Ekiti": ["Ado-Ekiti", "Aiyekire", "Aiyetoro", "Ajagunna", "Ajowa-Akoko", "Ejiogbe", "Ekiti East", "Ekiti South-West", "Ekiti West", "Emure", "Erijiyan-Ekiti", "Etiti", "Ido-Ekiti", "Ifelodun", "Ijarama", "Ijan", "Ijero", "Ijesha-Jesa", "Ijumu", "Ika", "Ikaramudu", "Ikere", "Ikirun", "Ila", "Ile-Oluji", "Ile-Oluji East", "Ilesha", "Ilese-Iwopin", "Ilupeju", "Ilupeju North", "Ilupeju South", "Iluso", "Imesi-Ile", "Inisa", "Ipao", "Ipoti", "Ire", "Irepodun", "Ire-Ekiti", "Irele", "Ires", "Iriese", "Iriri", "Irorun", "Irua", "Iruo", "Iruo East", "Iruo West", "Iseku", "Iseyun", "Isha", "Isinbode", "Isire", "Itaji", "Itamajido", "Itamodun", "Itapaji", "Itapako", "Itapaji", "Itapaki", "Itapale", "Itaperere", "Itaperu", "Itaperun", "Itaperun West", "Itapetan", "Itapete", "Itapeti", "Itapetun", "Itapetu-West", "Itapetu", "Itapetu East", "Itapetu South", "Itapetu West", "Itapeyan", "Itapeyeun", "Itapeyun", "Itapeyu", "Itapeyun", "Itapeyun North", "Itapeyun South", "Itapeyu East", "Itapeyu West", "Itapeze", "Itapiai", "Itapian", "Itapiane", "Itapiani", "Itapianu", "Itapica", "Itapici", "Itapie", "Itapiene", "Itapii", "Itapika", "Itapikile", "Itapikin", "Itapila", "Itapilani", "Itapile", "Itapili", "Itapilong", "Itapilongoni", "Itapin", "Itapina", "Itapine", "Itaping", "Itapini", "Itapino", "Itapion", "Itapipe", "Itapipeku", "Itapipi", "Itapipun", "Itapire", "Itapirin", "Itapiro", "Itapironyi", "Itapiruun", "Itapisa", "Itapisan", "Itapisangi", "Itapisani", "Itapise", "Itapisen", "Itapiseni", "Itapisi", "Itapisie", "Itapison", "Itapisore", "Itapiso", "Itapison", "Itapisori", "Itapisoro", "Itapisu", "Itapita", "Itapitaji", "Itapitan", "Itapitando", "Itapitani", "Itapitate", "Itapitau", "Itapite", "Itapitega", "Itapitegi", "Itapitele", "Itapiteli", "Itapitelu", "Itapitelu", "Itapitelu", "Itapitelu", "Itapitelu", "Itapitelu", "Itapitelu", "Itapitelu", "Itapitelu"],
    "Enugu": ["Abakaliki", "Agbani", "Aninri", "Awgu", "Enugu East", "Enugu North", "Enugu South", "Enugwu-Agidi", "Enugwu-Ezike", "Ezeagu", "Igbo-Etiti", "Igbo-Eze North", "Igbo-Eze South", "Igbo-Oji", "Inyi", "Isi-Uzo", "Ixii", "Nkanu East", "Nkanu West", "Nkpor", "Nsukka", "Oji River", "Udenu", "Udi", "Uzo-Uwani"],
    "Gombe": ["Akko", "Balanga", "Billiri", "Dukku", "Funakaye", "Gombe", "Kaltungo", "Katagum", "Kwami", "Shomgekom", "Yalmatu-Deba"],
    "Imo": ["Aboh Mbaise", "Ahiazu Mbaise", "Ehime Mbano", "Ezinihitte Mbaise", "Ideato North", "Ideato South", "Igboeze South", "Ihitte/Uboma", "Ikeduru", "Isiala Mbano", "Isimangano", "Isoko", "Isu", "Isuikwuato", "Ivara", "Izzi", "Izzi South", "Mbaitoli", "Mbano", "Nkwerre", "Ngor-Okpala", "Njaba", "Nwangele", "Obowo", "Oguta", "Okigwe", "Okobo", "Okojie", "Onicha", "Onuimo", "Orlu", "Orsuakwu", "Owerri Municipal", "Owerri North", "Owerri West", "Owo", "Owoama", "Owerri", "Umunneochi"],
    "Jigawa": ["Auyo", "Babbar", "Bade", "Badeggi", "Badigeri", "Baduma", "Bafara", "Bafira", "Bagadawa", "Bagaja", "Bagalla", "Bagalawa", "Bagaleshi", "Bagalga", "Bagalgi", "Bagaloji", "Bagaloma", "Bagalona", "Bagaloni", "Bagalonu", "Bagalopa", "Bagalori", "Bagalorika", "Bagalorija", "Bagaloro", "Bagaloroma", "Bagaloron", "Bagalorowa", "Bagalosa", "Bagaloshi", "Bagalosu", "Bagalota", "Bagaloti", "Bagaloto", "Bagalotra", "Bagaloua", "Bagalouma", "Bagalouni", "Bagalowa", "Bagalowan", "Bagalowar", "Bagalowari", "Bagaloware", "Bagalowe", "Bagalowi", "Bagalowina", "Bagalowinchi", "Bagalowindu", "Bagalowire", "Bagalowitsi", "Bagalowy", "Bagaloza", "Bagalozi", "Bagalozu"],
    "Kaduna": ["Afaka", "Agban", "Agidi", "Agina", "Agona", "Agor", "Agwai", "Agwangu", "Agwanwu", "Ajara", "Akosombo", "Akpa", "Akpanya", "Akpatindi", "Akpata", "Akpe", "Akpo", "Akpoha", "Akpoloma", "Akpona", "Akpong", "Akpononu", "Akpora", "Akpore", "Akposoma", "Akpotiji", "Akpotu", "Akpoua", "Akpowan", "Akpoyang", "Akpozhe", "Akpulusu", "Akpurugu", "Akpurugu North", "Akpurugu South", "Akpurugujin", "Akpurundu", "Akpurung", "Akpurungidi", "Akpuse", "Akputa", "Akputa East", "Akputa North", "Akputa South", "Akputa West"],
    "Kano": ["Ajinkyra", "Albasa", "Aletawa", "Aletawa North", "Aletawa South", "Alewa", "Alewa North", "Alewa South", "Alewatti", "Alewa West", "Alewu", "Alewudu", "Alewudu East", "Alewudu South", "Alewudu West", "Alewuji", "Alewuju", "Alezema", "Alfada", "Alfare", "Alfari", "Alfarini", "Alfarini East", "Alfarini North", "Alfarini South", "Alfarini West", "Alfarinja", "Alfarinja East", "Alfarinja North", "Alfarinja South", "Alfarinja West", "Alfaro", "Alfaroji", "Alfaroni", "Alfaroni East", "Alfaroni North", "Alfaroni South", "Alfaroni West", "Alfasi", "Alfaso", "Alfata", "Alfata East", "Alfata North", "Alfata South", "Alfata West", "Alfateyi", "Alfati", "Alfato", "Alfatu", "Alfaturu", "Alfaturu East", "Alfaturu North", "Alfaturu South", "Alfaturu West"],
    "Katisna": ["Bade", "Batsari", "Daura", "Dandume", "Danja", "Daujawa", "Dutsi", "Ingawa", "Jibia", "Kafur", "Kaita", "Kankara", "Kankia", "Kaura Namoda", "Kiyawa", "Mai'Adua", "Malumfashi", "Mani", "Mashi", "Matazai", "Sabuwa", "Safana", "Sandamu", "Tsanyawa"],
    "Kebbi": ["Aleiro", "Arewa", "Argungu", "Augie", "Bagudo", "Birnin Kebbi", "Dandi", "Danko", "Fakai", "Gwandu", "Jega", "Kalgo", "Kamba", "Karangi", "Karita", "Kaura", "Kioko", "Koko", "Konna", "Konna South", "Koure", "Koyamma", "Koyamma East", "Koyamma North", "Koyamma South", "Koyamma West", "Kuyelu", "Kuyelu East", "Kuyelu North", "Kuyelu South", "Kuyelu West", "Kuyelu North East", "Kuwadaje", "Kuwada", "Kuwada East", "Kuwada North", "Kuwada South", "Kuwada West"],
    "Kogi": ["Adavi", "Ajaokuta", "Akoko-Edo", "Akpata", "Akpo", "Akponu", "Akposa", "Akpota", "Akpoyi", "Akpoyi East", "Akpoyi North", "Akpoyi South", "Akpoyi West", "Akpoyi North East", "Akpoye", "Akpoza", "Akpudu", "Akpudukwu", "Akpulu", "Akpume", "Akpumeri", "Akpumetaji", "Akpumezi", "Akpuna", "Akpuncha", "Akpundu", "Akpundu East", "Akpundu North", "Akpundu South", "Akpundu West"],
    "Kwara": ["Asa", "Baruten", "Edu", "Ekiti", "Ifelodun", "Isin", "Kaiama", "Kakanfo", "Kambari", "Kameh", "Kamelu", "Kamelu East", "Kamelu North", "Kamelu South", "Kamelu West", "Kamelu North East", "Kamelu North West", "Kamelu South East", "Kamelu South West"],
    "Lagos": ["Agege", "Ajeromi-Ifelodun", "Alimosho", "Amuwo-Odofin", "Apapa", "Badagry", "Epe", "Eti-Osa", "Ibeju-Lekki", "Ifako-Ijaiye", "Ikeja", "Ikorodu", "Ikoyi", "Isolo", "Kosofe", "Lagos Island", "Lagos Mainland", "Lekki", "Mushin", "Ojo", "Oshodi-Isolo", "Ounje", "Oworonshoki", "Surulere", "Victoria Island"],
    "Nasarawa": ["Akwanga", "Awe", "Doma", "Guma", "Kagarko", "Karishi", "Karu", "Keffi", "Keffi North", "Keffi South", "Kokona", "Kuja", "Lafia", "Lafia East", "Lafia North", "Lafia South", "Lafia West", "Langa", "Langa East", "Langa North", "Langa South", "Langa West", "Langeri", "Langeshi", "Langeshi East", "Langeshi North", "Langeshi South", "Langeshi West"],
    "Niger": ["Agaie", "Agama", "Agaraja", "Agarbini", "Agarbini East", "Agarbini North", "Agarbini South", "Agarbini West", "Agarle", "Agarley", "Agarley East", "Agarley North", "Agarley South", "Agarley West", "Agarlienum", "Agarlienum East", "Agarlienum North", "Agarlienum South", "Agarlienum West", "Agarlie", "Agarlie East", "Agarlie North", "Agarlie South", "Agarlie West"],
    "Ogun": ["Abeokuta North", "Abeokuta South", "Ado-Odo/Ota", "Aiyetoro", "Aiyetoro East", "Aiyetoro North", "Aiyetoro South", "Aiyetoro West", "Aiyetoro South East", "Aiyetoro South West", "Aiyetorou", "Aiyetoroun", "Aiyetorouni", "Aiyetorounk"],
    "Ondo": ["Akoko North-East", "Akoko North-West", "Akoko South-East", "Akoko South-West", "Akure North", "Akure South", "Ale", "Aleruja", "Aleruja East", "Aleruja North", "Aleruja South", "Aleruja West", "Alerujah", "Alerujah East", "Alerujah North", "Alerujah South", "Alerujah West"],
    "Osun": ["Abeokuta", "Abeokuta East", "Abeokuta North", "Abeokuta South", "Abeokuta West", "Abeokutau", "Abeokutaland", "Abeokutaville", "Ado-Awaye", "Ado-Awaye East", "Ado-Awaye North", "Ado-Awaye South", "Ado-Awaye West", "Ado-Odo", "Ado-Odo East", "Ado-Odo North", "Ado-Odo South", "Ado-Odo West", "Ado-Odofin", "Ado-Odofin East", "Ado-Odofin North", "Ado-Odofin South", "Ado-Odofin West"],
    "Oyo": ["Afijio", "Akinyele", "Akisipupa", "Akisipupa East", "Akisipupa North", "Akisipupa South", "Akisipupa West", "Alafara", "Alaganga", "Alagole", "Alagonle", "Alagwu", "Alajase", "Alajasi", "Alajasi East", "Alajasi North", "Alajasi South", "Alajasi West", "Alajasi North East", "Alajasi North West", "Alajasi South East", "Alajasi South West"],
    "Plateau": ["Barkin Ladi", "Barikin-Ladi", "Bassa", "Bassa South", "Bodinga", "Bokkos", "Bom", "Bompai", "Bompai East", "Bompai North", "Bompai South", "Bompai West", "Bompai North East", "Bompai North West", "Bompai South East", "Bompai South West", "Bomu", "Bomu East", "Bomu North", "Bomu South", "Bomu West"],
    "Rivers": ["Abua-Odual", "Ahoada", "Ahoada East", "Ahoada West", "Akuku-Toru", "Andoni", "Asari-Toru", "Bonny", "Degema", "Eleme", "Emuoha", "Emohua", "Emohuanior", "Emohuaniorland"],
    "Sokoto": ["Binji", "Bodinga", "Dange-Shinku", "Gada", "Garki", "Gawabawa", "Goronyo", "Gudu", "Gulu", "Gulu East", "Gulu North", "Gulu South", "Gulu West", "Gulu North East", "Gulu North West", "Gulu South East", "Gulu South West"],
    "Taraba": ["Ardo-Kola", "Bali", "Basso", "Basso East", "Basso North", "Basso South", "Basso West", "Basso North East", "Basso North West", "Basso South East", "Basso South West", "Bashekwo", "Basikweri", "Basikie", "Basikiere", "Basiikiere"],
    "Yobe": ["Bade", "Bursali", "Damaturu", "Damaturu East", "Damaturu North", "Damaturu South", "Damaturu West", "Damaturu North East", "Damaturu North West", "Damaturu South East", "Damaturu South West", "Gaidam", "Geidam", "Geidam East", "Geidam North", "Geidam South", "Geidam West", "Geidam North East", "Geidam North West"],
    "Zamfara": ["Anka", "Bakura", "Birnin Magaji", "Bungudu", "Gummi", "Gusau", "Kaura Namoda", "Kiyawa", "Mada", "Maradun", "Maru", "Sabuwa", "Talata-Mafara", "Tsafe", "Tunau", "Zurmi"]
};

let currentUser = null;
let referralCode = null;
let referralCount = 0;
let shareCount = 0;

// Sample live comments
const liveComments = [
    { name: "Chioma Okafor", comment: "This promo is real, I won ₦50,000! Thanks for sharing the link with me." },
    { name: "Oluwaseun Adeyemi", comment: "I've already referred 3 people and earned points. The process is so simple!" },
    { name: "Amarachi Nwosu", comment: "Been using this for 2 weeks now. Loving it! Already got my first reward." },
    { name: "Chinedu Eze", comment: "My friend won a laptop! This thing is legit, trust me." },
    { name: "Zainab Hassan", comment: "The UI is so easy to use. Registered in less than a minute!" },
    { name: "Tunde Ogunleye", comment: "I won ₦50,000 last month. Now trying to win the car! 🏎️" },
    { name: "Blessing Okoro", comment: "Can't believe I got ₦50,000 already. Sharing this with everyone!" },
    { name: "Kamsu Ibrahim", comment: "This is the real deal. Already got my referral bonuses coming in." },
    { name: "Ade Akinwale", comment: "Won a phone already! Thanks Gulder for bringing back this promo." },
    { name: "Ifeoma Nwachukwu", comment: "5 people have already registered through my link. Stacking points!" },
    { name: "Kunle Adebayo", comment: "The referral system works perfectly. Easy money!" },
    { name: "Ngozi Umeakali", comment: "Got ₦50,000 and a phone. This is unbelievable!" },
    { name: "Emeka Chukwu", comment: "Already at 12 points. Target is to get 60 and win the car!" },
    { name: "Folake Oladele", comment: "This promo changed my life. Highly recommended!" },
    { name: "Chidi Ekeh", comment: "I've never seen something this transparent. All legit!" },
    { name: "Zara Mohammed", comment: "Won ₦50,000 and I'm still in shock! Try it now!" },
    { name: "Seun Oyewole", comment: "The fastest way to earn money in 2024!" },
    { name: "Oma Okpara", comment: "This is what financial freedom looks like. Loving every bit!" },
    { name: "Hassan Aliyu", comment: "Won a laptop! Thank you Gulder Ultimate Returns!" },
    { name: "Rachel Obi", comment: "Already got ₦50,000 twice. This is amazing!" }
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    populateStates();
    setupFAQ();
    setupEventListeners();
    initializeLiveComments();
});

// Populate Nigeria States
function populateStates() {
    const stateSelect = document.getElementById('state');
    Object.keys(nigeriStatesLGAs).forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    });
}

// Handle State Change
document.getElementById('state').addEventListener('change', function() {
    const selectedState = this.value;
    const lgaSelect = document.getElementById('lga');
    
    lgaSelect.innerHTML = '<option value="">Select LGA</option>';
    
    if (selectedState && nigeriStatesLGAs[selectedState]) {
        lgaSelect.disabled = false;
        nigeriStatesLGAs[selectedState].forEach(lga => {
            const option = document.createElement('option');
            option.value = lga;
            option.textContent = lga;
            lgaSelect.appendChild(option);
        });
    } else {
        lgaSelect.disabled = true;
    }
});

// Setup FAQ
function setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const title = item.querySelector('.faq-title');
        title.addEventListener('click', function() {
            faqItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });
}

// Setup Event Listeners
function setupEventListeners() {
    document.getElementById('registrationForm').addEventListener('submit', handleRegistration);
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('loginBtn').addEventListener('click', toggleLoginForm);
    document.getElementById('pointsBtn').addEventListener('click', showPoints);
    document.getElementById('faqBtn').addEventListener('click', showFAQ);
    document.getElementById('shareWhatsAppBtn').addEventListener('click', shareOnWhatsApp);
    document.getElementById('redeemBtn').addEventListener('click', redeemCode);
    document.getElementById('submitCommentBtn').addEventListener('click', submitComment);
}

// Handle Registration
function handleRegistration(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const state = document.getElementById('state').value;
    const lga = document.getElementById('lga').value;
    
    // Generate referral code
    referralCode = generateReferralCode();
    
    // Create user object
    currentUser = {
        name: name,
        phone: phone,
        state: state,
        lga: lga,
        referralCode: referralCode,
        registeredDate: new Date().toLocaleString()
    };
    
    // Save to localStorage (for demo purposes)
    localStorage.setItem('gulder_user', JSON.stringify(currentUser));
    localStorage.setItem('gulder_referral_code', referralCode);
    
    // Send to Google Sheet (you'll need to set up a backend endpoint)
    sendToGoogleSheet(currentUser);
    
    alert(`🎉 Registration Successful!\n\nYour Referral Code: ${referralCode}\n\nShare this code with friends to earn points!`);
    
    // Update UI
    updateUserInfo();
    document.getElementById('registrationSection').style.display = 'none';
    showTaskSection();
    showCommentsSection();
    
    // Reset form
    document.getElementById('registrationForm').reset();
}

// Handle Login
function handleLogin(e) {
    e.preventDefault();
    
    const name = document.getElementById('loginName').value;
    const phone = document.getElementById('loginPhone').value;
    
    // Check if user exists (in real app, check against database)
    const storedUser = localStorage.getItem('gulder_user');
    
    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.name === name && user.phone === phone) {
            currentUser = user;
            referralCode = user.referralCode;
            
            alert('✅ Login Successful!');
            updateUserInfo();
            document.getElementById('loginSection').style.display = 'none';
            document.getElementById('registrationSection').style.display = 'none';
            showTaskSection();
            showCommentsSection();
            document.getElementById('loginForm').reset();
        } else {
            alert('❌ Invalid credentials!');
        }
    } else {
        alert('❌ User not found. Please register first!');
    }
}

// Toggle Login Form
function toggleLoginForm(e) {
    e.preventDefault();
    
    if (currentUser) {
        logout();
    } else {
        const loginSection = document.getElementById('loginSection');
        loginSection.style.display = loginSection.style.display === 'none' ? 'block' : 'none';
        document.getElementById('registrationSection').style.display = 'none';
    }
}

// Logout
function logout() {
    currentUser = null;
    referralCode = null;
    shareCount = 0;
    updateUserInfo();
    document.getElementById('registrationSection').style.display = 'block';
    document.getElementById('taskSection').style.display = 'none';
    document.getElementById('commentsSection').style.display = 'none';
    document.getElementById('pointsSection').style.display = 'none';
}

// Update User Info in Navbar
function updateUserInfo() {
    const userInfo = document.getElementById('userInfo');
    const loginBtn = document.getElementById('loginBtn');
    
    if (currentUser) {
        document.getElementById('userName').textContent = currentUser.name;
        document.getElementById('userPhone').textContent = currentUser.phone;
        userInfo.style.display = 'block';
        loginBtn.textContent = 'Logout';
    } else {
        userInfo.style.display = 'none';
        loginBtn.textContent = 'Login';
    }
}

// Generate Referral Code
function generateReferralCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

// Generate 9-Digit Reward Code
function generateRewardCode() {
    let code = '';
    for (let i = 0; i < 9; i++) {
        if (i < 3) {
            code += String.fromCharCode(65 + Math.floor(Math.random() * 26));
        } else if (i < 6) {
            code += String.fromCharCode(97 + Math.floor(Math.random() * 26));
        } else {
            code += Math.floor(Math.random() * 10);
        }
    }
    return code;
}

// Show Points
function showPoints(e) {
    e.preventDefault();
    
    if (!currentUser) {
        alert('Please login first!');
        return;
    }
    
    document.getElementById('pointsSection').style.display = 'block';
    document.getElementById('registrationSection').style.display = 'none';
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('faqSection').style.display = 'none';
    document.getElementById('taskSection').style.display = 'none';
    document.getElementById('commentsSection').style.display = 'none';
    
    document.getElementById('refCodeDisplay').textContent = referralCode;
    document.getElementById('visitorCount').textContent = referralCount;
    document.getElementById('totalPoints').textContent = referralCount * 100;
    
    const baseUrl = window.location.origin + window.location.pathname;
    const referralLink = `${baseUrl}?ref=${referralCode}`;
    document.getElementById('referralLink').value = referralLink;
}

// Show FAQ
function showFAQ(e) {
    e.preventDefault();
    
    document.getElementById('faqSection').style.display = 'block';
    document.getElementById('registrationSection').style.display = 'none';
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('pointsSection').style.display = 'none';
    document.getElementById('taskSection').style.display = 'none';
    document.getElementById('commentsSection').style.display = 'none';
}

// Show Task Section
function showTaskSection() {
    document.getElementById('taskSection').style.display = 'block';
}

// Show Comments Section
function showCommentsSection() {
    document.getElementById('commentsSection').style.display = 'block';
}

// Share on WhatsApp
function shareOnWhatsApp() {
    if (!currentUser) {
        alert('Please login first!');
        return;
    }
    
    shareCount++;
    document.getElementById('shareCount').textContent = `Shares: ${shareCount}/6`;
    
    // Unlock redeem button after 6 shares
    if (shareCount >= 6) {
        document.getElementById('redeemBtn').disabled = false;
        document.getElementById('redeemBtn').classList.add('unlocked');
        document.querySelector('.redeem-info').textContent = '✅ Unlock to reveal your reward code!';
    }
    
    // Activate letters in GULDER
    if (shareCount <= 6) {
        document.getElementById(`letter${shareCount}`).classList.add('active');
    }
    
    // WhatsApp share message
    const message = `🍺 The Ultimate Search is Back! 🔥
(The Online Quest)

The wait is over! Experience the exciting comeback of Gulder and discover "The Ultimate Returns."

🎁 Visit the link below to:
✅ Get your unique participation code.
✅ Stand a chance to win ₦50,000  
📱 Phone, 💻 Laptop, ₦5m & A Brand New Car.
✅ Watch the exclusive comeback story.
✅ ONE CODE = ONE PERSON.

Please register through my link/code below, it will be credited to my referral, and you'll receive your own code to share with others too.
👇 Tap here to get started:
${window.location.origin}${window.location.pathname}?ref=${referralCode}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
    
    alert(`✅ Share #${shareCount}/6\n\nKeep sharing to unlock your reward code!`);
}

// Redeem Code
function redeemCode() {
    if (shareCount < 6) {
        alert('You need to complete 6 WhatsApp shares first!');
        return;
    }
    
    // Open new window
    const rewardWindow = window.open('about:blank', 'rewardWindow', 'width=500,height=300');
    
    // Wait 6 seconds before displaying code
    setTimeout(() => {
        if (!rewardWindow.closed) {
            const rewardCode = generateRewardCode();
            const htmlContent = `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body {
                            background: linear-gradient(135deg, #DC143C 0%, #8B0000 100%);
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 100vh;
                            font-family: Arial, sans-serif;
                            margin: 0;
                        }
                        .container {
                            background: white;
                            padding: 2rem;
                            border-radius: 10px;
                            text-align: center;
                            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
                        }
                        h1 {
                            color: #DC143C;
                            margin-bottom: 1rem;
                        }
                        .code-box {
                            background: linear-gradient(135deg, #DC143C 0%, #8B0000 100%);
                            color: white;
                            padding: 1.5rem;
                            border-radius: 5px;
                            font-size: 2rem;
                            font-weight: bold;
                            letter-spacing: 2px;
                            margin: 1.5rem 0;
                            font-family: monospace;
                        }
                        p {
                            color: #8B0000;
                        }
                        .copy-btn {
                            background: #DC143C;
                            color: white;
                            padding: 0.75rem 1.5rem;
                            border: none;
                            border-radius: 5px;
                            cursor: pointer;
                            font-weight: bold;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h1>🎉 Your Reward Code 🎉</h1>
                        <p>Congratulations! Here's your unique reward code:</p>
                        <div class="code-box">${rewardCode}</div>
                        <p>Save this code for your reward redemption.</p>
                        <button class="copy-btn" onclick="navigator.clipboard.writeText('${rewardCode}')">Copy Code</button>
                    </div>
                </body>
                </html>
            `;
            rewardWindow.document.write(htmlContent);
            rewardWindow.document.close();
        }
    }, 6000);
}

// Copy to Clipboard
function copyToClipboard() {
    const link = document.getElementById('referralLink');
    link.select();
    document.execCommand('copy');
    alert('Referral link copied to clipboard!');
}

// Send to Google Sheet
function sendToGoogleSheet(userData) {
    // This is a placeholder. In production, you'd use Google Apps Script or a backend API
    console.log('Sending to Google Sheet:', userData);
    
    // Example using Google Forms (alternative method)
    // You can set up a Google Form and submit data to it
    // const formData = new FormData();
    // formData.append('entry.XXXXX', userData.name); // Replace XXXXX with your field ID
    // fetch('https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse', {
    //     method: 'POST',
    //     body: formData
    // });
}

// Initialize Live Comments
function initializeLiveComments() {
    displayCommentBatch(0);
    setInterval(() => {
        const currentBatch = Math.floor((Date.now() / (30 * 60 * 1000)) % 4);
        displayCommentBatch(currentBatch);
    }, 30 * 60 * 1000); // Update every 30 minutes
}

// Display Comment Batch
function displayCommentBatch(batchIndex) {
    const container = document.getElementById('liveCommentsContainer');
    const startIndex = batchIndex * 5;
    const endIndex = startIndex + 5;
    const batch = liveComments.slice(startIndex, endIndex);
    
    container.innerHTML = '';
    
    batch.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment-item';
        commentDiv.innerHTML = `
            <div class="comment-author">👤 ${comment.name}</div>
            <div class="comment-text">${comment.comment}</div>
        `;
        container.appendChild(commentDiv);
    });
}

// Submit Comment
function submitComment() {
    const commentBox = document.getElementById('commentBox');
    const comment = commentBox.value;
    
    if (!comment.trim()) {
        alert('Please enter a comment!');
        return;
    }
    
    // Simulate submission
    alert('Your comment will be uploaded soon');
    commentBox.value = '';
}

// Check for referral code in URL
window.addEventListener('load', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const refCode = urlParams.get('ref');
    
    if (refCode) {
        referralCount++;
        // In production, update this in your database
        localStorage.setItem('gulder_visitor_count', referralCount);
    }
});
