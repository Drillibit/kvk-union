import React, { Component } from 'react';


class ItemForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: props.item ? props.item.name : '',
            price: props.item ? props.item.price : '',
            image: props.item ? props.item.image : '',
            description: props.item ? props.item.description : ''
        }
    } 
   
    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    };
    onPriceChange = (e) => {
        const price = e.target.value;
        if (!price || price.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ price }));
        }
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onImageChange = (e) => {
        const image = e.target.files[0];
        this.setState(() => ({ image }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.name || !this.state.price || !this.state.description) {
            this.setState(() => ({ error: 'Пожалуйста заполните все поля.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                name: this.state.name,
                price: parseFloat(this.state.price, 10),
                description: this.state.description,
                image: this.state.image
            });
        }
    };
    render() {
        return (
            <div className="row container">
                Item Form!
                {this.state.error && <p>{this.state.error}</p>}
                <form className="col s12" onSubmit={this.onSubmit} encType="multipart/form-data">
                    <div className="input-field">
                        <input
                            type="text"
                            placeholder="Название товара"
                            autoFocus
                            value={this.state.name}
                            onChange={this.onNameChange}
                        />
                    </div>
                    <div className="input-field">
                        <input
                            type="text"
                            placeholder="Цена"
                            value={this.state.price}
                            onChange={this.onPriceChange}
                        />
                    </div>
                    <div className="file-field input-field">
                        <div className="btn">
                            <span>Картинка</span>
                            <input 
                                type="file"
                                name="image"
                                onChange={this.onImageChange}
                            />
                           
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text" />
                        </div>
                    </div>



                    
                    <div className="input-field">
                        <textarea
                            className="materialize-textarea"
                            placeholder="Описание товара"
                            value={this.state.description}
                            onChange={this.onDescriptionChange}
                        >
                        </textarea>
                    </div>
                    <button className="btn">
                        Добавить товар
                    </button>
                </form>
            </div>
        );
    }
};

export default ItemForm;