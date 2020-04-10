import React, { useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import axios from "axios";
const { SearchBar } = Search;

export default function UserTable({ users }) {
  // const [data, setData] = React.useState([]);
  // const fetchUsers = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:3000/user/users`);
  //     setData(response.data.data);
  //     console.log(response.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchUsers().then();
  // }, []);
  ////
  const columns = [
    {
      dataField: "user_id",
      text: "User Id",
    },
    {
      dataField: "first_name",
      text: "First Name",
    },
    {
      dataField: "role",
      text: "Role",
    },

    {
      dataField: "email",
      text: "Email",
    },
    {
      dataField: "phone",
      text: "Phone",
    },
    {
      dataField: "last_name",
      text: "LastName",
    },
  ];

  if (users.length === 0) {
    return <div>Loading!!!</div>;
  }

  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing {from} to {to} of {size} Results
    </span>
  );

  const options = {
    paginationSize: 4,
    pageStartIndex: 1,
    // alwaysShowAllBtns: true, // Always show next and previous button
    // withFirstAndLast: false, // Hide the going to First and Last page button
    // hideSizePerPage: true, // Hide the sizePerPage dropdown always
    // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    firstPageText: "First",
    prePageText: "Back",
    nextPageText: "Next",
    lastPageText: "Last",
    nextPageTitle: "First page",
    prePageTitle: "Pre page",
    firstPageTitle: "Next page",
    lastPageTitle: "Last page",
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [
      {
        text: "5",
        value: 5,
      },
      {
        text: "10",
        value: 10,
      },
      {
        text: "All",
        value: users.length,
      },
    ], // A numeric array is also available. the purpose of above example is custom the text
  };

  return (
    <ToolkitProvider data={users} keyField="user_id" columns={columns} search>
      {(props) => (
        <div>
          <h3>Input something at below input field:</h3>
          <SearchBar {...props.searchProps} />
          <hr />
          <BootstrapTable
            pagination={paginationFactory(options)}
            {...props.baseProps}
          />
        </div>
      )}
    </ToolkitProvider>
  );
}
