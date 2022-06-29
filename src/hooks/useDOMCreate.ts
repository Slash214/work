/**
 * @description 动态生成删除传送门DOM节点
 * @author 爱呵呵
 */
import { onUnmounted } from "vue";

const useDOMCreate = (nodeId: string): void => {
	const node = document.createElement('div')
	node.id = nodeId
	document.body.appendChild(node)
	onUnmounted(() => {
		document.body.removeChild(node)
	})
}

// function useDOMCreate(nodeId: string): void {
// 	const node = document.createElement('div')
// 	node.id = nodeId
// 	document.body.appendChild(node)
// 	onUnmounted(() => {
// 		document.body.removeChild(node)
// 	})
// }

export default useDOMCreate