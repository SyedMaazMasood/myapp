// const express = require("express");
// const router = express.Router();

// // Item Model
// const Item = require("../../models/Item");
// /*
// router.route("/").post((req, res, next) => {
//   Item.create(req.body, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       console.log(data);
//       res.json(data);
//     }
//   });
// });

// router.route('/').get((req, res) => {
//   user.find((error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })
// */
// router.route;

// // @route  GET api/items
// // @desc   Get all items
// // @access Public
// router.get("/", (req, res) => {
//   Item.find()
//     .sort({ date: -1 })
//     .then(Items => res.json(items));
// });

// // @route  POST api/items
// // @desc   Create A Post
// // @access Public
// router.post("/", (req, res) => {
//   const newItem = new Item({
//     name: req.body.name
//   });

//   newItem.save().then(item => res.json(item));
// });

// router.delete("/:id", (req, res) => {
//   Item.findById(req.params.id)
//     .then(item => item.remove().then(() => res.json({ success: true })))
//     .catch(err => res.status(404).json({ succuess: false }));
// });

// module.exports = router;
