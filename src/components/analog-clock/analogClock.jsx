import React, { Component } from 'react';
import './analogClock.scss';

class AnalogClock extends Component {
    state = { 
        'degrees': {
            'hrDeg': '60',
            'minDeg': '300',
            'secDeg': '0'
        }
     }
    render() { 
        let hrStyle = 'rotateZ(' + this.state.degrees.hrDeg + 'deg)';
        let minStyle = 'rotateZ(' + this.state.degrees.minDeg + 'deg)';
        let secStyle = 'rotateZ(' + this.state.degrees.secDeg + 'deg)';

        return (
            <div className="container">
                <div className="clock">
                    <div className="hour" id="hr" style={{'transform': hrStyle}}></div>
                    <div className="min" id="min" style={{'transform': minStyle}}></div>
                    <div className="sec" id="sec" style={{'transform': secStyle}}></div>
                </div>
            </div>
         );
    }

    componentWillMount() {
        setInterval(() => {
            const curTime = new Date();
            const hr = curTime.getHours() % 12 ;
            const min = curTime.getMinutes();
            const sec = curTime.getSeconds();
            const hrDeg = hr * 30 + min * 0.5;
            const minDeg = min * 6;
            const secDeg = sec * 6;

            this.setState({degrees : {
                hrDeg, minDeg, secDeg
            }});
        } , 1000);
    }
}
 
export default AnalogClock;