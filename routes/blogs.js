import express from 'express';
import { createBlogs, getAllBlogs, getBlogById, updateBlog, deleteBlog } from '../controllers/blogs.js';
const router = express.Router();

router.get('/', getAllBlogs);

router.post('/:id', createBlogs);

router.get('/:id', getBlogById);

router.put('/:uid/:bid', updateBlog);

router.delete('/:uid/:bid', deleteBlog);

export default router;