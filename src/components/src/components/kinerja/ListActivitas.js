import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ItemActivitas from './ItemActivitas';
import { Actions } from 'react-native-router-flux';

class ListHari extends Component {
    componentWillMount() {
        const ds = new  ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.librariesbawahan);
    }

    renderRow(library) {
        return <ItemActivitas 
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
    return { librariesbawahan: state.librariesbawahan };
};

export default connect (mapStateToProps)(ListHari);