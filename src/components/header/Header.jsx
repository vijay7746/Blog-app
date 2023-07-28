import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React and Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src="https://cdn.pixabay.com/photo/2016/12/11/12/02/mountains-1899264_1280.jpg" alt=""/>
    </div>
  );
}
