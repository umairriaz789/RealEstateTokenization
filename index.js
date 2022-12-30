const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const logger  = require('morgan')
const path = require('path');
const multer = require('multer');
const mongoose = require("mongoose");
const register = require("./routes/register");
const login = require("./routes/login");
const orders = require("./routes/orders");
const stripe = require("./routes/stripe");
const users = require("./routes/users");
const productsRoute = require("./routes/products");
const {Property} = require("./models/personal");
const personaldb = require("./routes/personaldb");
const propertydb = require("./routes/propertiesdb");
const propllc = require("./routes/propLLC");
const propinfo = require("./routes/propertyInfo");
const blogRoute = require("./routes/blogdb");
const categoryRoute = require("./routes/categorydb");


const app = express();
require("dotenv").config();
app.use(express.json());

app.use(express.json({extended: true, parameterLimit: 100000000, limit:"50000mb"}));
app.use(cors());
// app.use(express.urlencoded({extended: true, parameterLimit: 100000000, limit:"50000mb"}));

// app.use(bodyParser.json());
// app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname , "./frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname , "./frontend/dist/index.html"));
});

//.........................file upload using multer...................................//

app.use("/imges", express.static(path.join(__dirname , "/imges")));
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "imges");
  },
  
  filename: (req, file, cb) => {
    // let ext = path.extname(file.originalname)
    // cb(null, Date.now() + '-' + ext)
    // cb(null,ext)
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
  // file.mv(`${__dirname}/imges/${file.name}`)
});

//.........................end...................................//


app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/orders", orders);
app.use("/api/stripe", stripe);
app.use("/api/products", productsRoute);
app.use("/api/users", users);
app.use("/api/personaldb", personaldb);
app.use("/api/propertiesdb", propertydb);
app.use("/api/propLLC", propllc);
app.use("/api/propertyInfo", propinfo);
app.use("/api/blogdb", blogRoute);
app.use("/api/categorydb", categoryRoute);


app.get("/", (req, res) => {
  res.send("Welcome our to online shop API...");
});

console.log(Property);


app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/personaldb", (req, res) => {
  res.send(personaldb);
});

app.get("/propertiesdb", (req, res) => {
  res.send(propertiesdb);
});

app.get("/propLLC", (req, res) => {
  res.send(propLLC);
});

app.get("/propertyInfo", (req, res) => {
  res.send(propertyInfo);
});
app.get("/blogdb", (req, res) => {
  res.send(blogdb);
});

const url = process.env.DB_URI;
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});


mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify:true,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));

// const connections = mongoose.createConnection(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })


// let gfs;
//   connections.once('open', () => {
//   // Init stream
//   // gfs = new mongoose.mongo.GridFSBucket(connections.db,{
//   //   bucketName: "uploads"
//   // });
//   gfs = Grid(connections.db, mongoose.mongo);
//   gfs.collection('uploads');
// });


// app.use(function(req, res, next) { //allow cross origin requests
//   res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
//   res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173/");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Credentials", true);
//   next();
// });

// app.use(logger('dev'));
// app.use(express.static(path.join(__dirname, 'frontend/build')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/frontend/build/index.html'));
// });