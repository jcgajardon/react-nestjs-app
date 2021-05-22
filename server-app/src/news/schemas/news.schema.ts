import { Schema } from 'mongoose';

export const NewSchema = new Schema({
  created_at: Date,
  title: String,
  url: String,
  author: String,
  story_text: String,
  comment_text: String,
  num_comments: String,
  story_id: Number,
  story_title: String,
  story_url: String,
  parent_id: Number,
  created_at_i: Number,
  _tags: Array,
  objectID: String,
  _highlightResult: Object,
  deleteNew: { type: Boolean, default: false },
});
