/**
 * Created by eugene on 10.04.17.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from './../reducers'

import DropdownItem from './dropdownItem'

const mapDispatchToProps = function(dispatch) {
    return {
        dispatch,
        onSelectedValueChanged: (event) => {
            event.preventDefault();
        }
    };
};

const mapStateToProps = function() {
    return {
        data : store.getState()
    }
};

class DropDown extends Component {
    render() {
        let data = this.props.data;
        
        return (
            <div className="dropdown">
                <div className="dropdown--selected">
                    <h3>Israel</h3>
                </div>
                {
                    data.countries.map((el, i) => 
                        <DropdownItem key={i} value={el.id} text={el.name} isSelected={false} />
                    )
                }
                
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DropDown);
