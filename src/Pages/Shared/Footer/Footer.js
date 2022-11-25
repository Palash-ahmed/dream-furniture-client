import React from 'react';
import { Link } from 'react-router-dom';
import FooterIcon from '../../../assets/dining-room-icon.jpg'

const Footer = () => {
    return (
        <footer className="footer mt-12 rounded-t-lg p-10 bg-base-200 text-base-content">
            <div>
                <img src={FooterIcon} alt="" className='w-24 h-24 rounded-full' />
                <p>FURNIX is considered to be the ‘game-changer’ <br /> in Bangladesh’s furniture industry. Carefully-chosen <br /> raw material, environment-friendly business <br /> practice and customer-centric approach is what made <br /> FURNIX a beloved brand at home and abroad.</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
               <Link to='/' className="link link-hover">Home Furniture</Link>
               <Link to='/' className="link link-hover">Office Furniture</Link>
               <Link to='/' className="link link-hover">Cancellation and Refund</Link>
               <Link to='/' className="link link-hover">Advertisement</Link>
            </div>
            <div>
                <span className="footer-title">Our Company</span>
               <Link to='/' className="link link-hover">About us</Link>
               <Link to='/' className="link link-hover">Contact</Link>
               <Link to='/' className="link link-hover">Company Profile</Link>
               <Link to='/' className="link link-hover">Our Team</Link>
               <Link to='/' className="link link-hover">Complain Box</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
               <Link to='/' className="link link-hover">Delivery and Assembly</Link>
               <Link to='/' className="link link-hover">Privacy policy</Link>
               <Link to='/' className="link link-hover">Cookie policy</Link>
               <Link to='/' className="link link-hover">Terms and Conditions</Link>
            </div>
        </footer>
    );
};

export default Footer;