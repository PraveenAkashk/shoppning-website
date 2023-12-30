import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Link, Outlet } from 'react-router-dom';
let Productdetail = () => {

    let [productList, setproductList]= useState(null)
    let [isloading, setisloading]=useState(true)

    let API_URL="https://api.escuelajs.co/api/v1/products"

    let apicall=async ()=>{

        if(isloading){
            try{

                let data= await fetch(API_URL);
                let response = await data.json();
                setproductList(response)
            }
            catch(error){
                console.error(error)
            }
    
            finally{
                setisloading(false)
            }
        }
    }

    useEffect(()=>{
        apicall()
    },[])

    console.log(productList)

    return (
        <div>
            <Container>
                <Link to="feature">Feature Products</Link>
                <Link to="new-products">New Products</Link>
                {
                    isloading ? 

                    <h2>Loading</h2> :
                    <h2>
                        Data Loaded
                    </h2>
                }

                <div>
                </div>
                <Outlet/>
            </Container>
        </div>
    )
}

export default Productdetail;