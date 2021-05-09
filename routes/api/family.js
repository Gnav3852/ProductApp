const express = require("express");
const router = express.Router();
const config = require("config");
const { check, validationResult } = require("express-validator");

const Family = require("../../Models/Family");

router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("description", "Please include a description")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description } = req.body;

    try {
      let family = await Family.findOne({ name });

      if (family) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Family already exists test" }] });
      }

      family = new Family({
        name,
        description
      });

      await family.save();

      const payload = {
        family: {
          id: family.id
        }
      };


      res.send("Family Route");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }


  }
);

router.get("/", async (req, res) => {
  try {
    const families = await Family.find().populate();
    res.json(families);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server err");
  }
});

// router.get('/',(req,res) => res.send('Family Route'));

module.exports = router;
