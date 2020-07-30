import React,{Component} from 'react';
import Table from '../table';
import './frame.css';


export default class Frame extends Component {
    constructor ( props ) {
        super(props);
    }
    render () {
        return (
            <>
                <div className = "Frame" id = "Frame">
                    <div className="Form FormActive" id="Form">
                        <div className="LabelForm">Мои инвестиции</div>
                        <Table /> 
                    </div>
                </div>  
            </>
        )
    }
}