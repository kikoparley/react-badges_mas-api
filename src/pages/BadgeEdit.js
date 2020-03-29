import React from 'react';

import '../styles/Badge.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/Badgeform';
import api from "../api"
import PageLoading from '../components/PageLoading';


class BadgeEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async e => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);

      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
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
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
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
            <h1>Edit Attendant</h1>
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

export default BadgeEdit;

