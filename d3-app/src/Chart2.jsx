import React, { Component } from 'react';

import * as d3 from "d3";

class DrawChart extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {

        const data = [12, 26, 6, 25, 35, 10, 20];
        const w = 500;
        const h = 400;

        const accessToRef = d3.select(this.myRef.current)
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .style("background-color", "#cccccc")
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
            .attr("fill", (d, i) => i >= 2 ? "tomato" : "yellow");
    }

    render() {
        return <>
            <div ref={this.myRef}></div>
        </>
    }
}

export default DrawChart;

