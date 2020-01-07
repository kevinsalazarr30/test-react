import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Pagination from "material-ui-flat-pagination";

const theme = createMuiTheme();


const styles = {
    marginLeft: 200
}
class FlatPagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = { offset: 0 };
    }

    handleClick = (offset) => {
        this.setState({ offset });
        this.props.changePage(offset)
    }


    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Pagination
                style={styles}
                    limit={1}
                    offset={this.state.offset}
                    total={55}
                    onClick={(e, offset) => this.handleClick(offset)}
                />
            </MuiThemeProvider>
        );
    }
}

export default FlatPagination
