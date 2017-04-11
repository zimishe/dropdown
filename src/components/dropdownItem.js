/**
 * Created by eugene on 10.04.17.
 */

import React, { Component } from 'react'

class DropdownItem extends Component {
    render() {
        let isSelected = this.props.isSelected;
        
        return (
            <label className={isSelected ? 'dropdown--item dropdown--item-is-selected' : 'dropdown--item'}>
                <input type="radio"
                       name="selected_country"
                       onChange={this.props.onSelectedValueChanged}/>
                {this.props.text}
            </label>
        )
    }
}

export default DropdownItem