import Link from 'next/link';
import MyLogo from './MyLogo';

const linkStyle = {
  marginRight: 200,
};
const Header = () => (
  <div className="main">
    <MyLogo/>
    <Link href="/">
      <span>Home</span>
    </Link>
    <Link href="/about">
      <span>About</span>
    </Link> 
    <Link href="/odlety">
      <span>Odlety</span>
    </Link> 
    <Link href="/prilety">
      <span>Prilety</span>
    </Link> 
    <style jsx>{`
    .main{
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    span {
      color: white;
      padding: 40px 30px;
      text-decoration: none;
      background-color: blue;
      border: 1px solid white;
      border-radius: 50px;
      transition: 0.3s;
    }
    span:hover {
      opacity: 0.7;
    }
    @media screen and (max-width: 800px) {
      .main{
        margin-left: 40em;
        margin-right: 15em;
      }
    }
    @media screen and (max-width: 650px) {
      .main{
        margin-left: 20em;
        margin-right: 5em;
      }
      span {
        padding: 25px 15px;
        
      }
    }
    `}
    </style>
  </div>
);

export default Header;