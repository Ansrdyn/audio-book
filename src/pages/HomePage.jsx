import React from 'react'; 
import ARScreen from './AR';

export default function HomePage(params) {
    return (
        <>
         <div className="my-5">
        <h5>
          <b>Latest Article</b>
        </h5>
        <div className="d-flex justify-content-between">
          <p style={{ color: "grey" }}>
            So you can make better purchase decision
          </p>
          {/* <p style={{color: "#ec8ea2"}}>See more    <i class="bi bi-chevron-right" style={{color: "#ec8ea2"}}></i></p> */}
        </div>
      </div>
      {/* article  */}
      <div className="container">
        <div className="row row-cols-3 g-3">
                  <div className="col">
                    <div className="card h-100 w-100" style={{border: "none"}}>
                      <img
                        src="https://via.placeholder.com/100x50"
                        className="card-img-top"
                        alt="Skyscrapers"
                      />
                      <div className="card-body border-0">
                        <h5 className="card-title">{"test"}</h5>
                      </div>
                      <div className="card-footer border-0" style={{background: "white"}}>
                        <small className="text-muted">
                          {"name"} | {"tanggal"}
                        </small>
                      </div>
                    </div>
                    </div>
        </div>
      </div>

      <div className="container">
                <div className="row">
                    <div className="col">
                        <ARScreen />
                    </div>
                </div>
            </div>
        </>
    )
}