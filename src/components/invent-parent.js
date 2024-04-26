import './invent-parent.css';
import React from "react";
import Countdown from "react-countdown";
import { useParams } from 'react-router-dom';
function InventParent(){
    const { id } = useParams();
    
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
        </div>
    )
}


export default InventParent;