import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Map from '../components/Map';
import * as mapActions from '../actions/MapActions';


class App extends Component {
    render() {
        const { map } = this.props;
        const { setData } = this.props.mapActions;

        return <div className='container'>
            <div className='map-wrapper'>
                <Map data={map.data} setData={setData} />
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        map: state.map
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapActions: bindActionCreators(mapActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
