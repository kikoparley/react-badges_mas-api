import React from 'react';

import '../styles/Badge.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/Badgeform';
import api from "../api"
import PageLoading from '../components/PageLoading';


class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });


      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };


  render() {

    if (this.state.loading) {
        return <PageLoading/>;
    }
    return (
      <div>
        <div className="BadgeNew__hero">
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'NOMBRE' }
                lastName={this.state.form.lastName || 'APELLIDO' }
                twitter={this.state.form.twitter || 'TWITTER' }
                jobTitle={this.state.form.jobTitle || 'JOBTITLE' }
                email={this.state.form.email || 'MAIL' }
                avatarUrl={this.state.form.avatarUrl || 'AVATAR' }
              />
            </div>

            <div className="col-6">
            <h1>New Attendant</h1>
            <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;