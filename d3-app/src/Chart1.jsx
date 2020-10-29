import React, { Component } from 'react';

import * as d3 from "d3";

class BarChart extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        let accressToRef = d3.select(this.myRef.current);
        accressToRef.style("background-color", "red");
    }

    render() {
        return <>
            <div ref={this.myRef}>Testing Refs</div>
        </>
    }
}

export default BarChart;

