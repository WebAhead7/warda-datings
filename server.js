const express = require("express");
const posts = require("./handlers/posts");

const PORT = process.env.PORT || 3000;
const server = express();
server.use(express.json());
server.get("/posts", posts.getPosts);
server.get("/posts/:gender", posts.getPostsGender);

server.get("/posts/:id", posts.getPost);
server.get("/posts/:userId", posts.getUserPosts);

server.post("/posts", posts.addPost);
server.delete("/posts/:id", posts.deletePost);
server.put("/posts/:id", posts.updatePost);

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
