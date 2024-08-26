import { v4 as uuid } from 'uuid';

let blogs = [];

export const getAllBlogs = (req, res) => {
    res.send(blogs);
}

export const createBlogs = (req, res) => {
    const userId = req.params.id;
    const blog = req.body;
    blogs.push({ ...blog, userId: userId, blogId: uuid() });
    res.send("Blog Suceesfully added");
}

export const getBlogById = (req, res) => {
    const userId = req.params.id;
    const userBlog = blogs.filter((blog) => blog.userId === userId);
    res.send(userBlog);
}
export const updateBlog = (req, res) => {
    const userId = req.params.uid;
    const blogId = req.params.bid;

    // Find the specific user's blogs
    const userBlogs = blogs.filter(blog => blog.userId === userId);

    // Handle case where user is not found
    if (!userBlogs) {
        return res.status(404).send("User not found.");
    }
    console.log(userBlogs);

    // Find the specific blog by blogId
    const blog = userBlogs.find(blog => blog.blogId === blogId);

    // Handle case where blog is not found
    if (!blog) {
        return res.status(404).send("Blog not found.");
    }

    // Update the blog details
    blog.title = req.body.title;
    blog.content = req.body.content;

    res.send("Blog Updated Successfully!");
}
export const deleteBlog = (req, res) => {
    const userId = req.params.uid;
    const blogId = req.params.bid;

    let blogFound = false;

    blogs = blogs.filter((data) => {
        if (data.userId === userId && data.blogId === blogId) {
            blogFound = true;
            return false; // Filter out the blog with matching userId and blogId
        }
        return true; // Keep all other blogs
    });

    if (!blogFound) {
        return res.status(404).send("Blog not found or you do not have permission to delete it.");
    }

    res.send("Blog deleted successfully!");
};

