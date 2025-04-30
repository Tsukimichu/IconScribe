import logo from '../assets/ICONS.png'
import '../css/card1.css'

function CardOne(){
    return(
        <>
        <div className='front'>
        <img src={logo} alt="logo" className='logo'/>
        <div className='title'>ICONScribe</div>
        <div className='subtitle'>ICONS Copy and Prints Services <br/> <span>"-We make your ideas into reality-"</span></div>
        </div>
        </>
    );


}
export default CardOne