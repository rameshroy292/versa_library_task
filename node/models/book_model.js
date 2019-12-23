  const mongoose = require("mongoose"); 
 
  /**
   * Create database scheme for users
   */
  const LibrarySchema = new mongoose.Schema({
      bookid: {
          type: String,
          required: "Unique id for each book"
      },
      name: {
          type: String,
          required: "What is the name of the book?",
      },
      publisher: {
          type: String,
          required: "Who is the publisher of the book?"
      },
      author: {
          type: String,
          required: "Who is the author of the book?"
      },
      price: {
          type: Number,
          required: "Price of the book"
      },
    //   publishedOn: {
    //       type: String,
    //       required: "When was the book published"
    //   }
  },{strict: true});
  
  
  // Create schema for user
  
    const userSchema = new mongoose.Schema(
        {email: String, password: String},{strict: true}
    );
    const user = mongoose.model('user', userSchema)
  
  const Books = mongoose.model('books', LibrarySchema);
  //const User = mongoose.model('users', UserSchema);
  
  module.exports= {user,Books};