import { Link } from "react-router-dom"
import "../../Styles/Hero/LoginHero.css"

function LoginHero() {

    function uploadFormData(){
        console.log("Form uploaded")
    }

    return (
        <section>
            <div className="login-div-box">
                <div className="login-div-box-left-text">
                    <h1>Login to your account</h1>
                    <span>
                        Don't have a account?
                        <Link>create account</Link>
                    </span>
                </div>
                <form className="account-form">
                    <span>
                        <label>e-mail:</label>
                        <input type="email"></input>
                    </span>
                    <span>
                        <label>password:</label>
                        <input type="password"></input>
                    </span>

                    <button type="button" onClick={uploadFormData}>login</button>

                    <span>
                        <Link>
                            forgot password?
                        </Link>
                    </span>
                </form>
            </div>
        </section>
    )
}

export default LoginHero 