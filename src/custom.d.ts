type RecordItem = {
  tags: string[]
  notes: string
  type: string
  amount: number
  createAt?: Date
}

type Tag = {
  id: string
  name: string
}
type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create:(name: string) => 'success' | 'duplicated' //success 表示成功 duplicated 表示name重复
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
  remove: (id: string) => boolean
  save: () => void
}

interface Window {
  tagList: Tag[]
  createTag: (name: string) => void
  findTag: (id: string) => Tag | undefined
  removeTag: (id: string) => boolean
  updateTag: (id: string, name: string) =>  'success' | 'not found' | 'duplicated'
  recordList: RecordItem[]
  createRecord: (record: RecordItem) => void
}