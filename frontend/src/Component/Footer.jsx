import { Link } from "react-router-dom";
const Footer = ()=>{
    return(
        <>
        <div className="Footer">
            <h1>LearnHub</h1>
            <p>© 2022 Tailwind Labs Inc. All rights reserved.</p>
            <Link to='/form' className="FooterLink">Form</Link>
        </div>
        </>
    )
}
export default Footer;