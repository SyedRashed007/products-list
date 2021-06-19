import {React, useState} from 'react'
import {products} from "../../data/products"
import Main from '../Main/Main'
import { Box,Button,Checkbox } from "@chakra-ui/react"
import './Sidebar.css' 

const Sidebar=()=> {
    const [data, setData] = useState(products)
    const [selectedsize, setSelectedsize] = useState([])
    const [selectedgender, setSelectedgender] = useState([])
    const [selectedbrand, setSelectedbrand] = useState([])
    
    const HightoLow = () => {
        setData([...data].sort((a,b)=>b.price-a.price))
        console.log(data)
    }
    const LowtoHigh = () => {
        setData([...data].sort((a,b) =>a.price-b.price))
    }

    const sizeFilter = (e) => {
        setSelectedsize([...selectedsize,e.target.value])

        if(e.target.checked){
            setData([...data].filter((a)=>a.size.includes(e.target.value)))
            console.log(data)
        }
        else{
            let index=selectedsize?.indexOf(e.target.value);
            if(index !== -1){
                selectedsize.splice(index,1);
                setSelectedsize(selectedsize)
            }
            const[filteredproduct]=selectedsize.map((size)=>
            products.filter((a)=>a.size.includes(size))
            
            );
            console.log(filteredproduct)
            setData(filteredproduct?.length? filteredproduct:products)
        }
    }
    const genderfilter=(e)=>{
        setSelectedgender([...selectedgender,e.target.value])
        if(e.target.checked){
            setData([...data].filter((a)=>a.gender.includes(e.target.value)))
            console.log(data)
        }
        else{
            let index=selectedgender?.indexOf(e.target.value);
            if(index !== -1){
                selectedgender.splice(index,1);
                setSelectedgender(selectedgender)
            }
            const[filteredproduct]=selectedgender.map((gender)=>
            products.filter((a)=>a.gender.includes(gender))
            
            );
            console.log(filteredproduct)
            setData(filteredproduct?.length? filteredproduct:products)
        }
    }
    const brandfilter=(e)=>{
        setSelectedbrand([...selectedbrand,e.target.value])
        if(e.target.checked){
            setData([...data].filter((a)=>a.brand.includes(e.target.value)))
            console.log(data)
        }
        else{
            let index=selectedbrand?.indexOf(e.target.value);
            if(index !== -1){
                selectedbrand.splice(index,1);
                setSelectedbrand(selectedbrand)
            }
            const[filteredproduct]=selectedbrand.map((brand)=>
            products.filter((a)=>a.brand.includes(brand))
            
            );
            console.log(filteredproduct)
            setData(filteredproduct?.length? filteredproduct:products)
        }
        
    }

    const clearfilter =()=>{
        setData(products)
    }
    
    return (
        <div className="container">
            <div className="left">
                <Box display="flex" flexDirection="column" color="black">
                Price:
                <Button color="black" mb={5} onClick={HightoLow}>High to Low</Button>
                <Button color="black" mb={5} onClick={LowtoHigh}>Low to High</Button>
                </Box>
                <Box display="flex" flexDirection="column"color="black">
                Size:
                <Checkbox value="S" onChange={(e) => sizeFilter(e)}>Small</Checkbox>
                <Checkbox value="S" onChange={(e) => sizeFilter(e)}>Medium</Checkbox>
                <Checkbox value="S" onChange={(e) => sizeFilter(e)}>XL</Checkbox>
                </Box>
                <Box display="flex" flexDirection="column" color="black">
                    Gender:
                    <Checkbox value="male" onChange={(e)=>genderfilter(e)}>Male</Checkbox>
                    <Checkbox value="female" onChange={(e)=>genderfilter(e)}>Female</Checkbox>
                </Box>
                
                <Box display="flex" flexDirection="column" color="black">
                Brands:
                    <Checkbox value="Peter England" onChange={(e)=>brandfilter(e)}>Peter England</Checkbox>
                    <Checkbox value="Highlighter" onChange={(e)=>brandfilter(e)}>Highlighter</Checkbox>
                    <Checkbox value="Gucci" onChange={(e)=>brandfilter(e)}>Gucci</Checkbox>
                    <Checkbox value="Indian Terrain" onChange={(e)=>brandfilter(e)}>Indian Terrain</Checkbox>
                    <Checkbox value="Nayo" onChange={(e)=>brandfilter(e)}>Nayo</Checkbox>
                    <Checkbox value="Van Heusen" onChange={(e)=>brandfilter(e)}>Van Heusen</Checkbox>
                    
                </Box>
                <Button mb={5} onClick={clearfilter} color="black">Clear filter</Button>
            </div>
            <div className="right">
                <Main data={data}/>
            </div>
        </div>
    )
}

export default Sidebar
