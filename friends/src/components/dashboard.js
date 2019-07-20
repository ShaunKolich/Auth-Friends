import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFriends } from '../components/actions';
import { isObjectTypeIndexer } from '@babel/types';

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
        
        return (
            <div>
                <button type="button" onClick={this.logout}>Logout</button>
                {friends.map((friend, index) => {
                    // console.log(friend)
                    return (
                        <div key={index}>
                         {friend.name}
                        </div>
                  )
                })}

            </div>
        )


    }

}
const mapStateToProps =(state)=>{
    return {
        friends: state.friends
    }
}

const mapDispatchToProps = {
    getFriends,
}



export default withRouter(
    // first param is mapStateToProps
    connect(mapStateToProps, mapDispatchToProps)(Dashboard)
)