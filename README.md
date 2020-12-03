# warda-datings

# https://wardadatings.herokuapp.com/

Warda Datings is api that you can sign in and get all the posts of the users to get a date with someone  you like to date :D


steps :
1. you have to register the user by post to the   url + /user with the name , email , password ,gender in the body as json object 
2. to login you have to send  object json with the email and the password to url +/login

now you can use all the function :

1. get url + /user/:id that getting the user data of the user by his id 
2. get url +/users you can get all the users in api 
3. get url +/userByGender/:gender get the users with specific gender male / female
4. get url +/posts  get all the posts in the api 
5. get url +/postsByGender/:gender  get all the posts that posts by specific gender 
6. get url +/post/:id get the post by the id 
7. get url +/userPosts/:userId gets the posts by the user by passing the id of the user 
8. post url +/post you can add a post by sending object as json title,content,ownerId
9. delete url+ /post/:id the user can delete his own post by passing the id post 
10. put url +/post/:id the user can update his own post by passing the id of the post and in the body the values that he wants to update as json object 
