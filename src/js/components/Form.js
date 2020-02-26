// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle, getData } from "../actions/index";

const mapDispatchToProps = (dispatch) => {
    return { 
        addArticle: article => dispatch(addArticle(article)),
        getData: () => dispatch(getData()),
    }
}

const mapStateToProps = (state) => {
    return { articles: state.countries }
}

class ConnectedForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SSN: '',
            phone: '',
            email: '',
            country: '',
        };
    }

    componentDidMount() {
        this.props.getData();
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value)
        this.setState({
          [name]: value
        }, () => console.log(this.state));
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const title = 'heh';
        this.props.addArticle({ title });
        // this.setState({ title: "" });
    }

    render() {
        // const { title } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form_grp">
                    <label htmlFor="SSN">SSN</label>
                    <input
                        type="text"
                        id="SSN"
                        name="SSN"
                        value={this.state.SSN}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form_grp">
                    <label htmlFor="Phone">Phone number</label>
                    <input
                        type="text"
                        id="Phone"
                        name="phone"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form_grp">
                    <label htmlFor="Email">Email</label>
                    <input
                        type="mail"
                        id="Email"
                        name="email"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form_grp">
                    <label htmlFor="Country">Country</label>
                    <select id="Country" name="country" onChange={this.handleChange}>
                        <option value="" key="empty">-</option>
                        {this.props.articles.map(el => (
                            <option value={el.name} key={el.name}>{el.name}</option>
                        ))}
                    </select>
                </div>
                <button type="submit">SAVE</button>
            </form>
        );
    }
}

const Form = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectedForm);

export default Form;


// if (!values.email) {
//       errors.email = 'Required'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//       errors.email = 'Invalid email address'
//     }