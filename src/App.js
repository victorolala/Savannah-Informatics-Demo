import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import TableCell from "@material-ui/core/TableCell";

import TableRow from "@material-ui/core/TableRow";

import 'bootstrap/dist/css/bootstrap.min.css';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

const App = () => {
    const classes = useStyles();
    const [user_ldetails, setuser_ldetails, album_ldetails, setalbum_ldetails] = useState([]);
    const [search, setSearch] = useState("");

    const getuser_ldetailsData = async() => {
        try {
            const data = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            console.log(data.data);
            setuser_ldetails(data.data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getuser_ldetailsData();
    }, []);

    if (getuser_ldetailsData != null) {
        const getalbum_ldetailsData = async() => {
            try {
                const data = await axios.get(
                    `https://jsonplaceholder.typicode.com/album/{ user.id }`

                );
                console.log(data.data);
                setalbum_ldetails(data.data);
            } catch (e) {
                console.log(e);
            }
        };
        // useEffect(() => {
        //     getuser_ldetailsData();
        //     getalbum_ldetailsData();
        // }, []);

    }


    return ( <
        div className = "App" >
        <
        h1 class = "mb-3 mt-3" > SavannahInformatic Demo < /h1>  <
        h5 class = "text-muted" > Developed by Victor Olala < /h5>  <
        a href = "mailto:olalavictor01@gmail.com" >
        olalavictor01 @gmail.com < /a> <
        div class = "container" >
        <
        div class = "row float-end" >

        <
        div class = "col-12" >
        <
        div class = "input-group mb-3 mr-4 ml-4" >
        <
        span class = "input-group-text"
        id = "basic-addon1" > Search < /span> <
        input type = "text"
        placeholder = "Search here"
        class = "form-control"
        onChange = {
            (e) => {
                setSearch(e.target.value);
            }
        }
        /> < /
        div >
        <
        /div>

        <
        /div>

        {
            /* {user_ldetails
                    .filter((user) => {
                      if (search == "") {
                        return user;
                      } else if (user.name.toLowerCase().includes(search.toLowerCase())) {
                        return user;
                      }
                    })
                    .map((user) => {
                      return (
                        <p>
                          {user.name} - {user.email}
                        </p>
                      );
                    })} */
        }

        <
        div class = "col-12" >
        <
        table className = "table table-striped table-responsive" >
        <
        thead class = "table-dark" >
        <
        tr >
        <
        th scope = "col" > User ID < /th> <
        th scope = "col" > Name < /th> <
        th scope = "col" > Username < /th> <
        th scope = "col" > Email < /th> <
        th scope = "col" > Street < /th > <
        th scope = "col" > City < /th> <
        th scope = "col" > State < /th> < /
        tr > <
        /thead> <
        tbody > {
            user_ldetails
            .filter((user) => {
                if (search == "") {
                    return user;
                } else if (
                    user.name.toLowerCase().includes(search.toLowerCase())
                ) {
                    return user;
                }
            })
            .map((user) => {
                return ( <
                    StyledTableRow key = { user.id } >
                    <
                    td scope = "row" > { user.id } <
                    /td>   <
                    StyledTableCell component = "th"
                    scope = "row" > { user.name } <
                    /StyledTableCell>  

                    <
                    StyledTableCell component = "th"
                    scope = "row" > { user.username } <
                    /StyledTableCell> 

                    <
                    StyledTableCell component = "th"
                    scope = "row" > { user.email } <
                    /StyledTableCell> 

                    <
                    StyledTableCell component = "th"
                    scope = "row" > { user.address.street } <
                    /StyledTableCell> 

                    <
                    StyledTableCell component = "th"
                    scope = "row" > { user.address.suite } <
                    /StyledTableCell>  <
                    StyledTableCell component = "th"
                    scope = "row" > { user.address.city } <
                    /StyledTableCell> 

                    <
                    /
                    StyledTableRow >
                );
            })
        }

        <
        /tbody> < /
        table > < /
        div >
        <
        /div> < /
        div >

    );
};

export default App;