import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { KEY_CODES, CELL_EMPTY, CELL_BOX, CELL_TARGET, CELL_BOX_TARGET } from '../constants/App';
import Map from '../components/Map';
import Player from '../components/Player';
import * as mapActions from '../actions/MapActions';
import * as playerActions from '../actions/PlayerActions';
import { getCellNameByCode } from '../utils/utils';


class App extends Component {
    componentWillMount() {
        const { setPosition } = this.props.playerActions;
        const { setData } = this.props.mapActions;

        window.addEventListener('keydown', function(event) {
            const { map, player } = this.props;
            const x = player.position.x;
            const y = player.position.y;
            let newX = x;
            let newY = y;
            let newBoxX = x;
            let newBoxY = y;

            switch (event.keyCode) {
                case KEY_CODES.arrowUp:
                    newY -= 1;
                    newBoxY -= 2;
                    break;
                case KEY_CODES.arrowDown:
                    newY += 1;
                    newBoxY += 2;
                    break;
                case KEY_CODES.arrowLeft:
                    newX -= 1;
                    newBoxX -= 2;
                    break;
                case KEY_CODES.arrowRight:
                    newX += 1;
                    newBoxX += 2;
                    break;
            }

            if (map.data[newY] !== undefined && map.data[newY][newX] !== undefined) {
                let cell = map.data[newY][newX];
                let cellName = getCellNameByCode(cell);

                if (cellName === CELL_EMPTY || cellName === CELL_TARGET) {
                    setPosition({x: newX, y: newY});
                    return;
                }

                if (cellName === CELL_BOX || cellName === CELL_BOX_TARGET) {
                    if (map.data[newBoxY] !== undefined && map.data[newBoxY][newBoxX] !== undefined) {
                        let cellAfterBox = map.data[newBoxY][newBoxX]
                        let cellNameAfterBox = getCellNameByCode(cellAfterBox);

                        if (cellNameAfterBox === CELL_EMPTY || cellNameAfterBox === CELL_TARGET) {
                            setPosition({x: newX, y: newY});

                            map.data[newY][newX] = (cellName === CELL_BOX_TARGET ? 3 : 0);
                            map.data[newBoxY][newBoxX] = (cellNameAfterBox === CELL_TARGET ? 5 : 2);

                            setData(map.data);
                            return;
                        }
                    }
                }
            }
        }.bind(this));
    }

    render() {
        const { map, player } = this.props;

        return <div className='container'>
            <div className='map-wrapper'>
                <Map data={map.data} />
                <Player position={player.position} />
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
