export const getProjectName = (projects, id) => {
	const project = projects.get(id)
	return project ? project.company + project.name : ''
}
