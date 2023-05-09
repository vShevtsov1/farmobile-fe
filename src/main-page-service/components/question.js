import "../stylesheets/question.css"


const Question = () => {
    return (

        <div className='question-container'>
                <form className='questionForm'>
                        <label className='leaveRequest-text'>Залишити заявку</label>
                    <div className='formInside'>
                        <label htmlFor='name'>Ім'я</label>
                        <input required='true' placeholder="Введіть ваше ім'я" id = "name" name = "name"/>
                        <label htmlFor='name'>Телефон</label>
                        <input required='true' placeholder="Введіть ваш номер телефону" id = "name" name = "name"/>
                        <button className='button-phone-me' type='submit'>Зателефонувати мені</button>
                    </div>
                </form>
        </div>

    )
}

export default Question;
