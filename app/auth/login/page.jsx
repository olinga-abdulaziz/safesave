import Link from 'next/link'
import '../authcss.css'

export default function Login(){
    return(
        <main className='main-container'>
            <section>
                <form  className="form">
                    <div className="form-control">
                        <h1 className='logintTitle'>Login</h1>
                        
                        <h3>welcome! enter user details to continue</h3>
                    </div>
                    <div className="form-control">
                        <input type="text" className="input-form" placeholder='username or email'/>
                    </div>
                    <div className="form-control">
                        <input type="text" className="input-form" placeholder='password'/>
                    </div>
                    <div className="form-control">
                        <p>Forgot password? <Link href='#' className='link'>Reset</Link></p>
                    </div>
                    <div className="form-control">
                        <button type='submit' className='btn-submit'>Login</button>
                    </div>
                    <div className="form-control">
                        <p>You do not have account <Link href='/auth/register' className='link'>Register</Link></p>
                    </div>
                </form>
            </section>
        </main>
    )
}