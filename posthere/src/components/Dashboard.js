import React from "react";
import Loader from "react-loader-spinner"
import Posts from "./Posts"

const Dashboard = (props) => {
  return (
    <>
      <div>
        <h1>Home</h1>
        <Posts />
        {props.isLoading && <Loader type="Circles" color="#FF7127" height={80} width={80}/>}
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    activity: state.activity,
    error: state.error,
    posts: state.posts
  };
};

export default connect(
  mapStateToProps,
  {}
)(Dashboard);