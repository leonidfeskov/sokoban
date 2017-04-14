import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Map from '../components/Map';
import Player from '../components/Player';
import * as mapActions from '../actions/MapActions';
import * as playerActions from '../actions/PlayerActions';


class App extends Component {
    render() {
        console.log(this.props);
        const { map, player } = this.props;
        const { setPosition } = this.props.playerActions;

        return <div className='container'>
            <div className='map-wrapper'>
                <Map data={map.data} />
                <Player position={player.position} setPosition={setPosition} />
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        player: state.player,
        map: state.map
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapActions: bindActionCreators(mapActions, dispatch),
        playerActions: bindActionCreators(playerActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
