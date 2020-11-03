import React, { Component } from 'react';
import './style.css'

class Cards extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-3">
            <div className="card text-white border-success fristCard">
              <div className="card-header bg-transparent border-success">
                Title: Card 1
              </div>
              <div className="card-body">
                <h5 className="card-title">200</h5>
                <p className="card-text">$352.22</p>
                <br></br><br></br><br></br>
                <br></br>
                <div className="card-footer border-success">ETA</div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
          <div className="card text-white border-success secondCrad">
            <div className="card-header bg-transparent border-success">
              Title: Card 1
            </div>
            <div className="card-body">
              <h5 className="card-title">200</h5>
              <p className="card-text">$352.22</p>
              <br></br><br></br><br></br>
              <br></br>
              <div className="card-footer border-success">ETA</div>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
        <div className="card text-white border-success thridCard" >
          <div className="card-header bg-transparent border-success">
            Title: Card 1
          </div>
          <div className="card-body">
            <h5 className="card-title">200</h5>
            <p className="card-text">$352.22</p>
            <br></br><br></br><br></br>
            <br></br>
            <div className="card-footer border-success">ETA</div>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
      <div className="card text-white border-success forthCard">
        <div className="card-header bg-transparent border-success">
          Title: Card 1
        </div>
        <div className="card-body">
          <h5 className="card-title">200</h5>
          <p className="card-text">$352.22</p>
          <br></br><br></br><br></br>
          <br></br>
          <div className="card-footer border-success">ETA</div>
        </div>
      </div>
    </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Cards;
