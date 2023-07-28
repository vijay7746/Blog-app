import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
        We won't have a society if we destroy the environment.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        The environment is the interconnected system of living organisms, their
        natural surroundings, and the physical elements that make up our planet.
        It encompasses everything from the air we breathe, the water we drink,
        and the land we inhabit, to the vast diversity of plants, animals, and
        ecosystems that thrive within it. The environment provides the
        foundation for all life on Earth and plays a crucial role in sustaining
        and nurturing every living being.
      </p>
    </div>
  );
}
