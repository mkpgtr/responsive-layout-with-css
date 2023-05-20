import React, { useEffect } from 'react'
import './Timeline.css'
const Timeline = () => {


    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth",
        })

        setTimeout(() => {
            window.scrollTo({
                top:600,
                behavior:"smooth"
            })
        }, 4000);
      
    },[])

 
  return (
    <div class="timeline">
    <div class="container left-container">
    <img src="https://management.ind.in/img/w/MATS-University-Logo.jpg" alt="" />
        <div class="text-box">
            <h2>MATS UNIVERSTY(MATS LAW SCHOOL)</h2>
            <small>2016-2021</small>
           <p>Studied Law & graduated with B.A.LLB Degree. Learnt about Indian Constitution, Contract Law, Company Law, Jurisprudence, Family Law, etc. Conducted legal research during internships. Learnt to read a lot.</p>
            <span class="left-container-arrow"></span>
        </div>
    </div>
    <div class="container right-container">
    <img src="https://th.bing.com/th/id/R.c8d6d75221608a698b634aa6c283a853?rik=6XV6ls8XJtUX4g&riu=http%3a%2f%2f2011.igem.org%2fwiki%2fimages%2f4%2f47%2fIITM_Color_Logo.JPG&ehk=l%2fKGMiFxwu86W7mVjdRVMh9Xz9YG0k4h3tVbMCOVusI%3d&risl=&pid=ImgRaw&r=0" alt="" />
        <div class="text-box">
            <h2>Explored Maths & Machine Learning With Python</h2>
            <small>2021-2022</small>
            <p>Developed interest in maths & machine learning. Tried pursuing IIT Madras Bsc Data Science Degree and qualified till Qualifier Round. Got a lot of exposure to different math concepts (calculus & probability). Learnt a little bit of numpy, pandas, matplotlib & overall python language</p>
            <span class="right-container-arrow"></span>
        </div>
    </div>
    <div class="container left-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/800px-PHP-logo.svg.png" alt="" />
        <div class="text-box">
            <h2>Explored PHP & MySQL at Thought Applied Creations, Raipur</h2>
            <small>February 2022  - April 2022 </small>
            <p>Learnt to build login & register system. Also, learnt how to do crud operations using PHP & MYSQL. This was my first introduction to web-development. Built a student management system(out of curiosity) with a lot of if/else(beginner-like) programming patterns.</p>
            <span class="left-container-arrow"></span>
        </div>
    </div>
  
</div>
  )
}

export default Timeline