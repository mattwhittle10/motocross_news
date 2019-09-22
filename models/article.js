var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title:{
    type: String,
    required: true
  },
  link:{ 
  type: String,
  required: true
  },
  note:{
    type: Schema.Types.ObjectId,
    ref: "note"
  }
});

var Article = mongoose.model("article", ArticleSchema);

module.exports = Article;