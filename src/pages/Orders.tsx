import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
import Header from "../components/Header";
import customPager from "../utils/CustomPager";
import { useRef } from "react";

const Orders = () => {
  const gridpage = useRef<any>();
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-[#33373E] rounded-3xl">
      <Header category="صفحه" title="سفارشات" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        allowExcelExport
        allowFiltering
        allowPdfExport
        enableRtl
        width="auto"
        pageSettings={{
          template: (pagerData: any) => customPager(pagerData, gridpage),
          pageSize: 8,
        }}
        ref={gridpage}
        editSettings={{ allowEditing: true, allowDeleting: true }}
        contextMenuItems={contextMenuItems}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
