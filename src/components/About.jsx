import React from 'react';
import { useParams } from 'react-router-dom';
import { Articles } from './Articles';
import Bottombox from './Bottombox';
import { bottom } from './Articles';
import { FaFacebookSquare,FaInstagramSquare ,FaTwitterSquare,FaYoutube} from "react-icons/fa";
import { IoIosArrowBack} from "react-icons/io";
import { Link } from 'react-router-dom';


 const About =()=> {
    const URLParams = useParams();
    const currentBlog = Articles.find(item => item.id === Number(URLParams.id))

    const {heading,image,descr} = currentBlog
  return (
    <>
        
      <div className="class1">
      <div className="class12">
      <span className="the">The</span>
      <h1 className="Siren">Siren</h1>
      
      
      </div>
      <div className="class12">
        <p className='get'>Get Started</p>
      </div>
      </div>
      <div className="content">
        <p className='abouttext'>{heading}</p>
        <div className="body">
        <div className='body1'>
        <img src={require('../imagess/mask.png')} alt="an img" className='image1'/>
        <span className='title1'>xxxxxx</span><br />
        <span className='title2'>Oct 22 2019</span>
        </div>
       
        <div className='body12'>
        <FaFacebookSquare className='body11'/>
        <FaInstagramSquare className='body11'/>
        <FaTwitterSquare className='body11'/>
        <FaYoutube className='body11'/>
        </div>
        </div>

    
        <div className="img2">
        <img src={image} alt="" className='image2'/>
        </div>
        <p className='des'>{descr}</p>

        <p>Let's talk about them</p>
        <div className="img3">
        <img src={require('../imagess/code1.jpg')} alt="" className='image3'/>
        </div>
        <div className='small'>
            <div className="small1">JavaScript</div>
            <div className="small1">React</div>
            <div className="small1">Angular</div>
        </div>
        <div className="clap">
            <img src={require('../imagess/rythm.png')} alt="" className='image4' />
            <span className='claps'>9.3K claps</span>
        </div>
        <hr style={{color:"gray"}}/>
        <div className="man">
           <div className="man1">
           <img src={require('../imagess/mask.png')} alt="" />
           </div>
            <div className="man2">
            <p className="mantext1">WRITTEN BY</p>
            <p className="mantext2">xxxxx</p>
            <p className="mantext1">Oct 22 2019</p>
            </div>
        </div>
        <hr />
      </div>
      <div className="bottombox">
        <h4 className='bottomtext'>More From The Siren</h4>
        <hr className='bottomhr' />
    <div className="bottomdown">
    {
                bottom.map((item7)=>{return( <Bottombox header={item7.header} description={item7.description} tag1={item7.tag1} tag2={item7.tag2} imgurl={item7.background} imgex={item7.imgex}/> )})
            }
    </div>
           
      
      </div>
      <div className="side">
            <div>
            <img src={require('../imagess/rythm.png')} alt="" className='sideimg1' />
            <span className='sideclap'>9.3K claps</span>
            </div>
           <div>
           <img src={require('../imagess/share.png')} alt="" className='sideimg2' />
            <span className='sideart'>Share this article</span>
           </div>
        </div>
        <div className="backarrow">
          <Link to ='/' className="backarrow1"><IoIosArrowBack/></Link>
        </div>
    </>
  )
}
export default About;