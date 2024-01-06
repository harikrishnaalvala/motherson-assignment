import React from 'react'
import {CopyRight, Gmail, Instagram, Linkedln} from '../../icons/icon'
import './index.css'

const Contacts = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center col-12 col-lg-12 mb-3"
      id="contacts"
    >
      <div className="d-flex">
        <div className="m-2 icons">
          <Instagram />
        </div>
        <div className="m-2">
          <Linkedln />
        </div>
        <div className="m-2">
          <Gmail />
        </div>
      </div>
      <div className="">
        <p className="copyright">
          Copyright <CopyRight /> 2024.All Rights Reserved
        </p>
      </div>
    </div>
  )
}

export default Contacts
