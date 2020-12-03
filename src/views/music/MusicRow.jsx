import React from 'react'
import PropTypes from 'prop-types'
import {useHistory} from 'react-router-dom'

const MusicRow = props => {
	const {music} = props
	const history = useHistory()
	const skipToDetail = () => {
		history.push('/music/detail/' + music.id + '/' + music.name)
	}
	return (<
		div>
        <
					span> {music.id} < /span> <
					span> -- -- - < /span> <
					span> {music.name} < /span> <
					span onClick={skipToDetail}> -- -- -- -- - > 查看详情 < /span> < /
					div>
    )
}

MusicRow.propTypes = {
					music: PropTypes.object.isRequired
				}

export default MusicRow
