export const promisify = (value: boolean | string | number | undefined) => {
	return new Promise<void>((resolve) => {
			const checkValue = () => {
				if(value) {
					resolve();
				} else {
					setTimeout(checkValue, 100);
				}
			}
			checkValue();
		});
}