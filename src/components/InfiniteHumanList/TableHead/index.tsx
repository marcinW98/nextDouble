import styles from "../MoreAndMorePeople/index.module.scss"

const {table__head} = styles;

export const TableHead = () =>{
    return (<thead className={table__head}>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>)
}