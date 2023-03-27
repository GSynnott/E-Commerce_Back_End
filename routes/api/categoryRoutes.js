//Import the router express object and the contructor classes.
const router = require('express').Router();
const { Category, Product } = require('../../models');

//Get all categories
router.get('/', async (req, res) => {
    try {
      const categoryData = await Category.findAll({
        include: [{ model: Product }],
      });
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
});

//Get one category by ID
router.get('/:id', async (req, res) => {
    try {
      const categoryData = await Category.findByPk(req.params.id, {
        include: [{ model: Product }],
      });
  
      if (!categoryData) {
        res.status(404).json({ message: 'No category found with that id!' });
        return;
      }
  
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
});

//Add a new category
router.post('/', async (req, res) => {
    try {
      const categoryData = await Category.create({
        category_name: req.body.category_name,
      });
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(400).json(err);
    }
});

//Update a category based on ID
router.put('/:id', async (req, res) => {
    try {
        const updatedCategory = await Tag.update({
            category_name: req.body.category_name,
        },
        {where: {
            id: req.params.id,
        },
    })
        res.status(200).json(updatedCategory);
    } catch (err) {
        res.json(err);
    }
});

//Delete a category based on ID
router.delete('/:id', async (req, res) => {
    try {
      const categoryData = await Category.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!categoryData) {
        res.status(404).json({ message: 'No categories were found with that id!' });
        return;
      }
  
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;