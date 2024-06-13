import Logo from '../images/logo.png';
import '../css/footer.css'

function Footer() {
    return (
<>
<footer>
  <div className="">
    <div className="row">
      <div className="col-md-3 col-sm-12 mb-3 text-center">
      <div className="logo">
                      <a href="#">
                        <img src={Logo} alt="logo" style={{ width: '200px', height: 'auto' }}/>
                      </a>
                    </div>
      </div>
      <div className="col-md-9 col-sm-12" id = "footerRow">

        <div className="section">
          <h5 className="name">Evasion Mystique</h5>
        <ul className="list-group">
          <li className="items"><a href="">About</a></li>
          <a className="items" href="#">Privacy & terms</a>
        </ul>
        </div>

        <div className="section">
          <h5 className="name">Réseaux sociaux</h5>
        <ul className="list-group">
          <li className="items">
            <a href="https://www.instagram.com/"><i className="fa fa-instagram mr-1"></i> Instagram</a>
          </li>
          <li className="items">
            <a href="https://twitter.com/"><i className="fa fa-twitter mr-1"></i> Twitter</a>       
          </li >
          
          <li className="items">
            <a href="https://www.facebook.com/naologic/" target="_blank"><i className="fa fa-facebook mr-1"></i> Facebook</a>
          </li>
        </ul>
        </div>
        </div>
    </div>
  </div>
</footer>
</>

)
};







export default Footer;
