import express from "express";
import { CreatePostRequest } from "../models/api/createPostRequest";
import {
  createPost,
  dislikePost,
  getPageOfPosts,
  likePost,
  getPostById,
  removeInteraction,
} from "../services/postService";
import { body, validationResult } from "express-validator";

const router = express.Router();

router.get("/", async (request, response) => {
  const page = request.query.page ? parseInt(request.query.page as string) : 1;
  const pageSize = request.query.pageSize ? parseInt(request.query.pageSize as string) : 10;

  const postList = await getPageOfPosts(page, pageSize);

  return response.status(200).json(postList);
});

router.post(
  "/create/",
  body("message").notEmpty(),
  body("imageUrl").notEmpty(),
  async (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    const post = request.body;

    await createPost(post as CreatePostRequest);
    return response.sendStatus(200);
  }
);

const updateInteractions = async (request: express.Request, response: express.Response, update: Function) => {
  const userId = 1; // For now, just assume that we are user 1
  const postId = parseInt(request.params.postId);
  await update(userId, postId);
  const post = await getPostById(postId);
  response.status(200).send(post);
};

router.post(
  "/:postId/like/",
  async (request, response) => await updateInteractions(request, response, likePost)
);

router.post(
  "/:postId/unlike/",
  async (request, response) => await updateInteractions(request, response, removeInteraction)
);

router.post(
  "/:postId/dislike/",
  async (request, response) => await updateInteractions(request, response, dislikePost)
);

router.post(
  "/:postId/undislike/",
  async (request, response) => await updateInteractions(request, response, removeInteraction)
);

export default router;
