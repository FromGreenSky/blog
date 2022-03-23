import Photoshop from './Photoshop.png'
import Illustrator from './Illustrator.png'
import AfterEffects from './AfterEffects.png'
import Figma from './Figma.png'
import './Skills.css'

export const Skills = () => {
    return(
        <div className = 'container__skills' id='skills'>
            <div className = 'skills__text'>
                <h1 className = 'skills__title'>Skills</h1>
                <p className = 'skills__p'>I work in such programs as</p>
            </div>
            <div className = 'skills__img'>
                <img src = {Photoshop} className = 'sk__image' alt = "Photoshop" key={'Photoshop'}/>
                <img src = {Illustrator} className = 'sk__image' alt = "Illustrator" key={'Illustrator'}/>
                <img src = {AfterEffects} className = 'sk__image' alt = "AfterEffects" key={'AfterEffects'}/>
                <img src = {Figma} className = 'sk__image' alt = "Figma" key={'Figma'}/>
            </div>
        </div>
    )
}