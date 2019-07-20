import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFriends } from '../components/actions';

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.getFriends()
    }



    logout = (evt) => {
        evt.preventDefault()

        localStorage.removeItem('token')
        this.props.history.push('/login')
    }

    render() {
        const { friends, isLoading } = this.props
        console.log(this.props);
        return (
            <div>
                <button type="button" onClick={this.logout}>Logout</button>
                {friends.map(friend => {
                    return (
                        <div>

                        </div>
                    )
                })}

            </div>
        )


    }

}

const mapDispatchToProps = {
    getFriends,
}

export default withRouter(
    // first param is mapStateToProps
    connect(null, mapDispatchToProps)(Dashboard)
)