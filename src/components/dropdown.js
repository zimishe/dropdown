/**
 * Created by eugene on 10.04.17.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from './../reducers'

import DropdownItem from './dropdownItem'

import { setCountry, toggleMenu } from './../actions'

const mapDispatchToProps = function(dispatch) {
    return {
        dispatch,
        onSelectedValueChanged: (value) => {
            store.dispatch(setCountry(value));
            toggleMenu();
        },

        openDropdown: () => {
            toggleMenu();
        }
    };
};

const mapStateToProps = function() {
    return {
        data : store.getState()
    }
};

class DropDown extends Component {
    componentDidMount() {
        let dropdownItems = Array.from(document.querySelectorAll('.dropdown--item')),
            container = document.querySelector('.dropdown');

        dropdownItems.forEach((el, i) => {
            let delay = i*0.04;
            el.style.transitionDelay = delay+'s';
        })

        document.body.onclick = (e) => {
            let target = e.target;

            while (target != container) {
                if (target.classList.contains('d')) {
                    // нашли элемент, который нас интересует!
                    return;
                }
                target = target.parentNode;
            }
        }
    }

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
                <div className="dropdown--selected" onClick={this.props.openDropdown.bind(this)}>
                    {checkSelected()}
                </div>
                <div className="dropdown--items">
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
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DropDown);
