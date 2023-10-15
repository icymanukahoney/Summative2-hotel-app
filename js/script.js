// insitialiseoing AOS
AOS.init();

// Declare element variables for main modal
const modalFirst = document.getElementById("modal-first");
const closeButtonGreeting = document.getElementById("close-button-greeting");
//const swiperContainer = document.getElementById("swiper-container");

// Show modal greeting and initialize swiper
window.addEventListener('DOMContentLoaded', function() {
    modalFirst.style.display = 'block';
    //showGallery(mainGallery[0].image_gallery);
    //Results.style.display = "none";
  
    closeButtonGreeting.addEventListener('click', function() {
      modalFirst.style.display = 'none';
      //Results.style.display = "grid";
    });
  });

// -------------- end of Landing Page modal --------------

document.addEventListener("DOMContentLoaded", function() {

// ------------ Declare element variables for booking system --------
const email = document.getElementById("email");
const startDate = document.getElementById("start-date");
const endDate = document.getElementById("end-date");
const submit = document.getElementById("submit");
const statusMessage = document.getElementById("status-message");
const resultBox = document.getElementById("result-box");
const locationName = document.getElementById("location-name");
const accommodationType = document.getElementById("accommodation-type");
const options = document.getElementsByClassName('option');

const people = document.getElementById("people");
const accommodationBudget = document.getElementById("accommodation-budget");

// Declare element variables for hotel Modal
const modalWrapper = document.getElementById("modal-wrapper");
const modalContent = document.getElementById("modal-content");
const closeButton = document.getElementById("close-button");

// Get meal options checkboxes
//const mealOptions = document.getElementsByClassName("meal-option")

//const mapContainer = document.getElementById("map");

// Declare element variables for modal-reserve
const modalWrapperReservation = document.getElementById("modal-wrapper-reservation");
const closeButtonReservation = document.getElementById("close-button-reservation");
const modalContentReservation = document.getElementById("modal-content-reservation");

//initialize datepicker
const datepickerContainer = document.getElementById('custom-datepicker');
const rangepicker = new DateRangePicker(datepickerContainer, {
    // config
    format: "dd/mm/yyyy"
});

// our data
const accommodationData = [
  
  //Hotels
    {
      id: 0,
      location: "Queenstown",  
      nameAccommodation: "Kamana Lakehouse",
      coordinates: [168.63378, -45.03754],
      photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/8f/f9/a6/tahuna-lakeview-room.jpg?w=700&h=-1&s=1",
      facilities:`
      1 Family room <br>
      Bath <br>
      Free WiFi <br>
      Free parking <br>
      Air conditioning <br>
      Key card access <br>
      `,
      image: "https://cdn.dribbble.com/userupload/3795738/file/original-2130d55f3e516c3dfa20b0d026a566bb.png?compress=1&resize=2048x1537",
      typeAccommodation: "Hotel",
      minPeople: 1,
      maxPeople: 2,
      //capacity: "1-2 people",
      price: 157,
      minNights: 1,
      maxNights: 5,
      meals: [
        { name: "Breakfast", price: 10 },
        { name: "Lunch", price: 15 },
        { name: "Dinner", price: 20 },
      ],
    },
    {
      id: 1,
      location: "Queenstown",  
      nameAccommodation: "Crowne Plaza Queenstown, an IHG Hotel",
      coordinates: [168.65724,  -45.03240],
      photo: "https://queenstown.crowneplaza.com/wp-content/uploads/2018/04/Lakeview-King.jpg",
      facilities:`
      1 Family room<br>
      Bath <br>
      Free WiFi <br>
      Free parking <br>
      Air conditioning <br>
      Key card access <br>
      `,
      image: "https://cdn.dribbble.com/userupload/3811835/file/original-07f54f727378155c9c86bf7ea9a07da9.jpg?compress=1&resize=2048x1536",
      typeAccommodation: "Hotel",
      minPeople: 1,
      maxPeople: 2,
      //capacity: "1-2 people",
      price: 177,
      minNights: 1,
      maxNights: 5,
      meals: [
        { name: "Breakfast", price: 10 },
        { name: "Lunch", price: 15 },
        { name: "Dinner", price: 20 },
      ],
    },
    {
      id: 2,
      location: "Queenstown",  
      nameAccommodation: "Novotel Queenstown Lakeside",
      coordinates: [168.66285,  -45.03283], 
      photo: "https://www.ahstatic.com/photos/5308_rokgblv_00_p_1024x768.jpg",
      facilities:`
      1 Family room<br>
      Bath <br>
      Free WiFi <br>
      Free parking <br>
      Air conditioning <br>
      Key card access <br>
      `,
      image: "https://cdn.dribbble.com/userupload/4445564/file/original-75870c30f1faa147f81f837ffce576eb.jpeg?compress=1&resize=2048x1536",
      typeAccommodation: "Hotel",
      minPeople: 1,
      maxPeople: 2,
      //capacity: "1-2 people",
      price: 198,
      minNights: 1,
      maxNights: 5,
      meals: [
        { name: "Breakfast", price: 10 },
        { name: "Lunch", price: 15 },
        { name: "Dinner", price: 20 },
      ],
    },
{
        id: 3,
        location: "Nelson",  
        nameAccommodation: "Rutherford Hotel Nelson",
        coordinates: [173.28331, -41.27474],
        photo: "https://www.rutherfordhotel.nz/assets/Uploads/_resampled/CroppedFocusedImageWyIxMzAwIiwiODQ0IiwiNTAtNTAiXQ/Rutherford-Hotel-1039.jpg",
        facilities:`
        1 Family room<br>
        Bath <br>
        Free WiFi <br>
        Free parking <br>
        Air conditioning <br>
        Key card access <br>
        `,
        image: "https://cdn.dribbble.com/userupload/4719016/file/original-f1fc04913ceef51af20890a5bd8500cd.jpg?compress=1&resize=2048x1536",
        typeAccommodation: "Hotel",
        minPeople: 1,
        maxPeople: 2,
        //capacity: "1-2 people",
        price: 157,
        minNights: 1,
        maxNights: 5,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 4,
        location: "Nelson",  
        nameAccommodation: "The Hotel Nelson",
        coordinates: [173.27932, -41.28749],
        photo: "https://static.wixstatic.com/media/dab6e2_7e62c9f6d72e499abc41df88a112e494~mv2.jpg/v1/crop/x_144,y_0,w_2712,h_2003/fill/w_558,h_412,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/The%20Hotel%20Nelson%20-%20Superior%2016a.jpg",
        facilities:`
        1 Family room<br>
        Bath <br>
        Free WiFi <br>
        Free parking <br>
        Air conditioning <br>
        Key card access <br>
        `,
        image: "https://cdn.dribbble.com/users/3320958/screenshots/15689200/media/5ab17ab3fc29d5ac7f1ab2316d50826b.jpeg?compress=1&resize=1600x1200&vertical=center",
        typeAccommodation: "Hotel",
        minPeople: 1,
        maxPeople: 2,
        //capacity: "1-2 people",
        price: 177,
        minNights: 1,
        maxNights: 5,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
    {
      id: 5,
      location: "Nelson",  
      nameAccommodation: "Beaches Nelson",
      coordinates: [173.25054, -41.28239],
      photo: "https://images.squarespace-cdn.com/content/v1/591b8f9644024368be5f02e6/1645929996344-Y1KM94UUIMOMC7IA12R2/IMG_1464.jpg",
      facilities:`
      1 Family room<br>
      Bath <br>
      Free WiFi <br>
      Free parking <br>
      Air conditioning <br>
      Key card access <br>
      `,
      image: "https://cdn.dribbble.com/users/3320958/screenshots/16204568/media/c3ba410ec5a8378ce729c0009a291300.jpeg?compress=1&resize=1600x1200&vertical=center",
      typeAccommodation: "Hotel",
      minPeople: 1,
      maxPeople: 2,
      //capacity: "1-2 people",
      price: 198,
      minNights: 1,
      maxNights: 5,
      meals: [
        { name: "Breakfast", price: 10 },
        { name: "Lunch", price: 15 },
        { name: "Dinner", price: 20 },
      ],
    },
    {
        id: 6,
        location: "Christchurch",  
        nameAccommodation: "Parkview on Hagley",
        coordinates: [172.61263, -43.52913],
        photo: "https://vrhotels.co.nz/parkview-on-hagley/wp-content/uploads/sites/13/2021/07/DSC01947_8_9-720x470.jpg",
        facilities:`
        1 Family room<br>
        Bath <br>
        Free WiFi <br>
        Free parking <br>
        Air conditioning <br>
        Key card access <br>
        `,
        image: "https://cdn.dribbble.com/users/371094/screenshots/6793394/_bbb-dribble_4x.jpg?compress=1&resize=1600x1200&vertical=center",
        typeAccommodation: "Hotel",
        minPeople: 1,
        maxPeople: 2,
        //capacity: "1-2 people",
        price: 157,
        minNights: 1,
        maxNights: 5,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 7,
        location: "Christchurch",
        nameAccommodation: "Chateau on the Park - Christchurch, a DoubleTree by Hilton",
        coordinates: [172.61159, -43.52591],
        photo: "https://www.hilton.com/im/en/CHCNZDI/1619122/guest-room.jpg?impolicy=resize&rh=292&rw=437",
        facilities:`
        1 Family room<br>
        Bath <br>
        Free WiFi <br>
        Free parking <br>
        Air conditioning <br>
        Key card access <br>
        `,
        image: "https://cdn.dribbble.com/users/110792/screenshots/16376848/media/74c3fcbe132cfeef57692b4c08959c52.png?compress=1&resize=1600x1200&vertical=center",
        typeAccommodation: "Hotel",
        minPeople: 1,
        maxPeople: 2,
        //capacity: "1-2 people",
        price: 177,
        minNights: 1,
        maxNights: 5,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 8,
        location: "Christchurch",
        nameAccommodation: "Wyndham Garden Christchurch City",
        coordinates: [172.63293, -43.52622],
        photo: "https://www.wyndhamhotels.com/content/dam/property-images/en-us/gn/nz/others/christchurch/54023/54023_guest_room_bnk1_1.jpg?downsize=720:*",
        facilities:`
        1 Family room<br>
        Bath <br>
        Free WiFi <br>
        Free parking <br>
        Air conditioning <br>
        Key card access <br>
        `,
        image: "https://cdn.dribbble.com/users/3178178/screenshots/9686078/media/4cda071cbcc7e75b742f80f2b2e19bbd.jpg?compress=1&resize=1600x1200&vertical=center",
        typeAccommodation: "Hotel",
        minPeople: 1,
        maxPeople: 2,
        //capacity: "1-2 people",
        price: 198,
        minNights: 1,
        maxNights: 5,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 9,
        location: "Dunedin",
        nameAccommodation: "Scenic Hotel Dunedin City",
        coordinates: [170.50541, -45.86694],
        photo: "https://www.dunedinnz.com/__data/assets/image/0004/539086/DCH-Superior.jpg",
        facilities:`
        1 Family room<br>
        Bath <br>
        Free WiFi <br>
        Free parking <br>
        Air conditioning <br>
        Key card access <br>
        `,
        image: "https://cdn.dribbble.com/users/3808284/screenshots/10844904/media/c525c4ec0c16364ffa3131fa44d6a18f.png?compress=1&resize=1600x1200&vertical=center",
        typeAccommodation: "Hotel",
        minPeople: 1,
        maxPeople: 2,
        //capacity: "1-2 people",
        price: 157,
        minNights: 1,
        maxNights: 5,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 10,
        location: "Dunedin",
        nameAccommodation: "The Victoria Hotel Dunedin",
        coordinates: [170.50922, -45.86325],
        photo: "https://www.victoriahoteldunedin.com/img/room_101.jpg",
        facilities:`
        1 Family room<br>
        Bath <br>
        Free WiFi <br>
        Free parking <br>
        Air conditioning <br>
        Key card access <br>
        `,  
        image: "https://cdn.dribbble.com/users/1731254/screenshots/17738687/media/e7bf901411f789729fd4c99eeaa778dc.png?compress=1&resize=1600x1200&vertical=center",
        typeAccommodation: "Hotel",
        minPeople: 1,
        maxPeople: 2,
        //capacity: "1-2 people",
        price: 177,
        minNights: 1,
        maxNights: 5,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 11,
        location: "Dunedin",
        nameAccommodation: "Distinction Dunedin Hotel",
        coordinates: [170.50304, -45.86947],
        photo: "https://dbijapkm3o6fj.cloudfront.net/resources/6875,1004,1,6,4,0,800,600/-4051-/20160105131231/services.jpeg",
        facilities:`
        1 Family room<br>
        Bath <br>
        Free WiFi <br>
        Free parking <br>
        Air conditioning <br>
        Key card access <br>
        `, 
        image: "https://cdn.dribbble.com/users/1700769/screenshots/4077197/media/b54bda4b728b6658f8941659a0ec4a1c.png?compress=1&resize=800x600&vertical=center",
        typeAccommodation: "Hotel",
        minPeople: 1,
        maxPeople: 2,
        //capacity: "1-2 people",
        price: 198,
        minNights: 1,
        maxNights: 5,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 12,
        location: "West Coast",
        nameAccommodation: "Beachfront Hotel Hokitika",
        coordinates: [171.00357, -42.63169],
        photo: "https://www.beachfronthotel.co.nz/wp-content/uploads/2020/08/Beachfront-Hotel-Hokitika-Oceanview-Room.jpg",
        facilities:`
        1 Family room<br>
        Bath <br>
        Free WiFi <br>
        Free parking <br>
        Air conditioning <br>
        Key card access <br>
        `,
        image: "https://cdn.dribbble.com/userupload/4250392/file/original-83c914d3694f839adc0cc31e81a5456a.jpeg?compress=1&resize=2048x1536",
        typeAccommodation: "Hotel",
        minPeople: 1,
        maxPeople: 2,
        //capacity: "1-2 people",
        price: 157,
        minNights: 1,
        maxNights: 5,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 13,
        location: "West Coast",
        nameAccommodation: "Theatre Royal Hotel",
        coordinates: [171.24081, -42.58064],
        photo: "https://images.squarespace-cdn.com/content/v1/5c7601ecb7c92cb4efed6811/1554858972297-BM7ZVUMRBV0BY49D8IWO/2012-12-01+19.09.25.jpg",
        facilities:`
        1 Family room<br>
        Bath <br>
        Free WiFi <br>
        Free parking <br>
        Air conditioning <br>
        Key card access <br>
        `,
        image: "https://cdn.dribbble.com/userupload/4243244/file/original-382d0bacd517a1bf946b536108f3a1e6.jpeg?compress=1&resize=2048x1536",
        typeAccommodation: "Hotel",
        minPeople: 1,
        maxPeople: 2,
        //capacity: "1-2 people",
        price: 177,
        minNights: 1,
        maxNights: 5,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
    {
      id: 14,
      location: "West Coast",
      nameAccommodation: "Scenic Hotel Punakaiki",
      coordinates: [171.32183, -42.03833],
      photo: "https://www.scenichotelgroup.co.nz/content/uploads/2022/03/Beachview-QQ-Balcony-Room-2-regular-490x550.jpg",
      facilities:`
      1 Family room<br>
      Bath <br>
      Free WiFi <br>
      Free parking <br>
      Air conditioning <br>
      Key card access <br>
      `,
      image: "https://cdn.dribbble.com/userupload/2767251/file/original-1190d3aabbb9251b8702332ec62d4619.jpeg?compress=1&resize=2048x1536",
      typeAccommodation: "Hotel",
      minPeople: 1,
      maxPeople: 2,
      //capacity: "1-2 people",
      price: 198,
      minNights: 1,
      maxNights: 5,
      meals: [
        { name: "Breakfast", price: 10 },
        { name: "Lunch", price: 15 },
        { name: "Dinner", price: 20 },
      ],
    },
    {
      id: 15,
      location: "Lake Tekapo",
      nameAccommodation: "Peppers Bluewater Resort Lake Tekapo",
      coordinates: [170.47551, -44.00037],
      photo: "https://www.peppers.co.nz/Portals/0/GalleryImages/System/Peppers/BluewaterResort/Approved/Peppers-Bluewater-Resort-Lake-Tekapo-Deluxe-Lake-View-Hotel-Room.t86504.jpg",
      facilities:`
      1 Family room<br>
      Bath <br>
      Free WiFi <br>
      Free parking <br>
      Air conditioning <br>
      Key card access <br>
      `, 
      image: "https://cdn.dribbble.com/users/2654273/screenshots/20479476/media/7b8b842f8dee292c642da54378709f71.png?compress=1&resize=1600x1200&vertical=center",
      typeAccommodation: "Hotel",
      minPeople: 1,
      maxPeople: 2,
      //capacity: "1-2 people",
      price: 157,
      minNights: 1,
      maxNights: 5,
      meals: [
        { name: "Breakfast", price: 10 },
        { name: "Lunch", price: 15 },
        { name: "Dinner", price: 20 },
      ],
    },
    {
      id: 16,
      location: "Lake Tekapo",
      nameAccommodation: "The Godley Hotel Lake Tekapo",
      coordinates: [170.47997, -44.00321],
      photo: "https://godleyhotel.co.nz/wp-content/uploads/2021/03/159028657_628272231508719_6811245856074385376_n.jpg",
      facilities:`
      1 Family room<br>
      Bath <br>
      Free WiFi <br>
      Free parking <br>
      Air conditioning <br>
      Key card access <br>
      `, 
      image: "https://cdn.dribbble.com/users/2654273/screenshots/20486974/media/69c5297fb0697cdc9816f8549d859e65.png?compress=1&resize=1600x1200&vertical=center",
      typeAccommodation: "Hotel",
      minPeople: 1,
      maxPeople: 2,
      //capacity: "1-2 people",
      price: 177,
      minNights: 1,
      maxNights: 5,
      meals: [
        { name: "Breakfast", price: 10 },
        { name: "Lunch", price: 15 },
        { name: "Dinner", price: 20 },
      ],
    },
  {
    id: 17,
    location: "Lake Tekapo",
    nameAccommodation: "Tekapo lakefront suites and studios",
    coordinates: [170.47771, -44.00366],
    photo: "https://img1.wsimg.com/isteam/ip/0d65856a-5120-408c-9bac-561150851d52/_DSC8430.jpg/:/cr=t:0%25,l:16.62%25,w:66.77%25,h:100%25/rs=w:365,h:365,cg:true",
    facilities:`
    1 Family room<br>
    Bath <br>
    Free WiFi <br>
    Free parking <br>
    Air conditioning <br>
    Key card access <br>
    `, 
    image: "https://cdn.dribbble.com/userupload/2948670/file/original-3e26b01d446abad13acc64e60557f486.png?compress=1&resize=1856x1392&vertical=center",
    typeAccommodation: "Hotel",
    minPeople: 1,
    maxPeople: 2,
    //capacity: "1-2 people",
    price: 198,
    minNights: 1,
    maxNights: 5,
    meals: [
      { name: "Breakfast", price: 10 },
      { name: "Lunch", price: 15 },
      { name: "Dinner", price: 20 },
    ],
  },
    // Hostels
    {
        id: 18,
        location: "Queenstown",
        nameAccommodation: "Adventure Queenstown Hostel",
        coordinates: [168.66264, -45.02957],
        photo: "https://adventurehostels.co.nz/wp-content/uploads/2022/05/adventure-queenstown-hero.jpg",
        facilities:`
        Double room <br>
        Shared Bathroom <br>
        Free WiFi <br>
        Free parking <br>
        Air conditioning <br>
        Key card access <br>
        `, 
        image: "https://cdn.dribbble.com/userupload/5590229/file/original-6141c8f837af205a5bc379e433398ab8.png?compress=1&resize=2048x1536",
        typeAccommodation: "Hostel",
        //capacity: "1 person",
        minPeople: 1,
        maxPeople: 1,
        price: 30,
        minNights: 1,
        maxNights: 10,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 19,
        location: "Queenstown", 
        nameAccommodation: "Hippo lodge backpackers Queenstown",
        coordinates: [168.66401, -45.02520],
        photo: "https://static.wixstatic.com/media/3ea52a_78597f84bf6840d7aa20f09f22b9bded~mv2.jpg/v1/fill/w_640,h_374,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3ea52a_78597f84bf6840d7aa20f09f22b9bded~mv2.jpg",
        facilities:`
        Double room <br>
        Shared Bathroom <br>
        Free WiFi <br>
        Free parking <br>
        Air conditioning <br>
        Key card access <br>
        `, 
        image: "https://cdn.dribbble.com/users/548267/screenshots/13754208/media/ed2e36d62b8915490557337c4cc4f356.jpg?compress=1&resize=1600x1200&vertical=center",
        typeAccommodation: "Hostel",
        //capacity: "1 person",
        minPeople: 1,
        maxPeople: 1,
        price: 25,
        minNights: 1,
        maxNights: 10,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      

    {
      id: 20,
      location: "Nelson", 
      nameAccommodation: "The Palace Backpackers - BBH Nelson",
      coordinates: [173.28233, -41.27192],
      photo: "https://www.thepalace.co.nz/assets/Uploads/_resampled/CroppedImage1200800-hp14.jpg",
      facilities:`
      Double room <br>
      Shared Bathroom <br>
      Free WiFi <br>
      Free parking <br>
      Air conditioning <br>
      Key card access <br>
      `, 
      image: "https://cdn.dribbble.com/userupload/7504224/file/original-1cd75221c4a0a6890bf7a7230aa786be.png?compress=1&resize=2048x2048",
      typeAccommodation: "Hostel",
      minPeople: 1,
      maxPeople: 1,
      //capacity: "1 person",
      price: 30,
      minNights: 1,
      maxNights: 10,
      meals: [
        { name: "Breakfast", price: 10 },
        { name: "Lunch", price: 15 },
        { name: "Dinner", price: 20 },
      ],
    },
    {
      id: 21,
      location: "Nelson", 
      nameAccommodation: "Bridge Backpackers Nelson",
      coordinates: [173.28147, -41.27243],
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDf2PZnhlcp1fCIFkiBTiy1-0R9z5KTH_U7__IqZOVVZexs_7U9Q262lOsTRqSx6Fq2cc&usqp=CAU",
      facilities:`
      Double room <br>
      Shared Bathroom <br>
      Free WiFi <br>
      Free parking <br>
      Air conditioning <br>
      Key card access <br>
      `, 
      image: "https://cdn.dribbble.com/users/1803663/screenshots/15994601/media/e76b9b1d0289ffd74e6f80b30c85f601.png?compress=1&resize=1600x1200&vertical=center",
      typeAccommodation: "Hostel",
      //capacity: "1 person",
      minPeople: 1,
      maxPeople: 1,
      price: 25,
      minNights: 1,
      maxNights: 10,
      meals: [
        { name: "Breakfast", price: 10 },
        { name: "Lunch", price: 15 },
        { name: "Dinner", price: 20 },
      ],
    },

    {
        id: 22,
        location: "West Coast", 
        nameAccommodation: "Franz Josef Montrose Backpackers",
        coordinates: [170.18310, -43.38934],
        photo: "https://static.wixstatic.com/media/139585_d02ccbc4d3d54384ad7e80a68f0c2f03~mv2.png/v1/fill/w_633,h_540,al_c,lg_1,q_85,enc_auto/139585_d02ccbc4d3d54384ad7e80a68f0c2f03~mv2.png",
        facilities:`
        Double room <br>
        Shared Bathroom <br>
        Free WiFi <br>
        Free parking <br>
        Air conditioning <br>
        Key card access <br>
        `, 
        image: "https://cdn.dribbble.com/users/63407/screenshots/4922485/dribbble_roadtrip_winding_road.png?compress=1&resize=800x600&vertical=center",
        typeAccommodation: "Hostel",
        //capacity: "1 person",
        minPeople: 1,
        maxPeople: 1,
        price: 30,
        minNights: 1,
        maxNights: 10,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 23,
        location: "West Coast", 
        nameAccommodation: "Tripinn Hostel Backpackers YHA Westport",
        coordinates: [171.60164, -41.75542],
        photo: "https://www.yha.co.nz/media/2007/yha-westport-interior-8-2015-lr-1000.jpg",
        facilities:`
        Double room <br>
        Shared Bathroom <br>
        Free WiFi <br>
        Free parking <br>
        Air conditioning <br>
        Key card access <br>
        `, 
        image: "https://cdn.dribbble.com/users/287052/screenshots/18182079/media/7567b55831864dc3ff54e90a91c59a67.png?compress=1&resize=1600x1200&vertical=center",
        typeAccommodation: "Hostel",
        //capacity: "1 person",
        minPeople: 1,
        maxPeople: 1,
        price: 25,
        minNights: 1,
        maxNights: 10,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 24,
        location: "Christchurch",
        nameAccommodation: "Jailhouse Accommodation Christchurch",
        coordinates: [172.61414, -43.54317],
        photo: "https://sportsgroundproduction.blob.core.windows.net/cms/2140/6950/977799/977800/977801/cff1702a-bca1-4072-827d-83190b8f8bb9_wo.jpg",
        facilities:`
        Double room <br>
        Shared Bathroom <br>
        Free WiFi <br>
        Free parking <br>
        Air conditioning <br>
        Key card access <br>
        `, 
        image: "https://cdn.dribbble.com/userupload/4693931/file/original-cd1b6b898dca6b75ef03bc726c626256.png?compress=1&resize=2048x1536",
        typeAccommodation: "Hostel",
        //capacity: "1 person",
        minPeople: 1,
        maxPeople: 1,
        price: 30,
        minNights: 1,
        maxNights: 10,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 25,
        location: "Christchurch",
        nameAccommodation: "Urbanz Accomodation Christchurch",
        coordinates: [172.63955, -43.52916],
        photo: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/237047870.jpg?k=22ba784b3962ec25aedc19ada6aba242256f191f78871f1b21db8b858c95b752&o=&hp=1",
        facilities:`
        Double room <br>
        Shared Bathroom <br>
        Free WiFi <br>
        Free parking <br>
        Air conditioning <br>
        Key card access <br>
        `,  
        image: "https://cdn.dribbble.com/users/730703/screenshots/14348715/media/580be2422d501f36ec11bd32a06cc16e.jpg?compress=1&resize=1600x1200&vertical=center",
        typeAccommodation: "Hostel",
        //capacity: "1 person",
        minPeople: 1,
        maxPeople: 1,
        price: 25,
        minNights: 1,
        maxNights: 10,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 26,
        location: "Dunedin",
        nameAccommodation: "UpTown Backpackers Dunedin",
        coordinates: [170.50417, -45.87238],
        photo: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/425367742.jpg?k=540a2f392fcf3c6db2b5059f77149352bd2a5470f62393145830fbb588eaaa5e&o=&hp=1",
        facilities:`
        Double room <br>
        Shared Bathroom <br>
        Free WiFi <br>
        Free parking <br>
        Air conditioning <br>
        Key card access <br>
        `, 
        image: "https://cdn.dribbble.com/users/3178178/screenshots/6719416/goodbye_yellow_bright_sun_4x.jpg?compress=1&resize=1600x1200&vertical=center",
        typeAccommodation: "Hostel",
        //capacity: "1 person",
        minPeople: 1,
        maxPeople: 1,
        price: 30,
        minNights: 1,
        maxNights: 10,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 27,
        location: "Dunedin",
        nameAccommodation: "On Top Backpackers Dunedin",
        coordinates: [170.50274, -45.87218],
        photo: "https://webbox.imgix.net/images/khjvgnqbldnbyjyj/fb87bd19-2c9c-433b-a6e2-676575839a02.jpg?auto=format,compress&fit=crop&crop=entropy",
        facilities:`
        Double room <br>
        Shared Bathroom <br>
        Free WiFi <br>
        Free parking <br>
        Air conditioning <br>
        Key card access <br>
        `, 
        image: "https://cdn.dribbble.com/users/1803663/screenshots/11564166/media/060a3b0d42ff03a87fb73f4b2b9f4d5b.jpg?compress=1&resize=1600x1200&vertical=center",
        typeAccommodation: "Hostel",
        //capacity: "1 person",
        minPeople: 1,
        maxPeople: 1,
        price: 25,
        minNights: 1,
        maxNights: 10,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 28,
        location: "Lake Tekapo",
        nameAccommodation: "Tailor Made Tekapo Accommodation - Guesthouse & Hostel",
        coordinates: [170.47549, -44.00642],
        photo: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/269673712.jpg?k=e66fca8d7dff4bc47a26b5821ec957b75356a20ea240d8aaf7faf40093608a99&o=&hp=1",
        facilities:`
        Double room <br>
        Shared Bathroom <br>
        Free WiFi <br>
        Free parking <br>
        Air conditioning <br>
        Key card access <br>
        `,  
        image: "https://cdn.dribbble.com/users/13449/screenshots/12078823/media/c6662b0de7365559f79d9eb6088d9527.png?compress=1&resize=1600x1200&vertical=center",
        typeAccommodation: "Hostel",
        //capacity: "1 person",
        minPeople: 1,
        maxPeople: 1,
        price: 30,
        minNights: 1,
        maxNights: 10,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 29,
        location: "Lake Tekapo",
        nameAccommodation: "Stay In Tekapo Backpackers",
        coordinates: [170.47702, -44.00379],
        photo: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/269673712.jpg?k=e66fca8d7dff4bc47a26b5821ec957b75356a20ea240d8aaf7faf40093608a99&o=&hp=1",
        facilities:`
        Double room <br>
        Shared Bathroom <br>
        Free WiFi <br>
        Free parking <br>
        Air conditioning <br>
        Key card access <br>
        `,  
        image: "https://cdn.dribbble.com/userupload/3666149/file/original-099735328d3bebb28cbd2adab0f3db60.png?compress=1&resize=1504x1015",
        typeAccommodation: "Hostel",
        //capacity: "1 person",
        minPeople: 1,
        maxPeople: 1,
        price: 25,
        minNights: 1,
        maxNights: 10,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
          // --------- Motels------//
    {
        id: 30,
        location: "Queenstown",
        nameAccommodation: "Settlers Cottage Motel Queenstown",
        coordinates: [168.83092, -44.93239],
        photo: "https://settlerscottagemotel.co.nz/wp-content/uploads/2022/08/settlers_cottage_motel_063.jpg",
        facilities:`
        1 Family room<br>
        Bath <br>
        Free WiFi <br>
        Free parking <br>
        Air conditioning <br>
        Key card access <br>
        `,  
        image: "https://cdn.dribbble.com/users/1731254/screenshots/9686910/media/2fd2e8c8aff9b01adb81ebf292e60e78.png?compress=1&resize=1600x1200&vertical=center",
        typeAccommodation: "Motel",
        //capacity: "2-4 people",
        minPeople: 2,
        maxPeople: 4,
        price: 90,
        minNights: 3,
        maxNights: 10,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 31,
        location: "Queenstown",
        nameAccommodation: "Lakeside Motel Queenstown",
        coordinates: [168.65707, -45.02244],
        photo: "https://settlerscottagemotel.co.nz/wp-content/uploads/2022/08/settlers_cottage_motel_063.jpg",
        facilities:`
        1 Family room<br>
        Bath <br>
        Free WiFi <br>
        Free parking <br>
        Air conditioning <br>
        Key card access <br>
        `,  
        image: "https://cdn.dribbble.com/userupload/2548585/file/original-edad6c47fd2da43c363a9f9634ca4d9a.png?compress=1&resize=1504x1128",
        typeAccommodation: "Motel",
        //capacity: "2-4 people",
        minPeople: 2,
        maxPeople: 4,
        price: 95,
        minNights: 3,
        maxNights: 10,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 32,
        location: "Queenstown", 
        nameAccommodation: "Abba Court Motel Queenstown",
        coordinates: [168.66119, -45.02050],
        photo: "https://www.abba.co.nz/wp-content/uploads/2022/02/Abba_Court_July_2019_029-1280x853-1.jpg",
        facilities:`
        1 Family room<br>
        Bath <br>
        Free WiFi <br>
        Free parking <br>
        Air conditioning <br>
        Key card access <br>
        `, 
        image: "https://cdn.dribbble.com/users/548267/screenshots/14864582/media/a476ab0781c7cf75a2501ad9dda6d719.jpg?compress=1&resize=1600x1200&vertical=center",
        typeAccommodation: "Motel",
        //capacity: "2-4 people",
        minPeople: 2,
        maxPeople: 4,
        price: 85,
        minNights: 3,
        maxNights: 10,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
    
    {
      id: 33,
      location: "Nelson",
      nameAccommodation: "Bella Vista Motel Nelson",
      coordinates: [173.24517, -41.28881],
      photo: "https://www.bellavista.co.nz/uploads/2023/05/img-6476a3b50a3fd.jpg",
      facilities:`
      1 Family room<br>
      Bath <br>
      Free WiFi <br>
      Free parking <br>
      Air conditioning <br>
      Key card access <br>
      `,  
      image: "https://cdn.dribbble.com/userupload/7564111/file/original-4b8bcfc7e3bcee621bc4647238f6c0c5.jpg?compress=1&resize=2048x1536",
      typeAccommodation: "Motel",
      //capacity: "2-4 people",
      minPeople: 2,
      maxPeople: 4,
      price: 90,
      minNights: 3,
      maxNights: 10,
      meals: [
        { name: "Breakfast", price: 10 },
        { name: "Lunch", price: 15 },
        { name: "Dinner", price: 20 },
      ],
    },
    {
      id: 34,
      location: "Nelson",
      nameAccommodation: "Arrow Motel Nelson",
      coordinates: [173.24141, -41.28258],
      photo: "https://www.bellavista.co.nz/uploads/2023/05/img-64645e497725d.jpg",
      facilities:`
      1 Family room<br>
      Bath <br>
      Free WiFi <br>
      Free parking <br>
      Air conditioning <br>
      Key card access <br>
      `,  
      image: "https://cdn.dribbble.com/userupload/3685472/file/original-9ad5bfba5fecb05b23a27700bcbad6dd.png?compress=1&resize=1504x1128",
      typeAccommodation: "Motel",
      //capacity: "2-4 people",
      minPeople: 2,
      maxPeople: 4,
      price: 95,
      minNights: 3,
      maxNights: 10,
      meals: [
        { name: "Breakfast", price: 10 },
        { name: "Lunch", price: 15 },
        { name: "Dinner", price: 20 },
      ],
    },
    {
      id: 35,
      location: "Nelson",
      nameAccommodation: "Palms Motel Nelson",
      coordinates: [173.28409, -41.26691],
      photo: "https://www.bellavista.co.nz/uploads/2023/05/img-64645e4cb7d01.jpg",
      facilities:`
      1 Family room<br>
      Bath <br>
      Free WiFi <br>
      Free parking <br>
      Air conditioning <br>
      Key card access <br>
      `,  
      image: "https://cdn.dribbble.com/users/3768010/screenshots/12130099/media/7e62d688e600ccf7b17dbe1f866c15b7.png?compress=1&resize=1600x1200&vertical=center",
      typeAccommodation: "Motel",
      //capacity: "2-4 people",
      minPeople: 2,
      maxPeople: 4,
      price: 85,
      minNights: 3,
      maxNights: 10,
      meals: [
        { name: "Breakfast", price: 10 },
        { name: "Lunch", price: 15 },
        { name: "Dinner", price: 20 },
      ],
    },

    {
        id: 36,
        location: "West Coast",
        nameAccommodation: "Paparoa Park Motel",
        coordinates: [171.28918, -42.05824],
        photo: "https://www.paparoa.co.nz/wp-content/uploads/2018/10/Paparoa-Park-Motel-34-960x420.jpg",
        facilities:`
        1 Family room<br>
        Bath <br>
        Free WiFi <br>
        Free parking <br>
        Air conditioning <br>
        Key card access <br>
        `,  
        image: "https://cdn.dribbble.com/users/3949861/screenshots/14394379/media/2e0af419c78984e9d00a1de689ee088f.jpg?compress=1&resize=1600x1200&vertical=center",
        typeAccommodation: "Motel",
        //capacity: "2-4 people",
        minPeople: 2,
        maxPeople: 4,
        price: 90,
        minNights: 3,
        maxNights: 10,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 37,
        location: "West Coast",
        nameAccommodation: "Bella Vista Motel Fox Glacier",
        coordinates: [170.02301, -43.30676],
        photo: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/214379416.jpg?k=3a0f3112904df4ec0b6022452ec8c04fe5273d72dab0e3021c99c350bb19d7a1&o=&hp=1",
        facilities:`
        1 Family room<br>
        Bath <br>
        Free WiFi <br>
        Free parking <br>
        Air conditioning <br>
        Key card access <br>
       `,  
        image: "https://cdn.dribbble.com/users/13449/screenshots/10094240/media/bbac9c3ddc0d46017085b7c7cafa5f6b.png?compress=1&resize=1600x1200&vertical=center",
        typeAccommodation: "Motel",
        //capacity: "2-4 people",
        minPeople: 2,
        maxPeople: 4,
        price: 95,
        minNights: 3,
        maxNights: 10,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 38,
        location: "West Coast",
        nameAccommodation: "Westport Motels",
        coordinates: [171.60028, -41.74178],
        photo: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/128138079.jpg?k=ba6caf79f98b550d789ddda45e0f87d025dc2ad0aaf0c97da91c2ea0372ba664&o=&hp=1",
        facilities:`
        1 Family room<br>
        Bath <br>
        Free WiFi <br>
        Free parking <br>
        Air conditioning <br>
        Key card access <br>
        `,  
        image: "https://cdn.dribbble.com/users/788099/screenshots/6442882/paradise_beach_kit8-net.png?compress=1&resize=800x600&vertical=center",
        typeAccommodation: "Motel",
        //capacity: "2-4 people",
        minPeople: 2,
        maxPeople: 4,
        price: 85,
        minNights: 3,
        maxNights: 10,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 39,
        location: "Lake Tekapo",
        nameAccommodation: "Lake Tekapo Village Motel",
        coordinates: [170.47810, -44.00119],
        photo: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/253891031.jpg?k=5970f06dc1f464c154f9a4921708c2ef0338cbc86f82a311cf2f7e2efef782a4&o=&hp=1",
        facilities:`
        1 Family room<br>
        Bath <br>
        Free WiFi <br>
        Free parking <br>
        Air conditioning <br>
        Key card access <br>
        `,  
        image: "https://cdn.dribbble.com/userupload/2948673/file/original-af9f004bd6a1e45fe8910ee99fde956c.png?compress=1&resize=1856x1392&vertical=center",
        typeAccommodation: "Motel",
        //capacity: "2-4 people",
        minPeople: 2,
        maxPeople: 4,
        price: 90,
        minNights: 3,
        maxNights: 10,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 40,
        location: "Lake Tekapo",
        nameAccommodation: "Mt Dobson Motel Lake Tekapo",
        coordinates: [170.78353, -44.01395],
        photo: "https://images.trvl-media.com/hotels/10000000/9630000/9623500/9623439/b88d86d3_b.jpg",
        facilities:`
        1 Family room<br>
        Bath <br>
        Free WiFi <br>
        Free parking <br>
        Air conditioning <br>
        Key card access <br>
        `,  
        image: "https://cdn.dribbble.com/users/110792/screenshots/16186913/media/d36dc92dc57d635c2e3ead1c3f78f146.png?compress=1&resize=1600x1200&vertical=center",
        typeAccommodation: "Motel",
        //capacity: "2-4 people",
        minPeople: 2,
        maxPeople: 4,
        price: 95,
        minNights: 3,
        maxNights: 10,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 41,
        location: "Lake Tekapo",
        nameAccommodation: "YHA Lake Tekapo",
        coordinates: [170.53696, -43.95238],
        photo: "https://lakesedgeholidaypark.co.nz/assets/Uploads/072-AUG2022_LEH__FillMaxWzU5MCwzMzJd.jpg",
        facilities:`
        1 Family room<br>
        Bath <br>
        Free WiFi <br>
        Free parking <br>
        Air conditioning <br>
        Key card access <br>
        `,  
        image: "https://cdn.dribbble.com/users/110792/screenshots/16217247/media/597de464358d0cd2a1cc9fd3bee890ef.png?compress=1&resize=1600x1200&vertical=center",
        typeAccommodation: "Motel",
        //capacity: "2-4 people",
        minPeople: 2,
        maxPeople: 4,
        price: 85,
        minNights: 3,
        maxNights: 10,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 42,
        location: "Christchurch", 
        nameAccommodation: "Merivale Court Motel Christchurch",
        coordinates: [172.62446, -43.51313],
        photo: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/18924058.jpg?k=30c1684df7a5720be859d3a076700c6ab30376517f304515d07e0887ff7fab13&o=&hp=1",
        facilities:`
        1 Family room<br>
        Bath <br>
        Free WiFi <br>
        Free parking <br>
        Air conditioning <br>
        Key card access <br>
        `, 
        image: "https://cdn.dribbble.com/userupload/4489231/file/original-69522158b87db315e4f40bf0075187f0.png?compress=1&resize=752x564",
        typeAccommodation: "Motel",
        //capacity: "2-4 people",
        minPeople: 2,
        maxPeople: 4,
        price: 90,
        minNights: 3,
        maxNights: 10,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 43,
        location: "Christchurch",
        nameAccommodation: "Aalton Motel Christchurch",
        coordinates: [172.60826, -43.52650],
        photo: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/18602197.jpg?k=7ca7029ac975d91e02854f76456561eb29f93d0be7cfd60e90fadd94039ca01c&o=&hp=1",
        facilities:`
        1 Family room<br>
        Bath <br>
        Free WiFi <br>
        Free parking <br>
        Air conditioning <br>
        Key card access <br>
        `,  
        image: "https://cdn.dribbble.com/userupload/5606677/file/original-5137599ebf3f035148e19554a06d4d8a.jpg?compress=1&resize=1504x1504",
        typeAccommodation: "Motel",
        //capacity: "2-4 people",
        minPeople: 2,
        maxPeople: 4,
        price: 95,
        minNights: 3,
        maxNights: 10,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 44,
        location: "Christchurch",
        nameAccommodation: "Colonial Inn Motel Christchurch",
        coordinates: [172.62440, -43.51641],
        photo: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/18602615.jpg?k=086f460466989956d9e96ba73faa6b49b3070b2739c9bb74a795bd6abe2099d7&o=&hp=1",
        facilities:`
        1 Family room<br>
        Bath <br>
        Free WiFi <br>
        Free parking <br>
        Air conditioning <br>
        Key card access <br>
        `,  
        image: "https://cdn.dribbble.com/users/5716533/screenshots/15661702/media/2ed6ff99cee53f1b2f05d4189f59e993.png?compress=1&resize=1600x1200&vertical=center",
        typeAccommodation: "Motel",
        //capacity: "2-4 people",
        minPeople: 2,
        maxPeople: 4,
        price: 85,
        minNights: 3,
        maxNights: 10,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },

      {
        id: 45,
        location: "Dunedin",
        nameAccommodation: "Amross Motel Dunedin",
        coordinates: [170.51889, -45.85984],
        photo: "https://amrossmotel.co.nz/media/1239/number-10-motel-bedroom.jpg?width=800&height=500&mode=crop&quality=80",
        facilities:`
        1 Family room<br>
        Bath <br>
        Free WiFi <br>
        Free parking <br>
        Air conditioning <br>
        Key card access <br>
        `,  
        image: "https://cdn.dribbble.com/users/2028818/screenshots/16529592/media/72113f440d7b279051986a90f86f3d97.png?compress=1&resize=1600x1200&vertical=center",
        typeAccommodation: "Motel",
        //capacity: "2-4 people",
        minPeople: 2,
        maxPeople: 4,
        price: 90,
        minNights: 3,
        maxNights: 10,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 46,
        location: "Dunedin",
        nameAccommodation: "538 Great King Motel, Dunedin",
        coordinates: [170.51477, -45.85906],
        photo: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/50946457.jpg?k=fcb66395aa908eaf3be1f992c7f7ae473313438dede5ee2807c08d2cf3a63042&o=&hp=1",
        facilities:`
        1 Family room<br>
        Bath <br>
        Free WiFi <br>
        Free parking <br>
        Air conditioning <br>
        Key card access <br>
        `,  
        image: "https://cdn.dribbble.com/users/1629266/screenshots/6038165/media/caf30a28d8461896a3553035280303fe.jpg?compress=1&resize=800x600&vertical=center",
        typeAccommodation: "Motel",
        //capacity: "2-4 people",
        minPeople: 2,
        maxPeople: 4,
        price: 95,
        minNights: 3,
        maxNights: 10,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 47,
        location: "Dunedin",
        nameAccommodation: "Motel On York Dunedin",
        coordinates: [170.51491, -45.85926],
        photo: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/50946568.jpg?k=740a90c4f108d1938918a4cb6e1c6b8da7a84c54206be63d1444e80a193d90fd&o=&hp=1",
        facilities:`
        1 Family room<br>
        Bath <br>
        Free WiFi <br>
        Free parking <br>
        Air conditioning <br>
        Key card access <br>
        `,  
        image: "https://cdn.dribbble.com/users/4089509/screenshots/7140386/media/164d7b9b57fdb43bf41cf99b7ab62b4c.jpg?compress=1&resize=1600x1200&vertical=center",
        typeAccommodation: "Motel",
        //capacity: "2-4 people",
        minPeople: 2,
        maxPeople: 4,
        price: 85,
        minNights: 3,
        maxNights: 10,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },

      // ---- HOUSES ------
    {
        id: 48,
        location: "Queenstown",
        nameAccommodation: "Heavenly Heights with Awesome Views",
        coordinates: [168.67366, -45.03310],
        photo: "https://a0.muscache.com/im/pictures/miso/Hosting-885571010134198655/original/d2c658e7-b78d-4e54-a5de-c1a664e40896.jpeg?im_w=960",
        facilities:`
        2 bedrooms<br>
        Bath <br>
        Kitchen <br>
        Free WiFi <br>
        Private parking <br>
        Air conditioning <br>
        `,  
        image: "https://cdn.dribbble.com/userupload/4247593/file/original-17c9c57bd5087203207f15321c398648.jpg?compress=1&resize=1504x1010",
        typeAccommodation: "House",
        minPeople: 1,
        maxPeople: 4,
        //capacity: "1-4 people",
        price: 240,
        minNights: 2,
        maxNights: 15,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 49,
        location: "Queenstown",
        nameAccommodation: "Cosy with views, Queenstown",
        coordinates: [168.68172, -45.03352],
        photo: "https://a0.muscache.com/im/pictures/miso/Hosting-918469155799896912/original/d0049a5a-4c9f-46b8-a43d-1fac5b73cc46.jpeg?im_w=960",
        facilities:`
        2 bedrooms<br>
        Bath <br>
        Kitchen <br>
        Free WiFi <br>
        Private parking <br>
        Air conditioning <br>
        `,   
        image: "https://cdn.dribbble.com/userupload/2948672/file/original-bb0b5e583d2d325e6f4c307e5711d1ec.png?compress=1&resize=1856x1392&vertical=center",
        typeAccommodation: "House",
        minPeople: 1,
        maxPeople: 4,
        //capacity: "1-4 people",
        price: 235,
        minNights: 2,
        maxNights: 15,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 50,
        location: "Queenstown",
        nameAccommodation: "Private Guest Suite in Jacks Point, Queenstown",
        coordinates: [168.75434, -45.05533],
        photo: "https://a0.muscache.com/im/pictures/miso/Hosting-915672377208672263/original/60cf72b1-b289-4673-8968-5aa7f57b6b59.jpeg?im_w=960",
        facilities:`
        2 bedrooms<br>
        Bath <br>
        Kitchen <br>
        Free WiFi <br>
        Private parking <br>
        Air conditioning <br>
        `,   
        image: "https://cdn.dribbble.com/users/548267/screenshots/15796771/media/2c97aca97a15ee47830fdb9d2f15a57d.png?compress=1&resize=1600x1200&vertical=center",
        typeAccommodation: "House",
        minPeople: 1,
        maxPeople: 4,
        //capacity: "1-4 people",
        price: 245,
        minNights: 2,
        maxNights: 15,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
    {
      id: 51,
      location: "Nelson",
      nameAccommodation: "Walk to Downtown Restaurants from Stylish Vacation Villa",
      coordinates: [173.23379, -41.29091],
      photo: "https://a0.muscache.com/im/pictures/bedb944a-970c-4731-ad7d-3adfc16715cd.jpg?im_w=960",
      facilities:`
      2 bedrooms<br>
      Bath <br>
      Kitchen <br>
      Free WiFi <br>
      Private parking <br>
      Air conditioning <br>
      `,   
      image: "https://cdn.dribbble.com/users/1853404/screenshots/11917461/media/88ff171ba6fe8a434a6627be09920379.png?compress=1&resize=1600x1200&vertical=center",
      typeAccommodation: "House",
      //capacity: "1-4 people",
      minPeople: 1,
      maxPeople: 4,
      price: 240,
      minNights: 2,
      maxNights: 15,
      meals: [
        { name: "Breakfast", price: 10 },
        { name: "Lunch", price: 15 },
        { name: "Dinner", price: 20 },
      ],
    },
    {
      id: 52,
      location: "Nelson",
      nameAccommodation: "Old English style 2 bedroom",
      coordinates: [173.22057, -41.30484],
      photo: "https://a0.muscache.com/im/pictures/miso/Hosting-584360918252912848/original/aec06cdb-ae1b-4189-bd36-00a312cb8453.jpeg?im_w=960",
      facilities:`
      2 bedrooms<br>
      Bath <br>
      Kitchen <br>
      Free WiFi <br>
      Private parking <br>
      Air conditioning <br>
      `,   
      image: "https://cdn.dribbble.com/users/1293412/screenshots/17361799/media/1b4e3b684b79a1c88061ac491878c03c.png?compress=1&resize=1600x1200&vertical=center",
      typeAccommodation: "House",
      //capacity: "1-4 people",
      minPeople: 1,
      maxPeople: 4,
      price: 235,
      minNights: 2,
      maxNights: 15,
      meals: [
        { name: "Breakfast", price: 10 },
        { name: "Lunch", price: 15 },
        { name: "Dinner", price: 20 },
      ],
    },
    {
      id: 53,
      location: "Nelson",
      nameAccommodation: "Bach in the City",
      coordinates: [173.24640, -41.28881],
      photo: "https://a0.muscache.com/im/pictures/miso/Hosting-809712623905790318/original/75605d68-44df-4422-8926-fbb09ef11b6a.jpeg?im_w=1200",
      facilities:`
      2 bedrooms<br>
      Bath <br>
      Kitchen <br>
      Free WiFi <br>
      Private parking <br>
      Air conditioning <br>
        `,   
      image: "https://cdn.dribbble.com/users/2340887/screenshots/5565883/media/58e88777f17d4861d7b913a6892ca1a6.png?compress=1&resize=2400x1800&vertical=center",
      typeAccommodation: "House",
      //capacity: "1-4 people",
      minPeople: 1,
      maxPeople: 4,
      price: 245,
      minNights: 2,
      maxNights: 15,
      meals: [
        { name: "Breakfast", price: 10 },
        { name: "Lunch", price: 15 },
        { name: "Dinner", price: 20 },
      ],
    },
    {
        id: 54,
        location: "West Coast",
        nameAccommodation: "Sva's Hut, magnificent elevated ocean views",
        coordinates: [171.44862, -42.03658],
        photo: "https://a0.muscache.com/im/pictures/miso/Hosting-814776050492834190/original/79a00149-321c-4194-a354-513625fa8d7d.jpeg?im_w=1200",
        facilities:`
        2 bedrooms<br>
        Bath <br>
        Kitchen <br>
        Free WiFi <br>
        Private parking <br>
        Air conditioning <br>
        `,   
        image: "https://cdn.dribbble.com/users/925234/screenshots/3990636/media/cd12b7fb3abba971f62814af23f7d1f1.jpg?compress=1&resize=800x600&vertical=center",
        typeAccommodation: "House",
        minPeople: 1,
        maxPeople: 4,
        //capacity: "1-4 people",
        price: 240,
        minNights: 2,
        maxNights: 15,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 55,
        location: "West Coast",
        nameAccommodation: "Chalet in Punakaiki",
        coordinates: [171.39179, -42.17291],
        photo: "https://a0.muscache.com/im/pictures/20b70f13-689e-4e37-8c7f-6bcc73f548d0.jpg?im_w=1200",
        facilities:`
        2 bedrooms<br>
        Bath <br>
        Kitchen <br>
        Free WiFi <br>
        Private parking <br>
        Air conditioning <br>
        `,   
        image: "https://cdn.dribbble.com/userupload/2897416/file/original-b0231e7ac571765b473cdfa1e64d4d09.jpeg?compress=1&resize=2048x1536",
        typeAccommodation: "House",
        minPeople: 1,
        maxPeople: 4,
        //capacity: "1-4 people",
        price: 245,
        minNights: 2,
        maxNights: 15,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 56,
        location: "West Coast",
        nameAccommodation: "Okarito Cottage",
        coordinates: [170.16376, -43.15845],
        photo: "https://a0.muscache.com/im/pictures/miso/Hosting-568467171623725397/original/a2279c53-9ea1-4b5e-a2b9-1c93506af3d6.jpeg?im_w=1200",
        facilities:`
        2 bedrooms<br>
        Bath <br>
        Kitchen <br>
        Free WiFi <br>
        Private parking <br>
        Air conditioning <br>
        `,   
        image: "https://cdn.dribbble.com/userupload/3499827/file/original-5958a23fa3a358e16aefbd39acc3dba7.jpeg?compress=1&resize=2048x1536",
        typeAccommodation: "House",
        minPeople: 1,
        maxPeople: 4,
        //capacity: "1-4 people",
        price: 235,
        minNights: 2,
        maxNights: 15,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },

      {
        id: 57,
        location: "Lake Tekapo",
        nameAccommodation: "Loch View",
        coordinates: [170.46455, -43.99996],
        photo: "https://a0.muscache.com/im/pictures/miso/Hosting-34719150/original/44630c16-be82-4873-9f02-5d3b88a1d45c.jpeg?im_w=1200",
        facilities:`
        2 bedrooms<br>
        Bath <br>
        Kitchen <br>
        Free WiFi <br>
        Private parking <br>
        Air conditioning <br>
        `,   
        image: "https://cdn.dribbble.com/users/110792/screenshots/16456848/media/bf8c29f2627a53f176892ed99011728c.png?compress=1&resize=1600x1200&vertical=center",
        typeAccommodation: "House",
        minPeople: 1,
        maxPeople: 4,
        //capacity: "1-4 people",
        price: 240,
        minNights: 2,
        maxNights: 15,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },

      {
        id: 58,
        location: "Lake Tekapo",
        nameAccommodation: "Church View",
        coordinates: [170.48012, -44.00429],
        photo: "https://a0.muscache.com/im/pictures/9859c593-b1e9-4550-89bd-d891fcaba96c.jpg?im_w=1200",
        facilities:`
        2 bedrooms<br>
        Bath <br>
        Kitchen <br>
        Free WiFi <br>
        Private parking <br>
        Air conditioning <br>
        `,   
        image: "https://cdn.dribbble.com/users/110792/screenshots/16472499/media/a98406e8774ee25717b7f3f47aa579b2.jpg?compress=1&resize=1600x1200&vertical=center",
        typeAccommodation: "House",
        minPeople: 1,
        maxPeople: 4,
        //capacity: "1-4 people",
        price: 245,
        minNights: 2,
        maxNights: 15,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      
      {
        id: 59,
        location: "Lake Tekapo",
        nameAccommodation: "Nordic Escape",
        coordinates: [170.46840, -44.00296],
        photo: "https://a0.muscache.com/im/pictures/b60de5e6-c622-4b4e-a15b-3ae751b0f679.jpg?im_w=1200",
        facilities:`
        2 bedrooms<br>
        Bath <br>
        Kitchen <br>
        Free WiFi <br>
        Private parking <br>
        Air conditioning <br>
        `,   
        image: "https://cdn.dribbble.com/userupload/3758977/file/original-e0b49b1c483897d3858a777c10cc5c21.jpg?compress=1&resize=752x509",
        typeAccommodation: "House",
        minPeople: 1,
        maxPeople: 4,
        //capacity: "1-4 people",
        price: 235,
        minNights: 2,
        maxNights: 15,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      
      {
        id: 60,
        location: "Christchurch",
        nameAccommodation: "Charming sunny warm 10 mins CBD book now",
        coordinates: [172.63103, -43.51406],
        photo: "https://a0.muscache.com/im/pictures/miso/Hosting-51175766/original/28a5f673-f34c-44af-894c-a453fa15e0da.jpeg?im_w=1200",
        facilities:`
        2 bedrooms<br>
        Bath <br>
        Kitchen <br>
        Free WiFi <br>
        Private parking <br>
        Air conditioning <br>
        `,   
        image: "https://cdn.dribbble.com/users/13449/screenshots/16722436/media/4d3f0104d2e6e0065b9a3847d92d91ef.png?compress=1&resize=1600x1200&vertical=center",
        typeAccommodation: "House",
        minPeople: 1,
        maxPeople: 4,
        //capacity: "1-4 people",
        price: 240,
        minNights: 2,
        maxNights: 15,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 61,
        location: "Christchurch",
        nameAccommodation: "Newly Built Central City 2 Bed",
        coordinates: [172.64017, -43.53116],
        photo: "https://a0.muscache.com/im/pictures/miso/Hosting-789326706422251695/original/e510b3cc-dfeb-4222-9563-63b047785f78.jpeg?im_w=1200",
        facilities:`
        2 bedrooms<br>
        Bath <br>
        Kitchen <br>
        Free WiFi <br>
        Private parking <br>
        Air conditioning <br>
        `,   
        image: "https://cdn.dribbble.com/users/5716533/screenshots/16236792/media/bf88c6f73477ba5b7e8bb0a6b73b1523.png?compress=1&resize=1600x1200&vertical=center",
        typeAccommodation: "House",
        minPeople: 1,
        maxPeople: 4,
        //capacity: "1-4 people",
        price: 245,
        minNights: 2,
        maxNights: 15,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 62,
        location: "Christchurch",
        nameAccommodation: "Beautiful Gem by Hagley Park, Central City Chch",
        coordinates: [172.62993, -43.53321],
        photo: "https://a0.muscache.com/im/pictures/miso/Hosting-914058317533702896/original/a07c140e-2f32-401d-a86e-62a2a773232f.jpeg?im_w=1200",
        facilities:`
        2 bedrooms<br>
        Bath <br>
        Kitchen <br>
        Free WiFi <br>
        Private parking <br>
        Air conditioning <br>
        `,   
        image: "https://cdn.dribbble.com/users/1200499/screenshots/15330527/media/b472d17a4bcb1cbcd77aaf6ab85d9d58.jpg?compress=1&resize=800x600&vertical=center",
        typeAccommodation: "House",
        minPeople: 1,
        maxPeople: 4,
        //capacity: "1-4 people",
        price: 235,
        minNights: 2,
        maxNights: 15,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },

      {
        id: 63,
        location: "Dunedin",
        nameAccommodation: "Sleek Suite by the Sand (2-bedroom)",
        coordinates: [170.49404, -45.88128],
        photo: "https://a0.muscache.com/im/pictures/miso/Hosting-722027019089950789/original/de3dd001-8074-467a-85cf-10384783206e.jpeg?im_w=960",
        facilities:`
        2 bedrooms<br>
        Bath <br>
        Kitchen <br>
        Free WiFi <br>
        Private parking <br>
        Air conditioning <br>
        `,   
        image: "https://cdn.dribbble.com/users/5280400/screenshots/15468514/media/99468a7f77ddae5c47be216ccc8f5bbf.png?compress=1&resize=1600x1200&vertical=center",
        typeAccommodation: "House",
        minPeople: 1,
        maxPeople: 4,
        //capacity: "1-4 people",
        price: 240,
        minNights: 2,
        maxNights: 15,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 64,
        location: "Dunedin",
        nameAccommodation: "Salt Heritage Manor",
        coordinates: [170.53659, -45.89186],
        photo: "https://a0.muscache.com/im/pictures/miso/Hosting-875630927395500155/original/9f8e9dd9-bdc5-4980-86fb-fbdd60f86930.jpeg?im_w=1200",
        facilities:`
        2 bedrooms<br>
        Bath <br>
        Kitchen <br>
        Free WiFi <br>
        Private parking <br>
        Air conditioning <br>
        `,   
        image: "https://cdn.dribbble.com/users/5716533/screenshots/15661693/media/1f56c9125a04514fee67c6684cff5ad3.png?compress=1&resize=1600x1200&vertical=center",
        typeAccommodation: "House",
        minPeople: 1,
        maxPeople: 4,
        //capacity: "1-4 people",
        price: 245,
        minNights: 2,
        maxNights: 15,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      },
      {
        id: 65,
        location: "Dunedin",
        nameAccommodation: "St Clair Heights",
        coordinates: [170.48931, -45.89630],
        photo: "https://a0.muscache.com/im/pictures/de26eb09-0b30-47a5-a6ea-260a45eed74e.jpg?im_w=1200",
        facilities:`
        2 bedrooms<br>
        Bath <br>
        Kitchen <br>
        Free WiFi <br>
        Private parking <br>
        Air conditioning <br>
        `,   
        image: "https://cdn.dribbble.com/users/2028818/screenshots/16529592/media/72113f440d7b279051986a90f86f3d97.png?compress=1&resize=1600x1200&vertical=center",
        typeAccommodation: "House",
        minPeople: 1,
        maxPeople: 4,
        //capacity: "1-4 people",
        price: 235,
        minNights: 2,
        maxNights: 15,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      }, 
         // ----- APARTMENT -----//
      {
        id: 66,
        location: "Dunedin",
        nameAccommodation: "Apartment in Dunedin",
        coordinates: [170.49157, -45.88500],
        photo: "https://a0.muscache.com/im/pictures/05ad50ff-8aad-4654-9345-bcabebad1c7e.jpg?im_w=960",
        facilities:`
        1 bedroom<br>
        Bath <br>
        Kitchen <br>
        Free WiFi <br>
        Private parking <br>
        Air conditioning <br>
        `,   
        image: "https://cdn.dribbble.com/userupload/5308683/file/original-ae73b6b4de6e206b960d8386fd2dbc88.jpg?compress=1&resize=2048x1119",
        typeAccommodation: "Apartment",
        minPeople: 1,
        maxPeople: 3,
        //capacity: "1-4 people",
        price: 150,
        minNights: 1,
        maxNights: 7,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      }, 
      {
        id: 67,
        location: "Christchurch",
        nameAccommodation: "CBD handy-secure free park - 3 mins",
        coordinates: [172.62924, -43.53302],
        photo: "https://a0.muscache.com/im/pictures/miso/Hosting-730781891707202562/original/5cc6edea-0b4c-4644-8b92-c5742426b3c0.jpeg?im_w=1200",
        facilities:`
        1 bedroom<br>
        Bath <br>
        Kitchen <br>
        Free WiFi <br>
        Private parking <br>
        Air conditioning <br>
        `,   
        image: "https://cdn.dribbble.com/users/3320958/screenshots/17947328/media/74161022f945c7cf79b5b27e2138d6b9.jpg?compress=1&resize=1600x1200&vertical=center",
        typeAccommodation: "Apartment",
        minPeople: 1,
        maxPeople: 3,
        //capacity: "1-4 people",
        price: 150,
        minNights: 1,
        maxNights: 7,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      }, 
      {
        id: 68,
        location: "West Coast",
        nameAccommodation: "Love Punakaiki Couples Retreat",
        coordinates: [171.34535, -42.10536],
        photo: "https://a0.muscache.com/im/pictures/c7bde908-b284-42f4-afc3-f12800cf8617.jpg?im_w=1200",
        facilities:`
        1 bedroom<br>
        Bath <br>
        Kitchen <br>
        Free WiFi <br>
        Private parking <br>
        Air conditioning <br>
        `,   
        image: "https://cdn.dribbble.com/users/3198880/screenshots/17533975/media/2e5bad6fc55f00100acc550972d77ad0.jpg?compress=1&resize=1600x1200&vertical=center",
        typeAccommodation: "Apartment",
        minPeople: 1,
        maxPeople: 3,
        //capacity: "1-4 people",
        price: 150,
        minNights: 1,
        maxNights: 7,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      }, 
      {
        id: 69,
        location: "Queenstown",
        nameAccommodation: "Warm & spacious 2 bedroom, 2 bathroom, marina apt",
        coordinates: [168.73697, -45.02303],
        photo: "https://a0.muscache.com/im/pictures/0ed1a493-b119-4473-a9f8-1280b15ba097.jpg?im_w=1200",
        facilities:`
        1 bedroom<br>
        Bath <br>
        Kitchen <br>
        Free WiFi <br>
        Private parking <br>
        Air conditioning <br>
        `,   
        image: "https://cdn.dribbble.com/userupload/4384389/file/original-ccb6880cfaafa82c6c2ed4779970aee3.jpeg?compress=1&resize=2048x1150",
        typeAccommodation: "Apartment",
        minPeople: 1,
        maxPeople: 3,
        //capacity: "1-4 people",
        price: 150,
        minNights: 1,
        maxNights: 7,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      }, 
      {
        id: 70,
        location: "Lake Tekapo",
        nameAccommodation: "Galaxy Lake Views",
        coordinates: [170.47687, -44.00206],
        photo: "https://a0.muscache.com/im/pictures/miso/Hosting-31563771/original/7e0f0e3a-560e-4bb1-b7d3-59d94cefe3a7.jpeg?im_w=1200",
        facilities:`
        1 bedroom<br>
        Bath <br>
        Kitchen <br>
        Free WiFi <br>
        Private parking <br>
        Air conditioning <br>
        `,   
        image: "https://cdn.dribbble.com/userupload/3936525/file/original-0ce07f54132974020a263c5262b01cfc.jpeg?compress=1&resize=2048x1536",
        typeAccommodation: "Apartment",
        minPeople: 1,
        maxPeople: 3,
        //capacity: "1-4 people",
        price: 150,
        minNights: 1,
        maxNights: 7,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      }, 
      {
        id: 71,
        location: "Nelson",
        nameAccommodation: "Walk to Beach/Cafes from Self-Contained Apartment",
        coordinates: [173.25396, -41.27809],
        photo: "https://a0.muscache.com/im/pictures/20a1e62f-5c21-4e1e-926a-ff3eb45be9eb.jpg?im_w=1200",
        facilities:`
        1 bedroom<br>
        Bath <br>
        Kitchen <br>
        Free WiFi <br>
        Private parking <br>
        Air conditioning <br>
        `,   
        image: "https://cdn.dribbble.com/users/1735338/screenshots/3608787/media/c17a28db047a5c4b7b51098d2b5d3c54.jpg?compress=1&resize=800x600&vertical=center",
        typeAccommodation: "Apartment",
        minPeople: 1,
        maxPeople: 3,
        //capacity: "1-4 people",
        price: 150,
        minNights: 1,
        maxNights: 7,
        meals: [
          { name: "Breakfast", price: 10 },
          { name: "Lunch", price: 15 },
          { name: "Dinner", price: 20 },
        ],
      }
    ];
  
for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('click', function() {
      const selectedValue = this.getAttribute('data-value');
      accommodationType.value = selectedValue;
  
      // Remove 'selected' class from all options
      for (let j = 0; j < options.length; j++) {
        options[j].classList.remove('selected');
      }
  
      // Add 'selected' class to the clicked option
      this.classList.add('selected');
    });
  }

  // Calculate date difference
function calculateDateDifference() {
    let date = rangepicker.getDates();
    let difference = date[1].getTime() - date[0].getTime();
    let totalDays = Math.floor(difference / (1000 * 3600 * 24));
    findAccommodation(totalDays);
}

// Display data from array
function displayAccommodation(accommodationToShow, totalDays) {
    resultBox.innerHTML = "";

    for (let i = 0; i < accommodationToShow.length; i++) {
        let accommodation = accommodationToShow[i];
        let totalCostAccommodation = totalDays * (accommodation.price || 0);

        let resultElement = document.createElement("div");
    resultElement.id = "result";
    resultElement.dataset.id = accommodationToShow[i].id; // Set the dataset ID for referencing the accommodation in the array
    resultElement.innerHTML = `
                <img src="${accommodation.image}" alt="${accommodation.location}">
                <div>
                ${accommodation.typeAccommodation} in ${accommodation.location}
                </div>
                <div>
                    Cost: $${accommodation.price || 0} per night.
                </div>
                
                <div class="total-cost">
                    Total cost: $${totalCostAccommodation} for ${totalDays} night(s).
                </div>
                
                `;

                
               // Add event listener to open the modal
    resultElement.addEventListener("click", createEventListener(accommodation, totalCostAccommodation, totalDays, accommodationToShow[i].id));

    resultBox.appendChild(resultElement);
  }

  function createEventListener(accommodation, totalCostAccommodation, totalDays, currentAccommodationId) {
    return function () {
      openModal(
        accommodation.photo,
        accommodation.nameAccommodation,
        accommodation.typeAccommodation,
        accommodation.location,
        accommodation.facilities,
        accommodation.maxPeople,
        accommodation.price,
        totalCostAccommodation,
        totalDays,
        currentAccommodationId
      );
    };
  }
}
            


  // first MODAL - with hotel info
function openModal(photo, nameAccommodation, typeAccommodation, location, facilities, maxPeople, price, totalCostAccommodation, totalDays, currentAccommodationId) {
 
  modalContent.innerHTML = `
    <img class="picture" src="${photo}">
    <div>${nameAccommodation}</div>
    <div>${typeAccommodation} in ${location}</div>
    <div>Facilities: ${facilities}</div>
    <div> Guests: ${maxPeople}</div>
    <div>Cost: $${price} per night.</div>
    <div class="total-cost"> Total cost: $${totalCostAccommodation} for ${totalDays} night(s).</div>
    <div>
      <label for="meal-select">Select Meal:</label>
      <select id="meal-select">
        <option value="">None</option>
        ${accommodationData[currentAccommodationId].meals
          .map(
            (meal) =>
              `<option value="${meal.price}">${meal.name} - $${meal.price}</option>`
          )
          .join("")}
      </select>
    </div>
    <button data-id="${currentAccommodationId}" class="show-map">Show Map</button>
    <button data-id="${currentAccommodationId}" class="reserve-button">Reserve</button>
    `;

    addButtonEvent();

    function addButtonEvent() {
      const showMap = document.getElementsByClassName("show-map");
      Array.from(showMap).forEach(function (element) {
        let currentAccommodationId = element.dataset.id;
        element.addEventListener("click", function () {
          addAccommodationMarkers(currentAccommodationId);
        });
      });
    }

  

    modalWrapper.classList.add("active");

    
  // Adding event listener to the Reserve button
  const reserveButton = document.querySelector(".reserve-button");

  reserveButton.addEventListener("click", function () {

    

    const currentAccommodationId = this.getAttribute("data-id");
    const accommodation = accommodationData.find(
      (accommodation) => accommodation.id === parseInt(currentAccommodationId)
    );
    const selectedMealPrice = parseFloat(
      document.getElementById("meal-select").value
    );
    const totalCostWithMeal =
      totalCostAccommodation + (isNaN(selectedMealPrice) ? 0 : selectedMealPrice);

    let selectedPeople = people.value;
    let typeOfAccommodation = accommodation ? accommodation.typeAccommodation : '';
    let accommodationLocation = accommodation ? accommodation.location : '';
    let nameOfAccommodation = accommodation ? accommodation.nameAccommodation : '';
    let selectedStartDate = startDate.value;
    let selectedEndDate = endDate.value;
    

    //let accommodationPrice = accommodation ? accommodation.price : 0;
  
    

    // Hide the first modal
    modalWrapper.classList.remove("active");
    
    // Hide the result box
    resultBox.innerHTML = "";

    openReservationModal(selectedPeople, typeOfAccommodation, accommodationLocation, nameOfAccommodation, selectedStartDate, selectedEndDate, totalCostWithMeal, totalDays);
});
}


  // -------The second Reservation modal -------

  function openReservationModal(selectedPeople,  typeOfAccommodation, accommodationLocation, nameOfAccommodation, selectedStartDate, selectedEndDate,  totalCostWithMeal, totalDays) {

    modalContentReservation.innerHTML = `
    <h4>Thank you for making a reservation! </h4><br>
    <div> For ${selectedPeople} person(s),</div>
    <div>${typeOfAccommodation} in ${accommodationLocation}: </div>
    <div>${nameOfAccommodation},</div>
    <div> on ${selectedStartDate} to ${selectedEndDate}, </div>
    <div> total cost: $${totalCostWithMeal} for ${totalDays} night(s).</div><br>
    
    <h4>We look forward to your visit and </h4><br>
    <h4>hope you will be enjoying your travels.</h4><br>
    <h4> A confirmation email will be sent to you </h4><br>
    <h4>to confirm your reservation.</h4><br>
    <h4>To cancel or change your reservation, please contact our Contact Centres</h4><br>
    <h4>0800 24 35 44 or reservation@alpsocean.co.nz</h4><br>
    <h2>Alps and Ocean</h2>
    <img src="img/Tourism+New+Zealand.png" alt="NZ-logo" class="nz-tourism-logo-reservation">
    `;
    modalWrapperReservation.classList.add("active");
  }
  //console.log(openReservationModal)
  
  // Function to close the MAIN MODAL with hotel info
function closeModal() {
  modalWrapper.classList.remove("active");
}

closeButton.addEventListener("click", closeModal);

// Function to close the modal
function closeReservationModal() {
  modalWrapperReservation.classList.remove("active");
}

// Add click event listener to the close button
closeButtonReservation.addEventListener("click", closeReservationModal);

// end of the second modal 



  // ---------- Validate Data ------------//
function validateData() {
    if (locationName.value === "" || 
    accommodationType.value === "" || 
    people.value === "" || 
    accommodationBudget.value === "" ||
    email.value === ""
    ) {
        statusMessage.innerHTML = "Please Enter All Fields!";
        return false;
    }
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.match(emailRegex)) {
        statusMessage.innerHTML = "Please enter a valid email address!";
        return false;
    }
    return true;
}
  
function findAccommodation(totalDays) {
    //event.preventDefault();

    if (!validateData()) {
        return;
    }

    resultBox.innerHTML = "";
    let accommodationToShow = [];

    // Assuming you have a "startDate" and "endDate" variable containing the selected dates
    const selectedStartDate = startDate.value;
    const selectedEndDate = endDate.value;
    const selectedPeople = people.value;

    for (let i = 0; i < accommodationData.length; i++) {
        let accommodation = accommodationData[i];
        let priceForNight = accommodation.price;
        //let totalCost = totalDays * accommodation.price;

        if 
           (totalDays >= accommodation.minNights &&
            totalDays <= accommodation.maxNights &&
            selectedPeople >= accommodation.minPeople && 
            selectedPeople <= accommodation.maxPeople &&
            accommodationBudget.value >= priceForNight &&
            (locationName.value.toLowerCase() === "all" ||
        accommodation.location.toLowerCase() ===
          locationName.value.toLowerCase()) &&
          (accommodationType.value.toLowerCase() === "all" ||
              accommodation.typeAccommodation.toLowerCase() ===
              accommodationType.value.toLowerCase())
            
            )
            {
            accommodationToShow.push(accommodation);
            }
    }

    if (accommodationToShow.length === 0) {
        statusMessage.innerHTML = "No Place found!";
    } else {

      statusMessage.innerHTML = `${accommodationToShow.length} result(s) found for: <br>
      ${selectedStartDate} to ${selectedEndDate}, ${selectedPeople} people`;
      displayAccommodation(accommodationToShow, totalDays);
      //addButtonEvents();
    }
}

submit.addEventListener("click", function () {
  if (!validateData()) {
    return;
  }
    calculateDateDifference();
    //findAccommodation(totalDays);
});
}
);


//--------- MAP --------//
// initialise mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiaWN5bWFudWthaG9uZXkiLCJhIjoiY2xpMmF5NW15MDZpYTNlbHN5czhtM3Y2eSJ9.tr98gfnwiBbbuz48hrdnMQ';
const map = new mapboxgl.Map({

    container: 'map', // container ID
    style: 'mapbox://styles/icymanukahoney/cli2bu7ta00wt01rhhn07b7vb', // style URL
    // find a new location for the center here
    // https://docs.mapbox.com/playground/geocoding/
    center: [172.636645, -43.530955], // starting position [lng, lat]
    zoom: 8, // starting zoom
});

map.on('load', () => {
  //this will add all of our icons
  map.loadImage('img/icons8-bed-48.png', function (error, image) {
      if (error) {
          throw error;
      }
      map.addImage('hotel-icon', image);
  });
  map.addSource(
      'places', {
      // This GeoJSON contains features that include an "icon"
      // property. The value of the "icon" property corresponds
      // to an image in the Mapbox Streets style's sprite.
      'type': 'geojson',
      'data': {
          'type': 'FeatureCollection',
          'features': [

          ]
        }
    });

    map.addLayer({
      'id': 'places',
      'type': 'symbol',
      'source': 'places',
      'layout': {
          'icon-image': ['get', 'icon'],
          'icon-allow-overlap': true
      }
  });

  map.on('click', 'places', (e) => {


      // Copy coordinates array.
      const coordinates = e.features[0].geometry.coordinates.slice();
      const description = e.features[0].properties.description;

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(map);
  });
  // Change the cursor to a pointer when the mouse is over the places layer.
  map.on('mouseenter', 'places', () => {
    map.getCanvas().style.cursor = 'pointer';
});

// Change it back to a pointer when it leaves.
map.on('mouseleave', 'places', () => {
    map.getCanvas().style.cursor = '';
});

});

const AccommodationLocationOnMap = [
  {
      coordinates: [168.63378, -45.03754],
      description: `
      <h3>Kamana Lakehouse Queenstown</h3>
      `,
      icon: 'hotel-icon'
  },
  {
    coordinates: [168.65724,  -45.03240],
    description: `
    <h3>Crowne Plaza Queenstown, an IHG Hotel</h3>
    `,
    icon: 'hotel-icon'
},
{
  coordinates: [168.66285,  -45.03283],
  description: `
  <h3>Novotel Queenstown Lakeside</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [173.28331, -41.27474],
  description: `
  <h3>Rutherford Hotel Nelson</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [173.27932, -41.28749],
  description: `
  <h3>The Hotel Nelson</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [173.25054, -41.28239],
  description: `
  <h3>Beaches Nelson</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [172.61263, -43.52913],
  description: `
  <h3>Parkview on Hagley</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [172.61159, -43.52591],
  description: `
  <h3>Chateau on the Park - Christchurch, a DoubleTree by Hilton</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [172.63293, -43.52622],
  description: `
  <h3>Wyndham Garden Christchurch City</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [170.50541, -45.86694],
  description: `
  <h3>Scenic Hotel Dunedin City</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [170.50922, -45.86325],
  description: `
  <h3>The Victoria Hotel Dunedin</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [170.50304, -45.86947],
  description: `
  <h3>Distinction Dunedin Hotel</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [171.00357, -42.63169],
  description: `
  <h3>Beachfront Hotel Hokitika</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [171.24081, -42.58064],
  description: `
  <h3>Theatre Royal Hotel</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [171.32183, -42.03833],
  description: `
  <h3>Scenic Hotel Punakaiki</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [170.47551, -44.00037],
  description: `
  <h3>Peppers Bluewater Resort Lake Tekapo</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [170.47997, -44.00321],
  description: `
  <h3>The Godley Hotel Lake Tekapo</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [170.47771, -44.00366],
  description: `
  <h3>Tekapo lakefront suites and studios</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [168.66264, -45.02957],
  description: `
  <h3>Adventure Queenstown Hostel</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [168.66401, -45.02520],
  description: `
  <h3>Hippo lodge backpackers Queenstown</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [173.28233, -41.27192],
  description: `
  <h3>The Palace Backpackers - BBH Nelson</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [173.28147, -41.27243],
  description: `
  <h3>Bridge Backpackers Nelson</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [170.18310, -43.38934],
  description: `
  <h3>Franz Josef Montrose Backpackers</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [171.60164, -41.75542],
  description: `
  <h3>Tripinn Hostel Backpackers YHA Westport</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [172.61414, -43.54317],
  description: `
  <h3>Jailhouse Accommodation Christchurch</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [172.63955, -43.52916],
  description: `
  <h3>Urbanz Accomodation Christchurch</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [170.50417, -45.87238],
  description: `
  <h3>UpTown Backpackers Dunedin</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [170.50274, -45.87218],
  description: `
  <h3>On Top Backpackers Dunedin</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [170.47549, -44.00642],
  description: `
  <h3>Tailor Made Tekapo Accommodation - Guesthouse & Hostel</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [170.47702, -44.00379],
  description: `
  <h3>Stay In Tekapo Backpackers</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [168.83092, -44.93239],
  description: `
  <h3>Settlers Cottage Motel Queenstown</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [168.65707, -45.02244],
  description: `
  <h3>Lakeside Motel Queenstown</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [168.66119, -45.02050],
  description: `
  <h3>Abba Court Motel Queenstown</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [173.24517, -41.28881],
  description: `
  <h3>Bella Vista Motel Nelson</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [173.24141, -41.28258],
  description: `
  <h3>Arrow Motel Nelson</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [173.28409, -41.26691],
  description: `
  <h3>Palms Motel Nelson</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [171.28918, -42.05824],
  description: `
  <h3>Paparoa Park Motel</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [170.02301, -43.30676],
  description: `
  <h3>Bella Vista Motel Fox Glacier</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [171.60028, -41.74178],
  description: `
  <h3>Westport Motels</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [170.47810, -44.00119],
  description: `
  <h3>Lake Tekapo Village Motel</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [170.78353, -44.01395],
  description: `
  <h3>Mt Dobson Motel Lake Tekapo</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [170.53696, -43.95238],
  description: `
  <h3>YHA Lake Tekapo</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [172.62446, -43.51313],
  description: `
  <h3>Merivale Court Motel Christchurch</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [172.60826, -43.52650],
  description: `
  <h3>Aalton Motel Christchurch</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [172.62440, -43.51641],
  description: `
  <h3>Colonial Inn Motel Christchurch</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [170.51889, -45.85984],
  description: `
  <h3>Amross Motel Dunedin</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [170.51477, -45.85906],
  description: `
  <h3>538 Great King Motel, Dunedin</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [170.51491, -45.85926],
  description: `
  <h3>Motel On York Dunedin</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [168.67366, -45.03310],
  description: `
  <h3>Heavenly Heights with Awesome Views, Queenstown</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [168.68172, -45.03352],
  description: `
  <h3>Cosy with views, Queenstown</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [168.75434, -45.05533],
  description: `
  <h3>Private Guest Suite in Jacks Point, Queenstown</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [173.23379, -41.29091],
  description: `
  <h3>Walk to Downtown Restaurants from Stylish Vacation Villa, Nelson</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [173.22057, -41.30484],
  description: `
  <h3>Old English style 2 bedroom, Nelson</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [173.24640, -41.28881],
  description: `
  <h3>Bach in the City, Nelson</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [171.44862, -42.03658],
  description: `
  <h3>Sva's Hut, magnificent elevated ocean views, Fox River</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [171.39179, -42.17291],
  description: `
  <h3>Chalet in Punakaiki</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [170.16376, -43.15845],
  description: `
  <h3>Okarito Cottage</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [170.46455, -43.99996],
  description: `
  <h3>Loch View, Lake Tekapo</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [170.48012, -44.00429],
  description: `
  <h3>Church View, Lake Tekapo</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [170.46840, -44.00296],
  description: `
  <h3>Nordic Escape, Lake Tekapo</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [172.63103, -43.51406],
  description: `
  <h3>Charming sunny warm 10 mins CBD book now, Christchurch</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [172.64017, -43.53116],
  description: `
  <h3>Newly Built Central City 2 Bed, Christchurch</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [172.62993, -43.53321],
  description: `
  <h3>Beautiful Gem by Hagley Park, Central City Christchurch</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [170.49404, -45.88128],
  description: `
  <h3>Sleek Suite by the Sand (2-bedroom), Dunedin</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [170.53659, -45.89186],
  description: `
  <h3>Salt Heritage Manor, Dunedin</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [170.48931, -45.89630],
  description: `
  <h3>St Clair Heights, Dunedin</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [170.49157, -45.88500],
  description: `
  <h3>Apartment in Dunedin</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [172.62924, -43.53302],
  description: `
  <h3>CBD handy-secure free park - 3 mins, Christchurch</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [171.34535, -42.10536],
  description: `
  <h3>Love Punakaiki Couples Retreat</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [168.73697, -45.02303],
  description: `
  <h3>Warm & spacious 2 bedroom, 2 bathroom, marina apt</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [170.47687, -44.00206],
  description: `
  <h3>Galaxy Lake Views</h3>
  `,
  icon: 'hotel-icon'
},
{
  coordinates: [173.25396, -41.27809],
  description: ` 
  <h3>Walk to Beach/Cafes from Self-Contained Apartment</h3>
  `,
  icon: 'hotel-icon'
}
];


function addAccommodationMarkers(accommodationId) {
  //get the marker data
  let existingMarkers = map.getSource('places')._data;

  let location = AccommodationLocationOnMap[accommodationId];
  let feature = {
      'type': 'Feature',
      'properties': {
          'description': location.description,
          'icon': location.icon
      },
      'geometry': {
          'type': 'Point',
          'coordinates': location.coordinates
      }
  };
  existingMarkers.features.push(feature);

  let addNewMarkers = existingMarkers;


  map.getSource('places').setData(addNewMarkers);
  console.log(feature.geometry.coordinates);
  // fly to a more suitable place on the map
  map.flyTo({
      center: feature.geometry.coordinates,
      zoom: 15
  });
}







