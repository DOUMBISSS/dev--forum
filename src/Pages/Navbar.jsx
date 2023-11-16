import React, { useEffect } from 'react';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Navbar ({searchQuestion,setSearchQuestion}) {

  const navigate = useNavigate();
  const [user,setUser] = useState("");
  const [display,setDisplay]=useState(false);

  const showProfil =()=>{
    setDisplay(true)
  }
  const closeProfil =()=>{
    setDisplay(false)
  }
  const notify = (e) => {
    toast('Veuillez vous connecter svp !!', {
      position: "top-right",
      autoClose: 3001,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };

  const logout =()=>{
    localStorage.clear();
    navigate('/');
    notify('')

  }

useEffect(() => {
  setUser(JSON.parse(localStorage.getItem("user"))) 
  }, [])

    return (
      <div>
      <header>
      <div className="navbar--left">
            <div className="navbar--logo">
              <div className ="navbar--logo--box" >
              <Link to="/Accueil">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Circle-icons-dev.svg/1024px-Circle-icons-dev.svg.png" alt="" />
                </Link>
              </div>
            </div>
          </div>

            <div className='navbar--center'>
                 <h1 className='title'>Dev Forum</h1>
            </div>
          <div className="navbar--right">
            <div className="navbar--right--content">
              <div className='profil'>
                <i className="fa-solid fa-user" onClick={showProfil}> <i className='log'>Mon profil</i> </i>
              </div>
                <div className= {display ? "user--part display--user--part" : "user--part" }>
                  <div className="user--name--content">
                      <div className="user--name">
                            <h6><i className="fa-solid fa-user" onClick={showProfil}></i> {user.name}</h6>
                            <h6 className='user--email'> {user.email}</h6>
                        </div>
                      <div className='btn--close--login'>
                        <i className="fa-solid fa-xmark" onClick={closeProfil}></i>
                      </div>
                  </div>
                  <button className="logout--btn" onClick={logout}> <i className="fa-solid fa-right-from-bracket"></i> Déconnexion</button>
                  <ToastContainer position="top-right" autoClose={3001} hideProgressBar={true} newestOnTop={false} closeOnClick rtl={false}  pauseOnFocusLoss draggable  pauseOnHover theme="colored"  />
                </div>
              </div>
            </div>    
    </header>

     </div>
    );
}

