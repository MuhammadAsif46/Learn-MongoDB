// --- CRUD Operations ----

CREATE:     - insertOne() | - insertMany();

READ:       - find() | - findOne();

UPDATE:     - updateOne() | - updateMany();

DELETE:     - deleteOne() | - deleteMany();

-insertOne();

db.cars.insertOne({
  maker: "Tata",
  model: "Nexon",
  fuel_type: "Petrol",
  transmission: "Automatic",
  engine: {
    type: "Turbocharged",
    cc: 1199,
    torque: "170 Nm",
  },
  features: ["Touchscreen", "Reverse Camera", "Bluetooth Connectivity"],
  sunroof: false,
  airbags: 2,
});

-insertMany();

db.cars.insertMany([
  {
    maker: "Hyundai",
    model: "Creta",
    fuel_type: "Diesel",
    transmission: "Manual",
    engine: {
      type: "Naturally Aspirated",
      cc: 1493,
      torque: "250 Nm",
    },
    features: [
      "Sunroof",
      "Leather Seats",
      "Wireless Charging",
      "Ventilated Seats",
      "Bluetooth",
    ],
    sunroof: true,
    airbags: 6,
  },
  {
    maker: "Maruti Suzuki",
    model: "Baleno",
    fuel_type: "Petrol",
    transmission: "Automatic",
    engine: {
      type: "Naturally Aspirated",
      cc: 1197,
      torque: "113 Nm",
    },
    features: ["Projector Headlamps", "Apple CarPlay", "ABS"],
    sunroof: false,
    airbags: 2,
  },
  {
    maker: "Mahindra",
    model: "XUV500",
    fuel_type: "Diesel",
    transmission: "Manual",
    engine: {
      type: "Turbocharged",
      cc: 2179,
      torque: "360 Nm",
    },
    features: ["All-Wheel Drive", "Navigation System", "Cruise Control"],
    sunroof: true,
    airbags: 6,
  },
  {
    maker: "Honda",
    model: "City",
    fuel_type: "Petrol",
    transmission: "Automatic",
    engine: {
      type: "Naturally Aspirated",
      cc: 1498,
      torque: "145 Nm",
    },
    features: ["Keyless Entry", "Auto AC", "Multi-angle Rearview Camera"],
    sunroof: false,
    airbags: 4,
  },
]);

// CARS data example JSON:
// maker
// model
// fuel type
// transmission
// engine
//    - cc
//    - torque
// features
//    - sunroof
//    - airbags
