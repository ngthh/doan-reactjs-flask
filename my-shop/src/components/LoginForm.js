import React, {Component} from 'react';

class LoginForm extends Component {
    render() {
        return (
            <div>
                <section style={{marginTop:'6%'}}>
                    <div class="container3">
                        <form action="/action_page.php">
                            <div class="row">
                                <h4>Login with Social Media or Manually</h4>
                                <div class="vl">
                                    <span class="vl-innertext">or</span>
                                </div>

                                <div class="col">
                                    <button class="fb btn">
                                    <i class="fa fa-facebook fa-fw"></i> Login with Facebook
                                    </button>
                                    <button class="twitter btn">
                                    <i class="fa fa-twitter fa-fw"></i> Login with Twitter
                                    </button>
                                    <button class="google btn"><i class="fa fa-google fa-fw">
                                    </i> Login with Google+
                                    </button>
                                </div>

                                <div class="col">
                                    <div class="hide-md-lg">
                                    <p>Or sign in manually:</p>
                                    </div>

                                    <input style={{fontSize: '17px'}} type="text" name="username" placeholder="Username" required></input>
                                    <input style={{fontSize: '17px'}} type="password" name="password" placeholder="Password" required></input>
                                    <input class="btn-primary"style={{background: '#af9a7d'}} type="submit" value="Login"></input>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="bottom-container">
                        <div class="row">
                            <div class="col">
                            <button class="btn">Sign up</button>
                            </div>
                            <div class="col">
                            <button class="btn">Forgot password?</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
           
        )}}
export default LoginForm;
