import React from "react";
import { LoginModalSlide } from "./LoginModalSlide";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import "./LoginModal.scss";

export function LoginModal({ isOpen, closeLoginModal, loginModalSlide }) {
  return(
    <>
      {isOpen &&
      <div className="modal">
        <div className="modal-container">
          <section className="modal__section--left">
            <LoginModalSlide loginModalSlide={loginModalSlide} />
          </section>
          <section className="modal__section--right">
            <CloseOutlinedIcon 
              onClick={closeLoginModal}
              style={{ width: "2.5rem", height: "2.5rem", position: "absolute", top: 20, right: 20 }} 
            />
          </section>
        </div>
      </div>
      }
    </>
  )
}