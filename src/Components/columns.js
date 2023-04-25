import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: 'SL No',
    Footer: 'SL No',
    accessor: 'SLNo',
    //disableFilters: true,
    //sticky: 'left'
  },
  {
    Header: 'Unique ID',
    Footer: 'Unique ID',
    accessor: 'UniqueID',
    //sticky: 'left'
  },
  {
    Header: 'Name',
    Footer: 'Name',
    accessor: 'Name',
    //sticky: 'left'
  },
  {
    Header: 'Category',
    Footer: 'Category',
    accessor: 'Category',
    //sticky: 'left'
  },
  {
    Header: 'TF Demand',
    Footer: 'TF Demand',
    accessor: 'TF',
    //sticky: 'left'
  },
  {
    Header: 'UDF',
    Footer: 'UDF',
    accessor: 'UDF'
  },
  {
    Header: 'OUF',
    Footer: 'OUF',
    accessor: 'OUF'
  },
  {
    Header: 'Total',
    Footer: 'Total',
    accessor: 'Total'
  },
  {
    Header: 'Bank Reference No',
    Footer: 'Bank Reference No',
    accessor: 'BankReferenceNo'
  },
  {
    Header: 'Receipt No',
    Footer: 'Receipt No',
    accessor: 'ReceiptNo'
  },
  {
    Header: 'TF',
    Footer: 'TF',
    accessor: 'Collected_TF',
    //sticky: 'left'
  },
  {
    Header: 'UDF',
    Footer: 'UDF',
    accessor: 'Collected_UDF'
  },
  {
    Header: 'OUF',
    Footer: 'OUF',
    accessor: 'Collected_ODF'
  },
  {
    Header: 'TF',
    Footer: 'TF',
    accessor: 'TotalCollected_TF',
    //sticky: 'left'
  },
  {
    Header: 'UDF',
    Footer: 'UDF',
    accessor: 'TotalCollected_UDF'
  },
  {
    Header: 'OUF',
    Footer: 'OUF',
    accessor: 'TotalCollected_ODF'
  },
  {
    Header: 'TF',
    Footer: 'TF',
    accessor: 'Due_TF',
    //sticky: 'left'
  },
  {
    Header: 'UDF',
    Footer: 'UDF',
    accessor: 'Due_UDF'
  },
  {
    Header: 'OUF',
    Footer: 'OUF',
    accessor: 'Due_ODF'
  },
  {
    Header: 'Date',
    Footer: 'Date',
    accessor: 'Date',
    // Cell: ({ value }) => {
    //   return format(new Date(value), 'dd/MM/yyyy')
    // }
  }
]

export const GROUPED_COLUMNS = [
  {
    Header: 'SL No',
    Footer: 'SL No',
    accessor: 'SLNo',
    //disableFilters: true,
    //sticky: 'left'
  },
  {
    Header: 'Unique ID',
    Footer: 'Unique ID',
    accessor: 'UniqueID',
    //sticky: 'left'
  },
  {
    Header: 'Name',
    Footer: 'Name',
    accessor: 'Name',
    //sticky: 'left'
  },
  {
    Header: 'Category',
    Footer: 'Category',
    accessor: 'Category',
    //sticky: 'left'
  },
  {
    Header: 'TF Demand',
    Footer: 'TF Demand',
    accessor: 'TF',
    //sticky: 'left'
  },
  {
    Header: 'UDF',
    Footer: 'UDF',
    accessor: 'UDF'
  },
  {
    Header: 'OUF',
    Footer: 'OUF',
    accessor: 'OUF'
  },
  {
    Header: 'Total',
    Footer: 'Total',
    accessor: 'Total'
  },
  {
    Header: 'Bank Reference No',
    Footer: 'Bank Reference No',
    accessor: 'BankReferenceNo'
  },
  {
    Header: 'Receipt No',
    Footer: 'Receipt No',
    accessor: 'ReceiptNo'
  },
  {
    Header: 'Fee Collected',
    Footer: 'Fee Collected',
    columns: [
      {
        Header: 'TF',
        Footer: 'TF',
        accessor: 'Collected_TF',
        //sticky: 'left'
      },
      {
        Header: 'UDF',
        Footer: 'UDF',
        accessor: 'Collected_UDF'
      },
      {
        Header: 'OUF',
        Footer: 'OUF',
        accessor: 'Collected_ODF'
      }
    ]
  },
  {
    Header: 'Total Collected',
    Footer: 'Total Collected',
    columns: [
      {
        Header: 'TF',
        Footer: 'TF',
        accessor: 'TotalCollected_TF',
        //sticky: 'left'
      },
      {
        Header: 'UDF',
        Footer: 'UDF',
        accessor: 'TotalCollected_UDF'
      },
      {
        Header: 'OUF',
        Footer: 'OUF',
        accessor: 'TotalCollected_ODF'
      }
    ]
  },
  {
    Header: 'Due',
    Footer: 'Due',
    columns: [
      {
        Header: 'TF',
        Footer: 'TF',
        accessor: 'Due_TF',
        //sticky: 'left'
      },
      {
        Header: 'UDF',
        Footer: 'UDF',
        accessor: 'Due_UDF'
      },
      {
        Header: 'OUF',
        Footer: 'OUF',
        accessor: 'Due_ODF'
      }
    ]
  },
  {
    Header: 'Date',
    Footer: 'Date',
    accessor: 'Date',
    // Cell: ({ value }) => {
    //   return format(new Date(value), 'dd/MM/yyyy')
    // }
  }
]
