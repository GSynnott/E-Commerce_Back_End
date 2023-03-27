//Import the router express object and the contructor classes.
const router = require('express').Router();
const { Product, Tag } = require('../../models');

//Get all tags
router.get('/', async (req, res) => {
    try {
      const tagData = await Tag.findAll({
        include: [{ model: Product }],
      });
      res.status(200).json(tagData);
    } catch (err) {
      res.status(500).json(err);
    }
});

//Get one tag based on the id provided
router.get('/:id', async (req, res) => {
    try {
      const tagData = await Tag.findByPk(req.params.id, {
        include: [{ model: Product }],
      });
  
      if (!tagData) {
        res.status(404).json({ message: 'No tags found with that id!' });
        return;
      }
  
      res.status(200).json(tagData);
    } catch (err) {
      res.status(500).json(err);
    }
});

//Add one tag based on the tag name provided
router.post('/', async (req, res) => {
    try {
      const tagData = await Tag.create({
        tag_name: req.body.tag_name,
      });
      res.status(200).json(tagData);
    } catch (err) {
      res.status(400).json(err);
    }
});

//Update a tag based on the id provided
router.put('/:id', async (req, res) => {
    try {
        const updatedTag = await Tag.update({
            tag_name: req.body.tag_name,
        },
        {where: {
            id: req.params.id,
        },
    })
        res.status(200).json(updatedTag);
    } catch (err) {
        res.json(err);
    }
});

//Delete a tag based on the id provided
router.delete('/:id', async (req, res) => {
    try {
      const tagData = await Tag.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!tagData) {
        res.status(404).json({ message: 'No tags were found with that id!' });
        return;
      }
  
      res.status(200).json(tagData);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;