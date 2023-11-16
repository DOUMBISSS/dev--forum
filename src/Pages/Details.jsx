import {Link,useParams} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {useEffect ,useState} from 'react';
import { AddQuestion,addComment } from '../Redux/actions';
import Navbar from './Navbar';
import Footer from './Footer';


export default function Details () {

    const dispatch = useDispatch ()
    const question = useSelector(state=>state.questionReducer.question);
    var id = useParams().id;

    useEffect(() => {
        fetch(`https://back-dev-7t8s.onrender.com/question/${id}`)
        .then((res)=>res.json())
        .then((question)=>{dispatch(AddQuestion(question))})
        .catch(e => { console.log(e)})
        }, [question])


    const comments = useSelector(state=>state.questionReducer.comments);

    const [content,setContent]=useState();

    const handleText =(event)=>{
        setContent(event.target.value);
    }

    // const [user,setUser] = useState("");
    // useEffect(() => {
    //     setUser(JSON.parse(localStorage.getItem("user"))) 
    //     }, [])
    

    const handleComment = (e)=>{
        e.preventDefault();
        const dataComment = {
         content,
         question_id: id
        }
        fetch('https://back-dev-7t8s.onrender.com/comments',{
        method:"POST",
        headers :{'Content-Type':"application/json"},
        body: JSON.stringify(dataComment)
        }).then((res)=>res.json())
         .then((dataComment)=> dispatch(addComment(dataComment)))   
         setContent("") 
    }

    
    return (
        <div>
            <Navbar/>
           <div className='container'>
           <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                    <li className="breadcrumb-item"><Link to='/Accueil'>Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Questions / Réponses</li>
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
                <div  key={id}className="col-md-12 col-lg-9">
                            {/* <span className="question-detail__head">{question.title}</span> */}
                            <div className="question-detail__title">
                                <div className="d-flex flex-column align-items-center no-underline ">
                                <p className="number__likes"><i className="fa-regular fa-heart"></i> 0 </p>
                                    </div>
                                    <h1 className='question--detail--title'>{question.title}</h1>
                            </div>

                            <div className="question--detail--content">
                                    <p>{question.content}</p>
                            </div>

                                    <hr/>
                                    <div className="mb-4 answers-count ">
                                        <span className="text-dark-blue font-weight-bold">{question.comments && question.comments.length} reponses</span>
                                        <span className="d-flex align-items-center">
                                            <img src="https://baroland.netlify.app/img/avatar.png" alt="" width="20" height="20"/>
                                                <span className="text-black ml-2">
                                                    {/* {user.name} */}
                                                    </span>
                                                </span>
                                    </div>

                                    {question.comments && question.comments.map((comment)=> { 
                                        return <div key={comment._id} className="comment">
                                                <div className="comment__likes-count no-underline">
                                                    <i className="fa-solid fa-heart"></i>
                                                    <span>7</span>
                                                </div>
                                                    <div className="comment--content">
                                                        <div className="comment--author">
                                                            <div className="comment--author--info">
                                                                <img src="https://baroland.netlify.app/img/avatar.png" alt="" width="25" height="25"/>
                                                                {/* <span className="comment--author--name">{comment.author}</span> */}
                                                            </div>
                                                                
                                                                <div className="comment--ago"> <i className="fa-solid fa-clock"></i> il y'a 1min</div>
                                                        </div>
                                                                <div className="comment--text">
                                                                <p >{comment.content}</p>
                                                                </div>
                                                    </div>
                                        </div>
                                     })}   

                        <div className="mt-3">
                            <form>
                                <textarea name="content" id="commentInput" cols="30" rows="3" className="form-control" placeholder="Ajouter un commentaire..." onChange={handleText} value={content}></textarea>
                                    <div className="d-flex justify-content-end mt-3">
                                        <button className="btn btn-primary text-white text-right shadow-sm" type="submit" onClick={handleComment}>Commenter</button>
                                    </div>
                            </form>
                        </div>
                    </div>
               
                    </div>
                    

            </div>
           </div>
                    {/* <Footer/>                                                                                                                                                                            */}
                    </div>
    )
}