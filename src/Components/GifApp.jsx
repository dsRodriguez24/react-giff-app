import { useState } from "react"
import { SearchComponent } from "./SearchComponent"
import { ItemComponent } from "./ItemComponent"



export const GifApp = () => {
    const [categories, setCategories] = useState( [ 'COD' ] )
    const addCategory = (newValue) => {
        if(categories.includes(newValue)) return;
        setCategories( [ ...categories, newValue ] )
    }
    
    return (
    <>
        <h1 className="text-center">Giff App Expert</h1>
        {/* <SearchComponent setCat={setCategories} catAdds={categories} />*/}
        {/* EL VALUE PROVIENE DEL COMPONENTE SEARCH */}
        <SearchComponent addNewCategory={ (value) => addCategory( value) } />        
        {/* { categories.map( (category, index) => <li key={index}>{category}</li>) } */}
        { categories.map( (category) => <ItemComponent key={category} category={category}/>) }
    </>
  )
}
