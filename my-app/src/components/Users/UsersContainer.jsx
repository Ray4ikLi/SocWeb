import Users from "./Users";
import {connect} from "react-redux";
import {FollowAC, setUsersAC, UnFollowAC} from "../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(FollowAC(userId));
    },
        unfollow: (userId) => {
            dispatch(UnFollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)