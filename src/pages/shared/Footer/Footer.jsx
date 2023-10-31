import logo from '../../../assets/assets/logo.svg'
import { ImGoogle2 } from 'react-icons/im';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { RiInstagramFill } from 'react-icons/ri';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <aside>
                <img src={logo} alt="" />
                <p>Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .</p>
                <div className='flex justify-start gap-5  w-full'>
                    <ImGoogle2 className='w-5 h-10' />
                    <AiFillTwitterSquare className='w-5 h-10' />
                    <RiInstagramFill className='w-5 h-10' />
                    <BsLinkedin className='w-5 h-10' />
                </div>
            </aside>
            <nav>
                <header className="footer-title">About</header>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Service</a>
                <a className="link link-hover">Contact</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">Why Car Doctor</a>
                <a className="link link-hover">About</a>
            </nav>
            <nav>
                <header className="footer-title">Support</header>
                <a className="link link-hover">Support Center</a>
                <a className="link link-hover">Feedback</a>
                <a className="link link-hover">Accesbility</a>
            </nav>
        </footer>
    )
}
export default Footer; 