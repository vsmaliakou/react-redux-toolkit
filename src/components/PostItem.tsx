import React, { FC, MouseEvent } from 'react';
import { IPost } from '../models/IPost';

interface IComponentProps {
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}

const PostItemComponent: FC<IComponentProps> = ({ post, remove, update }) => {
  const handleRemove = (event: MouseEvent) => {
    event.stopPropagation();
    remove(post);
  };

  const handleUpdate = (event: MouseEvent) => {
    const title = prompt() || '';
    update({ ...post, title });
  };

  return (
    <div onClick={handleUpdate}>
      {post.id}. {post.title}
      <button onClick={handleRemove}>Delete</button>
    </div>
  );
};

export const PostItem = PostItemComponent;
