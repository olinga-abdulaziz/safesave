import Link from 'next/link'
import '../authcss.css'

export default function Register(){
    return(
        <main className='main-container'>
            <section>
                <div>
                    <div className="prog-div">
                        <div className="progbar"></div>
                        <div className="progbar"></div>
                        <div className="progbar"></div>
                    </div>
                </div>
                <form  className="form">
                    <div className="form-control">
                        <h1 className='logintTitle'>Register</h1>
                        
                        <h3>Welcome ! Enter user details to continue</h3>
                    </div>
                    <div className="form-control">
                        <input type="text" className="input-form" placeholder='Username'/>
                    </div>
                    <div className="form-control">
                        <input type="password" className="input-form" placeholder='password'/>
                    </div>
                    <div className="form-control">
                        <input type="password" className="input-form" placeholder='Confirm password'/>
                    </div>
                    <div className="form-control">
                        <input type="text" className="input-form" placeholder='Name'/>
                    </div>
                    <div className="form-control">
                        <input type="text" className="input-form" placeholder='Phone number'/>
                    </div>
                    <div className="form-control">
                        <input type="text" className="input-form" placeholder='Email address'/>
                    </div>
                    <div className="form-control">
                        <button type='submit' className='btn-submit'>Next</button>
                    </div>
                </form>
            </section>
        </main>
    )
}