import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container">
                    <a class="navbar-brand fw-bold fs-4" href="#">TEMPLATE ONE</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">Product</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    <div className="buttons">
                            <a href="" className="btn btn-outline-dark">
                               <i class=" fa fa-sign-in me-1">  LOGIN</i>
                            </a>
                            <a href="" className="btn btn-outline-dark ms-2">
                               <i class=" fa fa-user-plus me-1">  REGISTER</i>
                            </a>
                            <a href="" className="btn btn-outline-dark ms-2">
                               <i class=" fa fa-shopping-card me-1  ">  CART (0)</i>
                            </a>
                    </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}
