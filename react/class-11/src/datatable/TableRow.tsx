import styles from "../styles/DataTable.module.scss"

type TableRowProps = {
    id: number;
    name: string;
};

const TableRow = ({ id, name }: TableRowProps) => (
    <tr className={styles.row}>
        <td>{id}</td>
        <td>{name}</td>
    </tr>
) 

export default TableRow