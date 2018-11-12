import React from 'react';
import { connect } from 'react-redux';
import { startLoginWithGoogle, startLoginWithFacebook } from '../actions/auth';

export const LoginPage = ({ startLoginWithGoogle, startLoginWithFacebook }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control.</p>
            <button className="button" onClick={startLoginWithGoogle}>
                Login with Google
            </button>
            <button
                className="button button--facebook"
                onClick={startLoginWithFacebook}
            >
                Login with Facebook
            </button>
        </div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    startLoginWithGoogle: () => dispatch(startLoginWithGoogle()),
    startLoginWithFacebook: () => dispatch(startLoginWithFacebook())
});

export default connect(
    undefined,
    mapDispatchToProps
)(LoginPage);
