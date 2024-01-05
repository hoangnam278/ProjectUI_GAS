import React from "react";
import iconNote from "../images/Note.svg";
import iconClock from "../images/clock.png";
import iconAttach from "../images/Attach.svg";
import iconCart from "../images/Cart.svg";
function BillUser() {
  return (
    <div className="container">
      <div className="header">
        {" "}
        <h1>주문 목록</h1>
        <div className="idUser">
          <div className="name">csacascascas</div>
        </div>
      </div>

      <div className=" container_Bill" style={{display:"flex"}}>
        <div className="Bill_Detail">
          <div className="time">
            <div className="idBill">
              <img src={iconNote} alt="ID_BILL" />
              <p>148</p>
            </div>
            <div className="detailTime">
              <div className="hours">
                <img src={iconClock} alt="Clock" />
                <p>09:35</p>
              </div>
              <div className="date">Date : 20231019153233</div>
            </div>
          </div>
          <div className="Detail_Drink">
            <div className="ContainerDrink">
              <div className="NameDrink">
                <p>아이스아메리카노</p>
                <div>
                  <p>1</p>
                  <p>2,500원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  달게
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  얼음많이
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  1샷
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
            </div>
            <div className="ContainerDrink">
              <div className="NameDrink">
                <p>아이스아메리카노</p>
                <div>
                  <p>1</p>
                  <p>2,500원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  달게
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  얼음많이
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  1샷
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
            </div>
            <div className="ContainerDrink">
              <div className="NameDrink">
                <p>아이스아메리카노</p>
                <div>
                  <p>1</p>
                  <p>2,500원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  달게
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  얼음많이
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  1샷
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
            </div>
            <div className="Total">
              <p>아이스아메리카노</p>
              <p>13,000원</p>
            </div>
          </div>
          <div className="AddCart">
            <img src={iconCart} alt="Cart" />
            <div>준비완료</div>
          </div>
        </div>
        <div className="Bill_Detail">
          <div className="time">
            <div className="idBill">
              <img src={iconNote} alt="ID_BILL" />
              <p>148</p>
            </div>
            <div className="detailTime">
              <div className="hours">
                <img src={iconClock} alt="Clock" />
                <p>09:35</p>
              </div>
              <div className="date">Date : 20231019153233</div>
            </div>
          </div>
          <div className="Detail_Drink">
            <div className="ContainerDrink">
              <div className="NameDrink">
                <p>아이스아메리카노</p>
                <div>
                  <p>1</p>
                  <p>2,500원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  달게
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  얼음많이
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  1샷
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
            </div>
            <div className="ContainerDrink">
              <div className="NameDrink">
                <p>아이스아메리카노</p>
                <div>
                  <p>1</p>
                  <p>2,500원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  달게
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  얼음많이
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  1샷
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
            </div>
            <div className="ContainerDrink">
              <div className="NameDrink">
                <p>아이스아메리카노</p>
                <div>
                  <p>1</p>
                  <p>2,500원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  달게
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  얼음많이
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  1샷
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
            </div>
            <div className="Total">
              <p>아이스아메리카노</p>
              <p>13,000원</p>
            </div>
          </div>
          <div className="AddCart">
            <img src={iconCart} alt="Cart" />
            <div>준비완료</div>
          </div>
        </div>
        <div className="Bill_Detail">
          <div className="time">
            <div className="idBill">
              <img src={iconNote} alt="ID_BILL" />
              <p>148</p>
            </div>
            <div className="detailTime">
              <div className="hours">
                <img src={iconClock} alt="Clock" />
                <p>09:35</p>
              </div>
              <div className="date">Date : 20231019153233</div>
            </div>
          </div>
          <div className="Detail_Drink">
            <div className="ContainerDrink">
              <div className="NameDrink">
                <p>아이스아메리카노</p>
                <div>
                  <p>1</p>
                  <p>2,500원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  달게
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  얼음많이
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  1샷
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
            </div>
            <div className="ContainerDrink">
              <div className="NameDrink">
                <p>아이스아메리카노</p>
                <div>
                  <p>1</p>
                  <p>2,500원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  달게
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  얼음많이
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  1샷
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
            </div>
            <div className="ContainerDrink">
              <div className="NameDrink">
                <p>아이스아메리카노</p>
                <div>
                  <p>1</p>
                  <p>2,500원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  달게
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  얼음많이
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  1샷
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
            </div>
            <div className="Total">
              <p>아이스아메리카노</p>
              <p>13,000원</p>
            </div>
          </div>
          <div className="AddCart">
            <img src={iconCart} alt="Cart" />
            <div>준비완료</div>
          </div>
        </div>
        <div className="Bill_Detail">
          <div className="time">
            <div className="idBill">
              <img src={iconNote} alt="ID_BILL" />
              <p>148</p>
            </div>
            <div className="detailTime">
              <div className="hours">
                <img src={iconClock} alt="Clock" />
                <p>09:35</p>
              </div>
              <div className="date">Date : 20231019153233</div>
            </div>
          </div>
          <div className="Detail_Drink">
            <div className="ContainerDrink">
              <div className="NameDrink">
                <p>아이스아메리카노</p>
                <div>
                  <p>1</p>
                  <p>2,500원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  달게
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  얼음많이
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  1샷
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
            </div>
            <div className="ContainerDrink">
              <div className="NameDrink">
                <p>아이스아메리카노</p>
                <div>
                  <p>1</p>
                  <p>2,500원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  달게
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  얼음많이
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  1샷
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
            </div>
            <div className="ContainerDrink">
              <div className="NameDrink">
                <p>아이스아메리카노</p>
                <div>
                  <p>1</p>
                  <p>2,500원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  달게
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  얼음많이
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  1샷
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
            </div>
            <div className="Total">
              <p>아이스아메리카노</p>
              <p>13,000원</p>
            </div>
          </div>
          <div className="AddCart">
            <img src={iconCart} alt="Cart" />
            <div>준비완료</div>
          </div>
        </div>
        <div className="Bill_Detail">
          <div className="time">
            <div className="idBill">
              <img src={iconNote} alt="ID_BILL" />
              <p>148</p>
            </div>
            <div className="detailTime">
              <div className="hours">
                <img src={iconClock} alt="Clock" />
                <p>09:35</p>
              </div>
              <div className="date">Date : 20231019153233</div>
            </div>
          </div>
          <div className="Detail_Drink">
            <div className="ContainerDrink">
              <div className="NameDrink">
                <p>아이스아메리카노</p>
                <div>
                  <p>1</p>
                  <p>2,500원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  달게
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  얼음많이
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  1샷
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
            </div>
            <div className="ContainerDrink">
              <div className="NameDrink">
                <p>아이스아메리카노</p>
                <div>
                  <p>1</p>
                  <p>2,500원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  달게
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  얼음많이
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  1샷
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
            </div>
            <div className="ContainerDrink">
              <div className="NameDrink">
                <p>아이스아메리카노</p>
                <div>
                  <p>1</p>
                  <p>2,500원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  달게
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  얼음많이
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  1샷
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
            </div>
            <div className="Total">
              <p>아이스아메리카노</p>
              <p>13,000원</p>
            </div>
          </div>
          <div className="AddCart">
            <img src={iconCart} alt="Cart" />
            <div>준비완료</div>
          </div>
        </div>
        <div className="Bill_Detail">
          <div className="time">
            <div className="idBill">
              <img src={iconNote} alt="ID_BILL" />
              <p>148</p>
            </div>
            <div className="detailTime">
              <div className="hours">
                <img src={iconClock} alt="Clock" />
                <p>09:35</p>
              </div>
              <div className="date">Date : 20231019153233</div>
            </div>
          </div>
          <div className="Detail_Drink">
            <div className="ContainerDrink">
              <div className="NameDrink">
                <p>아이스아메리카노</p>
                <div>
                  <p>1</p>
                  <p>2,500원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  달게
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  얼음많이
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  1샷
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
            </div>
            <div className="ContainerDrink">
              <div className="NameDrink">
                <p>아이스아메리카노</p>
                <div>
                  <p>1</p>
                  <p>2,500원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  달게
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  얼음많이
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  1샷
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
            </div>
            <div className="ContainerDrink">
              <div className="NameDrink">
                <p>아이스아메리카노</p>
                <div>
                  <p>1</p>
                  <p>2,500원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  달게
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  얼음많이
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
              <div className="OptionDrink NameDrink">
                <p>
                  <img src={iconAttach} alt="" />
                  1샷
                </p>
                <div>
                  <p>0원</p>
                </div>
              </div>
            </div>
            <div className="Total">
              <p>아이스아메리카노</p>
              <p>13,000원</p>
            </div>
          </div>
          <div className="AddCart">
            <img src={iconCart} alt="Cart" />
            <div>준비완료</div>
          </div>
        </div>
      </div>
      <div className="footerReception">
        <p>접수대기</p>
        <span>5</span>
      </div>
    </div>
  );
}

export default BillUser;
