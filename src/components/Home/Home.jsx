import './Home.css'
import desktop_photo from './DenisNovik.svg'
import mobile_photo from './Denis_Novik.svg'

export const Home = () => {
   return(
       <div className = 'container__home' id='home'>
           <div className = 'container__home_span'>
               <span className = 'name'>Denis Novik</span>
               <span className = 'm-about'>
                   <span>UX | UI designer</span>
                   <span>24 years old, Minsk</span>
               </span>
               <span className = 'languages'>
                   <ul className = 'languages__ul'>
                       <li>RU</li>
                       <li> | </li>
                       <li>ENG</li>
                   </ul>
               </span>
           </div>
           <img className = 'img__home' src = {desktop_photo} alt = 'Denis Novik'/>
           <img className='img__home_mobile' src={mobile_photo} alt='Denis Novik'/>
       </div>
   )
}