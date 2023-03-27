/* ******************************************************************* */
/* without comments*/

const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const Product = require("./models/productModel");
const router = require("./routes/routes")


const app = express();
app.use(bodyParser.json());
app.use('/', router);

const connectionString = "mongodb://127.0.0.1:27017/react-shopping-cart";
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((test) => console.log("Connected"))
  .catch((wrong) => console.log("failed ×_×"));
  
app.listen("5001", () => {
  console.log("Running on port 5001");
});

/**
 *
 *
 *
 *
 *
 *
 */
/* with comments*

const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

//to use important functions like get, post, ...
const app = express();

const connectionString = "mongodb://127.0.0.1:27017/react-shopping-cart";
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,  //remove warnings and errors from console
    useUnifiedTopology: true, //remove warnings and errors from console
  })
  .then((test) => console.log("Connected"))
  .catch((wrong) => console.log("failed ×_×"));

  // create model or collection [like table in normal DB but here mongoDB is nosql .. don`t forget]
  // the shape of this model called schema...
  const Product = mongoose.model('Products', new mongoose.Schema ({
    id: String,
    title: String, 
    imageUrl: String, 
    desc: String, 
    price: Number, 
    sizes: [String]
  })
  )

  app.get("/api/products", async (req, res)=>{
    res.send("I Am Studying...♥");
  })
//مهم جدا اعمل اسينك للريكويست لان في فترة بيجهز فيها الريسبونس
// والفترة دي لازم استناها 
// فمظم الريكويستات بتحتاح الاسينك والاويت 
//هنا مثلا فايند معناها لو سبتها كدة ومحددتش ايه اللي انا عاوزه
// بالظبط من الموديل اللي اسمه تايبل , هيجيبلي كل اللي في الموديل دة
// على الرغم من ان الموديل اصلا لحد دلوقتي فاضي , الا انه لو شلت التزامن او البروميس (العملية بتاعة انتظار حاجة عموما زي محنا مستنين الداتا بتاعة الموديل اللي اسمه برودكت تحمل وترسبونس لينا اسمها بروميس)
//فلو مفيش التزامن دة مش هيشتغل وهيدي ايروور  
  app.get("/api/products", async (req, res)=>{
    const products = await Product.find();
    res.send(products);
  })

  //ريك دوت بودي بتستقبل مني الريكوست وتاخد منه البدي عشان نهاندله ونقدر نشتغل عليه بعد كدة
  //مثال هنشوفه لما نفتح البوست مان .. لما ندخل داتا في البرودكتس
  //بعد كدة السيف عشان يخزن الداتا دي ونقدر نشوفها
  app.post("/api/products", async (req, res)=>{
    const newProduct = new Product(req.body);
    const saveP = await newProduct.save();
    res.send(saveP);
  })

  app.delete("/api/products/:id", async (req, res)=>{
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
  })

  app.listen ("5001", ()=>{
    console.log("Running on port 5001")
  });
*/
