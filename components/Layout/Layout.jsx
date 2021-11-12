import Nav from '../../components/Nav';

const Layout = (props) => {
  return (
    <>
      <Nav />
      <div>{props.children}</div>
    </>
  );
};
export default Layout;
