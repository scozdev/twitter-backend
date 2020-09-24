const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUser,
  follow,
  unfollow,
  feed,
  editUser,
} = require("../controllers/user");
const { protect } = require("../middlewares/auth");

router.route("/").get(protect, getUsers);
router.route("/feed").get(protect, feed);
router.route("/").put(protect, editUser);
router.route("/:username").get(protect, getUser);
router.route("/:id/follow").get(protect, follow);
router.route("/:id/unfollow").get(protect, unfollow);

module.exports = router;
