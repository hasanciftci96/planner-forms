import React, {useState} from 'react'




//action keyword istedigin "/afdad" adresine bir post request yolluyor      action="/example.html"
// name="first-text-field" value="already pre-filled">  'da name'i herzaman koy bu galiba key oluyor json'daki, value kutunun icinde hazir doldurulmus alan ornek input ile
//datalist yap user name'ler icin


export default function ContactForm() {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    
    const handleNameChange = event => {
        setName(event.target.value)
    };

    const handlePhoneChange = event => {
        setPhone(event.target.value)
    };

    const handleEmailChange = event => {
        setEmail(event.target.value)
    };
    
    const handleSubmit = event => {
        event.preventDefault();
        alert(`Your state values: \n 
                name: ${name} \n 
                email: ${email} \n
                You can replace this alert with your process`);
      };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Contact Name</label>
                    <input type='text' name='name' value={name} onChange={handleNameChange} required/>
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type='number' name='phone' value={phone} onChange={handlePhoneChange}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type='email' name='email' value={email} onChange={handleEmailChange}/>
                </div>
                <button type="submit">Submit</button>

            </form>
            <h1>This is my form for contacts</h1>
        </div>
    )
}
