import React, { useState } from 'react';
import { Post as PostType } from '../types/types';
import { FaHeart, FaRegHeart, FaRegComment, FaRegPaperPlane, FaRegBookmark } from 'react-icons/fa';

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="post">
      <div className="post-header">
        <img src={post.userAvatar} alt={post.username} className="avatar" />
        <span className="username">{post.username}</span>
      </div>
      
      <div className="post-image">
        <img src={post.imageUrl} alt="Post content" />
      </div>
      
      <div className="post-actions">
        <button onClick={() => setIsLiked(!isLiked)}>
          {isLiked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
        </button>
        <button onClick={() => setShowComments(!showComments)}>
          <FaRegComment />
        </button>
        <button>
          <FaRegPaperPlane />
        </button>
        <button className="save-button">
          <FaRegBookmark />
        </button>
      </div>
      
      <div className="post-info">
        <span className="likes">{post.likes} curtidas</span>
        <p className="caption">
          <strong>{post.username}</strong> {post.caption}
        </p>
      </div>
      
      {showComments && (
        <div className="comments">
          {post.comments.map((comment) => (
            <div key={comment.id} className="comment">
              <strong>{comment.username}</strong> {comment.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Post; 