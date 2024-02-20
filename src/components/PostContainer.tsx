import React, { FC } from 'react';
import { postAPI } from '../services/PostService';
import { PostItem } from './PostItem';
import { IPost } from '../models/IPost';

interface IComponentProps {}

const PostContainerComponent: FC<IComponentProps> = () => {
  // const [limit, setLimit] = useState<number>(5);
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(20);
  const [createPost, { error: createError, isLoading: isCreateLoading }] = postAPI.useCreatePostMutation();
  const [updatePost, {}] = postAPI.useUpdatePostMutation();
  const [deletePost] = postAPI.useDeletePostMutation();

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLimit(3);
  //   }, 5000);
  // }, []);

  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  const handleRemove = (post: IPost) => {
    deletePost(post);
  };

  const handleUpdate = (post: IPost) => {
    updatePost(post);
  };

  return (
    <div>
      <div>
        <button onClick={handleCreate}>Add new post</button>
        {isLoading && <h1>Загрузка...</h1>}
        {error && <h1>Произошла ошибка</h1>}
        {posts?.map((post) => {
          return (
            <PostItem
              key={post.id}
              post={post}
              remove={handleRemove}
              update={handleUpdate}
            />
          );
        })}
      </div>
    </div>
  );
};

export const PostContainer = PostContainerComponent;
