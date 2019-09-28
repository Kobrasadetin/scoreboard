import React from 'react'
import Papa from 'papaparse'
import Style from 'style-it';

const ParseCsv = (csv) => {
    return Papa.parse(csv);
}

const RenderCsv = (csv, options) => {
    const parseResult = ParseCsv(csv)
    const { pageSize } = options
    return parseResult.data.map((row) =>
        (
            <div className="gfx-row" key={row[0]}>
                <div className="gfx-position">{row[0]}.</div>
                <div className="gfx-name">{row[1]}</div>
                <div className="gfx-score">{row[2]}</div>
            </div>
        )).filter((row, index) => index < pageSize)
}

const RenderResult = ({ csv, options, css }) => {
    const { title, subtitle } = options
    return (Style.it(css, <div className="gfx-container">
        <div className="gfx-header">
            <div className="gfx-subtitle">
                {subtitle}
            </div>
            <div className="gfx-title">
                {title}
            </div>
        </div>
        <div className="gfx-listing">
            {RenderCsv(csv, options)}
        </div>
    </div>))
}

export default RenderResult