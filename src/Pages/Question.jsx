import { useState} from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import { useDispatch  } from "react-redux";
import { AddQuestion } from "../Redux/actions";
// import { TagsInput } from "react-tag-input-component";
import Footer from "./Footer";
import Navbar from "./Navbar";





export default function Question (){
    const dispatch = useDispatch()

    const [title,setTitle]=useState();
    const [content,setContent]=useState();
    const navigate = useNavigate();
    const [categories, setCategories] = useState();


     const handleAdd = ()=>{
        const data = {
            title,
            content,
            categories
        }
        fetch('https://back-dev-7t8s.onrender.com/questions',{
            method:"POST",
            headers :{'Content-Type':"application/json"},
            body: JSON.stringify(data)
        }).then((res)=>res.json())
         .then((dataQuestion)=> dispatch(AddQuestion(dataQuestion)))    
        navigate('/Accueil')
    }

    const handleform = (event)=>{
        setTitle(event.target.value)
    }
    const handleContent = (event)=>{
        setContent(event.target.value)
    }
    const handleChange = (event)=>{
        setCategories(event.target.value)
    }


    return (

        <div>
            <Navbar/>
            <div className="container">
            <nav  aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to='/Accueil'>Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Question</li>
                        </ol>
                    </nav>
        
            <div className="main--forum">
                <div className="main--forum--left">
                    <div className="forum--content">
                            <Link to='/Accueil' className="link--forum"><p><i class="fa-solid fa-house"></i> Home</p></Link>
                            <Link to='/Accueil' className="link--forum"><p><i class="fa-solid fa-circle-question"></i> Questions</p></Link>
                            <Link className="link--forum"><p><i class="fa-solid fa-tags"></i> Tags</p></Link>
                            <Link className="link--forum"><p><i class="fa-solid fa-user"></i> Users</p></Link>
                            <Link className="link--forum"><p><i class="fa-solid fa-message"></i> Discussions</p></Link>
                    </div>
                            <div className="col-3 col-md-12">
                                <div className="teams--content">
                                        <h6 className="teams--content--header">Dev Forum for Teams</h6>
                                        <p>– Start collaborating and sharing organizational knowledge.</p>
                                        <div className="teams--content--images">
                                            <img src="https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e" alt="" />
                                        </div>
                                        <div className="btn--block">
                                            <button className="btn--create--team">Create your team</button>
                                        </div>
                                </div>
                            </div>

                            <div className="col-3 col-md-12">
                            <div className="main--part--newsletter">
                                <div className="newsletter__grid">
                                    <p>Recevez toute l'actualité devforum.com gratuitement</p>
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                    <button className="btn--newsletter">Je m'abonne gratuitement</button>
                                </div>
                                </div>
                            </div>
                            <div className="col-3 col-md-12">
                                <div className="main__part__social">
                                    <p className="social--media"><i className="fa-brands fa-facebook"></i></p>
                                    <p className="social--media"><i className="fa-brands fa-instagram"></i></p>
                                    <p className="social--media"><i className="fa-brands fa-linkedin"></i></p>
                                </div>
                                </div>
                            <div className="col-3 col-md-12">
                               <div className="items">
                               <img src="https://tpc.googlesyndication.com/simgad/3518230291269613696?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qkweqTwgRh7mQ-o6eNvtrwc4xf1BA" alt="" />
                               </div>
                                </div>
                        </div>

                <div className="main--forum--right">
                    
                <div className="bg-white shadow-md p-4 row">
                        <div className="col-12">
                            <h2 className="question__title mb-0">Poser une question</h2>
                            <span>Notre communauté de développeurs est là pour vous aider!</span>
                                </div>
                                    <form className="col-12 row" id="quizForm">
                                        <div className="col-12 form-group mt-4">
                                            <label htmlFor="title" className="questions__form-label">Titre de la question</label>
                                            <input type="text" className="form-control" id="title" name="title" onChange={handleform}/>
                                                </div>
                                                <div className="col-12 form-group">
                                                    <label htmlFor="content" className="questions__form-label">Contenu de la question</label>
                                                    <textarea name="content" id="content" cols="30" rows="10" className="form-control" onChange={handleContent}></textarea>
                                                </div>
                                                
                                                    <div className="col-12 form-group">
                                                        <label htmlFor="content" className="questions__form-label">Technologies / Categories</label>     
                                                    </div>
                                                    <select className="form-select" aria-label="Default select example" onChange={handleChange} value={categories}>
                                                        <option selected>Choisir</option>
                                                        <option value="React Js">React Js</option>
                                                        <option value="PHP">PHP</option>
                                                        <option value="Javascript">Javascript</option>
                                                        <option value="MongoDB">MongoDB</option>
                                                        <option value="Nosql">Nosql</option>
                                                        <option value="Java">Java</option>
                                                        <option value="C++">C++</option>
                                                        <option value="C">C</option>
                                                        <option value="C">Python</option>
                                                        <option value="Ruby">Ruby</option>
                                                    </select>

                                                <div className="col-12 form-group">
                                                    <button type="submit" className="btn btn-primary d-block shadow-md w-100 btn-lg" onClick={handleAdd}>Poser ma question <i className="fa-solid fa-arrow-right"></i></button>
                                                </div>
                                        </form>
                                        </div>
                    </div>
                    

            </div>
                                    </div>
                                {/* <Footer/> */}
        </div>
    )
}