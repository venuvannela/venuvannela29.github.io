import React from 'react'
import Project from '../layouts/Project'
import { projects, section3Title, section4Title } from '../../profile'

const Works = () => {
    return (
        <>
            <div data-aos="zoom-in-up" data-aos-once="true" className="third">
                <>
                    <div className="pp-head-line mx-auto text-center">
                        <h1 id="Projects" className="red-line pp-head">{section3Title}</h1>
                    </div>
                </>
                <div className="row">
                {projects && projects.map((x) => 
                <Project id={x.id} url={x.url} name={x.name} skills={x.skills}/>
                )}
                </div>
            </div>
           

            <div className="third">
                <>
                    <div className="pp-head-line mx-auto text-center">
                        <h1 id="Projects" className="red-line pp-head">{section4Title}</h1>
                    </div>
                </>
                <div class="work__box">
            <div class="work__text">
              <h3>Sprint 1</h3>
              <p>
                Project creation, Setup and configuration, Signup/Login functionality for user
              </p>
              <ul class="work__list">
                <li>Worked on user stories</li>
                 <li> Posting issues in git repositery, need to work on basic implementation</li>
                 <li> Worked on UI to implement Login page</li>
                 <li> Worked on backend code for Login page also created data base to store registered users</li>
              </ul>
</div>
</div>
<div class="work__box">
            <div class="work__text">
              <h3>Sprint 2</h3>
              <p>
                Need to work on Integration part, implementing categories, PDP & PLP pages.
              </p>
              <ul class="work__list">
                <li>Reffered resources to implement integration</li>
                <li> Integration between front-end and Back-end was implemented</li> 
                 <li>Designed UI for Home page</li> 
                 <li>Worked on Products Listing Page and Products Details Page</li> 

              </ul>
            </div>
          </div>
          <div class="work__box">
            <div class="work__text">
              <h3>Sprint 3</h3>
              <p>
                Need to work on implementing selecting single or multiple products and add to cart option
              </p>
              <ul class="work__list">
                <li> Worked on authentication</li>
                 <li> Implemented Flip on products to display description of the product</li>
                 <li> Added description and details to products</li>
                 <li> Reffered resources to implement add to cart functionality</li>
                 <li> worked to implement cart option</li>
              </ul>
            </div>
          </div>
          <div class="work__box">
            <div class="work__text">
              <h3>Sprint 4</h3>
              <p>
                Need to work on cart functionality and placing order                
              </p>
              <ul class="work__list">
                <li> Worked on listing products in Json file and cart funtionality</li>
                <li> Implemented add to cart functionality</li>
                <li> Reffered resources to implement sessions</li>
                <li> Stored the cart and user details in local  storage</li>
              </ul>
              </div>
              </div>
            <div class="work__box">
              <div class="work__text">
                  <h3>Sprint 5</h3>
                  <p>
                    Need to work on payments and order details page            
                  </p>
                  <ul class="work__list">
                  </ul>
                  </div>
                  </div>






               
            </div>
        </>
    )
}

export default Works
