import './About.css'

export const About = () => {
    return(
        <div className = 'container__about' id='aboutMe'>
            <h1 className = 'title'>About me</h1>
            <ul className = 'about__ul'>
                <li className = 'about__li'>Hi, I'm Denis – UX/UI designer from Minsk. I'm interested in design and everything connected with it.</li>
                <li className = 'about__li'>I'm studying at courses "Web and mobile design interfaces" in IT-Academy.</li>
                <li className = 'about__li'>Ready to implement excellent projects with wonderful people.</li>
            </ul>
        </div>
    )
}