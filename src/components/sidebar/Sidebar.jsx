import "./sidebar.css";
// import eImage from "../../images/my_image.jpg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          src="data:image/png;base64,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"
          alt=""
        />
        <p>
          I am Vijay Kumar, a final year student pursuing a B.Tech degree in
          Information Technology from the esteemed Institute of Engineering and
          Technology in Lucknow. With a passion for technology and a keen
          interest in exploring the ever-evolving world of IT, I have dedicated
          myself to acquiring knowledge and honing my skills in this field.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">life</li>
          <li className="sidebarListItem">music</li>
          <li className="sidebarListItem">style</li>
          <li className="sidebarListItem">sport</li>
          <li className="sidebarListItem">carrier</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Me</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
          <i className="sidebarIcon fa-brands fa-linkedin"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
        </div>
      </div>
    </div>
  );
}
