import React from 'react';
import Post from './Post';
import Stories from './Stories';
import { Post as PostType } from '../types/types';

const Feed: React.FC = () => {
  const [posts, setPosts] = React.useState<PostType[]>([]);

  return (
    <div className="feed">
      <Stories />
      <div className="posts">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed; 