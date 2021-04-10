import {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import {GifGrid} from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setcategories] = useState(['Bon jovi']);

    return <>
        <h2>GifExpertApp</h2>

        <AddCategory 
            setcategories={setcategories}/>

        <hr/>

        <ul>
            {
                categories.map((cat, i) => {

                   return <GifGrid 
                        key={cat}
                        category = {cat} />
                })
            }
        </ul>

        

    </>
}

export default GifExpertApp;