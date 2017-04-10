/**
 * Created by eugene on 10.04.17.
 */

import React, { Component } from 'react'

class DropdownItem extends Component {
    render() {
        return (
            <label className="dropdown--item">
                <input type="radio"
                       name="selected_country"
                       onChange={this.props.onSelectedValueChanged}/>
                {this.props.text}
            </label>
        )
    }
}

export default DropdownItem