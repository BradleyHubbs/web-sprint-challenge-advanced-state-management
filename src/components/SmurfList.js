import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux'

 const SmurfList = (props)=> {
 const { smurfs, isLoading, error } = props
    console.log('do i have props? ', props.smurfs);


    if (props.isLoading) {
        return <h1>Loading...</h1>;
    }

    return(<div className="listContainer">
        {props.smurfs.map(smurf => {
            return <Smurf smurf={smurf}/>
        })}

        {/* <Smurf smurf={testSmurf}/> */}
    </div>);
}

const mapStateToProps = state => {
    return{
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.