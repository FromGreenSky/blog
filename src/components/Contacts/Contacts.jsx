import LinkedIn from './LinkedIn.png'
import Instagram from './Instagram.png'
import Behance from './Behance.png'
import Dribble from './Dribble.png'
import './Contacts.css'

export const Contacts = () => {
    return(
        <div className="contacts">
            <h1 className="contacts__title">Contacts</h1>
            <span className="contacts__info">
                <p className='contacts__info__p'>Want to know more or just chat?</p>
                <p className='contacts__info__p'>You are wellcome!</p>
            </span>
            <button className="contacts__button">Send message</button>
            <div className="contacts__img">
                <img src = {LinkedIn} className = 'image' alt = 'LinkedIn' key = {'LinkedIn'}/>
                <img src = {Instagram} className = 'image' alt = 'Instagram' key = {'Instagram'}/>
                <img src = {Behance} className = 'image' alt = 'Behance' key = {'Behance'}/>
                <img src = {Dribble} className = 'image' alt = 'Dribble' key = {'Dribble'}/>
            </div>
            <div className="contacts__social_network">
                <p className='contacts__social_network__p'>Like me on</p>
                <p className='contacts__social_network__p'>LinkedIn, Instagram, Behance, Dribble</p>
            </div>
        </div>
    )
}