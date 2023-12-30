import { useNavigate } from "react-router-dom";

let Newproducts=()=>{
    let navigate=useNavigate()

    return(
        <div>
            <h1>Newproducts</h1>
            <button onClick={()=>navigate(-1)}>Go Back</button>
        </div>
    )
}

export default Newproducts;