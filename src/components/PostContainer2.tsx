import React, { FC } from 'react';
import { postAPI } from '../services/PostService';
import { PostItem } from './PostItem';

interface IComponentProps {}

const PostContainer2Component: FC<IComponentProps> = () => {
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(5);

  return (
    <div>
      <div>
        {isLoading && <h1>Загрузка...</h1>}
        {error && <h1>Произошла ошибка</h1>}
        {/* {posts?.map((post) => {
          return <PostItem key={post.id} post={post} />;
        })} */}
      </div>
    </div>
  );
};

export const PostContainer2 = PostContainer2Component;
