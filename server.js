const express = require("express");
const cors = require("cors");
const posts = require("./handlers/posts");
const users = require("./handlers/users");
const auth = require("./midllware/auth");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const server = express();
server.use(express.json());
app.use(cors());
const handleError = require("./midllware/error");
const { logIn } = require("./handlers/login");
server.post("/login", logIn);
server.get("/user/:id", auth.verifyUser, users.getUser);
server.post("/user", users.addUser);
server.get("/users", auth.verifyUser, users.getUsers);
server.get("/userByGender/:gender", auth.verifyUser, users.getUsersByGender);

server.get("/posts", auth.verifyUser, posts.getPosts);
server.get("/postsByGender/:gender", auth.verifyUser, posts.getPostsGender);

server.get("/post/:id", auth.verifyUser, posts.getPost);
server.get("/userPosts/:userId", auth.verifyUser, posts.getUserPosts);

server.post("/post", auth.verifyUser, posts.addPost);
server.delete("/post/:id", auth.verifyUser, posts.deletePost);
server.put("/post/:id", auth.verifyUser, posts.updatePost);
server.use(handleError);

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
