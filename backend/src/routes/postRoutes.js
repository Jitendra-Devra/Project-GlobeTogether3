import express from 'express';

import {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost
} from '../controllers/postController.js';
import { authMiddleware } from '../middleware/middleware.js';

const router = express.Router();

// Route to create a new post
router.post('/', authMiddleware, createPost);

// Route to get all posts
router.get('/', getAllPosts);

// Route to get a post by ID
router.get('/:id', getPostById);

// Route to update a post by ID
router.put('/:id', authMiddleware, updatePost);

// Route to delete a post by ID
router.delete('/:id', authMiddleware, deletePost);

export default router;