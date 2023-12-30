import { useNavigate } from "react-router-dom";
let Featureproducts=()=>{
    let navigate=useNavigate()

    return(
        <>
            <h1>Feature Products</h1>
            <button onClick={()=>navigate(-1)}>Go Back</button>
        </>
    )
}

export default Featureproducts;