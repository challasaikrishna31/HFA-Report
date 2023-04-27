import { format } from 'date-fns'

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
    Footer: 'Unique ID',
    accessor: '_id',
    //sticky: 'left'
  },
  {
    Header: 'Name',
    Footer: 'Name',
    accessor: 'name',
    //sticky: 'left'
  },
  {
    Header: 'Date of Birth',
    Footer: 'Date of Birth',
    accessor: 'dob',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy')
    }
    //sticky: 'left'
  },
  {
    Header: 'Gender',
    Footer: 'Gender',
    accessor: 'gender',
    //sticky: 'left'
  },
  {
    Header: 'Father Name',
    Footer: 'Father Name',
    accessor: 'fatherName',
    //sticky: 'left'
  },
  {
    Header: 'Category',
    Footer: 'Category',
    accessor: 'category',
    //sticky: 'left'
  },
  {
    Header: 'Joining Year',
    Footer: 'Joining Year',
    accessor: 'joiningYear',
    //sticky: 'left'
  },
  {
    Header: 'Course',
    Footer: 'Course',
    accessor: 'course',
    //sticky: 'left'
  },
  {
    Header: 'Opening Balance',
    Footer: 'Opening Balance',
    accessor: 'openingBalance',
    //sticky: 'left'
  },
  {
    Header: 'Tution Fee Collected',
    Footer: 'Tution Fee Collected',
    columns: [
      {
        Header: 'Collected Fee',
        Footer: 'Collected Fee',
        accessor: 'collectedFee',
      },
      {
        Header: 'Collected University Fees',
        Footer: 'Collected University Fees',
        accessor: 'collectedUnivFee',
      },
    ]
  },
  {
    Header: 'Total Fees Paid',
    Footer: 'Total Fees Paid',
    accessor: 'totalFeesPaid',
    //sticky: 'left'
  },
  {
    Header: 'Total Due',
    Footer: 'Total Due',
    columns: [
      {
        Header: 'Due Fee',
        Footer: 'Due Fee',
        accessor: 'dueFee',
        //sticky: 'left'
      },
      {
        Header: 'Due University Fees',
        Footer: 'Due University Fees',
        accessor: 'dueUnivFee',
        //sticky: 'left'
      },
    ]
  },
  {
    Header: 'Excess Fees',
    Footer: 'Excess Fees',
    accessor: 'excessFees',
    //sticky: 'left'
  },
]
