import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../components/actions';

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
        }

    }

    changeHandler = (e) => {
        e.preventDefault()

        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        const { username, password } = this.state

        this.props.login(username, password)
            .then(() => {
                this.props.history.push("/")
            })
            .catch((err) => {
                console.error(err)
            })


    }

    render() {

        const { username, password } = this.state;
        const { isLoading, errorMessage } = this.props

        return (

            <form onSubmit={this.handleSubmit} >
                {errorMessage && <p className="error">{errorMessage}</p>}
                <input type="text" name="username" placeholder='Username' value={username} onChange={this.changeHandler} /> <br />
                <input type="text" name="password" placeholder="Password" value={password} onChange={this.changeHandler} /> <br />
                {isLoading
					? <p>Logging in...</p>
					: <button type="submit">Login</button>}
            </form>





        )
    }



}

const mapStateToProps = (state) => ({
    isLoading: state.isLoading,
    errorMessage: state.errorMessage,
})
const mapDispatchToProps = {
    login,
}


export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,

    )(Login)
)


