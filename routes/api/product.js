const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Product = require("../../models/Product");

router.post(
  "/",

  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("description", "Description is required")
      .not()
      .isEmpty()
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { family, name, description, releasedate, eol, eos } = req.body;

    const productFields = {};
    if (family) productFields.family = family;
    if (name) productFields.name = name;
    if (description) productFields.description = description;
    if (releasedate) productFields.releasedate = releasedate;
    if (eol) productFields.eol = eol;
    if (eos) productFields.eos = eos;

    try {
      let product = await Product.findById();
      if (product) {
        product = await Product.findOneAndUpdate(
          { $set: productFields },
          { new: true }
        );

        return res.json(product);
      }

      product = new Product(productFields);

      await product.save();
      res.json(req.body);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

router.get("/", async (req, res) => {
  try {
    const products = await Product.find().populate();
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server err");
  }
});

router.get("/upsell/:id", async (req, res) => {
  try {
    const product = await Product.findOne({_id:req.params.id }).populate();
    // const product = products.findById(req.params.id)
    res.json(product.Upsell);
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server err");
  }
});

router.get("/:name", async (req, res) => {
  try {
    const product = await Product.findOne({name:req.params.name }).populate();
    // const product = products.findById(req.params.id)
    res.json(product.id);
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server err");
  }
});






router.put("/upsell/:upsell_id", async (req, res) => {
  const { name, Upsell } = req.body;

  const upsell = {
    name,
    Upsell
  };

  try {
    const product = await Product.findById(req.params.upsell_id);

    product.Upsell.unshift(upsell);

    await product.save();
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.put("/crossSell/:crossSell_id", async (req, res) => {
  const { name, Crosssell } = req.body;

  const Crosssell1 = {
    name,
    Crosssell
  };

  try {
    const product = await Product.findById(req.params.crossSell_id);

    product.CrossSell.unshift(Crosssell1);

    await product.save();
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.put("/EOL/:EOL_id", async (req, res) => {
  const { name, Endoflife } = req.body;

  const Endoflife1 = {
    name,
    Endoflife
  };

  try {
    const product = await Product.findById(req.params.EOL_id);

    product.EndofLife.unshift(Endoflife1);

    await product.save();
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// router.get('/upsellstuff/:product_id', async (req,res) => {
//   try{
//     const product = await Product.findOne({_id:req.params.product_id }).populate();  
//     const products = await Product.find().populate().select(`-${product}`)
//     res.json(products);
//   } catch(err){
//     console.error(err.message);
//     res.send('Server Error')
//   }
// });




module.exports = router;
