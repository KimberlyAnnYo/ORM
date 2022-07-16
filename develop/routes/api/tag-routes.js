const router = require("express").Router();
const { Tag, Product, ProductTag, Category } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    attributes:[ 
      'id',
      'product_name',
      'price',
      'stock'
    ],
    include: [
      {model: Category,
      attributes: ['category_name',]},

      {
        model: ProductTag,
      },
      {
        model: Product,
      },
    ],
  })
  .then((tags) => {
    res.json(tags)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
});
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  
});

router.post("/", (req, res) => {
  // create a new tag
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Product.destroy({
    where: {
      id:req.params.id
    }
  })
  .then(dbProductData) {
    res.status(404).json({message: "No match"})
    return;
  }
res.json(dbProductData);
})
.catch(err => {
  console.log(err);
  res.status(500).json(err);
});
});
module.exports = router;
