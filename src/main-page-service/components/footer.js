import "../stylesheets/footer.css"
import { ReactComponent as CompanyLogo } from '../images/farm-machine-tractor-vehicle-svgrepo-com.svg';

const Question = () => {
    return (

        <footer>
            <div className='blur'>
                <div className='ourCompany-container'>
                        <CompanyLogo/>
                    <div className='companyName'>
                        <label className='mainName'>Farmobile</label>
                        <label className='tagline'>Історія зустрічає майбутнє: наші технології - ваш успіх!</label>
                    </div>
                    <div className='additional-info'>
                        <i>< a href="mailto:farmobile@gmail.com">farmobile@gmail.com< /a></i>
                        <span className='telefon'> <br/>(055) 555-55-55</span>
                        <span className='workTime'><br/>Пн-Пт з 9.00 до 18.00
                        <br/>Сб-Нд вихідний</span>
                    </div>
                </div>
            </div>

        </footer>

    )
}

export default Question;
