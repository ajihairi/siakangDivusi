import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import Item2 from './Item2';
import { Actions } from 'react-native-router-flux';

class List2 extends Component {
    componentWillMount() {
        const ds = new  ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries2);
    }

    renderRow(library) {
        return <Item2
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
    return { libraries2: state.libraries2 };
};

export default connect (mapStateToProps)(List2);