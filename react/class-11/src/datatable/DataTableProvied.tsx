import { useState } from "react";
import { DataTableContext, type TableRow } from "../components/Context";

const initialRows: TableRow[] = [
    { id: 1, name: "Product 1"},
    { id: 2, name: "Produst 2"},
    { id: 3, name: "Product 3"},
];

export const DataTableProvider = ({ children } : { children: React.ReactNode }) => {
    const [rows, setRows] = useState<TableRow[]>(initialRows);

    return (
        <DataTableContext.Provider value={{ rows, setRows}}>
            {children}
        </DataTableContext.Provider>
    )
}