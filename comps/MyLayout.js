import Header from './Header';

const Layout = props => (
  <html>
  <body>
    <div>
      <Header />
      {props.children}
    </div>
  </body>

  </html>
);

export default Layout;