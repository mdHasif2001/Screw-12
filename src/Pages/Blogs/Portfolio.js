import React from 'react';
import hasif from '../../assets/images/Hasif.png';

const Portfolio = () => {
    return (
<div class="card card-compact w-96 bg-base-100 shadow-xl mx-auto mt-5">
  <figure><img src={hasif} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title"></h2>
    <p className='font-bold'>Name: Md Hasif</p>
    <p className='font-bold'>Email: iamhasib727@gmail.com</p>
    <p className='font-bold'>Education: Bachelor of arts (Honours) in English language and literature</p>
    <p className='font-bold'>University: University of science and technology Chittagong (Ustc)</p>
    <p className='font-bold'>Skills: Html, Css, Bootstrap, Tailwind, Javascript, React</p>
    <p className='font-bold'>Projects:  
    
    <p> https://th-assignment-a1095.web.app/ </p>
    <p>  https://crick-tutor.web.app/ </p>
    <p>   https://react-vista-watch.netlify.app/home </p>
    
    </p>
  </div>
</div>    );
};

export default Portfolio;