import React from 'react';
import '../styles/Badge.css';
import confLogo from '../images/badge-header.svg'
import { Link } from "react-router-dom";


function NotFound(){
return (
<div>


<div className="BadgeIndex">
<div className="Badges__heroIndex">
  <div className="Badges__containerIndex">
    <h1 className="Badge__section-nameIndex">Bienvenidos a Badges</h1>
  </div>
</div>
</div>
<div className="col-md-6 offset-md-3">
                    <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="logo"/>
            </div>
            <div className="Badge__section-name">

                <h1> Alexander  <br/> Fernández</h1>
            </div>
            <div className="Badge__section-info">     
                <h2> Software Developer</h2>
            </div>
            <div className="Badge__footer">
                <p>@Alexfrnndz</p>
            </div>
        </div>
        <div className="Badges__container">
          <div >
            <Link to="/badges" type="button" className="btn btn-primary">
                        Badges
            </Link >
          </div>
        </div>
        </div>
</div>
);
 }


export default NotFound