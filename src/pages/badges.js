import React from "react";
// import Navbar from "../components/Navbar";
import "../styles/Badge.css";
import Badgeslist from "../components/badgeslist";
import { Link } from "react-router-dom";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

import api from "../api"

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
    this.IntervalId = setInterval(this.fetchData, 1000000)
  }

  componentWillMount() {
    clearInterval(this.intervalId)
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };



  render() {
 if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error}/>
    }
    return (
      <React.Fragment>
        {/* <Navbar /> */}
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <h1 className="Badge__section-name">Lista de insignias</h1>
            </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="mb-4" >
            <Link to="/badges/new" type="button" className="btn btn-primary">
              {" "}
              Nueva insignia
            </Link >
          </div>
        </div>

        <div className="badges__list">
          <div className="badges__container">
               <Badgeslist badges={this.state.data} />
        
          </div>
        </div>
        {this.state.loading && 'loading...'}
      </React.Fragment>
    );
  }
}

export default Badges;
