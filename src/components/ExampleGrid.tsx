import React from "react";
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import CollapsibleTable from "./CollapsibleTable";


const ExampleGrid = () => {

    const layoutConfig = [
        {i: 'item1', x: 0, y: 0, w: 2, h: 3},
        {i: 'item2', x: 2, y: 0, w: 4, h: 3},
        {i: 'item3', x: 6, y: 0, w: 2, h: 3},

    ];


    return(
        <GridLayout className="example-layout" 
                    layout={layoutConfig}
                    cols={12}
                    rowHeight={30}
                    width={1200}>

                 <div key="item1" style={{background: '#ff4d4f'}}>
                    {/* <CollapsibleTable /> */}
                 </div>
                 <div key="item2" style={{background: '#40a9ff'}}>Item 2</div>
                 <div key="item3" style={{background: '#73d1d3'}}>Item 3</div>

        </GridLayout>
    )

}


export default ExampleGrid;