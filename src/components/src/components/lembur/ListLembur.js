import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ItemLembur from './ItemLembur';
import { Actions } from 'react-native-router-flux';

class ListLembur extends Component {
    componentWillMount() {
        const ds = new  ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.librarieslembur);
    }

    renderRow(library) {
        return <ItemLembur 
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
    return { librarieslembur: state.librarieslembur };
};

export default connect (mapStateToProps)(ListLembur);