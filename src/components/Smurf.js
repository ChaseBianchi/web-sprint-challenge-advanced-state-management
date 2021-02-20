import React from 'react';
// import {connect} from 'react-redux'

const Smurf = (props)=> {
    const {smurf} = props;
    
    return(<div data-testid="smurf" className="card">
        <div className="card-body">
        <h3 className="card-title">{smurf.name}</h3>
            <hr/>
            <p className="card-text"><b>Position:</b> {smurf.position}</p>
            <p className="card-text"><b>Nickname:</b> {smurf.nickname}</p>
            <p className="card-text"><b>Description:</b> {smurf.description}</p>
        </div>
    </div>);
}
// const mapStateToProps = state =>{
//     return({
//         smurfs: state.smurfs
//     })
// }
export default 
// connect(mapStateToProps)(
    Smurf
    // );