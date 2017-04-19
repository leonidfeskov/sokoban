import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Map from '../components/Map';
import Levels from '../components/Levels';

import * as mapActions from '../actions/MapActions';
import * as levelsActions from '../actions/LevelsActions';

import { cloneMap, checkWinLevel } from '../utils/utils';


class App extends Component {
    componentWillMount() {
        const { levels } = this.props;
        const activeLevelData = levels.maps[levels.active - 1].data;
        this.props.map.data = cloneMap(activeLevelData);
    }

    componentDidUpdate() {
        if (!this.win && checkWinLevel(this.props.map.data)) {
            console.log('Win!');
            this.win = true;
            this.props.levelsActions.unlockNextLevel();
        }
    }

    render() {
        const { levels, map } = this.props;

        const { setData } = this.props.mapActions;
        const { setLevel } = this.props.levelsActions;

        return <div className='container'>
            <Levels active={levels.active}
                maxAvailable={levels.maxAvailable}
                maps={levels.maps}
                setLevel={setLevel}
                setData={setData} />
            <div className='map-wrapper'>
                <Map data={map.data}
                    setData={setData} />
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
