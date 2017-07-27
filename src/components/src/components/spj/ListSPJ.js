import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ItemSPJ from './ItemSPJ';
import { Actions } from 'react-native-router-flux';

class ListSPJ extends Component {
    componentWillMount() {
        const ds = new  ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.librariesspj);
    }

    renderRow(library) {
        return <ItemSPJ 
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
    return { librariesspj: state.librariesspj };
};

export default connect (mapStateToProps)(ListSPJ);