import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import { useStateContext } from '../../context/StateConTexT';

export default function SizeCard({type,product}) {
    const [size,setSize] = useState('S');
    const {decqty,incqty,qty,onADDtocart,onNewSize} = useStateContext();
  return (
    <>
    <div>
        {
           type === 'Tsize' && (
            <div>
            <div className="w-36 mb-4">
            <Form.Select aria-label="Selcet your Size" onChange={(e)=> setSize(e.target.value)} >
                <option value="S">Selct your Size</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="2XL">2XL</option>
                <option value="3XL">3XL</option>
                <option value="4XL">4XL</option>
                <option value="5XL">5XL</option>
            </Form.Select>
            </div>
                <div>
                    <h5 className="mb-2">You Selected {size} {onNewSize(product,size)} Size</h5>
                </div>
            </div>
           )
        
        }
        <div>
            {
                type === 'Ssize' && (
                    <div>
                        <div className="w-36 mb-4">
                        <Form.Select aria-label="Selcet your Size" onChange={(e)=> setSize(e.target.value)} >
                            <option value="S">Selct your Size</option>
                            <option value="32">32</option>
                            <option value="33">33</option>
                            <option value="34">34</option>
                            <option value="36L">36</option>
                            <option value="38">38</option>
                            <option value="40">40</option>
                            <option value="42">42</option>
                            <option value="44">44</option>
                            <option value="46">46</option>
                        </Form.Select>
                    </div>
                        <div>
                            <h5 className="mb-2">You Selected {size} {onNewSize(product,size)} Size</h5>
                        </div>
             </div>
                )
            }
        </div>
   
    </div>
    
    </>
  )
}
