import React from 'react'

const styles = {
	diffAdd: {
		backgroundColor: '#97f295',
		padding: '2px',
	},
	diffRemove: {
		backgroundColor: '#ffb6ba',
		padding: '2px',
	},
}

export const renderReport = (report = {}) =>  {

  if (report.message) {
    return report.message 
  }

  const items = []
  const nameMap = {
    outStock: '出库',
    inStock: '入库',
    vendor: '第三方',
    originalOrder: '原始单号',
    carNumber: '车号',
    carFee: '运费',
    sortFee: '整理费用',
    other1Fee: '其他费用1',
    other2Fee: '其他费用2',
    comments: '备注',
  }
  items.push(<p key="number">单号：{report.number}</p>)
  let entries = report.recordEdit || []
  entries.forEach(diff => {
    items.push(
      <p key={diff.field}>
        <span>{nameMap[diff.field]}：</span>
        {diff.old && (
          <span style={styles.diffRemove}>{JSON.stringify(diff.old)}</span>
        )}
        {diff.new && (
          <span style={styles.diffAdd}>{JSON.stringify(diff.new)}</span>
        )}
      </p>
    )
  })
  entries = report.entryAdd || []
  entries.forEach(entry => {
    items.push(
      <p key={entry.field}>
        <span style={styles.diffAdd}>
          {entry.new.name} | {entry.new.size} | {entry.new.count}
        </span>
      </p>
    )
  })
  entries = report.entryRemove || []
  entries.forEach(entry => {
    items.push(
      <p key={entry.field}>
        <span style={styles.diffRemove}>
          {entry.old.name} | {entry.old.size} | {entry.old.count}
        </span>
      </p>
    )
  })
  entries = report.entryEdit || []
  entries.forEach(entry => {
    items.push(
      <p key={entry.field}>
        <span style={styles.diffRemove}>
          {entry.old.name} | {entry.old.size} | {entry.old.count}
        </span>
        <i className="glyphicon glyphicon-triangle-right" />
        <span style={styles.diffAdd}>
          {entry.new.name} | {entry.new.size} | {entry.new.count}
        </span>
      </p>
    )
  })

  return items
}