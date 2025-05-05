// const mongoose = require("mongoose");
// const initData = require("./data.js");
// const Listing = require("../models/listing.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// main()
//   .then(() => {
//     console.log("Connected to DB");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function main() {
//   await mongoose.connect(MONGO_URL);
// }

// const initDB = async () => {
//   await Listing.deleteMany({});

//   // Transform the data to modify the image field
//   const transformedData = initData.data.map((listing) => ({
//     ...listing,
//     image: listing.image.url, // Convert image object to string URL
//   }));
//   initData.data = initData.data.map((obj) =>({
//     ...obj,
//     owner: "680c73afd14ff0be4071ef6f",
//   }));
//   await Listing.insertMany(transformedData);
//   console.log("Data was initialized");
// };

// initDB();

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({}); 

  const transformedData = initData.data.map((obj) => {
    return {
      ...obj,
      owner: "680c73afd14ff0be4071ef6f", // Replace with actual user ID from your DB
      images: [obj.image], // Correct image format as array of objects
    };
  });

  await Listing.insertMany(transformedData);
  console.log("Data was initialized");
};

initDB();
