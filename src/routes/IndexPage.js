import React from 'react';
import { connect } from 'dva';

function IndexPage() {
	return (
		<div>
			this is page
    	</div>
	);
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
