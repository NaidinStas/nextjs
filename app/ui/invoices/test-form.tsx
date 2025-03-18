'use client';

import { Button } from '@/app/ui/button';
import { FolderPlusIcon } from '@heroicons/react/24/outline';
import { createNewTable } from '@/app/lib/actions';

export default function AddTabletForm() {

    return (
        <form action={createNewTable}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">

                <div className="mb-4">
                    <label htmlFor="tableName" className="mb-2 block text-sm font-medium">
                        Table name
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="tableName"
                                name="tableName"
                                type="text"
                                placeholder="Enter table name"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                            <FolderPlusIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>
                <Button type="submit">Create Table</Button>
            </div>
        </form>
    );
}