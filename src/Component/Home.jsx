import React from "react";
import './Homes.css'
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";


function Home() {
  return (
    <>
   <div className="section ">
    <Parallax style={{height:'600px'}} strength={300} bgImage="/Image/car1.webp">
    <div className="content">
      <Link to={'/parallax-effect'}><button className="text-content">CLICK TO MORE INTERSETING</button></Link>
    </div>
    </Parallax>
    <Parallax  style={{height:'600px'}} strength={-300}blur={{max:20, min:-20}} bgImage="/Image/car2.jpg">
    <div className="content">
      <div className="text-content"></div>

    </div>
    </Parallax>
   
    <Parallax style={{height:'600px'}}   strength={-400}  bgImage="/Image/car4.jpg">
    <div className="content">
      <div className="text-content"></div>

    </div>
    </Parallax>
    
   </div>
  
    </>
 
  );
}

export default Home;

// bootsrtap
{/* <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Parallax style={{ height: "90vh" }} strength={100} bgImage="/Image/car1.webp">
              <div className="content">
                <button className="btn btn-primary text-content">CLICK TO MORE INTERESTING</button>
              </div>
            </Parallax>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Parallax strength={300} blur={{ max: 20, min: -20 }} bgImage="/Image/car2.jpg">
              <div className="content">
                <div className="text-content">Normal</div>
              </div>
            </Parallax>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Parallax strength={-500} bgImage="/Image/car2.jpg">
              <div className="content">
                <div className="text-content">Normal</div>
              </div>
            </Parallax>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Parallax blur={6} strength={100} bgImage="/Image/car2.jpg">
              <div className="content">
                <div className="text-content">Normal</div>
              </div>
            </Parallax>
          </div>
        </div>
      </div> */}
