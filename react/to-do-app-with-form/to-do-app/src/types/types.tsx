export interface TodoItem {
    title: FormDataEntryValue | null;
    description: FormDataEntryValue | null;
    priority: FormDataEntryValue | null;
    dueDate: FormDataEntryValue | null;
    tags: FormDataEntryValue[];
    shownItem: boolean;
    pinned?: boolean;
}