import FashionStore from './FashionStore.png'
import ReebokStore from './ReebokStore.png'
import BraunLanding from './BraunLanding.png'
import './Portfolio.css'

export const Portfolio = () => {
    return(
        <div className = 'container__portfolio' id='portfolio'>
            <h1 className = 'portfolio__title'>Portfolio</h1>
            <img src = {FashionStore} alt = 'FashionStore' key={'FashionStore'} className = 'portfolio_img'/>
            <p className = 'portfolio_p'>Online fashion store - Homepage</p>
            <img src = {ReebokStore} alt = 'ReebokStore' key={'ReebokStore'} className = 'portfolio_img'/>
            <p className = 'portfolio_p'>Reebok Store - Concept</p>
            <img src = {BraunLanding} alt = 'BraunLanding' key={'BraunLanding'} className = 'portfolio_img'/>
            <p className = 'portfolio_p'>Braun Landing Page - Concept</p>
        </div>
    )
}