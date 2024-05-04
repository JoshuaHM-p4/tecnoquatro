import React from "react";
import '../styles/LandingForms.scss'; // Importing the SCSS file

const LandingForms = () => {
    return (
        <main className='landing-forms'> 
            <div className='forms-intro-text-container'> 
                <p className='forms-intro-head'>Bogus Binted? 👽</p> 
            </div>

            <div className='forms-content'>
                <div className='forms-login-container'>
                    <p className='forms-login-head'>Email Address</p>
                    <form className='forms-login'>
                        <div className="input-group">
                            <i className="material-icons input-icon">&#xe0be;</i>
                            <input type='text' placeholder='Username' />
                        </div>
                    </form>

                    <p className='forms-login-head'>Password</p>
                    <form className='forms-login'>
                        <div className="input-group">
                            <i className="material-icons input-icon">&#xe897;</i>
                            <input type='password' placeholder='Password' />
                        </div>
                    </form>

                    {/* Display privacy policy with radio button */}
                    <div className='forms-privacy-policy'>
                        <input type='checkbox' id='privacy-policy' name='privacy-policy' value='privacy-policy' />
                        <label htmlFor='privacy-policy'>I have read and understood the <a href="">privacy policy</a></label>
                    </div>

                    {/* Display sign in button*/}
                    <div className='forms-signin-container'>
                        <button>Sign In</button>
                    </div>
                </div>

                {/* Display forms description */}
                <div className='forms-description-container'>
                    <p className='forms-description-text'>
                    Cosmic Celestials, prepare to embark on a journey through the vast expanse of knowledge and innovation. Whether you wield brilliant ideas seeking to manifest into celestial reality or crave the wisdom of cosmic experts to illuminate your creative and digital endeavors, we are here to guide you.
                    </p>

                    <p className='forms-description-text'>
                    Access granted to BSCPE 1-4 students only. Unlock the cosmic portal and let your celestial essence shine.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default LandingForms;
