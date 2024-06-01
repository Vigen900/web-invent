import './invent-parent.css';
import React, {useEffect} from "react";
import Countdown from "react-countdown";
import { useParams } from 'react-router-dom';
import db from '../db';
function InventParent(){
    const { id } = useParams();
    useEffect(() => {
        var style=document.createElement('style');
            style.type='text/css';
            if(style.styleSheet){
                style.styleSheet.cssText='#st-2 {display: none !important}';
            }else{
                style.appendChild(document.createTextNode('#st-2{display: none !important}'));
            }
        document.getElementsByTagName('head')[0].appendChild(style);
        // document.getElementById('st-2') && (document.getElementById('st-2').style.display = 'none');
        return () => {
            var style=document.createElement('style');
            style.type='text/css';
            if(style.styleSheet){
                style.styleSheet.cssText='#st-2 {display: flex !important}';
            }else{
                style.appendChild(document.createTextNode('#st-2{display: flex !important}'));
            }
                document.getElementsByTagName('head')[0].appendChild(style);
        };
      }, []);
      function sendResponse(event){
        event.preventDefault()
        const data = new FormData(event.target)
        const guestName = (data.get('guest-name'))
        const guestCount = +(data.get('guest-count'))
        const guestResponse = (data.get('guest-response')) == '1' ? true: false
        const inventId = 'Gexam_Armine_08_20'

        db.collection("guests").add({
            inventId: inventId,
            name: guestName,
            count: guestCount,
            isComing: guestResponse,
        }).then((querySnapshot) => {
            alert('Ձեր պատասխսանը պահպանվել է')
        })
      }
    return(
        <div>
            {id == 'HK101' && <div>
                <div className="invent-img">
                    <h3>Davit & Ani</h3>
                </div>
                <div className="invent-text">
                    <p>
                        <b>Սիրելի հյուրեր</b>
                    </p>
                    <span>
                        Մենք ցանկանում ենք Ձեզ հետ կիսել մեր 
                        կյանքի կարևորագույն օրերից մեկը։ 
                        Մեծ ուրախությամբ հրավիրում ենք Ձեզ մեր հարսանիքին։
                    </span>
                    <p>
                        <b>15.09.2024</b>
                    </p>
                    <div>
                        <Countdown date={Date.now() + 1000 * 60 * 60 * 24} />
                    </div>
                    <div>
                        <img src="https://i.pinimg.com/564x/c1/cb/50/c1cb5010256b490b9ce476fe53d472a7.jpg" width={'100%'}></img>
                    </div>
                </div>
                <div className="invent-info">
                    <div>
                        <img src="https://img.freepik.com/premium-vector/ring-logo-black-and-white-elements-outline-on-a-white-background_909217-136.jpg" width={200}/>
                        <h2>Պսակադրության արարողություն</h2>
                        <b>15:00</b><br/>
                        <b>Սուրբ Սարգիս եկեղեցի</b><br/>
                        <a target='_blank' href="https://www.google.com/maps/place/%D0%A6%D0%B5%D1%80%D0%BA%D0%BE%D0%B2%D1%8C+%D0%A1%D0%B2%D1%8F%D1%82%D0%BE%D0%B3%D0%BE+%D0%A1%D0%B0%D1%80%D0%B3%D0%B8%D1%81%D0%B0/@40.1814741,44.5628426,17z/data=!3m1!4b1!4m6!3m5!1s0x406abd7460af15e7:0x70d40d0add75bb7f!8m2!3d40.18147!4d44.5654175!16s%2Fm%2F06w3pz6?entry=ttu">
                            Ինչպես հասնել
                        </a>
                    </div>
                    <div className="party-time">
                        <img src="https://i.pinimg.com/564x/2e/ca/ce/2ecaceb98ac4c61a4bee22b2d4f00100.jpg" width={200}></img>
                        <h2>Հարսանյաց հանդիսություն</h2>
                        <b>18:00</b><br/>
                        <b>Dvin Music Hall</b> <br/>
                        <a href="https://www.google.com/maps/place/Dvin+Music+Hall/@40.1838564,44.4987711,17z/data=!3m1!4b1!4m6!3m5!1s0x406abdada26c5955:0x8149e27960baf01f!8m2!3d40.1838523!4d44.501346!16s%2Fg%2F11h0vstl5f?entry=ttu">
                            Ինչպես հասնել
                        </a>
                    </div>
                    <div className="info-end">
                        <img src="https://images.vexels.com/media/users/3/137321/isolated/preview/72838e83cb97970f18dcd02d7965c0ed-heart-logo-couple.png" width={130}></img>
                        <p>Սիրով սպասում ենք Ձեզ</p>
                    </div>
                </div>
            </div>}


            {id == 'HK102' && <div>
                <div className="invent-img">
                    <h3>Davit & Ani</h3>
                </div>
                <div className="invent-text">
                    <p>
                        <b>Սիրելի հյուրեր</b>
                    </p>
                    <span>
                        Մենք ցանկանում ենք Ձեզ հետ կիսել մեր 
                        կյանքի կարևորագույն օրերից մեկը։ 
                        Մեծ ուրախությամբ հրավիրում ենք Ձեզ մեր հարսանիքին։
                    </span>
                    <p>
                        <b>15.09.2024</b>
                    </p>
                    <div>
                        <Countdown date={Date.now() + 1000 * 60 * 60 * 24} />
                    </div>
                    <div>
                        <img src="https://i.pinimg.com/564x/c1/cb/50/c1cb5010256b490b9ce476fe53d472a7.jpg" width={'100%'}></img>
                    </div>
                </div>
                <div className="invent-info">
                    <div>
                        <img src="https://img.freepik.com/premium-vector/ring-logo-black-and-white-elements-outline-on-a-white-background_909217-136.jpg" width={200}/>
                        <h2>Պսակադրության արարողություն</h2>
                        <b>15:00</b><br/>
                        <b>Սուրբ Սարգիս եկեղեցի</b><br/>
                        <a target='_blank' href="https://www.google.com/maps/place/%D0%A6%D0%B5%D1%80%D0%BA%D0%BE%D0%B2%D1%8C+%D0%A1%D0%B2%D1%8F%D1%82%D0%BE%D0%B3%D0%BE+%D0%A1%D0%B0%D1%80%D0%B3%D0%B8%D1%81%D0%B0/@40.1814741,44.5628426,17z/data=!3m1!4b1!4m6!3m5!1s0x406abd7460af15e7:0x70d40d0add75bb7f!8m2!3d40.18147!4d44.5654175!16s%2Fm%2F06w3pz6?entry=ttu">
                            Ինչպես հասնել
                        </a>
                    </div>
                    <div className="party-time">
                        <img src="https://i.pinimg.com/564x/2e/ca/ce/2ecaceb98ac4c61a4bee22b2d4f00100.jpg" width={200}></img>
                        <h2>Հարսանյաց հանդիսություն</h2>
                        <b>18:00</b><br/>
                        <b>Dvin Music Hall</b> <br/>
                        <a href="https://www.google.com/maps/place/Dvin+Music+Hall/@40.1838564,44.4987711,17z/data=!3m1!4b1!4m6!3m5!1s0x406abdada26c5955:0x8149e27960baf01f!8m2!3d40.1838523!4d44.501346!16s%2Fg%2F11h0vstl5f?entry=ttu">
                            Ինչպես հասնել
                        </a>
                    </div>
                    <div className="info-end">
                        <img src="https://images.vexels.com/media/users/3/137321/isolated/preview/72838e83cb97970f18dcd02d7965c0ed-heart-logo-couple.png" width={130}></img>
                        <p>Սիրով սպասում ենք Ձեզ</p>
                    </div>
                </div>
            </div>}


            {id == 'HK103' && <div>
                <div className="invent-img">
                    <h3>Davit & Ani</h3>
                </div>
                <div className="invent-text">
                    <p>
                        <b>Սիրելի հյուրեր</b>
                    </p>
                    <span>
                        Մենք ցանկանում ենք Ձեզ հետ կիսել մեր 
                        կյանքի կարևորագույն օրերից մեկը։ 
                        Մեծ ուրախությամբ հրավիրում ենք Ձեզ մեր հարսանիքին։
                    </span>
                    <p>
                        <b>15.09.2024</b>
                    </p>
                    <div>
                        <Countdown date={Date.now() + 1000 * 60 * 60 * 24} />
                    </div>
                    <div>
                        <img src="https://i.pinimg.com/564x/c1/cb/50/c1cb5010256b490b9ce476fe53d472a7.jpg" width={'100%'}></img>
                    </div>
                </div>
                <div className="invent-info">
                    <div>
                        <img src="https://img.freepik.com/premium-vector/ring-logo-black-and-white-elements-outline-on-a-white-background_909217-136.jpg" width={200}/>
                        <h2>Պսակադրության արարողություն</h2>
                        <b>15:00</b><br/>
                        <b>Սուրբ Սարգիս եկեղեցի</b><br/>
                        <a target='_blank' href="https://www.google.com/maps/place/%D0%A6%D0%B5%D1%80%D0%BA%D0%BE%D0%B2%D1%8C+%D0%A1%D0%B2%D1%8F%D1%82%D0%BE%D0%B3%D0%BE+%D0%A1%D0%B0%D1%80%D0%B3%D0%B8%D1%81%D0%B0/@40.1814741,44.5628426,17z/data=!3m1!4b1!4m6!3m5!1s0x406abd7460af15e7:0x70d40d0add75bb7f!8m2!3d40.18147!4d44.5654175!16s%2Fm%2F06w3pz6?entry=ttu">
                            Ինչպես հասնել
                        </a>
                    </div>
                    <div className="party-time">
                        <img src="https://i.pinimg.com/564x/2e/ca/ce/2ecaceb98ac4c61a4bee22b2d4f00100.jpg" width={200}></img>
                        <h2>Հարսանյաց հանդիսություն</h2>
                        <b>18:00</b><br/>
                        <b>Dvin Music Hall</b> <br/>
                        <a href="https://www.google.com/maps/place/Dvin+Music+Hall/@40.1838564,44.4987711,17z/data=!3m1!4b1!4m6!3m5!1s0x406abdada26c5955:0x8149e27960baf01f!8m2!3d40.1838523!4d44.501346!16s%2Fg%2F11h0vstl5f?entry=ttu">
                            Ինչպես հասնել
                        </a>
                    </div>
                    <div className='answer-text'>
                        <b>Խնդրում ենք հաստատել ձեր ներկայությունը</b>
                        <p>Կսպասենք ձեր պատասխանին մինչև մարտի 30-ը</p>
                    </div>
                    <form onSubmit={sendResponse} className='answer-input'>
                        <label>
                            <input type='radio' name='guest-response' value='1'/>
                            <span>Մենք կգանք </span><br/>
                        </label>
                        <label>
                            <input type='radio' name='guest-response' value='0'/>
                            <span>Չենք կարող գալ</span>
                        </label>
                        <div className='text-input'>
                            <p>Խնդրում ենք նշել Ձեր անունը և հյուրերի թիվը</p>
                            <input name='guest-name' type='text' placeholder='Անուն Ազգանուն'/><br/>
                            <input name='guest-count' type='number' placeholder='Հյուրերի թիվ'/>
                        </div>
                        <button className='send-butt'>ՈՒղարկել</button>
                    </form>
                    <div className="info-end">
                        <img src="https://images.vexels.com/media/users/3/137321/isolated/preview/72838e83cb97970f18dcd02d7965c0ed-heart-logo-couple.png" width={130}></img>
                        <p>Սիրով սպասում ենք Ձեզ</p>
                    </div>
                </div>
            </div>}



            {id == 'HK104' && <div>
                <div className="invent-img">
                    <h3>Davit & Ani</h3>
                </div>
                <div className="invent-text">
                    <p>
                        <b>Սիրելի հյուրեր</b>
                    </p>
                    <span>
                        Մենք ցանկանում ենք Ձեզ հետ կիսել մեր 
                        կյանքի կարևորագույն օրերից մեկը։ 
                        Մեծ ուրախությամբ հրավիրում ենք Ձեզ մեր հարսանիքին։
                    </span>
                    <p>
                        <b>15.09.2028</b>
                    </p>
                    <div>
                        <Countdown date={Date.now() + 1000 * 60 * 60 * 24} />
                    </div>
                    <div>
                        {/* <img src="https://i.pinimg.com/564x/c1/cb/50/c1cb5010256b490b9ce476fe53d472a7.jpg" width={'100%'}></img> */}
                    </div>
                </div>
                <div className="invent-info">
                    <div>
                        <img src="https://img.freepik.com/premium-vector/ring-logo-black-and-white-elements-outline-on-a-white-background_909217-136.jpg" width={200}/>
                        <h2>Պսակադրության արարողություն</h2>
                        <b>15:00</b><br/>
                        <b>Սուրբ Սարգիս եկեղեցի</b><br/>
                        <a target='_blank' href="https://www.google.com/maps/place/%D0%A6%D0%B5%D1%80%D0%BA%D0%BE%D0%B2%D1%8C+%D0%A1%D0%B2%D1%8F%D1%82%D0%BE%D0%B3%D0%BE+%D0%A1%D0%B0%D1%80%D0%B3%D0%B8%D1%81%D0%B0/@40.1814741,44.5628426,17z/data=!3m1!4b1!4m6!3m5!1s0x406abd7460af15e7:0x70d40d0add75bb7f!8m2!3d40.18147!4d44.5654175!16s%2Fm%2F06w3pz6?entry=ttu">
                            Ինչպես հասնել
                        </a>
                    </div>
                    <div className="party-time">
                        <img src="https://i.pinimg.com/564x/2e/ca/ce/2ecaceb98ac4c61a4bee22b2d4f00100.jpg" width={200}></img>
                        <h2>Հարսանյաց հանդիսություն</h2>
                        <b>18:00</b><br/>
                        <b>Dvin Music Hall</b> <br/>
                        <a href="https://www.google.com/maps/place/Dvin+Music+Hall/@40.1838564,44.4987711,17z/data=!3m1!4b1!4m6!3m5!1s0x406abdada26c5955:0x8149e27960baf01f!8m2!3d40.1838523!4d44.501346!16s%2Fg%2F11h0vstl5f?entry=ttu">
                            Ինչպես հասնել
                        </a>
                    </div>
                    <div className="info-end">
                        <img src="https://images.vexels.com/media/users/3/137321/isolated/preview/72838e83cb97970f18dcd02d7965c0ed-heart-logo-couple.png" width={130}></img>
                        <p>Սիրով սպասում ենք Ձեզ</p>
                    </div>
                </div>
            </div>}
            {id == 'HK109' && <div>
                <div className="invent-img" style={{'background-image':'url("https://thb.tildacdn.one/tild3131-3165-4663-a534-623439323736/-/resize/20x/02.jpg")'}}>
                    <h3>Armen & Elen</h3>
                </div>
            </div>}
        </div>
    )
}


export default InventParent;