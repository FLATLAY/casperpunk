

import { useState , useEffect } from "react";


import {
    AddressModalContainer,
    FlexRow,
    ModalTitle,
    CloseIconComponent,
    CloseIconImg,
  } from "./EditAddressModal-style";

const EditAddressModal = ({showModal , close , addressId}:{showModal:boolean; close:()=>void , addressId:string}) => {

    const [address , setAddress ] = useState(null)
    return <></>
}

export default EditAddressModal