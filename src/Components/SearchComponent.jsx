import React from 'react'
import { useState } from 'react'

// export const SearchComponent = ( {setCat, catAdds} ) => {
export const SearchComponent = ( {addNewCategory} ) => {
    const [inputValue, setinputValue] = useState("")
    const changeInput = (e) =>{
        let newValue = e.target.value
        setinputValue(newValue)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Valor capturado" + inputValue);
        if (inputValue.trim() === "") return
        addNewCategory(inputValue.trim());
        // setCat([...catAdds,inputValue]) // METODO VALIDO, SIN EMBARGO SE OPTA POR ENVIAR DESDE EL HIJO HACIA EL PADRE
        setinputValue("");
    }


    return (
    <form onSubmit={handleSubmit}>
      <input className='form-control' type="search" value={inputValue} onChange={changeInput} />
    </form>
  )
}
