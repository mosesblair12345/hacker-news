import { useGlobalContext } from "./context";
import moment from "moment";

const Stories = () => {
  const { loading, hits, removeStory } = useGlobalContext();
  if (loading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="stories">
      {hits.map((story) => {
        const {
          objectID: id,
          title,
          num_comments,
          url,
          points,
          author,
          created_at,
        } = story;
        const date = new Date(created_at);
        return (
          <article className="story" key={id}>
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by <span>{author} | </span>
              {num_comments} comments | {moment(date).format("MMMM Do YYYY")}
            </p>
            <div>
              <a
                href={url}
                target="_blank"
                className="read-link"
                rel="noreferrer"
              >
                Read More
              </a>
              <button className="remove-btn" onClick={() => removeStory(id)}>
                remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
