import React from "react";
import Modal from 'react-modal';
import { Link } from "react-router-dom";
import { PhoneInput } from 'react-international-phone';
import { useState } from 'react';
import 'react-international-phone/style.css';
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
function InventTemplate({data}){
    let subtitle;
    const [modalIsOpen, setModal] = React.useState(false);
    const customStyles = {
        content: {
          top: '45%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '300px',
          height: '450px',
        },
      };

      function openModal() {
        setModal(true);
      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = 'black';
      }
    
      function closeModal() {
        setModal(false);
      }
      const [phone, setPhone] = useState('');
    return(
        <div className="box">
            <div>
                <img src={data.image} alt="" width={250} height={250}/><br />
                <b>ԿՈԴ: {data.id}</b><br />
                {data.price}<br />
                {data.title}
            </div>
            <div className="buttones">
                <Link to={`/invent-parent/${data.id}`}>
                  <button className="butt-view">Դիտել</button>
                </Link>
                <button className="butt-order" onClick={openModal}>Պատվիրել</button>
            </div>
            <PureModal
                isOpen={modalIsOpen}
                onClose={() => {
                  setModal(false);
                  return true;
                }}
              >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Զամբյուղ</h2>
                <div className="form-order">Պատվիրելու համար լրացրեք ձեր տվյալները</div>
                <form action="https://getform.io/f/raeqnpxa" method="POST">
                  <input type="hidden" name="_gotcha"/>
                  <input type="hidden" name="code" value={data.id}/>
                  <input required type="text" name="username" placeholder="Անուն"/> <br/>
                  <input required type="email" name="email" placeholder="Էլ․ հասցե"/> <br/>
                  <PhoneInput
                    name="phone"
                    defaultCountry="am"
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                  />
                  <button disabled={phone.length < 11} className="order-butt">Պատվիրել </button><br/>
                  <button className="close-butt" onClick={closeModal}>Փակել</button>
                </form>
            </PureModal>
        </div>
        
    )
}

export default InventTemplate;