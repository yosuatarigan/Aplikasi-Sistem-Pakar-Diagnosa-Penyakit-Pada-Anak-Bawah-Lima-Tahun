import React from 'react';

const CardKeluhan = ({no,keluhan,keterangan,onChangek,t}) => {
    return (
            
            <tr className="stripe-dark">
                <td className="pa3">{no}</td>
                <td className="pa3">{keluhan}</td>
                <td className="pa3"><input onClick={()=> onChangek('Iya',no)}  type="button" value='Ya'   /> <input onClick={()=> onChangek('Tidak',no)} type="button"   value='Tidak'   /></td>
                <td className="pa3">{keterangan}</td>

            </tr>
        
    );

}

export default CardKeluhan;