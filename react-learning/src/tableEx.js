import React from 'react';
import Table, {TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'

class tableEx extends React.Component{
    constructor() {
        super();
    }

    generateTableDataForLoop = () => {
        var prettyTableData = [];

        for (var i = 0; i < this.props.tableData.length; i++) {
            prettyTableData.push(
                <TableRow>
                    <TableCell> {this.props.tableData[0][i]} </TableCell>
                    <TableCell> {this.props.tableData[1][i]} </TableCell>
                </TableRow>
            );
        }

        return prettyTableData;

    }

    render(){
        var prettyTableData = this.generateTableDataForLoop();
        return(
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell> {this.props.heading[0]} </TableCell>
                            <TableCell> {this.props.heading[1]} </TableCell>
                        </TableRow>
                    </TableHead>
                    {prettyTableData}

                </Table>
            </div>
        );
    }
}

export default tableEx;