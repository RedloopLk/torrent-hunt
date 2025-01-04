'use client';

import { useState } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  SortingState,
  ColumnFiltersState,
  getFilteredRowModel,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Trash2,
  Pencil,
  MoreHorizontal,
  File,
  Film,
  Music,
  ImageIcon,
} from 'lucide-react';

type File = {
  id: string;
  name: string;
  size: string;
  type: string;
  dateModified: string;
};

const data: File[] = [
  {
    id: '1',
    name: 'Inception.mp4',
    size: '2.5 GB',
    type: 'video',
    dateModified: '2024-03-15',
  },
  {
    id: '2',
    name: 'Interstellar.mkv',
    size: '3.2 GB',
    type: 'video',
    dateModified: '2024-03-14',
  },
  {
    id: '3',
    name: 'The_Dark_Knight.avi',
    size: '1.8 GB',
    type: 'video',
    dateModified: '2024-03-13',
  },
  {
    id: '4',
    name: 'Soundtrack.mp3',
    size: '85 MB',
    type: 'audio',
    dateModified: '2024-03-12',
  },
  {
    id: '5',
    name: 'Movie_Poster.jpg',
    size: '2.3 MB',
    type: 'image',
    dateModified: '2024-03-11',
  },
  {
    id: '6',
    name: 'Subtitles.srt',
    size: '45 KB',
    type: 'text',
    dateModified: '2024-03-10',
  },
];

export function FileManager() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState({});

  const columns: ColumnDef<File>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'name',
      header: 'Name',
      cell: ({ row }) => {
        const type = row.original.type;
        const getIcon = () => {
          switch (type) {
            case 'video':
              return <Film className="mr-2 h-4 w-4" />;
            case 'audio':
              return <Music className="mr-2 h-4 w-4" />;
            case 'image':
              return <ImageIcon className="mr-2 h-4 w-4" />;
            default:
              return <File className="mr-2 h-4 w-4" />;
          }
        };
        return (
          <div className="flex items-center">
            {getIcon()}
            <span>{row.getValue('name')}</span>
          </div>
        );
      },
    },
    {
      accessorKey: 'size',
      header: 'Size',
    },
    {
      accessorKey: 'type',
      header: 'Type',
    },
    {
      accessorKey: 'dateModified',
      header: 'Date Modified',
    },
    {
      id: 'actions',
      cell: ({ row }) => {
        const file = row.original;
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(file.id)}
              >
                Copy file ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Pencil className="mr-2 h-4 w-4" /> Rename
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Trash2 className="mr-2 h-4 w-4" /> Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">File Manager</h2>
        <div className="flex items-center space-x-2">
          <Input
            placeholder="Filter files..."
            value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
            onChange={(event) =>
              table.getColumn('name')?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          <Button variant="destructive" size="sm">
            <Trash2 className="mr-2 h-4 w-4" />
            Delete Selected
          </Button>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
