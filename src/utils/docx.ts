/**
 * @author 爱呵呵
 * @description 导出word的方法合集
 */

import {
	Document, Paragraph, TextRun, AlignmentType, Table,
	TableRow, TableCell, WidthType, BorderStyle, VerticalAlign,
	HeightRule, convertInchesToTwip, TableAnchorType,
	RelativeHorizontalPosition, OverlapType, TableLayoutType,
	ImageRun, convertMillimetersToTwip, Footer, PageBreak,
	TextWrappingType, TextWrappingSide, HorizontalPositionRelativeFrom,
	VerticalPositionRelativeFrom, HorizontalPositionAlign,
	VerticalPositionAlign, Tab
} from "docx"


/**
 * 取得base64图片长宽与长宽比例
 * @param base64
 * @returns
 */
const get_size = (base64: string) => {
	//确认处理的是png格式的数据
	if (base64.substring(0, 22) === 'data:image/png;base64,') {
		// base64 是用四个字符来表示3个字节
		// 我们只需要截取base64前32个字符(不计开头那22个字符)便可（24 / 3 * 4）
		// 这里的data包含12个字符，9个字节，除去第1个字节，后面8个字节就是我们想要的宽度和高度
		const data = base64.substring(22 + 20, 22 + 32);
		const base64Characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
		const nums = [];
		for (const c of data) {
			nums.push(base64Characters.indexOf(c));
		}
		const bytes = [];
		for (let i = 0; i < nums.length; i += 4) {
			bytes.push((nums[i] << 2) + (nums[i + 1] >> 4));
			bytes.push(((nums[i + 1] & 15) << 4) + (nums[i + 2] >> 2));
			bytes.push(((nums[i + 2] & 3) << 6) + nums[i + 3]);
		}
		const width = (bytes[1] << 24) + (bytes[2] << 16) + (bytes[3] << 8) + bytes[4];
		const height = (bytes[5] << 24) + (bytes[6] << 16) + (bytes[7] << 8) + bytes[8];
		return {
			width,
			height,
			Proportions: width / height
		};
	}
	throw Error('unsupported image type');
}


/**
 * 存储base64到docx的image属性标签里面去 生成图片
 * @param base base64的图片 
 * @returns new ImageRun
 */
const _genPicture = (base: string, width: number = 240) => {
	// 这里希望图片给一个宽度，高度根据宽度等比缩放
	const whp = get_size(base)
	const height = width / whp.Proportions
	return new ImageRun({
		data: base,
		transformation: {
			width,
			height
		}
	})
}

/**
 * 成长相册 叙事记录  图文相册模板 方法
 * @param {Array} 图文数据 [{ content: string, base64Arr: string[], create_time: string }]
 * @param 
 * @param 
 * @return 
 */
const genAlbum = () => {

	return []
}

const outDocxAlbum = (data = [], first: { bgImage: string, info: any[]}, last = []) => {
	try {
		const children: any[] = []

		if ((data instanceof Array) && data.length) {

			// 公共参数 
			let font_color = '#111111', min = 14, mid = 16, big = 24, len = data.length,
				common = {
					spacing: { before: 100, line: 1.3 * 240 },
					outlineLevel: 1,
					alignment: AlignmentType.LEFT,
				}

			for (let i = -2; i < len; i++) {
				let { create_time, base64Arr, content, videoUrl, storyContent } = data[i] || {}
				let AllImage: string[] = []

				// first 封面
				if (i === -2) {
					// 全屏背景
					if (first?.bgImage) {
						const firstPage = new Paragraph({
							children: [
								new ImageRun({
									data: first.bgImage,
									transformation: {
										width: 795,
										height: 1125,
									},
									floating: {
										zIndex: 0,
										behindDocument: true,
										allowOverlap: true,
										horizontalPosition: {
											align: HorizontalPositionAlign.LEFT
										},
										verticalPosition: {
											align: VerticalPositionAlign.CENTER
										},
									},
								}),
							]
						})
						children.push(firstPage)
					}

					// 封面内容
					let arr: string[] = []

				}
			}
		}

		return new Document({ sections: [{ children }] })
	} catch (error) {
		console.error('Word文档导出异常', error)
	}
}


export {

}