import { useContext } from "react"
import { DataTableContext } from "../components/Context"
import styles from "../styles/DataTable.module.scss"
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const DataTable = () => {
    const { rows } = useContext(DataTableContext);

    return (
        <table className={styles.table}>
            <TableHeader />
            <tbody>
                {rows.map((row) => (
                    <TableRow key={row.id} id={row.id} name={row.name} />
                ))}
            </tbody>
        </table>
    )
}

export default DataTable