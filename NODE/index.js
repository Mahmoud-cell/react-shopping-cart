//const users = require ("./user.js");
//console.log(users);

//_______________________________________________________________

/* mongoDB is Nosql
يعني مفهاش ريلاشن والتابلز والروز والخ
انت عاوز اوبجكت بتاخده تحطه في الداتا بيز عندك علطول

في النو سكول بقى التابلز والروز ليهم اسماء تانية
مثلا التابلز بيقابلها في النو سكول كولكشن
والريكورد بيقابله دوكيومنت

التعامل مع المنوجو دي بي بيقبقى ازاي 

1- create & connect DB
2- Crete Collections
3- insert Documents



*/

const mongoose = require("mongoose");
const express = require("express");
const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/testdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("connected successfully"))
  .catch((err) => console.log(err));
//steps for buliding db using mongoose
//Model => شبه الكلاس ودي الحاجة اللي هاخد منها اوبجكت
/* مثلا انا عندي كوليكشن عاوزه هيبقى اسمه برودكنس هو دة
هو دة الللي هحط فيه الداتا بتاعتي 
طيب ايه الداتا دي وليكن مثلا ال اي دي و البرودكت نيم والبريس و...
اهي الداتا اللي جوة الاوبجكت اللي جوه الموديل دي (الداتا دي اللي هية نقدر عليها دوكيومنتس برضه) 
دي بنقول عليها السكيما برضه بتاع الداتا بيز بتاعتنا

يبقى تاني سريعا بنكريت موديل باسم الكولكشن ونعمل بعدها السكيما
يعني السكيما دي شكل الداتا بتاعتي جوة الكوليكشن

*/
const Product = mongoose.model(
  "product",
  new mongoose.Schema({
    id: String,
    title: String,
    price: Number,
  })
);
/* هو كدة بيعمل بشكل ثابت او ستاتيك كولكشن جديد في الداتا بيز */
// سيف دي بتحط االبرودكت بتاعك في الداتا بيز , عشان احنا عاملين البرودكت غير متزامن او اسينكرونص فدة كدة بالنسبالنا
// بروميس يعني ايه بروميس زي ما انا عارف يعني عملية غير متزامنة بمعنى ان البرودكتس دي او اين كان الفانكشن
// الغير متزامنة هتشتغل بعد شوية ولما تخلص نبقى ناخد اكشن زي هنا بقله اما تخلص اعمل للكولكشن اللي اسمه برودتكس سيف في المونجو دي بي كومباس 
app.get("/products", async(req, res) => {
  const p = new Product({
    id: 1, 
    title: "hamada",
    price: 20
  })
  const saveData = await p.save()
  res.send(saveData)
});

app.get("/", async(req, res) => {
res.send("hello")
});

app.listen(3005, () => {
  console.log("Server Running");
});

