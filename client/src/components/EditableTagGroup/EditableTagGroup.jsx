import React, { useState, useCallback, useRef, useEffect } from 'react'
import { Tag, Tooltip, Input } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

export const EditableTagGroup = ({ tags = [], onChange }) => {
	const [inputVisible, setInputVisible] = useState(false)
	const [inputValue, setInputValue] = useState('')
  const saveInputRef = useRef(null)

  //TODO: 有没有依赖的某个值, 在单向改变时才会触发useEffect的情况?
	useEffect(() => {
		if (inputVisible) {
			saveInputRef.current.focus()
    }
	}, [inputVisible])

	const handleClose = useCallback(
		removedTag => {
			if (tags.length > 1) {
				onChange(tags.filter(tag => tag !== removedTag))
			}
		},
		[onChange, tags]
	)

	const handleInputChange = useCallback(e => {
		setInputValue(e.target.value)
	}, [])

	const handleInputConfirm = useCallback(() => {
		let newTags = tags

		if (inputValue && tags.indexOf(inputValue) === -1) {
			newTags = [...newTags, inputValue]
		}

		setInputValue('')
		setInputVisible(false)
		onChange(newTags)
	}, [inputValue, onChange, tags])

	const showInput = useCallback(() => {
		setInputVisible(true)
	}, [])

	return (
		<div>
			{tags.map(tag => {
				const isLongTag = tag.length > 20
				const tagElem = (
					<Tag
						key={tag}
						closable={tags.length > 1}
						onClose={() => handleClose(tag)}
					>
						{isLongTag ? `${tag.slice(0, 20)}...` : tag}
					</Tag>
				)

				return isLongTag ? (
					<Tooltip title={tag} key={tag}>
						{tagElem}
					</Tooltip>
				) : (
					tagElem
				)
			})}
			{inputVisible ? (
				<Input
					ref={saveInputRef}
					type="text"
					size="small"
					style={{ width: 78 }}
					value={inputValue}
					onChange={handleInputChange}
					onBlur={handleInputConfirm}
					onPressEnter={handleInputConfirm}
				/>
			) : (
				<Tag
					onClick={showInput}
					style={{ background: '#fff', borderStyle: 'dashed' }}
				>
					<PlusOutlined /> 新增
				</Tag>
			)}
		</div>
	)
}
