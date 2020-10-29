import React, { Component } from 'react';

import * as d3 from "d3";

class DrawChart3 extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {

        const { data, w, h, color } = this.props;

        const accessToRef = d3.select(this.myRef.current)
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .style("background-color", "green")
            .style("padding", 10)
            .style("margin-left", 50);

        accessToRef.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => h - 10 * d)
            .attr("width", 55)
            .attr("height", (d, i) => d * 10)
            .attr("fill", color);
    }

    render() {
        return <>
            <div ref={this.myRef}></div>
        </>
    }
}

export default DrawChart3;

