import {
  PostContainer,
  PostCoverImg,
  PostHeading,
  PostDescription,
  PostUser,
} from "../styled-components/post";

const Post = ({ post, variants }) => {
  return (
    <PostContainer variants={variants}>
      <PostCoverImg>
        <img src={post.cover_image} alt="Post" />
      </PostCoverImg>
      <PostHeading>
        <a href={post.canonical_url} target="_blank" rel="noreferrer">
          <h1>{post.title}</h1>
        </a>
      </PostHeading>
      <PostDescription>
        <p>{post.description}</p>
      </PostDescription>
      <PostUser>
        <img src={post.user.profile_image} alt={post.user.name} />
        <h4>{post.user.name}</h4>
      </PostUser>
    </PostContainer>
  );
};

export default Post;
