import React from "react";
import Modal from 'react-modal';
import { Link } from "react-router-dom";
function InventTemplate({data}){
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
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
        setIsOpen(true);
      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = 'black';
      }
    
      function closeModal() {
        setIsOpen(false);
      }
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

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Զամբյուղ</h2>
                <div>Պատվիրելու համար լրացրեք ձեր տվյալները</div>
                <form>
                <input type="text" placeholder="Անուն"/> <br/>
                <input type="email" placeholder="Էլ․ հասցե"/> <br/>
                <button className="order-butt">Պատվիրել </button><br/>
                <button onClick={closeModal}>close</button>
                </form>
            </Modal>
        </div>
        
    )
}

export default InventTemplate;