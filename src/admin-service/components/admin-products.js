import "../stylesSheets/admin-products.css"
import axios from "axios";






const AdminProducts = () => {

    function handleSubmit(event) {
        event.preventDefault();
        let formData = new FormData();
        formData.append("file", event.target.photo.files[0]);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: '/photo/upload',
            headers: {
                'Content-Type': 'multipart/form-data',

            },
            data : formData
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });

    }




    return (

        <div className="adminProduct-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Назва:</label>
                <input required='true' type="text" id="name" name="name"/>

                    <label htmlFor="price">Вартість:</label>
                    <input required='true' type="number" step="0.1" id="price" name="price"/>

                        <label htmlFor="quantity">Кількість:</label>
                        <input required='true' type="number" id="quantity" name="quantity"/>

                            <label htmlFor="description">Повний опис:</label>
                            <textarea required='true' id="description" name="description"></textarea>

                            <label htmlFor="specs">Характеристики продукта:</label>
                            <textarea required='true' id="specs" name="specs"></textarea>

                            <label htmlFor="category">Категорія:</label>
                            <select required='true' id="category" name="category">
                                <option value="">--Будь-ласка виберіть категорію--</option>
                                <option value="vzhyvana-tekhnika">Вживана техніка</option>
                                <option value="hlybokorozpushuvachi">Глибокорозпушувачі</option>
                                <option value="hreydery">Грейдери</option>
                                <option value="mishuvachi-khimikativ">Змішувачі хімікатів</option>
                                <option value="mulchuvachi">Мульчувачі</option>
                                <option value="pluhy">Плуги</option>
                                <option value="ripakovi-stoly">Ріпакові столи</option>
                                <option value="rozkydachi-dobryv">Розкидачі добрив</option>
                                <option value="rotatsiyni-borony">Ротаційні борони</option>
                                <option value="teleskopichni-navantazhuvachi">Телескопічні навантажувачі</option>
                                <option value="sydinnya-traktorni-sears-seating">Сидіння тракторні</option>
                            </select><br/>

                            <label htmlFor="photo">Фото:</label>
                            <input required='true' type="file" id="photo" name="photo"/>
                            <button type='submit'>Відправити</button>
            </form>
        </div>

    )
}

export default AdminProducts;
