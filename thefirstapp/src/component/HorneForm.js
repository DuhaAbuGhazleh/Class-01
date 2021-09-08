import React, { Component } from 'react'


class hornedForm extends Component {

    render() {
        return (
            <div>
<fieldset>
<legend> Beast Horns</legend>
                <form onSubmit={this.props.handleSubmit}>
                  

                            <label >view the beasts by the number of horns:</label>
                            <select onChange={(e) => this.props.filterResult(e.target.value)}>
                                <option value="All">ALL Horns</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="100">100</option>
                            </select>
                            {/* <input type="submit"/> */}
                            </form>
</fieldset>
                        </div>
              )
    }
}

                        export default hornedForm
