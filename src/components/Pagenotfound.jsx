import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import "../assets/stylesheets/components/pagenotfound.scss"


let Pagenotfound = () => {

    let navigate = useNavigate()

    return (
        <>
        <div className="page-not-found">
            <Container>
                <h2>404 Page not found</h2>
                <button onClick={() => navigate(-1)}>Go back</button>
            </Container>
        </div>
        </>
    )
}

export default Pagenotfound;