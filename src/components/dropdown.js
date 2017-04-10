/**
 * Created by eugene on 10.04.17.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from './../reducers'

import DropdownItem from './dropdownItem'

import { setCountry } from './../actions'

const mapDispatchToProps = function(dispatch) {
    return {
        dispatch,
        onSelectedValueChanged: (value) => {
            store.dispatch(setCountry(value));

            console.log('selected country with id ', value);
            // console.log('st', store.getState())
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
        let data = this.props.data,
            selectedCountryId = data.selectedCountryId,
            title = this.props.title;

        let selectedCountry = data.countries.filter((el) =>
            el.id === selectedCountryId
        );

        function checkSelected() {
            if (selectedCountry.length > 0) {
                return selectedCountry[0].name
            }   else {
                return title
            }
        }

        return (
            <div className="dropdown">
                <div className="dropdown--selected">
                    <h3>{checkSelected()}</h3>
                </div>
                {
                    data.countries.map((el, i) => 
                        <DropdownItem key={i}
                                      value={el.id}
                                      text={el.name}
                                      isSelected={
                                          (selectedCountryId === el.id)
                                      }
                                      onSelectedValueChanged={this.props.onSelectedValueChanged.bind(this, el.id)} />
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
