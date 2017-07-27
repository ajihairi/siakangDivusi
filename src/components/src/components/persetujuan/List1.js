import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import Item1 from './Item1';
import { Actions } from 'react-native-router-flux';

class List1 extends Component {
    componentWillMount() {
        const ds = new  ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries1);
    }

    renderRow(library) {
        return <Item1
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
    return { libraries1: state.libraries1 };
};

export default connect (mapStateToProps)(List1);