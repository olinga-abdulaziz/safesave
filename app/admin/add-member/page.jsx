
import Navbar from '../../navigation/Navbar'
import '../../members/memb.css'
export default function AddMEMber(){
    return(
        <div>
            <Navbar />
            <div className="add-container">
                <form className='form-add'>
                    <div className="form-top">
                        <strong>Add new member</strong>
                    </div>
                    <div className="form-control">
                        <div><strong>Fullnames</strong></div>
                        <div><input type="text" placeholder='type name' className='form-input'/></div>
                    </div>
                    <div className="form-control">
                        <div><strong>Phone</strong></div>
                        <div><input type="text" placeholder='+2547...'className='form-input' /></div>
                    </div>
                    <div className="form-control">
                        <div><strong>Id number</strong></div>
                        <div><input type="text" placeholder='id'className='form-input' /></div>
                    </div>
                    <div className="form-control">
                        <div><strong>Email</strong></div>
                        <div><input type="text" placeholder='email'className='form-input' /></div>
                    </div>
                    <div className="form-control">
                       <button className='btn-save'>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}