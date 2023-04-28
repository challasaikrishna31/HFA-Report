import { format } from 'date-fns'
import React from 'react'
// export const COLUMNS = [
//   {
//     Header: 'SL No',
//     Footer: 'SL No',
//     accessor: 'SLNo',
//     //disableFilters: true,
//     //sticky: 'left'
//   },
//   {
//     Header: 'Unique ID',
//     Footer: 'Unique ID',
//     accessor: '_id',
//     //sticky: 'left'
//   },
//   {
//     Header: 'Name',
//     Footer: 'Name',
//     accessor: 'name',
//     //sticky: 'left'
//   },
//   {
//     Header: 'Category',
//     Footer: 'Category',
//     accessor: 'category',
//     //sticky: 'left'
//   },
//   {
//     Header: 'TF Demand',
//     Footer: 'TF Demand',
//     accessor: 'TF',
//     //sticky: 'left'
//   },
//   {
//     Header: 'UDF',
//     Footer: 'UDF',
//     accessor: 'UDF'
//   },
//   {
//     Header: 'OUF',
//     Footer: 'OUF',
//     accessor: 'OUF'
//   },
//   {
//     Header: 'Total',
//     Footer: 'Total',
//     accessor: 'Total'
//   },
//   {
//     Header: 'Bank Reference No',
//     Footer: 'Bank Reference No',
//     accessor: 'BankReferenceNo'
//   },
//   {
//     Header: 'Receipt No',
//     Footer: 'Receipt No',
//     accessor: 'ReceiptNo'
//   },
//   {
//     Header: 'TF',
//     Footer: 'TF',
//     accessor: 'Collected_TF',
//     //sticky: 'left'
//   },
//   {
//     Header: 'UDF',
//     Footer: 'UDF',
//     accessor: 'Collected_UDF'
//   },
//   {
//     Header: 'OUF',
//     Footer: 'OUF',
//     accessor: 'Collected_ODF'
//   },
//   {
//     Header: 'TF',
//     Footer: 'TF',
//     accessor: 'TotalCollected_TF',
//     //sticky: 'left'
//   },
//   {
//     Header: 'UDF',
//     Footer: 'UDF',
//     accessor: 'TotalCollected_UDF'
//   },
//   {
//     Header: 'OUF',
//     Footer: 'OUF',
//     accessor: 'TotalCollected_ODF'
//   },
//   {
//     Header: 'TF',
//     Footer: 'TF',
//     accessor: 'Due_TF',
//     //sticky: 'left'
//   },
//   {
//     Header: 'UDF',
//     Footer: 'UDF',
//     accessor: 'Due_UDF'
//   },
//   {
//     Header: 'OUF',
//     Footer: 'OUF',
//     accessor: 'Due_ODF'
//   },
//   {
//     Header: 'Date',
//     Footer: 'Date',
//     accessor: 'Date',
//     Cell: ({ value }) => {
//       return format(new Date(value), 'dd/MM/yyyy')
//     }
//   }
// ]

export const GROUPED_COLUMNS = [
  // {
  //   Header: 'SL No',
  //   Footer: 'SL No',
  //   accessor: 'SLNo',
  //   //disableFilters: true,
  //   //sticky: 'left'
  // },
  {
    Header: 'Unique ID',
    Footer: 'Total',
    accessor: '_id',
    //sticky: 'left'
  },
  {
    Header: 'Name',
    accessor: 'name',
    //sticky: 'left'
  },
  {
    Header: 'Date of Birth',
    accessor: 'dob',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy')
    }
    //sticky: 'left'
  },
  {
    Header: 'Gender',
    accessor: 'gender',
    //sticky: 'left'
  },
  {
    Header: 'Father Name',
    accessor: 'fatherName',
    //sticky: 'left'
  },
  {
    Header: 'Category',
    accessor: 'category',
    //sticky: 'left'
  },
  {
    Header: 'Joining Year',
    accessor: 'joiningYear',
    //sticky: 'left'
  },
  {
    Header: 'Course',
    accessor: 'course',
    //sticky: 'left'
  },
  {
    Header: 'Opening Balance',
    accessor: 'openingBalance',
    //sticky: 'left'
  },
  {
    Header: 'Tution Fee Collected',
    Footer: 'Tution Fee Collected',
    columns: [
      {
        Header: 'Collected Fee',
        Footer: (data) => {
          const total = React.useMemo(
            () => data.rows.reduce((sum, row) => sum + row.values.collectedFee, 0),
            [data.rows]
          );
          return <>{total}</>;
        },
        accessor: 'collectedFee',
      },
      {
        Header: 'Collected University Fees',
        Footer: (data) => {
          const total = React.useMemo(
            () => data.rows.reduce((sum, row) => sum + row.values.collectedUnivFee, 0),
            [data.rows]
          );
          return <>{total}</>;
        },
        accessor: 'collectedUnivFee',
      },
    ]
  },
  {
    Header: 'Total Fees Paid',
    Footer: (data) => {
      const total = React.useMemo(
        () => data.rows.reduce((sum, row) => sum + row.values.totalFeesPaid, 0),
        [data.rows]
      );
      return <>{total}</>;
    },
    accessor: 'totalFeesPaid',
    //sticky: 'left'
  },
  {
    Header: 'Total Due',
    Footer: 'Total Due',
    columns: [
      {
        Header: 'Due Fee',
        Footer: (data) => {
          const total = React.useMemo(
            () => data.rows.reduce((sum, row) => sum + row.values.dueFee, 0),
            [data.rows]
          );
          return <>{total}</>;
        },
        accessor: 'dueFee',
        //sticky: 'left'
      },
      {
        Header: 'Due University Fees',
        Footer: (data) => {
          const total = React.useMemo(
            () => data.rows.reduce((sum, row) => sum + row.values.dueUnivFee, 0),
            [data.rows]
          );
          return <>{total}</>;
        },
        accessor: 'dueUnivFee',
        //sticky: 'left'
      },
    ]
  },
  {
    Header: 'This Year Demand',
    Footer: 'This Year Demand',
    columns: [
      {
        Header: 'Tution Fee',
        Footer: (data) => {
          const total = React.useMemo(
            () => data.rows.reduce((sum, row) => sum + row.values.demandFee, 0),
            [data.rows]
          );
          return <>{total}</>;
        },
        accessor: 'demandFee',
      },
      {
        Header: 'University Fees',
        Footer: (data) => {
          const total = React.useMemo(
            () => data.rows.reduce((sum, row) => sum + row.values.demandUnivFee, 0),
            [data.rows]
          );
          return <>{total}</>;
        },
        accessor: 'demandUnivFee',
      },
    ]
  },
  {
    Header: 'Excess Fees',
    Footer: (data) => {
      const total = React.useMemo(
        () => data.rows.reduce((sum, row) => sum + row.values.excessFees, 0),
        [data.rows]
      );
      return <>{total}</>;
    },
    accessor: 'excessFees',
    //sticky: 'left'
  },
]
