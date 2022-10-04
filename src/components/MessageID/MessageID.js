import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const MessageSuccess = ({ purchaseId }) => {
	return (
		<Stack spacing={2}>
			<Alert severity='success' style={{ display: 'flex', justifyContent: 'center' }}>
				Your purchase ID is: {purchaseId}
			</Alert>
		</Stack>
	);
};

export default MessageSuccess;