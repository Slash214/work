export interface strNumberArr {
	one: string | number,
	two: string | number,
	three?: string | number,
	four?: string | number,
	five?: string | number,
	six?: string | number,
	seven?: string | number,
	eight?: string | number,
	nine?: string | number,
	ten?: string | number,
}

export interface api<T = any, D = any > {
	status: number,
	info: string,
	data: T;
}