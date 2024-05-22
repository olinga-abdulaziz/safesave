import { AddCard, Person2Rounded, PhoneAndroidRounded, PlusOneOutlined, Save } from '@mui/icons-material'


export default function AddTransaction(){


    return(
        <div>
            <div className="addt-form">
            <div><small><strong>Add new transaction</strong></small></div>
            <div>
                <form className='formAddTrans'>
                    <input type="text" className='forminput' placeholder='Amount'/>
                    <button className='btnAddT'><Save /></button>
                </form>
            </div>
             </div> 
        </div>
    )
}