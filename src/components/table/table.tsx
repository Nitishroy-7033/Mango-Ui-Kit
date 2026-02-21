import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';
import type { TableProps } from './table.types';
import './table.css';

export function Table<T extends Record<string, any>>({
  columns,
  data,
  className,
}: TableProps<T>) {
  return (
    <div className={cn('table-container', className)}>
      <table className="custom-table">
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index} style={{ width: col.width }}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <td key={colIndex}>
                  {col.render
                    ? col.render(row[col.accessor as keyof T], row)
                    : (row[col.accessor as keyof T] as ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Table.displayName = 'Table';
