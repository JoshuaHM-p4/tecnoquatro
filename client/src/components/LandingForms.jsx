import {useState} from "react";
import '../styles/LandingForms.scss';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {
    signInStart,
    signInSuccess,
    signInFailure
} from '../redux/user/userSlice.js'

const LandingForms = () => {
    const [formBody, setFormBody] = useState({
        email: '',
        password: ''
    })
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {loading, error} = useSelector(state => state.user);

    const handleChange = e => {
        setFormBody({
            ...formBody,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!formBody.email || !formBody.password) {
                alert('All fields are required');
                return;
            }
            dispatch(signInStart());
            const res = await fetch('/api/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formBody)
            })
            const data = await res.json();
            if (data.success === false) {
                dispatch(signInFailure(data.message));
                alert(data.message);
                return
            }
            dispatch(signInSuccess(data));
            navigate('/feed');
        } catch (error) {
            dispatch(signInFailure(error.message));
            console.log(error);
        }
    }

    return (
        <main className='landing-forms'> 
            <div className='forms-intro-text-container'> 
                <p className='forms-intro-head'>Bogus Binted? 👽</p> 
            </div>

            <div className='forms-content'>
                <form onSubmit={handleSubmit} className='forms-login-container'>
                    <label className='forms-login-head'>Email address</label>
                    <div className='forms-login'>
                        <div className="input-group">
                            <i className="material-icons input-icon">&#xe0be;</i>
                            <input 
                                value={formBody.email}
                                onChange={handleChange}
                                type='text' 
                                name="email" 
                                placeholder='Email Address' 
                            />
                        </div>
                    </div>

                    <label className='forms-login-head'>Password</label>
                    <div className='forms-login'>
                        <div className="input-group">
                            <i className="material-icons input-icon">&#xe897;</i>
                            <input 
                                value={formBody.password}
                                onChange={handleChange}
                                type='password' 
                                name="password" 
                                placeholder='Password' 
                            />
                        </div>
                    </div>

                    <div className='forms-privacy-policy'>
                        <input type='checkbox' id='privacy-policy' name='privacy-policy' value='privacy-policy' />
                        <label htmlFor='privacy-policy'>I have read and understood the <a href="">privacy policy</a></label>
                    </div>

                    <div className='forms-signin-container'>
                        <button disabled={loading} type="submit">Sign In</button>
                    </div>
                </form>

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
