import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Map from '../components/Map';
import Levels from '../components/Levels';

import * as mapActions from '../actions/MapActions';
import * as levelsActions from '../actions/LevelsActions';


class App extends Component {
    render() {
        const { levels } = this.props;
        const activeLevelData = levels.maps[levels.active - 1].data;

        const { setData } = this.props.mapActions;
        const { setLevel } = this.props.levelsActions;


        let data = activeLevelData.map(function(row) {
            return row.map(function(cell) {
                return cell;
            });
        });

        console.log(data)

        return <div className='container'>
            <Levels active={levels.active} maps={levels.maps} setLevel={setLevel} />
            <div className='map-wrapper'>
                <Map data={activeLevelData} setData={setData} />
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        map: state.map,
        levels: state.levels
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapActions: bindActionCreators(mapActions, dispatch),
        levelsActions: bindActionCreators(levelsActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
