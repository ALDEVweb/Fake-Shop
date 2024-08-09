
import Boutton from '../boutons/Boutton'
import './Banniere.css'

export default function Banniere(){
    return (
        <div className='banniere'>
            <div className='banniereText'>
                <h2>Fall 2024 collection</h2>
                <p>Discover the new ready-to-wear collections for men and women</p>
                <Boutton type="large" >see what's news</Boutton>
            </div>
        </div>
    )
}