import React from 'react';

const CardGejala = ({listGejala,no,keterangan1,onChangeKeterangan}) => {
    return (
            
            <tr className="stripe-dark">
                <td className="pa3">{no}</td>
                <td className="pa3">{listGejala}</td>
                <td className="pa3"><input type="button" onClick={()=>onk(`${no}Iya`)}  value='Ya'   /> <input type="button" onClick={()=>onChangeKeterangan(`${no}Tidak`)}  value='Tidak'   /></td>
                <td className="pa3">{keterangan{no}}</td>

            </tr>
        
    );

}

export default CardGejala;