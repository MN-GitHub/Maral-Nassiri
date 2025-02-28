import '../styles/PostCard.css';

function PostCard({ title, excerpt, image }) {
  return (
    <div className="post-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{excerpt}</p>
    </div>
  );
}

export default PostCard;
