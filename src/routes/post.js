const express = require("express");
const router = express.Router();
const {
  getPosts,
  getPost,
  addPost,
  toggleLike,
  addComment,
  searchPost,
  getTags,
  toggleRetweet,
} = require("../controllers/post");
const { protect } = require("../middlewares/auth");

router.route("/tags").get(getTags);
router.route("/").get(getPosts).post(protect, addPost);
router.route("/search").get(searchPost);
router.route("/:id").get(protect, getPost);
router.route("/:id/togglelike").get(protect, toggleLike);
router.route("/:id/toggleRetweet").get(protect, toggleRetweet);
router.route("/:id/comments").post(protect, addComment);

module.exports = router;
