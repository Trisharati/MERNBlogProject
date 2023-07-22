import React from 'react'
import { Link } from 'react-router-dom'


const First = (props) => {
localStorage.clear()
  return (
    <div>

{/* <!-- Navigation--> */}
<nav className ="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div className ="container px-5">
                
                <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className ="navbar-toggler-icon"></span></button>
                <div className ="collapse navbar-collapse" id="navbarResponsive">
                    <ul className ="navbar-nav ms-auto">
                        <li className ="nav-item"><Link className ="nav-link" to="/register" onClick={props.onSignUp}>Sign Up</Link></li>
                        <li className ="nav-item"><Link className ="nav-link" to="/login" onClick={props.onSignUp}>Log In</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* <!-- Header--> */}
        <header className ="masthead text-center text-white">
            <div className ="masthead-content">
                <div className ="container px-5">
                    <h1 className ="masthead-heading mb-0">
                        Your Creativity is Our Culture
                    </h1>
                    
                    
                </div>
            </div>
            <div className ="bg-circle-1 bg-circle"></div>
            <div className ="bg-circle-2 bg-circle"></div>
            <div className ="bg-circle-3 bg-circle"></div>
            <div className ="bg-circle-4 bg-circle"></div>
        </header>
        {/* <!-- Content section 1--> */}
        <section id="scroll">
            <div className ="container px-5">
                <div className ="row gx-5 align-items-center">
                    <div className ="col-lg-6 order-lg-2">
                        <div className ="p-5">
                        <img className ="img-fluid1" src="https://media.licdn.com/dms/image/C4D12AQHGbiQBjTPzLA/article-cover_image-shrink_600_2000/0/1525438335132?e=2147483647&v=beta&t=gmu0kM7VmW8-bqzs1Koid_ibgsLHuALLDOOj-JYmdQ8" alt="..." /></div>
                    </div>
                    <div className ="col-lg-6 order-lg-1">
                        <div className ="p-5">
                            <h2 className ="display-4">Nature and Technology...</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Content section 2--> */}
        <section>
            <div className ="container px-5">
                <div className ="row gx-5 align-items-center">
                    <div className ="col-lg-6">
                        <div className ="p-5"><img className ="img-fluid2 " 
                        src="https://img.freepik.com/premium-photo/knowledge-ideas-human-head_597582-505.jpg" alt="..." /></div>
                    </div>
                    <div className ="col-lg-6">
                        <div className ="p-5">
                            <h2 className ="display-4">Knowledge is Power</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Content section 3--> */}
        <section>
            <div className ="container px-5">
                <div className ="row gx-5 align-items-center">
                    <div className ="col-lg-6 order-lg-2">
                        <div className ="p-5"><img className ="img-fluid1" 
                        src="https://www.caleidoscope.in/wp-content/uploads/2020/09/Culture-of-West-Bengal.jpg" alt="..." /></div>
                    </div>
                    <div className ="col-lg-6 order-lg-1">
                        <div className ="p-5">
                            <h2 className ="display-4">Our Heritage</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- Content section 4--> */}

        <section>
            <div className ="container px-5">
                <div className ="row gx-5 align-items-center">
                    <div className ="col-lg-6">
                        <div className ="p-5"><img className ="img-fluid2" 
                        src="https://static.india.com/wp-content/uploads/2014/09/Kolkata.jpg" alt="..." /></div>
                    </div>
                    <div className ="col-lg-6">
                        <div className ="p-5">
                            <h2 className ="display-4">Spread the Beauty</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- Footer--> */}
        <footer className ="py-5 bg-black">
            <div className ="container px-5"><p className ="m-0 text-center text-white small">Copyright &copy; Your Website 2023</p></div>
        </footer>
        {/* <!-- Bootstrap core JS--> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>

    
    
                
        
   




    </div>
  )
}

export default First
