import "./ContacForm.css";
import React from 'react';

const ContacForm = () => {
    return (
        <div className="contact-form">
            <h1>Envie uma mensagem para nos!!!</h1>
            <form>
                <input type="text" placeholder="Nome" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Assunto" />
                <textarea placeholder="Mensagem" rows="4">
                    
                </textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default ContacForm;
