import Navbar from "./Navbar";
import {Link} from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { useState ,useEffect } from "react";
import {getAllQuestions } from "../Redux/actions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Footer";


export default function Accueil (){

    const questions = useSelector(state=>state.questionReducer.questions);
    const [searchQuestion, setSearchQuestion] = useState("");
    const keys = ['title'];
    // const todayDate = new Date(Date.now()).toISOString().slice(0, 10);
    const dispatch = useDispatch();
    
    const handleSearch = (e)=>{
        setSearchQuestion(e.target.value);
      }


        // useEffect (()=>{
        //             console.log(questions)
        // },[questions])

        console.log(searchQuestion)
    
    useEffect(() => {
        fetch('https://back-dev-7t8s.onrender.com/questions')
        .then((res)=>res.json())
        .then((questions)=>{dispatch(getAllQuestions(questions))})
        .catch(e => { console.log(e)})
        }, [])

    return (
        <div>
            <Navbar setSearchQuestion={setSearchQuestion} searchQuestion={searchQuestion}/>
            <div className="main--header--part">
                <div className="d-flex justify-content-center align-items-center h-100 flex-column">
                    <div className="container banner__container">
                        <h1 className="text-white font-weight-bold">Questions</h1>
                            <p className="text-white font-weight-bold">Ce forum est ouvert à toutes les questions liées à la programmation.<br/>
                            (PHP, Javascript, Java, C++, Firebase, C,Ruby, React...)</p>
                        <div className="w-100">
                            <input type="text" className="form-control form-control-lg w-100" placeholder="Rechercher des questions" onChange={handleSearch} value={searchQuestion}/>
                        </div>
                    </div>
                </div>
        </div>
            <div className="container">
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
                <nav  aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to='/Accueil'>Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Questions / Réponses</li>
                    </ol>
                </nav>
                        <div className="main--part--question">
                            <span><i className="fa-solid fa-earth-africa"></i> {questions.length} questions</span>
                            <Link to="/question" className="link__question">
                                <button className="btn--question">Poser une question <i className="fa-solid fa-pen-to-square"></i></button>
                            </Link>
                        </div>
                 
                    {questions && questions.filter((question,_id) => keys.some((key) => {
                                    if (searchQuestion === ""){
                                        return question;
                                    }
                                    else if (question[key].toLocaleLowerCase().includes(searchQuestion.toLocaleLowerCase())){
                                        return question;
                                    }
                                    return 0})).map((question,id)=> <div key={id} className="card no-border p-3 my-3">
                            <div className="question">
                                <h2 className="question__title">
                                    <Link to={`/details/${question._id}`} className="question__link">{question.title}</Link></h2>
                                    <p className="question__time">{question.date}</p>
                                    <p className="question__description my-2">{question.content}</p>
                                    <div className="d-flex justify-content-between">
                                      <span className="numbers--question--answers"> <i className="fa-sharp fa-solid fa-comments"></i> {question.comments && question.comments.length} commentaire(s)</span>
                                        <div className="question__tags"> {question.categories}</div>
                                    </div>
                                    <div className="questions__likes">
                                        <p className="number__likes"><i className="fa-regular fa-thumbs-up"></i> 0 </p>
                                    </div>
                            </div>
                    </div>
                        )}
                    </div>
                    

            </div>
            <nav aria-label="...">
                <ul className="pagination pagination-sm">
                    <li className="page-item active" aria-current="page">
                    <span className="page-link">1</span>
                    </li>
                    <li className="page-item"><a class="page-link" href="#">2</a></li>
                    <li className="page-item"><a class="page-link" href="#">3</a></li>
                </ul>
            </nav>
        </div>
        {/* <div className="main--part--newsletter">
                <div className="newsletter__grid">
                    <p>Recevez toute l'actualité devforum.com gratuitement</p>
                    <h4>Recevez les newsletters thématiques Pratique.fr une fois par semaine et les toutes dernières actualités chaque jour.</h4>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <button className="btn--newsletter">Je m'abonne gratuitement</button>
                </div>
        </div> */}
        <Footer/>
    </div>
    )
}