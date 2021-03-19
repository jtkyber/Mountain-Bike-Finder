import React, { Component } from 'react';
import BikeList from '../components/BikeList';
import { bikes } from '../bikes';
import AllDropdowns from '../components/AllDropdowns';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            bks: [],
            manuf: '',
            mod: '',
            bT: '',
            wS: '',
            fT: '',
            rT: '',
            hA: '10-99',
            willFilter: false
        }
    }

    componentDidMount() {
        this.setState({ bks: bikes });

    }

    filter = () => {
        const { manuf,mod,bT,wS,fT,rT,hA } = this.state;
        const haMin = hA.substring(0,2);
        const haMax = hA.substring(3,7);

        const haIsBetween = (angles) => {
            let isBetween = false;
            for (let angle of angles) {
                if (angle >= haMin && angle <= haMax){
                    isBetween = true;
                    break;
                }
                else {isBetween = false;}
            }
            return isBetween;
        }
         this.setState({
            bks: bikes.filter(bike => {
                return bike.manufacturer.toLowerCase().includes(manuf.toLowerCase())
                && bike.model.toLowerCase().includes(mod.toLowerCase())
                && bike.bikeType.toLowerCase().includes(bT.toLowerCase())
                && bike.wheelSize.toString().includes(wS)
                && bike.forkTravel.toString().includes(fT)
                && bike.shockTravel.toString().includes(rT)
                && haIsBetween(bike.htAngle);
            }),
            willFilter: false
         })
    }



    onSearchChange = (event) => {
        const id = event.target.id;
        const value = event.target.value;
        if (id === 'Manufacturer') {
            if (value === 'All') {
                this.setState({
                    manuf: '',
                    mod: '',
                    bT: '',
                    wS: '',
                    fT: '',
                    rT: '',
                    hA: '10-99'
                })
            } else { this.setState({
                manuf: value,
                mod: '',
                bT: '',
                wS: '',
                fT: '',
                rT: '',
                hA: '10-99'
            })
        }
        } else if (id === 'Model') {
            if (value === 'All') {
                this.setState({
                    mod: '',
                    bT: '',
                    wS: '',
                    fT: '',
                    rT: '',
                    hA: '10-99'
                })
            } else { this.setState({
                mod: value,
                bT: '',
                wS: '',
                fT: '',
                rT: '',
                hA: '10-99'
            })
        }
        } else if (id === 'BikeType') {
            if (value === 'All') {
                this.setState({ bT: ''})
            } else { this.setState({ bT: value }) }
        } else if (id === 'WheelSize') {
            if (value === 'All') {
                this.setState({ wS: ''})
            } else { this.setState({ wS: value }) }
        } else if (id === 'ForkTravel') {
            if (value === 'All') {
                this.setState({ fT: ''})
            } else { this.setState({ fT: value }) }
        } else if (id === 'RearTravel') {
            if (value === 'All') {
                this.setState({ rT: ''})
            } else { this.setState({ rT: value }) }
        } else if (id === 'HTAngle') {
            if (value === 'All') {
                this.setState({ hA: '10-99'})
            } else { this.setState({ hA: value }) }
        }
        this.setState({ willFilter: true })
    }

    render() {
        const { bks,manuf,mod,willFilter } = this.state;

        if (willFilter) {
            this.filter();
        }

        const s = () => {
            return bks.length === 1 ? '' : 's';
        }

        const models = bikes.filter(bike => {
            return bike.manufacturer.toLowerCase().includes(manuf.toLowerCase())
        })

        return (
            <div id='container'>
                <div id='header'>
                    <h1 id='title'>Mountain Bike Finder</h1>
                </div>
                <div id='searchArea'>
                    <form>
                        <div id='aboveDrops'>
                            <h4 id='resultsText'>{bks.length} Result{s()}</h4>
                            <button id='btn' value='reset'>Reset</button>
                        </div>
                        <AllDropdowns id='drops' bikes={bikes} models={models} curMod={mod} search={this.onSearchChange} />
                    </form>
                </div>
                <div id='results'>
                    <div>
                        <BikeList bikes={bks} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
