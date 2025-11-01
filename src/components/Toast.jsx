import './css/toast.css'


function Toast({message, onYesClose, onNoClose}) {

    return(
        <section className='toast'>
            <section className='toastContent'>
                <p>{message}</p>
                <article className='toastBtns'>
                    <button onClick={onYesClose} className='toastYesBtn'>Ja</button>
                    <button onClick={onNoClose} className='toastNoBtn'>Nej</button>
                </article>
            </section>
        </section>
    )
}

export default Toast;