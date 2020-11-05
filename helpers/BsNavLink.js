import Link from '../helpers/nextActiveNav';


const BsNavLink = (props) => {
    const { route, title, clickOn, id} = props;
      return (
        <Link href={route} >
          <a onClick={clickOn ? clickOn : null} className={ `nav-link port-navbar-link ${title}` } id={id}>{title}</a>
        </Link>
      )
  }
  
  export default BsNavLink;