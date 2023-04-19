import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import Button from "../button/button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate=useNavigate();
  function handleIcon(){
    navigate("/login")
  }
  return (
    <div className={style.navContainer}>
      <div>
        <ul type="none">
          <a>
            <img
             onClick={handleIcon}
              className="navbar-brand"
              src="data:image/jpeg;base64,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WhG50ut6qrmp+W6EDMWFGgDVahm21WxvoNxvO6/u5cxYbk633joTRHtpWwB2GoMbiOCUtbK1ZgbzBVFNmDaEbN460dNYRwY4N17xVqsC8pIPuRUtcPljnPkRyRRBJXKCCNc2gvQ2K+k6TieUIykqqFyCqnKTZF2BTDz0voehM3cFwarnULSlRZ6WQVPUm6A8qAgcS/AEMUdlDFiKHeIKgnYH26jXy0sOE5cgQYhJOVQ9UoR1NXeYrYptbroNbo9FxPJczl1fKRQWgpqhoHvU660DRvUdZPPBIVZQqLmNmlX56BDUQQSKv2GkDkMfljOSQwVBRy90V5Fb32o7aj0kPgeVOXJKlEBNkirymsu9gmv3Ynetwl760NC2pJBBsgaHVQfyqR35dhkZXRDpqN7AsrSnwNkD19yoHDcGgFth5LLAKSAlWaDFSQbsnLdDNsam7C5YhUFgh01LIupOx6agaV/hEssPAobjWyBWmpGw3FXt5zFlIak20FVpV6n6XIqqwuVfDU5MNijlWdA50JBU6ULWmsgHXKKHQWAwFNoGDZQFZBSCwMwJCr1GUVtRlijdKI36f1mQUSstIQih0vXXXb8dfSZFA2Ukag2LAseO+3hNk+QPhAJ1G2uv73mURAREQEREBERAREQEREBERAREQEREBERAREQERED5PjVr085lEDX8MXm126HT6eO2vlMyPOfYgYqPKtoYAda95lPgQCBpoXmBI3sCqO2tddh+zM2UkCj4bzZMUSvc30/eg0ga8NT1bN5nQ3tpptM0Q+J66aePpM4gYfD2vUi/x0hMMC9BZNk/v91M4gacfhw3iDrTD5lsEWD46zNsMGswBrUWNjtY8JnEDH4Y3H7veYOhm2IXZERCEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA//9k="
              width="40px"
            />
          </a>
        </ul>
      </div>
      <div className={style.nav}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/AboutUs"}>About Us</Link>
        </li>
        <li>
          <Link to={"/classes"}>Classes</Link>
        </li>
        <li>
          <Link to={"/blog"}>Blog</Link>
        </li>
        <li>
          <Button
            onClick={() => navigate("/login")}
            value={"Join Us"}
            className={style.Buttoncss}
          />
        </li>
      </div>
    </div>
  );
};

export default Navbar;
