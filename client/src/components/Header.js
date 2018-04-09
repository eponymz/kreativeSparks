import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import triage from '../triage.svg';
import logout from '../logout.svg';
import '../css/Header.css';
import '../css/GoogleBtn.css';
import 'bootstrap';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <Redirect to="/" />;
      default:
        return (
          <div>
            <header className="Header navbar-header">
              <div>
                <Link
                  to={this.props.auth ? '/z/dashboard' : '/'}
                  className="no-underline navbar-title"
                >
                  Kreative Sparks Photography
                </Link>
                <Link
                  to={this.props.auth ? '/z/pre-release' : '/'}
                  className="no-underline navbar-button"
                >
                  Pre Release
                </Link>
                {/* <Link
                  to={this.props.auth ? '/z/terminal' : '/'}
                  className="no-underline navbar-button"
                >
                  Terminal
                </Link> */}
                <Link
                  to={this.props.auth ? '/z/post-release-report' : '/'}
                  className="no-underline navbar-button"
                >
                  Post Release Report
                </Link>
                <a className="right component-title" href="/api/logout">
                  <div className="logout-icon">
                    <img src={logout} className="logout-icon" alt="logo" />
                  </div>
                  L O G O U T
                </a>
              </div>
            </header>
          </div>
        );
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
