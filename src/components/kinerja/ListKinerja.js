import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ItemKinerja from './ItemKinerja';
import { Actions } from 'react-native-router-flux';

class ListKinerja extends Component {
    componentWillMount() {
        const ds = new  ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.librariespribadi);
    }

    renderRow(library) {
        return <ItemKinerja 
        library={library}
        />;
    }

    render() {
        return(
        <ListView
            dataSource={this.dataSource}
            renderRow={this.renderRow}
        />
        );
    }
}

const mapStateToProps = state => {
    return { librariespribadi: state.librariespribadi };
};

export default connect (mapStateToProps)(ListKinerja);