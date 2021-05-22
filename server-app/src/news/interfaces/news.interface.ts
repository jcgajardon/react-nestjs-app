import { Document } from 'mongoose';

export interface New extends Document {
  readonly created_at: Date;
  readonly title: string;
  readonly url: string;
  readonly author: string;
  readonly points: string;
  readonly story_text: string;
  readonly comment_text: string;
  readonly num_comments: number;
  readonly story_id: number;
  readonly story_title: string;
  readonly story_url: string;
  readonly parent_id: number;
  readonly created_at_i: number;
  readonly _tags: [];
  readonly objectID: string;
  readonly _highlightResult: Object;
  readonly deleteNew: boolean;
}
