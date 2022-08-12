import React,{useRef} from 'react';
import Link from "next/link";
import {AiOutlineMinus,AiOutlinePlus,AiOutlineLeft,AiOutlineRight} from "react-icons/ai";
import {TiDeleteOutline} from "react-icons/ti"
import toast from "react-hot-toast";

import { useStateContext } from '../../context/StateConTexT';
import { urlFor } from '../../lib/client';

export default function Cart() {
const cartRef = useRef();
const {totalprice,totalQty,cartItem,setShowcart} = useStateContext();

  return (
    <div ref={cartRef}>
        <div>
            
        </div>
    </div>
  )
}
