import "./styles.css";

export const PostCard = ({ cover, title, body }) => {
  return (
    <div className="post">
      <div className="photo-card">
        <img src={cover} alt={title} className="photo" />
      </div>
      <div className="post-content">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};
