import * as React from "react";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { grey } from '@mui/material/colors';
import { Box } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
import { propertyDelete } from "../../../slices/propertySlice";
import moment from 'moment';
// import EditProduct from "../EditProduct";

export default function ProductsList() {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.propertiesdb);


  const rows =
    items &&
    items.map((item) => {
      return {
        id: item._id,
        TypesofBuilding: item.buildingtype,
        propertyStatus: item.propstatus,
        rentAmount: item.rent,
        propertyAddress: item.propaddress,
        activeStatus: item.active,
        createdAt: item.date,
      };
    }
    );

  const columns = [
    {
      field: "id", width: 70,
      renderHeader: (params) => (
        <strong className="text-white">
          {'ID '}
        </strong>
      ),
      renderCell: (cellValues) => {
        return (
          <div
            style={{
              color: "white",
              fontSize: 12,
              textAlign: "right"
            }}
          >
            {cellValues.value}
          </div>
        );
      }
    },
    {
      field: "TypesofBuilding",
      renderHeader: (params) => (
        <strong className="text-white">
          {'Type '}
        </strong>
      ),
      width: 70,
      renderCell: (cellValues) => {
        return (
          <div
            style={{
              color: "white",
              fontSize: 12,
              textAlign: "right"
            }}
          >
            {cellValues.value}
          </div>
        );
      }
    },
    {
      field: "propertyStatus",
      renderHeader: (params) => (
        <strong className="text-white">
          {'Status'}
        </strong>
      ),
      width: 70,
      renderCell: (cellValues) => {
        return (
          <div
            style={{
              color: "white",
              fontSize: 12,
              textAlign: "right"
            }}
          >
            {cellValues.value}
          </div>
        );
      }
    },
    {
      field: "rentAmount",
      renderHeader: (params) => (
        <strong className="text-white">
          {'Rent($)'}
        </strong>
      ),
      width: 70,
      renderCell: (cellValues) => {
        return (
          <div
            style={{
              color: "white",
              fontSize: 12,
              textAlign: "right"
            }}
          >
            {cellValues.value}
          </div>
        );
      }
    },
    {
      field: "propertyAddress",
      renderHeader: (params) => (
        <strong className="text-white">
          {'Property Address'}
        </strong>
      ),
      width: 70,
      renderCell: (cellValues) => {
        return (
          <div
            style={{
              color: "white",
              fontSize: 12,
              textAlign: "right"
            }}
          >
            {cellValues.value}
          </div>
        );
      }
    },

    {
      field: 'activeStatus',
      renderHeader: (params) => (
        <strong className="text-white">
          {'Active'}
        </strong>
      ),
      width: 100,
      type: 'boolean',
      editable: true,
    },
    {
      field: 'createdAt',
      renderHeader: (params) => (
        <strong className="text-white">
          {'Created At'}
        </strong>
      ),
      width: 200,
      renderCell: (params) =>
        moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS'),
    },
    {
      field: "actions",
      renderHeader: (params) => (
        <strong className="text-white">
          {'Actions'}
        </strong>
      ),
      width: 170,
      renderCell: (params) => {
        return (
          <Actions >
            <Delete onClick={() => handleDelete(params.row.id)}>Delete</Delete>
            {/* <EditProduct prodId={params.row.id} />
            <View onClick={() => navigate(`/product/${params.row.id}`)}>
              View
            </View> */}
          </Actions>
        );
      },
    },
  ];

  const handleDelete = (id) => {
    dispatch(propertyDelete(id));
  };

  return (
    <Box>
      <div style={{ height: 400, width: "100%", marginTop: "2rem", color: "white" }} >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          // checkboxSelection
          // disableSelectionOnClick
          sx={{
            [`& .${gridClasses.row}`]: {
              bgcolor: (theme) =>
                theme.palette.mode === 'active' ? grey[200] : grey[900],

            },
          }}
        />
        <div className="mt-6">
          <p className="font-poppins mt-6 font-normal text-center text-[18px] leading-[27px] text-white">
            Copyright Ⓒ 2022 SecondaryDAO. All Rights Reserved.
          </p>
        </div>
      </div>
    </Box>
  );
}


const Actions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  button {
    border: none;
    outline: none;

    padding: 3px 5px;
    color: white;
    border-radius: 3px;
    cursor: pointer;
  }
`;

const Delete = styled.button`
  background-color: rgb(255, 77, 73);
`;
const View = styled.button`
  background-color: rgb(114, 225, 40);
`;

