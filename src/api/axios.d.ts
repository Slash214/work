import axios from 'axios';

declare module 'axios' {
	interface IAxios<D = null> {
		info: string
		extra: D
	}
	export interface AxiosResponse<T = any> extends IAxios<D> { }
}
