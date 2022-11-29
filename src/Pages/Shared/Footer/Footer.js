import React from 'react';
import { Link } from 'react-router-dom';
import FooterIcon from '../../../assets/dining-room-icon.jpg'

const Footer = () => {
    return (
        <footer className="footer mt-12 rounded-t-lg p-10 bg-gradient-to-r from-primary to-secondary text-white ">
            <div>
                <img src={FooterIcon} alt="" className='w-24 h-24 rounded-full' />
                <p className='font-bold'>FURNIX Furniture is considered to be the ‘game-changer’ <br /> in Bangladesh’s furniture industry. Carefully-chosen <br /> raw material, environment-friendly business <br /> practice and customer-centric approach is what made <br /> FURNIX Furniture a beloved brand at home and abroad.</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
               <Link to='/' className="link link-hover font-bold">Home Furniture</Link>
               <Link to='/' className="link link-hover font-bold">Office Furniture</Link>
               <Link to='/' className="link link-hover font-bold">Cancellation and Refund</Link>
               <Link to='/' className="link link-hover font-bold">Advertisement</Link>
            </div>
            <div>
                <span className="footer-title">Our Company</span>
               <Link to='/' className="link link-hover font-bold">About us</Link>
               <Link to='/' className="link link-hover font-bold">Contact</Link>
               <Link to='/' className="link link-hover font-bold">Company Profile</Link>
               <Link to='/' className="link link-hover font-bold">Our Team</Link>
               <Link to='/' className="link link-hover font-bold">Complain Box</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
               <Link to='/' className="link link-hover font-bold">Delivery and Assembly</Link>
               <Link to='/' className="link link-hover font-bold">Privacy policy</Link>
               <Link to='/' className="link link-hover font-bold">Cookie policy</Link>
               <Link to='/' className="link link-hover font-bold">Terms and Conditions</Link>
            </div>
        </footer>
    );
};

export default Footer;