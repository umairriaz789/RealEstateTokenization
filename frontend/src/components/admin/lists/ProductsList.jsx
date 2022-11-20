import * as React from "react";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { grey } from '@mui/material/colors';
import { Box } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { productDelete } from "../../../slices/productsSlice";
import EditProduct from "../EditProduct";

export default function ProductsList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.products);


  const rows =
    items &&
    items.map((item) => {
      return {
        id: item._id,
        imageUrl: item.image.url,
        pName: item.name,
        pDesc: item.desc,
        price: item.price.toLocaleString(),
      };
    }
    );

  const columns = [
    {
      field: "id", width: 220,
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
              fontSize: 18,
              textAlign: "right"
            }}
          >
            {cellValues.value}
          </div>
        );
      }
    },
    {
      field: "imageUrl",
      renderHeader: (params) => (
        <strong className="text-white">
          {'Image '}
        </strong>
      ),
      width: 80,
      renderCell: (params) => {
        return (
          <ImageContainer>
            <img src={params.row.imageUrl} alt="" />
          </ImageContainer>
        );
      },
    },
    {
      field: "pName",
      renderHeader: (params) => (
        <strong className="text-white">
          {'Name'}
          {/* <span role="img" aria-label="enjoy">
            🎂
          </span> */}
        </strong>
      ),
      width: 130,
      renderCell: (cellValues) => {
        return (
          <div
            style={{
              color: "white",
              fontSize: 18,
              textAlign: "right"
            }}
          >
            {cellValues.value}
          </div>
        );
      }
    },
    {
      field: "pDesc",
      renderHeader: (params) => (
        <strong className="text-white">
          {'Description'}
        </strong>
      ),
      width: 130,
      renderCell: (cellValues) => {
        return (
          <div
            style={{
              color: "white",
              fontSize: 18,
              textAlign: "right"
            }}
          >
            {cellValues.value}
          </div>
        );
      }
    },
    {
      field: "price",
      renderHeader: (params) => (
        <strong className="text-white">
          {'Price($)'}
        </strong>
      ),
      width: 80,
      renderCell: (cellValues) => {
        return (
          <div
            style={{
              color: "white",
              fontSize: 18,
              textAlign: "right"
            }}
          >
            {cellValues.value}
          </div>
        );
      }
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
            <EditProduct prodId={params.row.id} />
            <View onClick={() => navigate(`/product/${params.row.id}`)}>
              View
            </View>
          </Actions>
        );
      },
    },
  ];

  const handleDelete = (id) => {
    dispatch(productDelete(id));
  };

  return (
    <Box>
      <div style={{ height: 400, width: "100%", marginTop: "2rem" , color: "white"}} >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={ [5]}
          // checkboxSelection
          // disableSelectionOnClick
          // sx={{
          //   border: 2,
          //   // borderColor: 'rgb(48, 51, 78)',
          //   backgroundColor: "rgb(48, 51, 78)",
          //   borderColor: 'rgb(48, 51, 78)',
          //   '& .MuiDataGrid-cell:hover': {
          //     color: 'primary.main',
          //   },
          // }}
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

const ImageContainer = styled.div`
  img {
    height: 40px;
  }
`;

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
