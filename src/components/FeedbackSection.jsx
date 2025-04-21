import Button from './Button/Button'
import { useState, useRef } from "react";

function StateVsRef() {
    const input=useRef()
    const [show, setShow] = useState('')

    function handleKeyDown(evt) {
        if (evt.key === 'Enter') {
            setShow(evt.target.value)
        }
    }
    return (
        <div>
            {/* <h3>Input value: {input.current?.value}</h3> */}
            <h3>Input value: {show && input.current.value}</h3>
            <input ref={input} type="text" className='control' onKeyDown={handleKeyDown}/>
        </div>
    )
}

export default function FeedbackSection() {
    const [form, setForm] = useState({
        name:'',
        hasError: false,
        reason:'help'
    })
/*     const [name, setName] = useState('')
    const [hasError, setHasError] = useState(false)
    const [reason, setReason] = useState('help') */

    function handleNameChange(evt) {
       /*  setForm({
            name: evt.target.value,
            hasError: evt.target.value.trim().length === 0,
            reason: form.reason
        }) */
        setForm((prev) => ({
            ...prev,
            name: evt.target.value,
            hasError:evt.target.value.trim().length===0
        }))
        /* setName(evt.target.value)
        setHasError(evt.target.value.trim().length===0) */
    }
    function handleReasonChange(evt) {
        setForm((prev) => ({
            ...prev,
            reason:evt.target.value
        }))
       /*  setReason(evt.target.value) */
    }
/*     function handleToggle() {
        setHasError((prev)=>{!prev})
    } */
    return (
        <section>
            <h3>Обратная связь</h3>
            <form style={{marginBottom:"1rem"}}>
                <label htmlFor="name">Ваше имя</label>
                <input type="text" className="control" id='name' value={form.name}
                    style={{
                        border:form.hasError?'1px solid red': null
                    }}
                    onChange={handleNameChange} />
                
                <label htmlFor="reason">Причина обращения</label>
                <select id="reason" className="control" value={form.reason} onChange={handleReasonChange}>
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggest">Предложение</option>
                </select>
                <pre>
                    {JSON.stringify(form,null,2)}
                </pre>
                {/* <Button onClick={handleToggle}>Toggle</Button> */}
                <Button isActive={!form.hasError} disabled={form.hasError}>Отправить</Button>
            </form>
            <StateVsRef />
        </section>
    )
}