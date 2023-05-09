import "../stylesheets/footer.css"
import companyLogo from "../images/farm-machine-tractor-vehicle-svgrepo-com.svg"

const Question = () => {
    return (

        <footer>
            <div className='blur'>
                <div className='ourCompany-container'>
                    <div className='companyName'>
                        <img src={companyLogo} className='companyLogo'/>
                        <label>Farmobile</label>
                    </div>
                </div>
            </div>

        </footer>

    )
}

export default Question;
