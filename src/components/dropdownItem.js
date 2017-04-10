/**
 * Created by eugene on 10.04.17.
 */

import React, { Component } from 'react'

class DropdownItem extends Component {
    render() {
        return (
            <label>
                <input type="radio" />
                {this.props.text}
            </label>
        )
    }
}

export default DropdownItem