import React, { useState } from 'react'
import '../../input.css'
import { useDispatch, useSelector } from 'react-redux'
import {
	addToBasket,
	addToCart,
	getProducts,
} from '../../features/Products/productsSlice'

const myObject = {
	results: [
		{
			code: '0975596_group_001',
			name: 'Crop Top',
			stock: {
				stockLevel: 1,
			},
			price: {
				currencyIso: 'USD',
				value: 5.99,
				priceType: 'BUY',
				formattedValue: '$ 5.99',
				type: 'WHITE',
			},
			images: [
				{
					url: 'https://lp2.hm.com/hmgoepprod?set=source[/22/6d/226d27bcaed22f4fafb74e40fa56740c6b90f158.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
				},
			],
			categories: [],
			pk: '9329304633345',
			whitePrice: {
				currencyIso: 'USD',
				value: 5.99,
				priceType: 'BUY',
				formattedValue: '$ 5.99',
				type: 'WHITE',
			},
			articles: [
				{
					code: '0975596001',
					name: 'Crop Top',
					images: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/22/6d/226d27bcaed22f4fafb74e40fa56740c6b90f158.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
						},
					],
					pk: '9311582650369',
					whitePrice: {
						currencyIso: 'USD',
						value: 5.99,
						priceType: 'BUY',
						formattedValue: '$ 5.99',
						type: 'WHITE',
					},
					logoPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/81/17/811791f6087a4c351c1462d13aa6b0ce0c7e3645.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					normalPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/81/17/811791f6087a4c351c1462d13aa6b0ce0c7e3645.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					markers: [
						{
							text: 'Conscious choice  ',
							type: 'ENVIRONMENT',
						},
					],
					visible: false,
					numbersOfPieces: 0,
					ticket:
						'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDk3NTU5Nl9ncm91cF8wMDFfZW5fdXM7MDk3NTU5NjAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
					dummy: false,
					ecoTaxValue: 0,
					redirectToPdp: false,
					comingSoon: false,
					color: {
						code: '000000',
						text: 'Black',
						filterName: 'Black_000000',
						hybrisCode: '09',
					},
					rgbColor: '#272628',
					genArticle: '975596001226',
					environmentalMarkers: ['Conscious choice  '],
				},
			],
			markers: [
				{
					text: 'Conscious choice  ',
					type: 'ENVIRONMENT',
				},
			],
			visible: false,
			concept: ['BASICS,DIVIDED'],
			numbersOfPieces: 0,
			defaultArticle: {
				code: '0975596001',
				name: 'Crop Top',
				images: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/22/6d/226d27bcaed22f4fafb74e40fa56740c6b90f158.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
					},
				],
				pk: '9311582650369',
				whitePrice: {
					currencyIso: 'USD',
					value: 5.99,
					priceType: 'BUY',
					formattedValue: '$ 5.99',
					type: 'WHITE',
				},
				logoPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/81/17/811791f6087a4c351c1462d13aa6b0ce0c7e3645.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				normalPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/81/17/811791f6087a4c351c1462d13aa6b0ce0c7e3645.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				markers: [
					{
						text: 'Conscious choice  ',
						type: 'ENVIRONMENT',
					},
				],
				visible: false,
				numbersOfPieces: 0,
				ticket:
					'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDk3NTU5Nl9ncm91cF8wMDFfZW5fdXM7MDk3NTU5NjAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
				dummy: false,
				ecoTaxValue: 0,
				redirectToPdp: false,
				comingSoon: false,
				color: {
					code: '000000',
					text: 'Black',
					filterName: 'Black_000000',
					hybrisCode: '09',
				},
				rgbColor: '#272628',
				genArticle: '975596001226',
				environmentalMarkers: ['Conscious choice  '],
			},
			sale: false,
			variantSizes: [
				{
					orderFilter: 357,
					filterCode: 'XXS',
				},
				{
					orderFilter: 369,
					filterCode: 'M',
				},
				{
					orderFilter: 375,
					filterCode: 'XXL',
				},
				{
					orderFilter: 372,
					filterCode: 'XL',
				},
				{
					orderFilter: 363,
					filterCode: 'XS',
				},
			],
			swatches: [],
			articleCodes: ['0975596001', '0975596002', '0975596014', '0975596034'],
			ticket:
				'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDk3NTU5Nl9ncm91cF8wMDFfZW5fdXM7MDk3NTU5NjAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
			searchEngineProductId: '0975596_group_001_en_us',
			dummy: false,
			linkPdp: '/en_us/productpage.0975596001.html',
			categoryName: 'Ladies',
			rgbColors: ['#272628', '#ECEDEC', '#418553', '#B9B8D5'],
			articleColorNames: ['Black', 'White', 'Green', 'Light purple'],
			ecoTaxValue: 0,
			swatchesTotal: 4,
			showPriceMarker: false,
			redirectToPdp: false,
			mainCategoryCode: 'ladies_basics_tops_shortsleeve',
			comingSoon: false,
			brandName: 'H&M',
		},
		{
			code: '0983297_group_007',
			name: '2-pack Regular Fit Sweatshorts',
			stock: {
				stockLevel: 1,
			},
			price: {
				currencyIso: 'USD',
				value: 10.99,
				priceType: 'BUY',
				formattedValue: '$ 10.99',
				type: 'RED',
			},
			images: [
				{
					url: 'https://lp2.hm.com/hmgoepprod?set=source[/98/5f/985f755069ec0cc16b6e1da0c9f1ed8829409bf8.jpg],origin[dam],category[men_shorts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
				},
			],
			categories: [],
			pk: '9399279026177',
			whitePrice: {
				currencyIso: 'USD',
				value: 24.99,
				priceType: 'BUY',
				formattedValue: '$ 24.99',
				type: 'WHITE',
			},
			redPrice: {
				currencyIso: 'USD',
				value: 10.99,
				priceType: 'BUY',
				formattedValue: '$ 10.99',
				type: 'RED',
			},
			articles: [
				{
					code: '0983297007',
					name: '2-pack Regular Fit Sweatshorts',
					images: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/98/5f/985f755069ec0cc16b6e1da0c9f1ed8829409bf8.jpg],origin[dam],category[men_shorts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
						},
					],
					pk: '9359878586369',
					whitePrice: {
						currencyIso: 'USD',
						value: 24.99,
						priceType: 'BUY',
						formattedValue: '$ 24.99',
						type: 'WHITE',
					},
					redPrice: {
						currencyIso: 'USD',
						value: 10.99,
						priceType: 'BUY',
						formattedValue: '$ 10.99',
						type: 'RED',
					},
					logoPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/47/0a/470ae3a742fc243a13fe953761b5efaf0b281971.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					normalPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/47/0a/470ae3a742fc243a13fe953761b5efaf0b281971.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					visible: false,
					numbersOfPieces: 0,
					ticket:
						'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDk4MzI5N19ncm91cF8wMDdfZW5fdXM7MDk4MzI5NzAwN19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
					dummy: false,
					ecoTaxValue: 0,
					redirectToPdp: false,
					comingSoon: false,
					color: {
						code: '008000',
						text: 'Khaki green/blue-gray',
						filterName: 'Blue_0000FF,Green_008000',
						hybrisCode: '19',
					},
					rgbColor: '#7F866F',
					genArticle: '983297007225',
				},
			],
			visible: false,
			numbersOfPieces: 0,
			defaultArticle: {
				code: '0983297007',
				name: '2-pack Regular Fit Sweatshorts',
				images: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/98/5f/985f755069ec0cc16b6e1da0c9f1ed8829409bf8.jpg],origin[dam],category[men_shorts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
					},
				],
				pk: '9359878586369',
				whitePrice: {
					currencyIso: 'USD',
					value: 24.99,
					priceType: 'BUY',
					formattedValue: '$ 24.99',
					type: 'WHITE',
				},
				redPrice: {
					currencyIso: 'USD',
					value: 10.99,
					priceType: 'BUY',
					formattedValue: '$ 10.99',
					type: 'RED',
				},
				logoPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/47/0a/470ae3a742fc243a13fe953761b5efaf0b281971.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				normalPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/47/0a/470ae3a742fc243a13fe953761b5efaf0b281971.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				visible: false,
				numbersOfPieces: 0,
				ticket:
					'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDk4MzI5N19ncm91cF8wMDdfZW5fdXM7MDk4MzI5NzAwN19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
				dummy: false,
				ecoTaxValue: 0,
				redirectToPdp: false,
				comingSoon: false,
				color: {
					code: '008000',
					text: 'Khaki green/blue-gray',
					filterName: 'Blue_0000FF,Green_008000',
					hybrisCode: '19',
				},
				rgbColor: '#7F866F',
				genArticle: '983297007225',
			},
			sale: true,
			variantSizes: [
				{
					orderFilter: 381,
					filterCode: '3XL',
				},
				{
					orderFilter: 363,
					filterCode: 'XS',
				},
				{
					orderFilter: 369,
					filterCode: 'M',
				},
				{
					orderFilter: 375,
					filterCode: 'XXL',
				},
				{
					orderFilter: 366,
					filterCode: 'S',
				},
				{
					orderFilter: 372,
					filterCode: 'XL',
				},
				{
					orderFilter: 370,
					filterCode: 'L',
				},
			],
			swatches: [],
			articleCodes: ['0983297007', '0983297008', '0983297009', '0983297010'],
			ticket:
				'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDk4MzI5N19ncm91cF8wMDdfZW5fdXM7MDk4MzI5NzAwN19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
			searchEngineProductId: '0983297_group_007_en_us',
			dummy: false,
			linkPdp: '/en_us/productpage.0983297007.html',
			categoryName: 'Men',
			rgbColors: ['#7F866F', '#9EACBD', '#928DA0', '#AFAFAF'],
			articleColorNames: [
				'Khaki green/blue-gray',
				'Light beige/light blue',
				'Light purple/blue-gray',
				'Black/gray melange',
			],
			ecoTaxValue: 0,
			swatchesTotal: 6,
			showPriceMarker: false,
			redirectToPdp: false,
			mainCategoryCode: 'men_shorts',
			comingSoon: false,
			brandName: 'H&M',
		},
		{
			code: '0624684_group_003',
			name: '5-pack Slim Fit T-shirts',
			stock: {
				stockLevel: 1,
			},
			price: {
				currencyIso: 'USD',
				value: 34.99,
				priceType: 'BUY',
				formattedValue: '$ 34.99',
				type: 'WHITE',
			},
			images: [
				{
					url: 'https://lp2.hm.com/hmgoepprod?set=source[/c5/6a/c56aa4d692665cfcbe679ad17327df32f65ae123.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
				},
			],
			categories: [],
			pk: '9234511003649',
			whitePrice: {
				currencyIso: 'USD',
				value: 34.99,
				priceType: 'BUY',
				formattedValue: '$ 34.99',
				type: 'WHITE',
			},
			articles: [
				{
					code: '0624684003',
					name: '5-pack Slim Fit T-shirts',
					images: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/c5/6a/c56aa4d692665cfcbe679ad17327df32f65ae123.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
						},
					],
					pk: '9225859006465',
					whitePrice: {
						currencyIso: 'USD',
						value: 34.99,
						priceType: 'BUY',
						formattedValue: '$ 34.99',
						type: 'WHITE',
					},
					logoPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/ac/d8/acd8547f1fd193a918122abf4a11194b18d1d9c6.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					normalPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/ac/d8/acd8547f1fd193a918122abf4a11194b18d1d9c6.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					visible: false,
					numbersOfPieces: 0,
					ticket:
						'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDYyNDY4NF9ncm91cF8wMDNfZW5fdXM7MDYyNDY4NDAwM19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
					dummy: false,
					ecoTaxValue: 0,
					redirectToPdp: false,
					comingSoon: false,
					color: {
						code: 'FFFFFF',
						text: 'White/black',
						filterName: 'Black_000000,White_FFFFFF',
						hybrisCode: '10',
					},
					rgbColor: '#FFFFFF',
					genArticle: '624684003226',
				},
			],
			visible: false,
			concept: ['BASICS'],
			numbersOfPieces: 0,
			defaultArticle: {
				code: '0624684003',
				name: '5-pack Slim Fit T-shirts',
				images: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/c5/6a/c56aa4d692665cfcbe679ad17327df32f65ae123.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
					},
				],
				pk: '9225859006465',
				whitePrice: {
					currencyIso: 'USD',
					value: 34.99,
					priceType: 'BUY',
					formattedValue: '$ 34.99',
					type: 'WHITE',
				},
				logoPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/ac/d8/acd8547f1fd193a918122abf4a11194b18d1d9c6.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				normalPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/ac/d8/acd8547f1fd193a918122abf4a11194b18d1d9c6.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				visible: false,
				numbersOfPieces: 0,
				ticket:
					'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDYyNDY4NF9ncm91cF8wMDNfZW5fdXM7MDYyNDY4NDAwM19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
				dummy: false,
				ecoTaxValue: 0,
				redirectToPdp: false,
				comingSoon: false,
				color: {
					code: 'FFFFFF',
					text: 'White/black',
					filterName: 'Black_000000,White_FFFFFF',
					hybrisCode: '10',
				},
				rgbColor: '#FFFFFF',
				genArticle: '624684003226',
			},
			sale: false,
			variantSizes: [
				{
					orderFilter: 381,
					filterCode: '3XL',
				},
				{
					orderFilter: 366,
					filterCode: 'S',
				},
				{
					orderFilter: 375,
					filterCode: 'XXL',
				},
				{
					orderFilter: 369,
					filterCode: 'M',
				},
				{
					orderFilter: 363,
					filterCode: 'XS',
				},
				{
					orderFilter: 372,
					filterCode: 'XL',
				},
				{
					orderFilter: 370,
					filterCode: 'L',
				},
			],
			swatches: [],
			articleCodes: ['0624684003', '0624684001', '0624684016', '0624684017'],
			ticket:
				'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDYyNDY4NF9ncm91cF8wMDNfZW5fdXM7MDYyNDY4NDAwM19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
			searchEngineProductId: '0624684_group_003_en_us',
			dummy: false,
			linkPdp: '/en_us/productpage.0624684003.html',
			categoryName: 'Men',
			rgbColors: ['#FFFFFF', '#FFFFFF', '#858C94', '#627763'],
			articleColorNames: [
				'White/black',
				'White',
				'Orange/light brown/steel blue',
				'Green/light blue/white',
			],
			ecoTaxValue: 0,
			swatchesTotal: 6,
			showPriceMarker: false,
			redirectToPdp: false,
			mainCategoryCode: 'men_tshirtstanks_multipacks',
			comingSoon: false,
			brandName: 'H&M',
		},
		{
			code: '0871889_group_022',
			name: 'Wide High Jeans',
			stock: {
				stockLevel: 1,
			},
			price: {
				currencyIso: 'USD',
				value: 34.99,
				priceType: 'BUY',
				formattedValue: '$ 34.99',
				type: 'WHITE',
			},
			images: [
				{
					url: 'https://lp2.hm.com/hmgoepprod?set=source[/df/7f/df7f291c41a68da244b0973f385dedf10ed2578a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
				},
			],
			categories: [],
			pk: '9317991055361',
			whitePrice: {
				currencyIso: 'USD',
				value: 34.99,
				priceType: 'BUY',
				formattedValue: '$ 34.99',
				type: 'WHITE',
			},
			articles: [
				{
					code: '0871889022',
					name: 'Wide High Jeans',
					images: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/df/7f/df7f291c41a68da244b0973f385dedf10ed2578a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
						},
					],
					pk: '9317581062145',
					whitePrice: {
						currencyIso: 'USD',
						value: 34.99,
						priceType: 'BUY',
						formattedValue: '$ 34.99',
						type: 'WHITE',
					},
					logoPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/9a/7c/9a7c7fef7caa5f108fe4ff1d686a3870e5f55d34.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					normalPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/9a/7c/9a7c7fef7caa5f108fe4ff1d686a3870e5f55d34.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					markers: [
						{
							text: 'Conscious choice  ',
							type: 'ENVIRONMENT',
						},
					],
					visible: false,
					numbersOfPieces: 0,
					ticket:
						'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDg3MTg4OV9ncm91cF8wMjJfZW5fdXM7MDg3MTg4OTAyMl9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
					dummy: false,
					ecoTaxValue: 0,
					redirectToPdp: false,
					comingSoon: false,
					color: {
						code: '0000FF',
						text: 'Light denim blue',
						filterName: 'Blue_0000FF',
						hybrisCode: '75',
					},
					rgbColor: '#798DB2',
					genArticle: '871889022225',
					environmentalMarkers: ['Conscious choice  '],
				},
			],
			markers: [
				{
					text: 'Conscious choice  ',
					type: 'ENVIRONMENT',
				},
			],
			visible: false,
			concept: ['DIVIDED'],
			numbersOfPieces: 0,
			defaultArticle: {
				code: '0871889022',
				name: 'Wide High Jeans',
				images: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/df/7f/df7f291c41a68da244b0973f385dedf10ed2578a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
					},
				],
				pk: '9317581062145',
				whitePrice: {
					currencyIso: 'USD',
					value: 34.99,
					priceType: 'BUY',
					formattedValue: '$ 34.99',
					type: 'WHITE',
				},
				logoPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/9a/7c/9a7c7fef7caa5f108fe4ff1d686a3870e5f55d34.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				normalPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/9a/7c/9a7c7fef7caa5f108fe4ff1d686a3870e5f55d34.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				markers: [
					{
						text: 'Conscious choice  ',
						type: 'ENVIRONMENT',
					},
				],
				visible: false,
				numbersOfPieces: 0,
				ticket:
					'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDg3MTg4OV9ncm91cF8wMjJfZW5fdXM7MDg3MTg4OTAyMl9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
				dummy: false,
				ecoTaxValue: 0,
				redirectToPdp: false,
				comingSoon: false,
				color: {
					code: '0000FF',
					text: 'Light denim blue',
					filterName: 'Blue_0000FF',
					hybrisCode: '75',
				},
				rgbColor: '#798DB2',
				genArticle: '871889022225',
				environmentalMarkers: ['Conscious choice  '],
			},
			sale: false,
			variantSizes: [
				{
					orderFilter: 4,
					filterCode: '0',
				},
				{
					orderFilter: 6,
					filterCode: '2',
				},
				{
					orderFilter: 18,
					filterCode: '14',
				},
				{
					orderFilter: 10,
					filterCode: '6',
				},
				{
					orderFilter: 8,
					filterCode: '4',
				},
				{
					orderFilter: 14,
					filterCode: '10',
				},
				{
					orderFilter: 12,
					filterCode: '8',
				},
				{
					orderFilter: 16,
					filterCode: '12',
				},
				{
					orderFilter: 20,
					filterCode: '16',
				},
			],
			swatches: [],
			articleCodes: ['0871889022', '0871889028', '0871889030', '0871889031'],
			ticket:
				'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDg3MTg4OV9ncm91cF8wMjJfZW5fdXM7MDg3MTg4OTAyMl9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
			searchEngineProductId: '0871889_group_022_en_us',
			dummy: false,
			linkPdp: '/en_us/productpage.0871889022.html',
			categoryName: 'Ladies',
			rgbColors: ['#798DB2', '#7D9FD9', '#C4CAD7', '#45464A'],
			articleColorNames: [
				'Light denim blue',
				'Light denim blue',
				'Pale denim blue',
				'Dark gray',
			],
			ecoTaxValue: 0,
			swatchesTotal: 4,
			showPriceMarker: false,
			redirectToPdp: false,
			mainCategoryCode: 'ladies_jeans_wide',
			comingSoon: false,
			brandName: 'H&M',
		},
		{
			code: '0983297_group_010',
			name: '2-pack Regular Fit Sweatshorts',
			stock: {
				stockLevel: 1,
			},
			price: {
				currencyIso: 'USD',
				value: 24.99,
				priceType: 'BUY',
				formattedValue: '$ 24.99',
				type: 'WHITE',
			},
			images: [
				{
					url: 'https://lp2.hm.com/hmgoepprod?set=source[/4e/ae/4eae0051f4fe120aa3d1c2c6026849f5dc6aba77.jpg],origin[dam],category[men_shorts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
				},
			],
			categories: [],
			pk: '9395141705729',
			whitePrice: {
				currencyIso: 'USD',
				value: 24.99,
				priceType: 'BUY',
				formattedValue: '$ 24.99',
				type: 'WHITE',
			},
			articles: [
				{
					code: '0983297010',
					name: '2-pack Regular Fit Sweatshorts',
					images: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/4e/ae/4eae0051f4fe120aa3d1c2c6026849f5dc6aba77.jpg],origin[dam],category[men_shorts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
						},
					],
					pk: '9357582630913',
					whitePrice: {
						currencyIso: 'USD',
						value: 24.99,
						priceType: 'BUY',
						formattedValue: '$ 24.99',
						type: 'WHITE',
					},
					logoPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/4e/ae/4eae0051f4fe120aa3d1c2c6026849f5dc6aba77.jpg],origin[dam],category[men_shorts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
						},
					],
					normalPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/4e/ae/4eae0051f4fe120aa3d1c2c6026849f5dc6aba77.jpg],origin[dam],category[men_shorts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
						},
					],
					visible: false,
					numbersOfPieces: 0,
					ticket:
						'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDk4MzI5N19ncm91cF8wMTBfZW5fdXM7MDk4MzI5NzAxMF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
					dummy: false,
					ecoTaxValue: 0,
					redirectToPdp: false,
					comingSoon: false,
					color: {
						code: '808080',
						text: 'Black/gray melange',
						filterName: 'Black_000000,Gray_808080',
						hybrisCode: '07',
					},
					rgbColor: '#AFAFAF',
					genArticle: '983297010225',
				},
			],
			visible: false,
			numbersOfPieces: 0,
			defaultArticle: {
				code: '0983297010',
				name: '2-pack Regular Fit Sweatshorts',
				images: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/4e/ae/4eae0051f4fe120aa3d1c2c6026849f5dc6aba77.jpg],origin[dam],category[men_shorts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
					},
				],
				pk: '9357582630913',
				whitePrice: {
					currencyIso: 'USD',
					value: 24.99,
					priceType: 'BUY',
					formattedValue: '$ 24.99',
					type: 'WHITE',
				},
				logoPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/4e/ae/4eae0051f4fe120aa3d1c2c6026849f5dc6aba77.jpg],origin[dam],category[men_shorts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
					},
				],
				normalPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/4e/ae/4eae0051f4fe120aa3d1c2c6026849f5dc6aba77.jpg],origin[dam],category[men_shorts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
					},
				],
				visible: false,
				numbersOfPieces: 0,
				ticket:
					'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDk4MzI5N19ncm91cF8wMTBfZW5fdXM7MDk4MzI5NzAxMF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
				dummy: false,
				ecoTaxValue: 0,
				redirectToPdp: false,
				comingSoon: false,
				color: {
					code: '808080',
					text: 'Black/gray melange',
					filterName: 'Black_000000,Gray_808080',
					hybrisCode: '07',
				},
				rgbColor: '#AFAFAF',
				genArticle: '983297010225',
			},
			sale: false,
			variantSizes: [
				{
					orderFilter: 375,
					filterCode: 'XXL',
				},
				{
					orderFilter: 370,
					filterCode: 'L',
				},
				{
					orderFilter: 369,
					filterCode: 'M',
				},
				{
					orderFilter: 366,
					filterCode: 'S',
				},
				{
					orderFilter: 372,
					filterCode: 'XL',
				},
				{
					orderFilter: 363,
					filterCode: 'XS',
				},
				{
					orderFilter: 381,
					filterCode: '3XL',
				},
			],
			swatches: [],
			articleCodes: ['0983297010', '0983297007', '0983297008', '0983297009'],
			ticket:
				'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDk4MzI5N19ncm91cF8wMTBfZW5fdXM7MDk4MzI5NzAxMF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
			searchEngineProductId: '0983297_group_010_en_us',
			dummy: false,
			linkPdp: '/en_us/productpage.0983297010.html',
			categoryName: 'Men',
			rgbColors: ['#AFAFAF', '#7F866F', '#9EACBD', '#928DA0'],
			articleColorNames: [
				'Black/gray melange',
				'Khaki green/blue-gray',
				'Light beige/light blue',
				'Light purple/blue-gray',
			],
			ecoTaxValue: 0,
			swatchesTotal: 6,
			showPriceMarker: false,
			redirectToPdp: false,
			mainCategoryCode: 'men_shorts',
			comingSoon: false,
			brandName: 'H&M',
		},
		{
			code: '1012508_group_009',
			name: 'Corduroy Pants',
			stock: {
				stockLevel: 1,
			},
			price: {
				currencyIso: 'USD',
				value: 34.99,
				priceType: 'BUY',
				formattedValue: '$ 34.99',
				type: 'WHITE',
			},
			images: [
				{
					url: 'https://lp2.hm.com/hmgoepprod?set=source[/89/b8/89b870c4507005e21044ee17e2155d65a7350056.jpg],origin[dam],category[ladies_trousers_highwaisted],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
				},
			],
			categories: [],
			pk: '9424587128833',
			sellingAttributes: ['New Arrival'],
			whitePrice: {
				currencyIso: 'USD',
				value: 34.99,
				priceType: 'BUY',
				formattedValue: '$ 34.99',
				type: 'WHITE',
			},
			articles: [
				{
					code: '1012508009',
					name: 'Corduroy Pants',
					images: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/89/b8/89b870c4507005e21044ee17e2155d65a7350056.jpg],origin[dam],category[ladies_trousers_highwaisted],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
						},
					],
					pk: '9396429881345',
					sellingAttributes: ['New Arrival'],
					whitePrice: {
						currencyIso: 'USD',
						value: 34.99,
						priceType: 'BUY',
						formattedValue: '$ 34.99',
						type: 'WHITE',
					},
					logoPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/66/70/6670be54acf722912d8e05614a18a421f620363b.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					normalPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/66/70/6670be54acf722912d8e05614a18a421f620363b.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					visible: false,
					numbersOfPieces: 0,
					ticket:
						'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTAxMjUwOF9ncm91cF8wMDlfZW5fdXM7MTAxMjUwODAwOV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
					dummy: false,
					ecoTaxValue: 0,
					redirectToPdp: false,
					comingSoon: false,
					color: {
						code: '008000',
						text: 'Dark teal',
						filterName: 'Green_008000',
						hybrisCode: '93',
					},
					rgbColor: '#374C49',
				},
			],
			visible: false,
			concept: ['DIVIDED'],
			numbersOfPieces: 0,
			defaultArticle: {
				code: '1012508009',
				name: 'Corduroy Pants',
				images: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/89/b8/89b870c4507005e21044ee17e2155d65a7350056.jpg],origin[dam],category[ladies_trousers_highwaisted],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
					},
				],
				pk: '9396429881345',
				sellingAttributes: ['New Arrival'],
				whitePrice: {
					currencyIso: 'USD',
					value: 34.99,
					priceType: 'BUY',
					formattedValue: '$ 34.99',
					type: 'WHITE',
				},
				logoPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/66/70/6670be54acf722912d8e05614a18a421f620363b.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				normalPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/66/70/6670be54acf722912d8e05614a18a421f620363b.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				visible: false,
				numbersOfPieces: 0,
				ticket:
					'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTAxMjUwOF9ncm91cF8wMDlfZW5fdXM7MTAxMjUwODAwOV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
				dummy: false,
				ecoTaxValue: 0,
				redirectToPdp: false,
				comingSoon: false,
				color: {
					code: '008000',
					text: 'Dark teal',
					filterName: 'Green_008000',
					hybrisCode: '93',
				},
				rgbColor: '#374C49',
			},
			sale: false,
			variantSizes: [
				{
					orderFilter: 12,
					filterCode: '8',
				},
				{
					orderFilter: 6,
					filterCode: '2',
				},
				{
					orderFilter: 22,
					filterCode: '18',
				},
				{
					orderFilter: 18,
					filterCode: '14',
				},
				{
					orderFilter: 16,
					filterCode: '12',
				},
				{
					orderFilter: 10,
					filterCode: '6',
				},
				{
					orderFilter: 8,
					filterCode: '4',
				},
				{
					orderFilter: 4,
					filterCode: '0',
				},
				{
					orderFilter: 14,
					filterCode: '10',
				},
				{
					orderFilter: 20,
					filterCode: '16',
				},
			],
			swatches: [],
			articleCodes: ['1012508009'],
			ticket:
				'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTAxMjUwOF9ncm91cF8wMDlfZW5fdXM7MTAxMjUwODAwOV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
			searchEngineProductId: '1012508_group_009_en_us',
			dummy: false,
			linkPdp: '/en_us/productpage.1012508009.html',
			categoryName: 'Ladies',
			rgbColors: ['#374C49'],
			articleColorNames: ['Dark teal'],
			ecoTaxValue: 0,
			swatchesTotal: 1,
			showPriceMarker: false,
			redirectToPdp: false,
			mainCategoryCode: 'ladies_trousers_highwaisted',
			comingSoon: false,
			brandName: 'H&M',
		},
		{
			code: '0578630_group_053',
			name: '3-pack Slim Fit T-shirts',
			stock: {
				stockLevel: 1,
			},
			price: {
				currencyIso: 'USD',
				value: 8.99,
				priceType: 'BUY',
				formattedValue: '$ 8.99',
				type: 'RED',
			},
			images: [
				{
					url: 'https://lp2.hm.com/hmgoepprod?set=source[/10/d9/10d99be62e72b2b38d5ee02be5ac97ab9c3d2eb5.jpg],origin[dam],category[men_tshirtstanks_bestbasics],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
				},
			],
			categories: [],
			pk: '9408716865537',
			whitePrice: {
				currencyIso: 'USD',
				value: 24.99,
				priceType: 'BUY',
				formattedValue: '$ 24.99',
				type: 'WHITE',
			},
			redPrice: {
				currencyIso: 'USD',
				value: 8.99,
				priceType: 'BUY',
				formattedValue: '$ 8.99',
				type: 'RED',
			},
			articles: [
				{
					code: '0578630053',
					name: '3-pack Slim Fit T-shirts',
					images: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/10/d9/10d99be62e72b2b38d5ee02be5ac97ab9c3d2eb5.jpg],origin[dam],category[men_tshirtstanks_bestbasics],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
						},
					],
					pk: '9395718258689',
					whitePrice: {
						currencyIso: 'USD',
						value: 24.99,
						priceType: 'BUY',
						formattedValue: '$ 24.99',
						type: 'WHITE',
					},
					redPrice: {
						currencyIso: 'USD',
						value: 8.99,
						priceType: 'BUY',
						formattedValue: '$ 8.99',
						type: 'RED',
					},
					logoPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/ee/f1/eef1ee0d17164d1090600455ebf13b872fde89e8.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					normalPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/ee/f1/eef1ee0d17164d1090600455ebf13b872fde89e8.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					visible: false,
					numbersOfPieces: 0,
					ticket:
						'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDU3ODYzMF9ncm91cF8wNTNfZW5fdXM7MDU3ODYzMDA1M19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
					dummy: false,
					ecoTaxValue: 0,
					redirectToPdp: false,
					comingSoon: false,
					color: {
						code: '808080',
						text: 'Light blue/beige',
						filterName: 'Beige_F5F5DC,Blue_0000FF,Orange_FFA500',
						hybrisCode: '06',
					},
					rgbColor: '#C9CCD1',
					genArticle: '578630053225',
				},
			],
			visible: false,
			concept: ['BASICS'],
			numbersOfPieces: 0,
			defaultArticle: {
				code: '0578630053',
				name: '3-pack Slim Fit T-shirts',
				images: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/10/d9/10d99be62e72b2b38d5ee02be5ac97ab9c3d2eb5.jpg],origin[dam],category[men_tshirtstanks_bestbasics],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
					},
				],
				pk: '9395718258689',
				whitePrice: {
					currencyIso: 'USD',
					value: 24.99,
					priceType: 'BUY',
					formattedValue: '$ 24.99',
					type: 'WHITE',
				},
				redPrice: {
					currencyIso: 'USD',
					value: 8.99,
					priceType: 'BUY',
					formattedValue: '$ 8.99',
					type: 'RED',
				},
				logoPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/ee/f1/eef1ee0d17164d1090600455ebf13b872fde89e8.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				normalPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/ee/f1/eef1ee0d17164d1090600455ebf13b872fde89e8.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				visible: false,
				numbersOfPieces: 0,
				ticket:
					'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDU3ODYzMF9ncm91cF8wNTNfZW5fdXM7MDU3ODYzMDA1M19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
				dummy: false,
				ecoTaxValue: 0,
				redirectToPdp: false,
				comingSoon: false,
				color: {
					code: '808080',
					text: 'Light blue/beige',
					filterName: 'Beige_F5F5DC,Blue_0000FF,Orange_FFA500',
					hybrisCode: '06',
				},
				rgbColor: '#C9CCD1',
				genArticle: '578630053225',
			},
			sale: true,
			variantSizes: [
				{
					orderFilter: 381,
					filterCode: '3XL',
				},
				{
					orderFilter: 366,
					filterCode: 'S',
				},
				{
					orderFilter: 370,
					filterCode: 'L',
				},
				{
					orderFilter: 375,
					filterCode: 'XXL',
				},
				{
					orderFilter: 372,
					filterCode: 'XL',
				},
				{
					orderFilter: 363,
					filterCode: 'XS',
				},
				{
					orderFilter: 369,
					filterCode: 'M',
				},
			],
			swatches: [],
			articleCodes: ['0578630053', '0578630002', '0578630003', '0578630045'],
			ticket:
				'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDU3ODYzMF9ncm91cF8wNTNfZW5fdXM7MDU3ODYzMDA1M19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
			searchEngineProductId: '0578630_group_053_en_us',
			dummy: false,
			linkPdp: '/en_us/productpage.0578630053.html',
			categoryName: 'Men',
			rgbColors: ['#C9CCD1', '#FFFFFF', '#272628', '#A4AEA7'],
			articleColorNames: [
				'Light blue/beige',
				'White',
				'Black',
				'Green/light gray',
			],
			ecoTaxValue: 0,
			swatchesTotal: 8,
			showPriceMarker: false,
			redirectToPdp: false,
			mainCategoryCode: 'men_tshirtstanks_bestbasics',
			comingSoon: false,
			brandName: 'H&M',
		},
		{
			code: '1074871_group_004',
			name: 'V-neck Slip Dress',
			stock: {
				stockLevel: 1,
			},
			price: {
				currencyIso: 'USD',
				value: 12.99,
				priceType: 'BUY',
				formattedValue: '$ 12.99',
				type: 'RED',
			},
			images: [
				{
					url: 'https://lp2.hm.com/hmgoepprod?set=source[/5f/97/5f97f1845f3a5314d6fc8447782865bc116fe5a8.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
				},
			],
			categories: [],
			pk: '9407374360577',
			whitePrice: {
				currencyIso: 'USD',
				value: 29.99,
				priceType: 'BUY',
				formattedValue: '$ 29.99',
				type: 'WHITE',
			},
			redPrice: {
				currencyIso: 'USD',
				value: 12.99,
				priceType: 'BUY',
				formattedValue: '$ 12.99',
				type: 'RED',
			},
			articles: [
				{
					code: '1074871004',
					name: 'V-neck Slip Dress',
					images: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/5f/97/5f97f1845f3a5314d6fc8447782865bc116fe5a8.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
						},
					],
					pk: '9366781493249',
					whitePrice: {
						currencyIso: 'USD',
						value: 29.99,
						priceType: 'BUY',
						formattedValue: '$ 29.99',
						type: 'WHITE',
					},
					redPrice: {
						currencyIso: 'USD',
						value: 12.99,
						priceType: 'BUY',
						formattedValue: '$ 12.99',
						type: 'RED',
					},
					logoPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/4b/3a/4b3ab9c1cb572d5a0fe587c36ac14fa5b2166ca5.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					normalPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/4b/3a/4b3ab9c1cb572d5a0fe587c36ac14fa5b2166ca5.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					markers: [
						{
							text: 'Conscious choice  ',
							type: 'ENVIRONMENT',
						},
					],
					visible: false,
					numbersOfPieces: 0,
					ticket:
						'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA3NDg3MV9ncm91cF8wMDRfZW5fdXM7MTA3NDg3MTAwNF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
					dummy: false,
					ecoTaxValue: 0,
					redirectToPdp: false,
					comingSoon: false,
					color: {
						code: '000000',
						text: 'Black',
						filterName: 'Black_000000',
						hybrisCode: '09',
					},
					rgbColor: '#272628',
					genArticle: '074871004225',
					environmentalMarkers: ['Conscious choice  '],
				},
			],
			markers: [
				{
					text: 'Conscious choice  ',
					type: 'ENVIRONMENT',
				},
			],
			visible: false,
			concept: ['EVERYDAY FASHION'],
			numbersOfPieces: 0,
			defaultArticle: {
				code: '1074871004',
				name: 'V-neck Slip Dress',
				images: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/5f/97/5f97f1845f3a5314d6fc8447782865bc116fe5a8.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
					},
				],
				pk: '9366781493249',
				whitePrice: {
					currencyIso: 'USD',
					value: 29.99,
					priceType: 'BUY',
					formattedValue: '$ 29.99',
					type: 'WHITE',
				},
				redPrice: {
					currencyIso: 'USD',
					value: 12.99,
					priceType: 'BUY',
					formattedValue: '$ 12.99',
					type: 'RED',
				},
				logoPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/4b/3a/4b3ab9c1cb572d5a0fe587c36ac14fa5b2166ca5.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				normalPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/4b/3a/4b3ab9c1cb572d5a0fe587c36ac14fa5b2166ca5.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				markers: [
					{
						text: 'Conscious choice  ',
						type: 'ENVIRONMENT',
					},
				],
				visible: false,
				numbersOfPieces: 0,
				ticket:
					'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA3NDg3MV9ncm91cF8wMDRfZW5fdXM7MTA3NDg3MTAwNF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
				dummy: false,
				ecoTaxValue: 0,
				redirectToPdp: false,
				comingSoon: false,
				color: {
					code: '000000',
					text: 'Black',
					filterName: 'Black_000000',
					hybrisCode: '09',
				},
				rgbColor: '#272628',
				genArticle: '074871004225',
				environmentalMarkers: ['Conscious choice  '],
			},
			sale: true,
			variantSizes: [
				{
					orderFilter: 363,
					filterCode: 'XS',
				},
				{
					orderFilter: 366,
					filterCode: 'S',
				},
				{
					orderFilter: 372,
					filterCode: 'XL',
				},
				{
					orderFilter: 369,
					filterCode: 'M',
				},
				{
					orderFilter: 370,
					filterCode: 'L',
				},
				{
					orderFilter: 375,
					filterCode: 'XXL',
				},
			],
			swatches: [],
			articleCodes: ['1074871004', '1074871003'],
			ticket:
				'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA3NDg3MV9ncm91cF8wMDRfZW5fdXM7MTA3NDg3MTAwNF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
			searchEngineProductId: '1074871_group_004_en_us',
			dummy: false,
			linkPdp: '/en_us/productpage.1074871004.html',
			categoryName: 'Ladies',
			rgbColors: ['#272628', '#353334'],
			articleColorNames: ['Black', 'Black/patterned'],
			ecoTaxValue: 0,
			swatchesTotal: 2,
			showPriceMarker: false,
			redirectToPdp: false,
			mainCategoryCode: 'ladies_dresses_camidresses',
			comingSoon: false,
			brandName: 'H&M',
		},
		{
			code: '1011909_group_017',
			name: 'Ankle-length Pants',
			stock: {
				stockLevel: 1,
			},
			price: {
				currencyIso: 'USD',
				value: 29.99,
				priceType: 'BUY',
				formattedValue: '$ 29.99',
				type: 'WHITE',
			},
			images: [
				{
					url: 'https://lp2.hm.com/hmgoepprod?set=source[/99/1d/991d26fac464fb3c9e58a1c45761ddf10dcf4ed5.jpg],origin[dam],category[ladies_sport_sportaccessories],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
				},
			],
			categories: [],
			pk: '9426445860865',
			sellingAttributes: ['New Arrival'],
			whitePrice: {
				currencyIso: 'USD',
				value: 29.99,
				priceType: 'BUY',
				formattedValue: '$ 29.99',
				type: 'WHITE',
			},
			articles: [
				{
					code: '1011909017',
					name: 'Ankle-length Pants',
					images: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/99/1d/991d26fac464fb3c9e58a1c45761ddf10dcf4ed5.jpg],origin[dam],category[ladies_sport_sportaccessories],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
						},
					],
					pk: '9402987511809',
					sellingAttributes: ['New Arrival'],
					whitePrice: {
						currencyIso: 'USD',
						value: 29.99,
						priceType: 'BUY',
						formattedValue: '$ 29.99',
						type: 'WHITE',
					},
					logoPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/6c/0c/6c0c273682b7039053af59fdf829c06270e6f616.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					normalPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/6c/0c/6c0c273682b7039053af59fdf829c06270e6f616.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					markers: [
						{
							text: 'Conscious choice  ',
							type: 'ENVIRONMENT',
						},
					],
					visible: false,
					numbersOfPieces: 0,
					ticket:
						'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTAxMTkwOV9ncm91cF8wMTdfZW5fdXM7MTAxMTkwOTAxN19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
					dummy: false,
					ecoTaxValue: 0,
					redirectToPdp: false,
					comingSoon: false,
					color: {
						code: '808080',
						text: 'Gray',
						filterName: 'Gray_808080',
						hybrisCode: '06',
					},
					rgbColor: '#AAA9AB',
					environmentalMarkers: ['Conscious choice  '],
				},
			],
			markers: [
				{
					text: 'Conscious choice  ',
					type: 'ENVIRONMENT',
				},
			],
			visible: false,
			concept: ['EVERYDAY FASHION'],
			numbersOfPieces: 0,
			defaultArticle: {
				code: '1011909017',
				name: 'Ankle-length Pants',
				images: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/99/1d/991d26fac464fb3c9e58a1c45761ddf10dcf4ed5.jpg],origin[dam],category[ladies_sport_sportaccessories],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
					},
				],
				pk: '9402987511809',
				sellingAttributes: ['New Arrival'],
				whitePrice: {
					currencyIso: 'USD',
					value: 29.99,
					priceType: 'BUY',
					formattedValue: '$ 29.99',
					type: 'WHITE',
				},
				logoPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/6c/0c/6c0c273682b7039053af59fdf829c06270e6f616.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				normalPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/6c/0c/6c0c273682b7039053af59fdf829c06270e6f616.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				markers: [
					{
						text: 'Conscious choice  ',
						type: 'ENVIRONMENT',
					},
				],
				visible: false,
				numbersOfPieces: 0,
				ticket:
					'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTAxMTkwOV9ncm91cF8wMTdfZW5fdXM7MTAxMTkwOTAxN19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
				dummy: false,
				ecoTaxValue: 0,
				redirectToPdp: false,
				comingSoon: false,
				color: {
					code: '808080',
					text: 'Gray',
					filterName: 'Gray_808080',
					hybrisCode: '06',
				},
				rgbColor: '#AAA9AB',
				environmentalMarkers: ['Conscious choice  '],
			},
			sale: false,
			variantSizes: [
				{
					orderFilter: 18,
					filterCode: '14',
				},
				{
					orderFilter: 8,
					filterCode: '4',
				},
				{
					orderFilter: 12,
					filterCode: '8',
				},
				{
					orderFilter: 54,
					filterCode: '20',
				},
				{
					orderFilter: 16,
					filterCode: '12',
				},
				{
					orderFilter: 10,
					filterCode: '6',
				},
				{
					orderFilter: 14,
					filterCode: '10',
				},
				{
					orderFilter: 22,
					filterCode: '18',
				},
				{
					orderFilter: 4,
					filterCode: '0',
				},
				{
					orderFilter: 6,
					filterCode: '2',
				},
				{
					orderFilter: 20,
					filterCode: '16',
				},
			],
			swatches: [],
			articleCodes: ['1011909017'],
			ticket:
				'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTAxMTkwOV9ncm91cF8wMTdfZW5fdXM7MTAxMTkwOTAxN19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
			searchEngineProductId: '1011909_group_017_en_us',
			dummy: false,
			linkPdp: '/en_us/productpage.1011909017.html',
			categoryName: 'Ladies',
			rgbColors: ['#AAA9AB'],
			articleColorNames: ['Gray'],
			ecoTaxValue: 0,
			swatchesTotal: 1,
			showPriceMarker: false,
			redirectToPdp: false,
			mainCategoryCode: 'ladies_trousers_highwaisted',
			comingSoon: false,
			brandName: 'H&M',
		},
		{
			code: '0542533_group_054',
			name: '3-pack Slim Fit T-shirts',
			stock: {
				stockLevel: 1,
			},
			price: {
				currencyIso: 'USD',
				value: 8.99,
				priceType: 'BUY',
				formattedValue: '$ 8.99',
				type: 'RED',
			},
			images: [
				{
					url: 'https://lp2.hm.com/hmgoepprod?set=source[/ec/84/ec84da55b44f6b1fd3ab1f3a7bf43578c9c7fa81.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
				},
			],
			categories: [],
			pk: '9407384289281',
			whitePrice: {
				currencyIso: 'USD',
				value: 24.99,
				priceType: 'BUY',
				formattedValue: '$ 24.99',
				type: 'WHITE',
			},
			redPrice: {
				currencyIso: 'USD',
				value: 8.99,
				priceType: 'BUY',
				formattedValue: '$ 8.99',
				type: 'RED',
			},
			articles: [
				{
					code: '0542533054',
					name: '3-pack Slim Fit T-shirts',
					images: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/ec/84/ec84da55b44f6b1fd3ab1f3a7bf43578c9c7fa81.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
						},
					],
					pk: '9394080350209',
					whitePrice: {
						currencyIso: 'USD',
						value: 24.99,
						priceType: 'BUY',
						formattedValue: '$ 24.99',
						type: 'WHITE',
					},
					redPrice: {
						currencyIso: 'USD',
						value: 8.99,
						priceType: 'BUY',
						formattedValue: '$ 8.99',
						type: 'RED',
					},
					logoPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/67/89/6789823d068d35163302ae927a187189078fc9bd.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					normalPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/67/89/6789823d068d35163302ae927a187189078fc9bd.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					visible: false,
					numbersOfPieces: 0,
					ticket:
						'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDU0MjUzM19ncm91cF8wNTRfZW5fdXM7MDU0MjUzMzA1NF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
					dummy: false,
					ecoTaxValue: 0,
					redirectToPdp: false,
					comingSoon: false,
					color: {
						code: 'FFFFFF',
						text: 'Turquoise/beige/white',
						filterName: 'Beige_F5F5DC,Turquoise_40E0D0,White_FFFFFF',
						hybrisCode: '10',
					},
					rgbColor: '#FFFFFF',
					genArticle: '542533054225',
				},
			],
			visible: false,
			concept: ['BASICS'],
			numbersOfPieces: 0,
			defaultArticle: {
				code: '0542533054',
				name: '3-pack Slim Fit T-shirts',
				images: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/ec/84/ec84da55b44f6b1fd3ab1f3a7bf43578c9c7fa81.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
					},
				],
				pk: '9394080350209',
				whitePrice: {
					currencyIso: 'USD',
					value: 24.99,
					priceType: 'BUY',
					formattedValue: '$ 24.99',
					type: 'WHITE',
				},
				redPrice: {
					currencyIso: 'USD',
					value: 8.99,
					priceType: 'BUY',
					formattedValue: '$ 8.99',
					type: 'RED',
				},
				logoPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/67/89/6789823d068d35163302ae927a187189078fc9bd.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				normalPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/67/89/6789823d068d35163302ae927a187189078fc9bd.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				visible: false,
				numbersOfPieces: 0,
				ticket:
					'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDU0MjUzM19ncm91cF8wNTRfZW5fdXM7MDU0MjUzMzA1NF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
				dummy: false,
				ecoTaxValue: 0,
				redirectToPdp: false,
				comingSoon: false,
				color: {
					code: 'FFFFFF',
					text: 'Turquoise/beige/white',
					filterName: 'Beige_F5F5DC,Turquoise_40E0D0,White_FFFFFF',
					hybrisCode: '10',
				},
				rgbColor: '#FFFFFF',
				genArticle: '542533054225',
			},
			sale: true,
			variantSizes: [
				{
					orderFilter: 366,
					filterCode: 'S',
				},
				{
					orderFilter: 369,
					filterCode: 'M',
				},
				{
					orderFilter: 375,
					filterCode: 'XXL',
				},
				{
					orderFilter: 370,
					filterCode: 'L',
				},
				{
					orderFilter: 363,
					filterCode: 'XS',
				},
				{
					orderFilter: 372,
					filterCode: 'XL',
				},
			],
			swatches: [],
			articleCodes: ['0542533054', '0542533002', '0542533045', '0542533050'],
			ticket:
				'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDU0MjUzM19ncm91cF8wNTRfZW5fdXM7MDU0MjUzMzA1NF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
			searchEngineProductId: '0542533_group_054_en_us',
			dummy: false,
			linkPdp: '/en_us/productpage.0542533054.html',
			categoryName: 'Men',
			rgbColors: ['#FFFFFF', '#272628', '#616C62', '#224A7C'],
			articleColorNames: [
				'Turquoise/beige/white',
				'Black',
				'Green/pink/light gray',
				'White/turquoise/blue',
			],
			ecoTaxValue: 0,
			swatchesTotal: 5,
			showPriceMarker: false,
			redirectToPdp: false,
			mainCategoryCode: 'men_tshirtstanks_bestbasics',
			comingSoon: false,
			brandName: 'H&M',
		},
		{
			code: '1088802_group_001',
			name: 'Fine-knit Cardigan Dress',
			stock: {
				stockLevel: 1,
			},
			price: {
				currencyIso: 'USD',
				value: 49.99,
				priceType: 'BUY',
				formattedValue: '$ 49.99',
				type: 'WHITE',
			},
			images: [
				{
					url: 'https://lp2.hm.com/hmgoepprod?set=source[/b9/4e/b94e80b746dbfdbe0df0eb72f146d1476d37cfd1.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
				},
			],
			categories: [],
			pk: '9424226516993',
			sellingAttributes: ['New Arrival'],
			whitePrice: {
				currencyIso: 'USD',
				value: 49.99,
				priceType: 'BUY',
				formattedValue: '$ 49.99',
				type: 'WHITE',
			},
			articles: [
				{
					code: '1088802001',
					name: 'Fine-knit Cardigan Dress',
					images: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/b9/4e/b94e80b746dbfdbe0df0eb72f146d1476d37cfd1.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
						},
					],
					pk: '9394614665217',
					sellingAttributes: ['New Arrival'],
					whitePrice: {
						currencyIso: 'USD',
						value: 49.99,
						priceType: 'BUY',
						formattedValue: '$ 49.99',
						type: 'WHITE',
					},
					logoPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/d8/d8/d8d8d98308c910dd7d80237be5a4b3bac6479b95.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					normalPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/d8/d8/d8d8d98308c910dd7d80237be5a4b3bac6479b95.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					markers: [
						{
							text: 'Conscious choice  ',
							type: 'ENVIRONMENT',
						},
					],
					visible: false,
					numbersOfPieces: 0,
					ticket:
						'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA4ODgwMl9ncm91cF8wMDFfZW5fdXM7MTA4ODgwMjAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
					dummy: false,
					ecoTaxValue: 0,
					redirectToPdp: false,
					comingSoon: false,
					color: {
						code: 'F5F5DC',
						text: 'Light beige melange',
						filterName: 'Beige_F5F5DC',
						hybrisCode: '12',
					},
					rgbColor: '#D0C2AA',
					genArticle: '088802001226',
					environmentalMarkers: ['Conscious choice  '],
				},
			],
			markers: [
				{
					text: 'Conscious choice  ',
					type: 'ENVIRONMENT',
				},
			],
			visible: false,
			numbersOfPieces: 0,
			defaultArticle: {
				code: '1088802001',
				name: 'Fine-knit Cardigan Dress',
				images: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/b9/4e/b94e80b746dbfdbe0df0eb72f146d1476d37cfd1.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
					},
				],
				pk: '9394614665217',
				sellingAttributes: ['New Arrival'],
				whitePrice: {
					currencyIso: 'USD',
					value: 49.99,
					priceType: 'BUY',
					formattedValue: '$ 49.99',
					type: 'WHITE',
				},
				logoPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/d8/d8/d8d8d98308c910dd7d80237be5a4b3bac6479b95.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				normalPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/d8/d8/d8d8d98308c910dd7d80237be5a4b3bac6479b95.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				markers: [
					{
						text: 'Conscious choice  ',
						type: 'ENVIRONMENT',
					},
				],
				visible: false,
				numbersOfPieces: 0,
				ticket:
					'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA4ODgwMl9ncm91cF8wMDFfZW5fdXM7MTA4ODgwMjAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
				dummy: false,
				ecoTaxValue: 0,
				redirectToPdp: false,
				comingSoon: false,
				color: {
					code: 'F5F5DC',
					text: 'Light beige melange',
					filterName: 'Beige_F5F5DC',
					hybrisCode: '12',
				},
				rgbColor: '#D0C2AA',
				genArticle: '088802001226',
				environmentalMarkers: ['Conscious choice  '],
			},
			sale: false,
			variantSizes: [
				{
					orderFilter: 370,
					filterCode: 'L',
				},
				{
					orderFilter: 372,
					filterCode: 'XL',
				},
				{
					orderFilter: 366,
					filterCode: 'S',
				},
				{
					orderFilter: 375,
					filterCode: 'XXL',
				},
				{
					orderFilter: 369,
					filterCode: 'M',
				},
				{
					orderFilter: 363,
					filterCode: 'XS',
				},
			],
			swatches: [],
			articleCodes: ['1088802001'],
			ticket:
				'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA4ODgwMl9ncm91cF8wMDFfZW5fdXM7MTA4ODgwMjAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
			searchEngineProductId: '1088802_group_001_en_us',
			dummy: false,
			linkPdp: '/en_us/productpage.1088802001.html',
			categoryName: 'Ladies',
			rgbColors: ['#D0C2AA'],
			articleColorNames: ['Light beige melange'],
			ecoTaxValue: 0,
			swatchesTotal: 1,
			showPriceMarker: false,
			redirectToPdp: false,
			mainCategoryCode: 'ladies_dresses_maxidresses',
			comingSoon: false,
			brandName: 'H&M',
		},
		{
			code: '0938930_group_018',
			name: 'Jacquard-weave Handbag',
			stock: {
				stockLevel: 1,
			},
			price: {
				currencyIso: 'USD',
				value: 34.99,
				priceType: 'BUY',
				formattedValue: '$ 34.99',
				type: 'WHITE',
			},
			images: [
				{
					url: 'https://lp2.hm.com/hmgoepprod?set=source[/4b/51/4b51580cd66fd9186691d7583d31571034a5d168.jpg],origin[dam],category[ladies_accessories_bags_handbags],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
				},
			],
			categories: [],
			pk: '9425734991873',
			sellingAttributes: ['New Arrival'],
			whitePrice: {
				currencyIso: 'USD',
				value: 34.99,
				priceType: 'BUY',
				formattedValue: '$ 34.99',
				type: 'WHITE',
			},
			articles: [
				{
					code: '0938930018',
					name: 'Jacquard-weave Handbag',
					images: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/4b/51/4b51580cd66fd9186691d7583d31571034a5d168.jpg],origin[dam],category[ladies_accessories_bags_handbags],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
						},
					],
					pk: '9399372447745',
					sellingAttributes: ['New Arrival'],
					whitePrice: {
						currencyIso: 'USD',
						value: 34.99,
						priceType: 'BUY',
						formattedValue: '$ 34.99',
						type: 'WHITE',
					},
					logoPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/5b/d0/5bd00a1673d665be13b03191f162fc313c50be3c.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					normalPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/5b/d0/5bd00a1673d665be13b03191f162fc313c50be3c.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					visible: false,
					numbersOfPieces: 0,
					ticket:
						'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDkzODkzMF9ncm91cF8wMThfZW5fdXM7MDkzODkzMDAxOF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
					dummy: false,
					ecoTaxValue: 0,
					redirectToPdp: false,
					comingSoon: false,
					color: {
						code: '000000',
						text: 'Black/houndstooth-patterned',
						filterName: 'Beige_F5F5DC,Black_000000',
						hybrisCode: '09',
					},
					rgbColor: '#272628',
					genArticle: '938930018226',
				},
			],
			visible: false,
			numbersOfPieces: 0,
			defaultArticle: {
				code: '0938930018',
				name: 'Jacquard-weave Handbag',
				images: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/4b/51/4b51580cd66fd9186691d7583d31571034a5d168.jpg],origin[dam],category[ladies_accessories_bags_handbags],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
					},
				],
				pk: '9399372447745',
				sellingAttributes: ['New Arrival'],
				whitePrice: {
					currencyIso: 'USD',
					value: 34.99,
					priceType: 'BUY',
					formattedValue: '$ 34.99',
					type: 'WHITE',
				},
				logoPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/5b/d0/5bd00a1673d665be13b03191f162fc313c50be3c.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				normalPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/5b/d0/5bd00a1673d665be13b03191f162fc313c50be3c.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				visible: false,
				numbersOfPieces: 0,
				ticket:
					'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDkzODkzMF9ncm91cF8wMThfZW5fdXM7MDkzODkzMDAxOF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
				dummy: false,
				ecoTaxValue: 0,
				redirectToPdp: false,
				comingSoon: false,
				color: {
					code: '000000',
					text: 'Black/houndstooth-patterned',
					filterName: 'Beige_F5F5DC,Black_000000',
					hybrisCode: '09',
				},
				rgbColor: '#272628',
				genArticle: '938930018226',
			},
			sale: false,
			variantSizes: [],
			swatches: [],
			articleCodes: ['0938930018', '0938930010', '0938930013'],
			ticket:
				'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDkzODkzMF9ncm91cF8wMThfZW5fdXM7MDkzODkzMDAxOF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
			searchEngineProductId: '0938930_group_018_en_us',
			dummy: false,
			linkPdp: '/en_us/productpage.0938930018.html',
			categoryName: 'Ladies',
			rgbColors: ['#272628', '#272628', '#272628'],
			articleColorNames: [
				'Black/houndstooth-patterned',
				'Black/patterned',
				'Light beige/leopard print',
			],
			ecoTaxValue: 0,
			swatchesTotal: 3,
			showPriceMarker: false,
			redirectToPdp: false,
			mainCategoryCode: 'ladies_accessories_bags_handbags',
			comingSoon: false,
			brandName: 'H&M',
		},
		{
			code: '0846933_group_101',
			name: 'Regular Fit Hoodie',
			stock: {
				stockLevel: 1,
			},
			price: {
				currencyIso: 'USD',
				value: 34.99,
				priceType: 'BUY',
				formattedValue: '$ 34.99',
				type: 'WHITE',
			},
			images: [
				{
					url: 'https://lp2.hm.com/hmgoepprod?set=source[/ca/08/ca08e147cecb02d9aa8c7e4cec59d582f5c71746.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
				},
			],
			categories: [],
			pk: '9410275246081',
			whitePrice: {
				currencyIso: 'USD',
				value: 34.99,
				priceType: 'BUY',
				formattedValue: '$ 34.99',
				type: 'WHITE',
			},
			articles: [
				{
					code: '0846933101',
					name: 'Regular Fit Hoodie',
					images: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/ca/08/ca08e147cecb02d9aa8c7e4cec59d582f5c71746.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
						},
					],
					pk: '9394186190849',
					whitePrice: {
						currencyIso: 'USD',
						value: 34.99,
						priceType: 'BUY',
						formattedValue: '$ 34.99',
						type: 'WHITE',
					},
					logoPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/42/9f/429f55b0b48c4ce0fdd5b16a63741faadcabd39d.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					normalPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/42/9f/429f55b0b48c4ce0fdd5b16a63741faadcabd39d.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					visible: false,
					numbersOfPieces: 0,
					ticket:
						'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDg0NjkzM19ncm91cF8xMDFfZW5fdXM7MDg0NjkzMzEwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
					dummy: false,
					ecoTaxValue: 0,
					redirectToPdp: false,
					comingSoon: false,
					color: {
						code: 'A52A2A',
						text: 'Dark brown/Snoopy',
						filterName: 'Brown_A52A2A,Multi_000000',
						hybrisCode: '17',
					},
					rgbColor: '#443630',
					genArticle: '846933101226',
				},
			],
			visible: false,
			concept: ['DIVIDED'],
			numbersOfPieces: 0,
			defaultArticle: {
				code: '0846933101',
				name: 'Regular Fit Hoodie',
				images: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/ca/08/ca08e147cecb02d9aa8c7e4cec59d582f5c71746.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
					},
				],
				pk: '9394186190849',
				whitePrice: {
					currencyIso: 'USD',
					value: 34.99,
					priceType: 'BUY',
					formattedValue: '$ 34.99',
					type: 'WHITE',
				},
				logoPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/42/9f/429f55b0b48c4ce0fdd5b16a63741faadcabd39d.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				normalPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/42/9f/429f55b0b48c4ce0fdd5b16a63741faadcabd39d.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				visible: false,
				numbersOfPieces: 0,
				ticket:
					'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDg0NjkzM19ncm91cF8xMDFfZW5fdXM7MDg0NjkzMzEwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
				dummy: false,
				ecoTaxValue: 0,
				redirectToPdp: false,
				comingSoon: false,
				color: {
					code: 'A52A2A',
					text: 'Dark brown/Snoopy',
					filterName: 'Brown_A52A2A,Multi_000000',
					hybrisCode: '17',
				},
				rgbColor: '#443630',
				genArticle: '846933101226',
			},
			sale: false,
			variantSizes: [
				{
					orderFilter: 366,
					filterCode: 'S',
				},
				{
					orderFilter: 372,
					filterCode: 'XL',
				},
				{
					orderFilter: 370,
					filterCode: 'L',
				},
				{
					orderFilter: 363,
					filterCode: 'XS',
				},
				{
					orderFilter: 369,
					filterCode: 'M',
				},
				{
					orderFilter: 381,
					filterCode: '3XL',
				},
				{
					orderFilter: 375,
					filterCode: 'XXL',
				},
			],
			swatches: [],
			articleCodes: ['0846933101', '0846933053', '0846933083', '0846933084'],
			ticket:
				'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDg0NjkzM19ncm91cF8xMDFfZW5fdXM7MDg0NjkzMzEwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
			searchEngineProductId: '0846933_group_101_en_us',
			dummy: false,
			linkPdp: '/en_us/productpage.0846933101.html',
			categoryName: 'Men',
			rgbColors: ['#443630', '#272628', '#DEAAC7', '#377163'],
			articleColorNames: [
				'Dark brown/Snoopy',
				'Black/SpongeBob SquarePants',
				'Pink/Donald Duck',
				'Dark turquoise/Donald Duck',
			],
			ecoTaxValue: 0,
			swatchesTotal: 8,
			showPriceMarker: false,
			redirectToPdp: false,
			mainCategoryCode: 'men_hoodiessweatshirts_hoodies',
			comingSoon: false,
			brandName: 'H&M',
		},
		{
			code: '1079432_group_007',
			name: 'V-neck Dress',
			stock: {
				stockLevel: 1,
			},
			price: {
				currencyIso: 'USD',
				value: 8.99,
				priceType: 'BUY',
				formattedValue: '$ 8.99',
				type: 'RED',
			},
			images: [
				{
					url: 'https://lp2.hm.com/hmgoepprod?set=source[/1a/a6/1aa6a6b248763f9a25580776686945bbdaa5fa6c.jpg],origin[dam],category[ladies_dresses_longsleevedress],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
				},
			],
			categories: [],
			pk: '9411238658049',
			sellingAttributes: ['New Arrival'],
			whitePrice: {
				currencyIso: 'USD',
				value: 19.99,
				priceType: 'BUY',
				formattedValue: '$ 19.99',
				type: 'WHITE',
			},
			redPrice: {
				currencyIso: 'USD',
				value: 8.99,
				priceType: 'BUY',
				formattedValue: '$ 8.99',
				type: 'RED',
			},
			articles: [
				{
					code: '1079432007',
					name: 'V-neck Dress',
					images: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/1a/a6/1aa6a6b248763f9a25580776686945bbdaa5fa6c.jpg],origin[dam],category[ladies_dresses_longsleevedress],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
						},
					],
					pk: '9373344661505',
					sellingAttributes: ['New Arrival'],
					whitePrice: {
						currencyIso: 'USD',
						value: 19.99,
						priceType: 'BUY',
						formattedValue: '$ 19.99',
						type: 'WHITE',
					},
					redPrice: {
						currencyIso: 'USD',
						value: 8.99,
						priceType: 'BUY',
						formattedValue: '$ 8.99',
						type: 'RED',
					},
					logoPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/da/e2/dae2e1cc952c08f0a1fc59e8bf508292b1383895.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					normalPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/da/e2/dae2e1cc952c08f0a1fc59e8bf508292b1383895.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					markers: [
						{
							text: 'Conscious choice  ',
							type: 'ENVIRONMENT',
						},
					],
					visible: false,
					numbersOfPieces: 0,
					ticket:
						'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA3OTQzMl9ncm91cF8wMDdfZW5fdXM7MTA3OTQzMjAwN19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
					dummy: false,
					ecoTaxValue: 0,
					redirectToPdp: false,
					comingSoon: false,
					color: {
						code: 'FFA500',
						text: 'Light apricot',
						filterName: 'Orange_FFA500',
						hybrisCode: '31',
					},
					rgbColor: '#E8C29A',
					genArticle: '079432007225',
					environmentalMarkers: ['Conscious choice  '],
				},
			],
			markers: [
				{
					text: 'Conscious choice  ',
					type: 'ENVIRONMENT',
				},
			],
			visible: false,
			concept: ['EVERYDAY FASHION'],
			numbersOfPieces: 0,
			defaultArticle: {
				code: '1079432007',
				name: 'V-neck Dress',
				images: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/1a/a6/1aa6a6b248763f9a25580776686945bbdaa5fa6c.jpg],origin[dam],category[ladies_dresses_longsleevedress],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
					},
				],
				pk: '9373344661505',
				sellingAttributes: ['New Arrival'],
				whitePrice: {
					currencyIso: 'USD',
					value: 19.99,
					priceType: 'BUY',
					formattedValue: '$ 19.99',
					type: 'WHITE',
				},
				redPrice: {
					currencyIso: 'USD',
					value: 8.99,
					priceType: 'BUY',
					formattedValue: '$ 8.99',
					type: 'RED',
				},
				logoPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/da/e2/dae2e1cc952c08f0a1fc59e8bf508292b1383895.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				normalPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/da/e2/dae2e1cc952c08f0a1fc59e8bf508292b1383895.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				markers: [
					{
						text: 'Conscious choice  ',
						type: 'ENVIRONMENT',
					},
				],
				visible: false,
				numbersOfPieces: 0,
				ticket:
					'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA3OTQzMl9ncm91cF8wMDdfZW5fdXM7MTA3OTQzMjAwN19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
				dummy: false,
				ecoTaxValue: 0,
				redirectToPdp: false,
				comingSoon: false,
				color: {
					code: 'FFA500',
					text: 'Light apricot',
					filterName: 'Orange_FFA500',
					hybrisCode: '31',
				},
				rgbColor: '#E8C29A',
				genArticle: '079432007225',
				environmentalMarkers: ['Conscious choice  '],
			},
			sale: true,
			variantSizes: [
				{
					orderFilter: 369,
					filterCode: 'M',
				},
				{
					orderFilter: 366,
					filterCode: 'S',
				},
				{
					orderFilter: 375,
					filterCode: 'XXL',
				},
				{
					orderFilter: 372,
					filterCode: 'XL',
				},
				{
					orderFilter: 370,
					filterCode: 'L',
				},
				{
					orderFilter: 363,
					filterCode: 'XS',
				},
			],
			swatches: [],
			articleCodes: ['1079432007', '1079432006', '1079432010', '1079432013'],
			ticket:
				'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA3OTQzMl9ncm91cF8wMDdfZW5fdXM7MTA3OTQzMjAwN19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
			searchEngineProductId: '1079432_group_007_en_us',
			dummy: false,
			linkPdp: '/en_us/productpage.1079432007.html',
			categoryName: 'Ladies',
			rgbColors: ['#E8C29A', '#F7D277', '#272628', '#314E8C'],
			articleColorNames: [
				'Light apricot',
				'Orange/Floral',
				'Black/small flowers',
				'Bright blue',
			],
			ecoTaxValue: 0,
			swatchesTotal: 4,
			showPriceMarker: false,
			redirectToPdp: false,
			mainCategoryCode: 'ladies_dresses_longsleevedress',
			comingSoon: false,
			brandName: 'H&M',
		},
		{
			code: '1081938_group_003',
			name: 'Cotton Voile A-line Dress',
			stock: {
				stockLevel: 1,
			},
			price: {
				currencyIso: 'USD',
				value: 10.99,
				priceType: 'BUY',
				formattedValue: '$ 10.99',
				type: 'RED',
			},
			images: [
				{
					url: 'https://lp2.hm.com/hmgoepprod?set=source[/42/43/4243fe9bb8ad7df5ca112155a15401b56619506d.jpg],origin[dam],category[ladies_dresses_aline],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
				},
			],
			categories: [],
			pk: '9407561596929',
			sellingAttributes: ['New Arrival'],
			whitePrice: {
				currencyIso: 'USD',
				value: 19.99,
				priceType: 'BUY',
				formattedValue: '$ 19.99',
				type: 'WHITE',
			},
			redPrice: {
				currencyIso: 'USD',
				value: 10.99,
				priceType: 'BUY',
				formattedValue: '$ 10.99',
				type: 'RED',
			},
			articles: [
				{
					code: '1081938003',
					name: 'Cotton Voile A-line Dress',
					images: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/42/43/4243fe9bb8ad7df5ca112155a15401b56619506d.jpg],origin[dam],category[ladies_dresses_aline],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
						},
					],
					pk: '9382485360641',
					sellingAttributes: ['New Arrival'],
					whitePrice: {
						currencyIso: 'USD',
						value: 19.99,
						priceType: 'BUY',
						formattedValue: '$ 19.99',
						type: 'WHITE',
					},
					redPrice: {
						currencyIso: 'USD',
						value: 10.99,
						priceType: 'BUY',
						formattedValue: '$ 10.99',
						type: 'RED',
					},
					logoPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/e6/ae/e6aea4216de02ce3d0ab81c7b3297bdefba05180.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					normalPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/e6/ae/e6aea4216de02ce3d0ab81c7b3297bdefba05180.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					visible: false,
					numbersOfPieces: 0,
					ticket:
						'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA4MTkzOF9ncm91cF8wMDNfZW5fdXM7MTA4MTkzODAwM19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
					dummy: false,
					ecoTaxValue: 0,
					redirectToPdp: false,
					comingSoon: false,
					color: {
						code: 'FFA500',
						text: 'Pink/Floral',
						filterName: 'Pink_FFC0CB',
						hybrisCode: '31',
					},
					rgbColor: '#F2E6DF',
					genArticle: '081938003225',
				},
			],
			visible: false,
			concept: ['EVERYDAY FASHION'],
			numbersOfPieces: 0,
			defaultArticle: {
				code: '1081938003',
				name: 'Cotton Voile A-line Dress',
				images: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/42/43/4243fe9bb8ad7df5ca112155a15401b56619506d.jpg],origin[dam],category[ladies_dresses_aline],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
					},
				],
				pk: '9382485360641',
				sellingAttributes: ['New Arrival'],
				whitePrice: {
					currencyIso: 'USD',
					value: 19.99,
					priceType: 'BUY',
					formattedValue: '$ 19.99',
					type: 'WHITE',
				},
				redPrice: {
					currencyIso: 'USD',
					value: 10.99,
					priceType: 'BUY',
					formattedValue: '$ 10.99',
					type: 'RED',
				},
				logoPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/e6/ae/e6aea4216de02ce3d0ab81c7b3297bdefba05180.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				normalPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/e6/ae/e6aea4216de02ce3d0ab81c7b3297bdefba05180.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				visible: false,
				numbersOfPieces: 0,
				ticket:
					'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA4MTkzOF9ncm91cF8wMDNfZW5fdXM7MTA4MTkzODAwM19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
				dummy: false,
				ecoTaxValue: 0,
				redirectToPdp: false,
				comingSoon: false,
				color: {
					code: 'FFA500',
					text: 'Pink/Floral',
					filterName: 'Pink_FFC0CB',
					hybrisCode: '31',
				},
				rgbColor: '#F2E6DF',
				genArticle: '081938003225',
			},
			sale: true,
			variantSizes: [
				{
					orderFilter: 366,
					filterCode: 'S',
				},
				{
					orderFilter: 363,
					filterCode: 'XS',
				},
			],
			swatches: [],
			articleCodes: ['1081938003', '1081938001', '1081938002'],
			ticket:
				'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA4MTkzOF9ncm91cF8wMDNfZW5fdXM7MTA4MTkzODAwM19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
			searchEngineProductId: '1081938_group_003_en_us',
			dummy: false,
			linkPdp: '/en_us/productpage.1081938003.html',
			categoryName: 'Ladies',
			rgbColors: ['#F2E6DF', '#F0EEED', '#CF3F3B'],
			articleColorNames: ['Pink/Floral', 'White', 'Red'],
			ecoTaxValue: 0,
			swatchesTotal: 3,
			showPriceMarker: false,
			redirectToPdp: false,
			mainCategoryCode: 'ladies_dresses_aline',
			comingSoon: false,
			brandName: 'H&M',
		},
		{
			code: '1095413_group_002',
			name: 'Linen-blend Shirt Dress',
			stock: {
				stockLevel: 1,
			},
			price: {
				currencyIso: 'USD',
				value: 59.99,
				priceType: 'BUY',
				formattedValue: '$ 59.99',
				type: 'WHITE',
			},
			images: [
				{
					url: 'https://lp2.hm.com/hmgoepprod?set=source[/77/15/7715e3fe3ded5cd9349a522d66db77edad497655.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
				},
			],
			categories: [],
			pk: '9417940369409',
			sellingAttributes: ['New Arrival'],
			whitePrice: {
				currencyIso: 'USD',
				value: 59.99,
				priceType: 'BUY',
				formattedValue: '$ 59.99',
				type: 'WHITE',
			},
			articles: [
				{
					code: '1095413002',
					name: 'Linen-blend Shirt Dress',
					images: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/77/15/7715e3fe3ded5cd9349a522d66db77edad497655.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
						},
					],
					pk: '9397529313281',
					sellingAttributes: ['New Arrival'],
					whitePrice: {
						currencyIso: 'USD',
						value: 59.99,
						priceType: 'BUY',
						formattedValue: '$ 59.99',
						type: 'WHITE',
					},
					logoPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/35/d9/35d9079556468e9f74beb337e949d8e9e005cce0.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					normalPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/35/d9/35d9079556468e9f74beb337e949d8e9e005cce0.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					visible: false,
					numbersOfPieces: 0,
					ticket:
						'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA5NTQxM19ncm91cF8wMDJfZW5fdXM7MTA5NTQxMzAwMl9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
					dummy: false,
					ecoTaxValue: 0,
					redirectToPdp: false,
					comingSoon: false,
					color: {
						code: 'FFFFFF',
						text: 'Cream',
						filterName: 'White_FFFFFF',
						hybrisCode: '10',
					},
					rgbColor: '#C9C8C2',
					genArticle: '095413002225',
				},
			],
			visible: false,
			concept: ['TREND'],
			numbersOfPieces: 0,
			defaultArticle: {
				code: '1095413002',
				name: 'Linen-blend Shirt Dress',
				images: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/77/15/7715e3fe3ded5cd9349a522d66db77edad497655.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
					},
				],
				pk: '9397529313281',
				sellingAttributes: ['New Arrival'],
				whitePrice: {
					currencyIso: 'USD',
					value: 59.99,
					priceType: 'BUY',
					formattedValue: '$ 59.99',
					type: 'WHITE',
				},
				logoPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/35/d9/35d9079556468e9f74beb337e949d8e9e005cce0.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				normalPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/35/d9/35d9079556468e9f74beb337e949d8e9e005cce0.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				visible: false,
				numbersOfPieces: 0,
				ticket:
					'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA5NTQxM19ncm91cF8wMDJfZW5fdXM7MTA5NTQxMzAwMl9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
				dummy: false,
				ecoTaxValue: 0,
				redirectToPdp: false,
				comingSoon: false,
				color: {
					code: 'FFFFFF',
					text: 'Cream',
					filterName: 'White_FFFFFF',
					hybrisCode: '10',
				},
				rgbColor: '#C9C8C2',
				genArticle: '095413002225',
			},
			sale: false,
			variantSizes: [
				{
					orderFilter: 375,
					filterCode: 'XXL',
				},
				{
					orderFilter: 363,
					filterCode: 'XS',
				},
				{
					orderFilter: 369,
					filterCode: 'M',
				},
				{
					orderFilter: 366,
					filterCode: 'S',
				},
				{
					orderFilter: 372,
					filterCode: 'XL',
				},
				{
					orderFilter: 370,
					filterCode: 'L',
				},
			],
			swatches: [],
			articleCodes: ['1095413002', '1095413001'],
			ticket:
				'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA5NTQxM19ncm91cF8wMDJfZW5fdXM7MTA5NTQxMzAwMl9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
			searchEngineProductId: '1095413_group_002_en_us',
			dummy: false,
			linkPdp: '/en_us/productpage.1095413002.html',
			categoryName: 'Ladies',
			rgbColors: ['#C9C8C2', '#383638'],
			articleColorNames: ['Cream', 'Black'],
			ecoTaxValue: 0,
			swatchesTotal: 2,
			showPriceMarker: false,
			redirectToPdp: false,
			mainCategoryCode: 'Ladies_dresses_wrap',
			comingSoon: false,
			brandName: 'H&M',
		},
		{
			code: '1005559_group_014',
			name: 'Patterned Shirt Dress',
			stock: {
				stockLevel: 1,
			},
			price: {
				currencyIso: 'USD',
				value: 24.99,
				priceType: 'BUY',
				formattedValue: '$ 24.99',
				type: 'WHITE',
			},
			images: [
				{
					url: 'https://lp2.hm.com/hmgoepprod?set=source[/08/d2/08d24e4df03f8822e914f91ea080f68fe308cefe.jpg],origin[dam],category[ladies_dresses_mididresses],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
				},
			],
			categories: [],
			pk: '9412953505793',
			sellingAttributes: ['New Arrival'],
			whitePrice: {
				currencyIso: 'USD',
				value: 24.99,
				priceType: 'BUY',
				formattedValue: '$ 24.99',
				type: 'WHITE',
			},
			articles: [
				{
					code: '1005559014',
					name: 'Patterned Shirt Dress',
					images: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/08/d2/08d24e4df03f8822e914f91ea080f68fe308cefe.jpg],origin[dam],category[ladies_dresses_mididresses],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
						},
					],
					pk: '9386878238721',
					sellingAttributes: ['New Arrival'],
					whitePrice: {
						currencyIso: 'USD',
						value: 24.99,
						priceType: 'BUY',
						formattedValue: '$ 24.99',
						type: 'WHITE',
					},
					logoPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/54/3a/543a1dea9ebd45b0eaf00782619722e33cae1eda.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					normalPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/54/3a/543a1dea9ebd45b0eaf00782619722e33cae1eda.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					markers: [
						{
							text: 'Conscious choice  ',
							type: 'ENVIRONMENT',
						},
					],
					visible: false,
					numbersOfPieces: 0,
					ticket:
						'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTAwNTU1OV9ncm91cF8wMTRfZW5fdXM7MTAwNTU1OTAxNF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
					dummy: false,
					ecoTaxValue: 0,
					redirectToPdp: false,
					comingSoon: false,
					color: {
						code: 'FF0000',
						text: 'Red/floral',
						filterName: 'Multi_000000,Red_FF0000',
						hybrisCode: '49',
					},
					rgbColor: '#594146',
					genArticle: '005559014226',
					environmentalMarkers: ['Conscious choice  '],
				},
			],
			markers: [
				{
					text: 'Conscious choice  ',
					type: 'ENVIRONMENT',
				},
			],
			visible: false,
			concept: ['EVERYDAY FASHION'],
			numbersOfPieces: 0,
			defaultArticle: {
				code: '1005559014',
				name: 'Patterned Shirt Dress',
				images: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/08/d2/08d24e4df03f8822e914f91ea080f68fe308cefe.jpg],origin[dam],category[ladies_dresses_mididresses],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
					},
				],
				pk: '9386878238721',
				sellingAttributes: ['New Arrival'],
				whitePrice: {
					currencyIso: 'USD',
					value: 24.99,
					priceType: 'BUY',
					formattedValue: '$ 24.99',
					type: 'WHITE',
				},
				logoPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/54/3a/543a1dea9ebd45b0eaf00782619722e33cae1eda.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				normalPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/54/3a/543a1dea9ebd45b0eaf00782619722e33cae1eda.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				markers: [
					{
						text: 'Conscious choice  ',
						type: 'ENVIRONMENT',
					},
				],
				visible: false,
				numbersOfPieces: 0,
				ticket:
					'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTAwNTU1OV9ncm91cF8wMTRfZW5fdXM7MTAwNTU1OTAxNF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
				dummy: false,
				ecoTaxValue: 0,
				redirectToPdp: false,
				comingSoon: false,
				color: {
					code: 'FF0000',
					text: 'Red/floral',
					filterName: 'Multi_000000,Red_FF0000',
					hybrisCode: '49',
				},
				rgbColor: '#594146',
				genArticle: '005559014226',
				environmentalMarkers: ['Conscious choice  '],
			},
			sale: false,
			variantSizes: [
				{
					orderFilter: 369,
					filterCode: 'M',
				},
				{
					orderFilter: 372,
					filterCode: 'XL',
				},
				{
					orderFilter: 363,
					filterCode: 'XS',
				},
				{
					orderFilter: 366,
					filterCode: 'S',
				},
				{
					orderFilter: 375,
					filterCode: 'XXL',
				},
				{
					orderFilter: 370,
					filterCode: 'L',
				},
			],
			swatches: [],
			articleCodes: ['1005559014', '1005559013'],
			ticket:
				'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTAwNTU1OV9ncm91cF8wMTRfZW5fdXM7MTAwNTU1OTAxNF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
			searchEngineProductId: '1005559_group_014_en_us',
			dummy: false,
			linkPdp: '/en_us/productpage.1005559014.html',
			categoryName: 'Ladies',
			rgbColors: ['#594146', '#B8A981'],
			articleColorNames: ['Red/floral', 'Beige/Floral'],
			ecoTaxValue: 0,
			swatchesTotal: 2,
			showPriceMarker: false,
			redirectToPdp: false,
			mainCategoryCode: 'ladies_dresses_longsleevedress',
			comingSoon: false,
			brandName: 'H&M',
		},
		{
			code: '1089107_group_002',
			name: 'Wide jersey dress',
			stock: {
				stockLevel: 1,
			},
			price: {
				currencyIso: 'USD',
				value: 39.99,
				priceType: 'BUY',
				formattedValue: '$ 39.99',
				type: 'WHITE',
			},
			images: [
				{
					url: 'https://lp2.hm.com/hmgoepprod?set=source[/f1/91/f19112773d9204bd8381e403c65f4f5a10466d25.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
				},
			],
			categories: [],
			pk: '9411740172289',
			sellingAttributes: ['New Arrival'],
			whitePrice: {
				currencyIso: 'USD',
				value: 39.99,
				priceType: 'BUY',
				formattedValue: '$ 39.99',
				type: 'WHITE',
			},
			articles: [
				{
					code: '1089107002',
					name: 'Wide jersey dress',
					images: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/f1/91/f19112773d9204bd8381e403c65f4f5a10466d25.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
						},
					],
					pk: '9399892901889',
					sellingAttributes: ['New Arrival'],
					whitePrice: {
						currencyIso: 'USD',
						value: 39.99,
						priceType: 'BUY',
						formattedValue: '$ 39.99',
						type: 'WHITE',
					},
					logoPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/16/c1/16c16eeb38b14ae96a4de5a0751bbd0b3b33c899.jpg],origin[dam],category[ladies_dresses_camidresses],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					normalPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/16/c1/16c16eeb38b14ae96a4de5a0751bbd0b3b33c899.jpg],origin[dam],category[ladies_dresses_camidresses],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					markers: [
						{
							text: 'Conscious choice  ',
							type: 'ENVIRONMENT',
						},
					],
					visible: false,
					numbersOfPieces: 0,
					ticket:
						'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA4OTEwN19ncm91cF8wMDJfZW5fdXM7MTA4OTEwNzAwMl9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
					dummy: false,
					ecoTaxValue: 0,
					redirectToPdp: false,
					comingSoon: false,
					color: {
						code: 'FFFFFF',
						text: 'Cream/Zebra print',
						filterName: 'Multi_000000,White_FFFFFF',
						hybrisCode: '11',
					},
					rgbColor: '#EFEFDF',
					genArticle: '089107002225',
					environmentalMarkers: ['Conscious choice  '],
				},
			],
			markers: [
				{
					text: 'Conscious choice  ',
					type: 'ENVIRONMENT',
				},
			],
			visible: false,
			concept: ['TREND'],
			numbersOfPieces: 0,
			defaultArticle: {
				code: '1089107002',
				name: 'Wide jersey dress',
				images: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/f1/91/f19112773d9204bd8381e403c65f4f5a10466d25.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
					},
				],
				pk: '9399892901889',
				sellingAttributes: ['New Arrival'],
				whitePrice: {
					currencyIso: 'USD',
					value: 39.99,
					priceType: 'BUY',
					formattedValue: '$ 39.99',
					type: 'WHITE',
				},
				logoPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/16/c1/16c16eeb38b14ae96a4de5a0751bbd0b3b33c899.jpg],origin[dam],category[ladies_dresses_camidresses],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				normalPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/16/c1/16c16eeb38b14ae96a4de5a0751bbd0b3b33c899.jpg],origin[dam],category[ladies_dresses_camidresses],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				markers: [
					{
						text: 'Conscious choice  ',
						type: 'ENVIRONMENT',
					},
				],
				visible: false,
				numbersOfPieces: 0,
				ticket:
					'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA4OTEwN19ncm91cF8wMDJfZW5fdXM7MTA4OTEwNzAwMl9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
				dummy: false,
				ecoTaxValue: 0,
				redirectToPdp: false,
				comingSoon: false,
				color: {
					code: 'FFFFFF',
					text: 'Cream/Zebra print',
					filterName: 'Multi_000000,White_FFFFFF',
					hybrisCode: '11',
				},
				rgbColor: '#EFEFDF',
				genArticle: '089107002225',
				environmentalMarkers: ['Conscious choice  '],
			},
			sale: false,
			variantSizes: [
				{
					orderFilter: 369,
					filterCode: 'M',
				},
				{
					orderFilter: 370,
					filterCode: 'L',
				},
				{
					orderFilter: 372,
					filterCode: 'XL',
				},
				{
					orderFilter: 366,
					filterCode: 'S',
				},
				{
					orderFilter: 363,
					filterCode: 'XS',
				},
				{
					orderFilter: 375,
					filterCode: 'XXL',
				},
			],
			swatches: [],
			articleCodes: ['1089107002', '1089107001', '1089107003'],
			ticket:
				'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA4OTEwN19ncm91cF8wMDJfZW5fdXM7MTA4OTEwNzAwMl9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
			searchEngineProductId: '1089107_group_002_en_us',
			dummy: false,
			linkPdp: '/en_us/productpage.1089107002.html',
			categoryName: 'Ladies',
			rgbColors: ['#EFEFDF', '#272628', '#2F306B'],
			articleColorNames: [
				'Cream/Zebra print',
				'Black',
				'Bright blue/patterned',
			],
			ecoTaxValue: 0,
			swatchesTotal: 3,
			showPriceMarker: false,
			redirectToPdp: false,
			mainCategoryCode: 'ladies_dresses_camidresses',
			comingSoon: false,
			brandName: 'H&M',
		},
		{
			code: '1097925_group_002',
			name: 'Straight Cargo Pants',
			stock: {
				stockLevel: 1,
			},
			price: {
				currencyIso: 'USD',
				value: 34.99,
				priceType: 'BUY',
				formattedValue: '$ 34.99',
				type: 'WHITE',
			},
			images: [
				{
					url: 'https://lp2.hm.com/hmgoepprod?set=source[/49/1b/491b8ae70034becee3e55f63be639f931ccf37e6.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
				},
			],
			categories: [],
			pk: '9416143667201',
			sellingAttributes: ['New Arrival'],
			whitePrice: {
				currencyIso: 'USD',
				value: 34.99,
				priceType: 'BUY',
				formattedValue: '$ 34.99',
				type: 'WHITE',
			},
			articles: [
				{
					code: '1097925002',
					name: 'Straight Cargo Pants',
					images: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/49/1b/491b8ae70034becee3e55f63be639f931ccf37e6.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
						},
					],
					pk: '9394484641793',
					sellingAttributes: ['New Arrival'],
					whitePrice: {
						currencyIso: 'USD',
						value: 34.99,
						priceType: 'BUY',
						formattedValue: '$ 34.99',
						type: 'WHITE',
					},
					logoPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/ba/fc/bafca8674029539daaf669d96b409a0f93b3faad.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					normalPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/ba/fc/bafca8674029539daaf669d96b409a0f93b3faad.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					markers: [
						{
							text: 'Conscious choice  ',
							type: 'ENVIRONMENT',
						},
					],
					visible: false,
					numbersOfPieces: 0,
					ticket:
						'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA5NzkyNV9ncm91cF8wMDJfZW5fdXM7MTA5NzkyNTAwMl9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
					dummy: false,
					ecoTaxValue: 0,
					redirectToPdp: false,
					comingSoon: false,
					color: {
						code: 'F5F5DC',
						text: 'Light beige',
						filterName: 'Beige_F5F5DC,Green_008000',
						hybrisCode: '13',
					},
					rgbColor: '#A5A595',
					genArticle: '097925002226',
					environmentalMarkers: ['Conscious choice  '],
				},
			],
			markers: [
				{
					text: 'Conscious choice  ',
					type: 'ENVIRONMENT',
				},
			],
			visible: false,
			concept: ['EVERYDAY FASHION'],
			numbersOfPieces: 0,
			defaultArticle: {
				code: '1097925002',
				name: 'Straight Cargo Pants',
				images: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/49/1b/491b8ae70034becee3e55f63be639f931ccf37e6.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
					},
				],
				pk: '9394484641793',
				sellingAttributes: ['New Arrival'],
				whitePrice: {
					currencyIso: 'USD',
					value: 34.99,
					priceType: 'BUY',
					formattedValue: '$ 34.99',
					type: 'WHITE',
				},
				logoPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/ba/fc/bafca8674029539daaf669d96b409a0f93b3faad.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				normalPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/ba/fc/bafca8674029539daaf669d96b409a0f93b3faad.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				markers: [
					{
						text: 'Conscious choice  ',
						type: 'ENVIRONMENT',
					},
				],
				visible: false,
				numbersOfPieces: 0,
				ticket:
					'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA5NzkyNV9ncm91cF8wMDJfZW5fdXM7MTA5NzkyNTAwMl9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
				dummy: false,
				ecoTaxValue: 0,
				redirectToPdp: false,
				comingSoon: false,
				color: {
					code: 'F5F5DC',
					text: 'Light beige',
					filterName: 'Beige_F5F5DC,Green_008000',
					hybrisCode: '13',
				},
				rgbColor: '#A5A595',
				genArticle: '097925002226',
				environmentalMarkers: ['Conscious choice  '],
			},
			sale: false,
			variantSizes: [
				{
					orderFilter: 12,
					filterCode: '8',
				},
				{
					orderFilter: 6,
					filterCode: '2',
				},
				{
					orderFilter: 10,
					filterCode: '6',
				},
				{
					orderFilter: 18,
					filterCode: '14',
				},
				{
					orderFilter: 4,
					filterCode: '0',
				},
				{
					orderFilter: 16,
					filterCode: '12',
				},
				{
					orderFilter: 20,
					filterCode: '16',
				},
				{
					orderFilter: 8,
					filterCode: '4',
				},
				{
					orderFilter: 54,
					filterCode: '20',
				},
				{
					orderFilter: 22,
					filterCode: '18',
				},
			],
			swatches: [],
			articleCodes: ['1097925002'],
			ticket:
				'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA5NzkyNV9ncm91cF8wMDJfZW5fdXM7MTA5NzkyNTAwMl9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
			searchEngineProductId: '1097925_group_002_en_us',
			dummy: false,
			linkPdp: '/en_us/productpage.1097925002.html',
			categoryName: 'Ladies',
			rgbColors: ['#A5A595'],
			articleColorNames: ['Light beige'],
			ecoTaxValue: 0,
			swatchesTotal: 1,
			showPriceMarker: false,
			redirectToPdp: false,
			mainCategoryCode: 'ladies_trousers_cargo',
			comingSoon: false,
			brandName: 'H&M',
		},
		{
			code: '1058700_group_007',
			name: '90s Baggy High Waist Jeans',
			stock: {
				stockLevel: 1,
			},
			price: {
				currencyIso: 'USD',
				value: 29.99,
				priceType: 'BUY',
				formattedValue: '$ 29.99',
				type: 'WHITE',
			},
			images: [
				{
					url: 'https://lp2.hm.com/hmgoepprod?set=source[/cc/5a/cc5a811d478056a58e64b4ed6f225a6dad103df2.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
				},
			],
			categories: [],
			pk: '9395142524929',
			whitePrice: {
				currencyIso: 'USD',
				value: 29.99,
				priceType: 'BUY',
				formattedValue: '$ 29.99',
				type: 'WHITE',
			},
			articles: [
				{
					code: '1058700007',
					name: '90s Baggy High Waist Jeans',
					images: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/cc/5a/cc5a811d478056a58e64b4ed6f225a6dad103df2.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
						},
					],
					pk: '9356130025473',
					whitePrice: {
						currencyIso: 'USD',
						value: 29.99,
						priceType: 'BUY',
						formattedValue: '$ 29.99',
						type: 'WHITE',
					},
					logoPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/ed/c4/edc4299a50c255f8a4614eef991a6725d890cff4.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					normalPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/ed/c4/edc4299a50c255f8a4614eef991a6725d890cff4.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					markers: [
						{
							text: 'Conscious choice  ',
							type: 'ENVIRONMENT',
						},
					],
					visible: false,
					numbersOfPieces: 0,
					ticket:
						'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA1ODcwMF9ncm91cF8wMDdfZW5fdXM7MTA1ODcwMDAwN19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
					dummy: false,
					ecoTaxValue: 0,
					redirectToPdp: false,
					comingSoon: false,
					color: {
						code: '0000FF',
						text: 'Denim blue',
						filterName: 'Blue_0000FF',
						hybrisCode: '75',
					},
					rgbColor: '#798DB2',
					genArticle: '058700007225',
					environmentalMarkers: ['Conscious choice  '],
				},
			],
			markers: [
				{
					text: 'Conscious choice  ',
					type: 'ENVIRONMENT',
				},
			],
			visible: false,
			concept: ['DIVIDED'],
			numbersOfPieces: 0,
			defaultArticle: {
				code: '1058700007',
				name: '90s Baggy High Waist Jeans',
				images: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/cc/5a/cc5a811d478056a58e64b4ed6f225a6dad103df2.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
					},
				],
				pk: '9356130025473',
				whitePrice: {
					currencyIso: 'USD',
					value: 29.99,
					priceType: 'BUY',
					formattedValue: '$ 29.99',
					type: 'WHITE',
				},
				logoPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/ed/c4/edc4299a50c255f8a4614eef991a6725d890cff4.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				normalPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/ed/c4/edc4299a50c255f8a4614eef991a6725d890cff4.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				markers: [
					{
						text: 'Conscious choice  ',
						type: 'ENVIRONMENT',
					},
				],
				visible: false,
				numbersOfPieces: 0,
				ticket:
					'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA1ODcwMF9ncm91cF8wMDdfZW5fdXM7MTA1ODcwMDAwN19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
				dummy: false,
				ecoTaxValue: 0,
				redirectToPdp: false,
				comingSoon: false,
				color: {
					code: '0000FF',
					text: 'Denim blue',
					filterName: 'Blue_0000FF',
					hybrisCode: '75',
				},
				rgbColor: '#798DB2',
				genArticle: '058700007225',
				environmentalMarkers: ['Conscious choice  '],
			},
			sale: false,
			variantSizes: [
				{
					orderFilter: 8,
					filterCode: '4',
				},
				{
					orderFilter: 4,
					filterCode: '0',
				},
				{
					orderFilter: 10,
					filterCode: '6',
				},
				{
					orderFilter: 6,
					filterCode: '2',
				},
				{
					orderFilter: 18,
					filterCode: '14',
				},
				{
					orderFilter: 14,
					filterCode: '10',
				},
				{
					orderFilter: 12,
					filterCode: '8',
				},
				{
					orderFilter: 16,
					filterCode: '12',
				},
			],
			swatches: [],
			articleCodes: ['1058700007'],
			ticket:
				'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA1ODcwMF9ncm91cF8wMDdfZW5fdXM7MTA1ODcwMDAwN19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
			searchEngineProductId: '1058700_group_007_en_us',
			dummy: false,
			linkPdp: '/en_us/productpage.1058700007.html',
			categoryName: 'Ladies',
			rgbColors: ['#798DB2'],
			articleColorNames: ['Denim blue'],
			ecoTaxValue: 0,
			swatchesTotal: 1,
			showPriceMarker: false,
			redirectToPdp: false,
			mainCategoryCode: 'ladies_jeans_baggy',
			comingSoon: false,
			brandName: 'H&M',
		},
		{
			code: '1076519_group_004',
			name: 'Wide-leg Cargo Pants',
			stock: {
				stockLevel: 1,
			},
			price: {
				currencyIso: 'USD',
				value: 34.99,
				priceType: 'BUY',
				formattedValue: '$ 34.99',
				type: 'WHITE',
			},
			images: [
				{
					url: 'https://lp2.hm.com/hmgoepprod?set=source[/39/41/394132137eacdf471292b1dcf1b34ce3573fd4b2.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
				},
			],
			categories: [],
			pk: '9421334609921',
			sellingAttributes: ['New Arrival'],
			whitePrice: {
				currencyIso: 'USD',
				value: 34.99,
				priceType: 'BUY',
				formattedValue: '$ 34.99',
				type: 'WHITE',
			},
			articles: [
				{
					code: '1076519004',
					name: 'Wide-leg Cargo Pants',
					images: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/39/41/394132137eacdf471292b1dcf1b34ce3573fd4b2.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
						},
					],
					pk: '9396209156097',
					sellingAttributes: ['New Arrival'],
					whitePrice: {
						currencyIso: 'USD',
						value: 34.99,
						priceType: 'BUY',
						formattedValue: '$ 34.99',
						type: 'WHITE',
					},
					logoPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/96/ba/96ba9383e2758605e368bc3d50a8236876511a7c.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					normalPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/96/ba/96ba9383e2758605e368bc3d50a8236876511a7c.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					markers: [
						{
							text: 'Conscious choice  ',
							type: 'ENVIRONMENT',
						},
					],
					visible: false,
					numbersOfPieces: 0,
					ticket:
						'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA3NjUxOV9ncm91cF8wMDRfZW5fdXM7MTA3NjUxOTAwNF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
					dummy: false,
					ecoTaxValue: 0,
					redirectToPdp: false,
					comingSoon: false,
					color: {
						code: '808080',
						text: 'Dark gray',
						filterName: 'Gray_808080',
						hybrisCode: '08',
					},
					rgbColor: '#494A4F',
					genArticle: '076519004226',
					environmentalMarkers: ['Conscious choice  '],
				},
			],
			markers: [
				{
					text: 'Conscious choice  ',
					type: 'ENVIRONMENT',
				},
			],
			visible: false,
			concept: ['EVERYDAY FASHION'],
			numbersOfPieces: 0,
			defaultArticle: {
				code: '1076519004',
				name: 'Wide-leg Cargo Pants',
				images: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/39/41/394132137eacdf471292b1dcf1b34ce3573fd4b2.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
					},
				],
				pk: '9396209156097',
				sellingAttributes: ['New Arrival'],
				whitePrice: {
					currencyIso: 'USD',
					value: 34.99,
					priceType: 'BUY',
					formattedValue: '$ 34.99',
					type: 'WHITE',
				},
				logoPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/96/ba/96ba9383e2758605e368bc3d50a8236876511a7c.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				normalPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/96/ba/96ba9383e2758605e368bc3d50a8236876511a7c.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				markers: [
					{
						text: 'Conscious choice  ',
						type: 'ENVIRONMENT',
					},
				],
				visible: false,
				numbersOfPieces: 0,
				ticket:
					'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA3NjUxOV9ncm91cF8wMDRfZW5fdXM7MTA3NjUxOTAwNF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
				dummy: false,
				ecoTaxValue: 0,
				redirectToPdp: false,
				comingSoon: false,
				color: {
					code: '808080',
					text: 'Dark gray',
					filterName: 'Gray_808080',
					hybrisCode: '08',
				},
				rgbColor: '#494A4F',
				genArticle: '076519004226',
				environmentalMarkers: ['Conscious choice  '],
			},
			sale: false,
			variantSizes: [
				{
					orderFilter: 10,
					filterCode: '6',
				},
				{
					orderFilter: 20,
					filterCode: '16',
				},
				{
					orderFilter: 8,
					filterCode: '4',
				},
				{
					orderFilter: 18,
					filterCode: '14',
				},
				{
					orderFilter: 12,
					filterCode: '8',
				},
				{
					orderFilter: 4,
					filterCode: '0',
				},
				{
					orderFilter: 14,
					filterCode: '10',
				},
				{
					orderFilter: 16,
					filterCode: '12',
				},
				{
					orderFilter: 22,
					filterCode: '18',
				},
				{
					orderFilter: 6,
					filterCode: '2',
				},
			],
			swatches: [],
			articleCodes: ['1076519004'],
			ticket:
				'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA3NjUxOV9ncm91cF8wMDRfZW5fdXM7MTA3NjUxOTAwNF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
			searchEngineProductId: '1076519_group_004_en_us',
			dummy: false,
			linkPdp: '/en_us/productpage.1076519004.html',
			categoryName: 'Ladies',
			rgbColors: ['#494A4F'],
			articleColorNames: ['Dark gray'],
			ecoTaxValue: 0,
			swatchesTotal: 1,
			showPriceMarker: false,
			redirectToPdp: false,
			mainCategoryCode: 'ladies_trousers_cargo',
			comingSoon: false,
			brandName: 'H&M',
		},
		{
			code: '1100174_group_001',
			name: 'Fleece Shacket',
			stock: {
				stockLevel: 1,
			},
			price: {
				currencyIso: 'USD',
				value: 19.99,
				priceType: 'BUY',
				formattedValue: '$ 19.99',
				type: 'WHITE',
			},
			images: [
				{
					url: 'https://lp2.hm.com/hmgoepprod?set=source[/ad/5c/ad5c733d23f2e5fe3bb0d8534103a955e7621bdc.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
				},
			],
			categories: [],
			pk: '9423445196801',
			sellingAttributes: ['New Arrival'],
			whitePrice: {
				currencyIso: 'USD',
				value: 19.99,
				priceType: 'BUY',
				formattedValue: '$ 19.99',
				type: 'WHITE',
			},
			articles: [
				{
					code: '1100174001',
					name: 'Fleece Shacket',
					images: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/ad/5c/ad5c733d23f2e5fe3bb0d8534103a955e7621bdc.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
						},
					],
					pk: '9403006517249',
					sellingAttributes: ['New Arrival'],
					whitePrice: {
						currencyIso: 'USD',
						value: 19.99,
						priceType: 'BUY',
						formattedValue: '$ 19.99',
						type: 'WHITE',
					},
					logoPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/ad/5c/ad5c733d23f2e5fe3bb0d8534103a955e7621bdc.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
						},
					],
					normalPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/ad/5c/ad5c733d23f2e5fe3bb0d8534103a955e7621bdc.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
						},
					],
					visible: false,
					numbersOfPieces: 0,
					ticket:
						'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTEwMDE3NF9ncm91cF8wMDFfZW5fdXM7MTEwMDE3NDAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
					dummy: false,
					ecoTaxValue: 0,
					redirectToPdp: false,
					comingSoon: false,
					color: {
						code: '808080',
						text: 'Natural white/Checked',
						filterName: 'Multi_000000,White_FFFFFF',
						hybrisCode: '06',
					},
					rgbColor: '#9C9C9A',
				},
			],
			visible: false,
			numbersOfPieces: 0,
			defaultArticle: {
				code: '1100174001',
				name: 'Fleece Shacket',
				images: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/ad/5c/ad5c733d23f2e5fe3bb0d8534103a955e7621bdc.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
					},
				],
				pk: '9403006517249',
				sellingAttributes: ['New Arrival'],
				whitePrice: {
					currencyIso: 'USD',
					value: 19.99,
					priceType: 'BUY',
					formattedValue: '$ 19.99',
					type: 'WHITE',
				},
				logoPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/ad/5c/ad5c733d23f2e5fe3bb0d8534103a955e7621bdc.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
					},
				],
				normalPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/ad/5c/ad5c733d23f2e5fe3bb0d8534103a955e7621bdc.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
					},
				],
				visible: false,
				numbersOfPieces: 0,
				ticket:
					'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTEwMDE3NF9ncm91cF8wMDFfZW5fdXM7MTEwMDE3NDAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
				dummy: false,
				ecoTaxValue: 0,
				redirectToPdp: false,
				comingSoon: false,
				color: {
					code: '808080',
					text: 'Natural white/Checked',
					filterName: 'Multi_000000,White_FFFFFF',
					hybrisCode: '06',
				},
				rgbColor: '#9C9C9A',
			},
			sale: false,
			variantSizes: [
				{
					orderFilter: 3148,
					filterCode: '2T (1½-2Y)',
				},
				{
					orderFilter: 3146,
					filterCode: '12M (9-12M)',
				},
				{
					orderFilter: 3147,
					filterCode: '18M (12-18M)',
				},
				{
					orderFilter: 3150,
					filterCode: '4T (3-4Y)',
				},
				{
					orderFilter: 3145,
					filterCode: '9M (6-9M)',
				},
				{
					orderFilter: 3144,
					filterCode: '6M (4-6M)',
				},
				{
					orderFilter: 3149,
					filterCode: '3T (2-3Y)',
				},
			],
			swatches: [],
			articleCodes: ['1100174001'],
			ticket:
				'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTEwMDE3NF9ncm91cF8wMDFfZW5fdXM7MTEwMDE3NDAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
			searchEngineProductId: '1100174_group_001_en_us',
			dummy: false,
			linkPdp: '/en_us/productpage.1100174001.html',
			categoryName: 'Kids',
			rgbColors: ['#9C9C9A'],
			articleColorNames: ['Natural white/Checked'],
			ecoTaxValue: 0,
			swatchesTotal: 1,
			showPriceMarker: false,
			redirectToPdp: false,
			mainCategoryCode: 'kids_baby_boy_outerwear_jacketscoats',
			comingSoon: false,
			brandName: 'H&M',
		},
		{
			code: '0578630_group_003',
			name: '3-pack Slim Fit T-shirts',
			stock: {
				stockLevel: 1,
			},
			price: {
				currencyIso: 'USD',
				value: 24.99,
				priceType: 'BUY',
				formattedValue: '$ 24.99',
				type: 'WHITE',
			},
			images: [
				{
					url: 'https://lp2.hm.com/hmgoepprod?set=source[/4d/04/4d044054898e31c3ed288d892f66a68b5e908372.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
				},
			],
			categories: [],
			pk: '9148402040833',
			whitePrice: {
				currencyIso: 'USD',
				value: 24.99,
				priceType: 'BUY',
				formattedValue: '$ 24.99',
				type: 'WHITE',
			},
			articles: [
				{
					code: '0578630003',
					name: '3-pack Slim Fit T-shirts',
					images: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/4d/04/4d044054898e31c3ed288d892f66a68b5e908372.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
						},
					],
					pk: '9140350550017',
					whitePrice: {
						currencyIso: 'USD',
						value: 24.99,
						priceType: 'BUY',
						formattedValue: '$ 24.99',
						type: 'WHITE',
					},
					logoPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/4d/04/4d044054898e31c3ed288d892f66a68b5e908372.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
						},
					],
					normalPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/4d/04/4d044054898e31c3ed288d892f66a68b5e908372.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
						},
					],
					visible: false,
					numbersOfPieces: 0,
					ticket:
						'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDU3ODYzMF9ncm91cF8wMDNfZW5fdXM7MDU3ODYzMDAwM19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
					dummy: false,
					ecoTaxValue: 0,
					redirectToPdp: false,
					comingSoon: false,
					color: {
						code: '000000',
						text: 'Black',
						filterName: 'Black_000000',
						hybrisCode: '09',
					},
					ugcMedia: {
						url: 'https://photorankmedia-a.akamaihd.net/media/g/a/o/gaop7f4/normal.jpg',
						id: '3098439413',
						author: 'lipemogollon',
						type: 'UGC',
					},
					rgbColor: '#272628',
					genArticle: '578630003226',
				},
			],
			visible: false,
			concept: ['BASICS'],
			numbersOfPieces: 0,
			defaultArticle: {
				code: '0578630003',
				name: '3-pack Slim Fit T-shirts',
				images: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/4d/04/4d044054898e31c3ed288d892f66a68b5e908372.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
					},
				],
				pk: '9140350550017',
				whitePrice: {
					currencyIso: 'USD',
					value: 24.99,
					priceType: 'BUY',
					formattedValue: '$ 24.99',
					type: 'WHITE',
				},
				logoPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/4d/04/4d044054898e31c3ed288d892f66a68b5e908372.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
					},
				],
				normalPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/4d/04/4d044054898e31c3ed288d892f66a68b5e908372.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
					},
				],
				visible: false,
				numbersOfPieces: 0,
				ticket:
					'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDU3ODYzMF9ncm91cF8wMDNfZW5fdXM7MDU3ODYzMDAwM19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
				dummy: false,
				ecoTaxValue: 0,
				redirectToPdp: false,
				comingSoon: false,
				color: {
					code: '000000',
					text: 'Black',
					filterName: 'Black_000000',
					hybrisCode: '09',
				},
				ugcMedia: {
					url: 'https://photorankmedia-a.akamaihd.net/media/g/a/o/gaop7f4/normal.jpg',
					id: '3098439413',
					author: 'lipemogollon',
					type: 'UGC',
				},
				rgbColor: '#272628',
				genArticle: '578630003226',
			},
			sale: false,
			variantSizes: [
				{
					orderFilter: 381,
					filterCode: '3XL',
				},
				{
					orderFilter: 369,
					filterCode: 'M',
				},
				{
					orderFilter: 372,
					filterCode: 'XL',
				},
				{
					orderFilter: 370,
					filterCode: 'L',
				},
			],
			swatches: [],
			articleCodes: ['0578630003', '0578630002', '0578630045', '0578630046'],
			ticket:
				'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDU3ODYzMF9ncm91cF8wMDNfZW5fdXM7MDU3ODYzMDAwM19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
			searchEngineProductId: '0578630_group_003_en_us',
			dummy: false,
			linkPdp: '/en_us/productpage.0578630003.html',
			categoryName: 'Men',
			rgbColors: ['#272628', '#FFFFFF', '#A4AEA7', '#57779A'],
			articleColorNames: [
				'Black',
				'White',
				'Green/light gray',
				'Blue/dark beige',
			],
			ecoTaxValue: 0,
			swatchesTotal: 8,
			showPriceMarker: false,
			redirectToPdp: false,
			mainCategoryCode: 'men_tshirtstanks_bestbasics',
			comingSoon: false,
			brandName: 'H&M',
		},
		{
			code: '0963087_group_001',
			name: 'Wide-leg Twill Pants',
			stock: {
				stockLevel: 1,
			},
			price: {
				currencyIso: 'USD',
				value: 17.99,
				priceType: 'BUY',
				formattedValue: '$ 17.99',
				type: 'WHITE',
			},
			images: [
				{
					url: 'https://lp2.hm.com/hmgoepprod?set=source[/29/30/2930d00b0f58e8eb8d90bab290b31774ea9202ee.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
				},
			],
			categories: [],
			pk: '9300040024065',
			whitePrice: {
				currencyIso: 'USD',
				value: 17.99,
				priceType: 'BUY',
				formattedValue: '$ 17.99',
				type: 'WHITE',
			},
			articles: [
				{
					code: '0963087001',
					name: 'Wide-leg Twill Pants',
					images: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/29/30/2930d00b0f58e8eb8d90bab290b31774ea9202ee.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
						},
					],
					pk: '9275751464961',
					whitePrice: {
						currencyIso: 'USD',
						value: 17.99,
						priceType: 'BUY',
						formattedValue: '$ 17.99',
						type: 'WHITE',
					},
					logoPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/d0/f4/d0f4c8b12f4d41112f6c35a638607edc94f47d06.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[2]&call=url[file:/product/main]',
						},
					],
					normalPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/d0/f4/d0f4c8b12f4d41112f6c35a638607edc94f47d06.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[2]&call=url[file:/product/main]',
						},
					],
					visible: false,
					numbersOfPieces: 0,
					ticket:
						'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDk2MzA4N19ncm91cF8wMDFfZW5fdXM7MDk2MzA4NzAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
					dummy: false,
					ecoTaxValue: 0,
					redirectToPdp: false,
					comingSoon: false,
					color: {
						code: '000000',
						text: 'Black',
						filterName: 'Black_000000',
						hybrisCode: '09',
					},
					rgbColor: '#272628',
					genArticle: '963087001226',
				},
			],
			visible: false,
			concept: ['DIVIDED'],
			numbersOfPieces: 0,
			defaultArticle: {
				code: '0963087001',
				name: 'Wide-leg Twill Pants',
				images: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/29/30/2930d00b0f58e8eb8d90bab290b31774ea9202ee.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
					},
				],
				pk: '9275751464961',
				whitePrice: {
					currencyIso: 'USD',
					value: 17.99,
					priceType: 'BUY',
					formattedValue: '$ 17.99',
					type: 'WHITE',
				},
				logoPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/d0/f4/d0f4c8b12f4d41112f6c35a638607edc94f47d06.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[2]&call=url[file:/product/main]',
					},
				],
				normalPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/d0/f4/d0f4c8b12f4d41112f6c35a638607edc94f47d06.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[2]&call=url[file:/product/main]',
					},
				],
				visible: false,
				numbersOfPieces: 0,
				ticket:
					'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDk2MzA4N19ncm91cF8wMDFfZW5fdXM7MDk2MzA4NzAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
				dummy: false,
				ecoTaxValue: 0,
				redirectToPdp: false,
				comingSoon: false,
				color: {
					code: '000000',
					text: 'Black',
					filterName: 'Black_000000',
					hybrisCode: '09',
				},
				rgbColor: '#272628',
				genArticle: '963087001226',
			},
			sale: false,
			variantSizes: [
				{
					orderFilter: 12,
					filterCode: '8',
				},
				{
					orderFilter: 16,
					filterCode: '12',
				},
				{
					orderFilter: 14,
					filterCode: '10',
				},
			],
			swatches: [],
			articleCodes: ['0963087001', '0963087016', '0963087032'],
			ticket:
				'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDk2MzA4N19ncm91cF8wMDFfZW5fdXM7MDk2MzA4NzAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
			searchEngineProductId: '0963087_group_001_en_us',
			dummy: false,
			linkPdp: '/en_us/productpage.0963087001.html',
			categoryName: 'Ladies',
			rgbColors: ['#272628', '#544542', '#ABA08D'],
			articleColorNames: ['Black', 'Dark brown', 'Beige'],
			ecoTaxValue: 0,
			swatchesTotal: 3,
			showPriceMarker: false,
			redirectToPdp: false,
			mainCategoryCode: 'ladies_trousers_highwaisted',
			comingSoon: false,
			brandName: 'H&M',
		},
		{
			code: '0935727_group_024',
			name: 'Single-breasted Jacket',
			stock: {
				stockLevel: 1,
			},
			price: {
				currencyIso: 'USD',
				value: 39.99,
				priceType: 'BUY',
				formattedValue: '$ 39.99',
				type: 'WHITE',
			},
			images: [
				{
					url: 'https://lp2.hm.com/hmgoepprod?set=source[/6b/43/6b4389262e283d4264448f09632c84e1928a6dc4.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
				},
			],
			categories: [],
			pk: '9344785678337',
			whitePrice: {
				currencyIso: 'USD',
				value: 39.99,
				priceType: 'BUY',
				formattedValue: '$ 39.99',
				type: 'WHITE',
			},
			articles: [
				{
					code: '0935727024',
					name: 'Single-breasted Jacket',
					images: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/6b/43/6b4389262e283d4264448f09632c84e1928a6dc4.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
						},
					],
					pk: '9344538640385',
					whitePrice: {
						currencyIso: 'USD',
						value: 39.99,
						priceType: 'BUY',
						formattedValue: '$ 39.99',
						type: 'WHITE',
					},
					logoPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/38/d6/38d602a76cb59a6aa0b14acd18a2bfc79598290e.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					normalPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/38/d6/38d602a76cb59a6aa0b14acd18a2bfc79598290e.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					markers: [
						{
							text: 'Conscious choice  ',
							type: 'ENVIRONMENT',
						},
					],
					visible: false,
					numbersOfPieces: 0,
					ticket:
						'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDkzNTcyN19ncm91cF8wMjRfZW5fdXM7MDkzNTcyNzAyNF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
					dummy: false,
					ecoTaxValue: 0,
					redirectToPdp: false,
					comingSoon: false,
					color: {
						code: '000000',
						text: 'Black',
						filterName: 'Black_000000',
						hybrisCode: '09',
					},
					rgbColor: '#272628',
					genArticle: '935727024237',
					environmentalMarkers: ['Conscious choice  '],
				},
			],
			markers: [
				{
					text: 'Conscious choice  ',
					type: 'ENVIRONMENT',
				},
			],
			visible: false,
			concept: ['MODERN CLASSIC'],
			numbersOfPieces: 0,
			defaultArticle: {
				code: '0935727024',
				name: 'Single-breasted Jacket',
				images: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/6b/43/6b4389262e283d4264448f09632c84e1928a6dc4.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
					},
				],
				pk: '9344538640385',
				whitePrice: {
					currencyIso: 'USD',
					value: 39.99,
					priceType: 'BUY',
					formattedValue: '$ 39.99',
					type: 'WHITE',
				},
				logoPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/38/d6/38d602a76cb59a6aa0b14acd18a2bfc79598290e.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				normalPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/38/d6/38d602a76cb59a6aa0b14acd18a2bfc79598290e.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				markers: [
					{
						text: 'Conscious choice  ',
						type: 'ENVIRONMENT',
					},
				],
				visible: false,
				numbersOfPieces: 0,
				ticket:
					'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDkzNTcyN19ncm91cF8wMjRfZW5fdXM7MDkzNTcyNzAyNF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
				dummy: false,
				ecoTaxValue: 0,
				redirectToPdp: false,
				comingSoon: false,
				color: {
					code: '000000',
					text: 'Black',
					filterName: 'Black_000000',
					hybrisCode: '09',
				},
				rgbColor: '#272628',
				genArticle: '935727024237',
				environmentalMarkers: ['Conscious choice  '],
			},
			sale: false,
			variantSizes: [
				{
					orderFilter: 375,
					filterCode: 'XXL',
				},
				{
					orderFilter: 369,
					filterCode: 'M',
				},
				{
					orderFilter: 366,
					filterCode: 'S',
				},
				{
					orderFilter: 372,
					filterCode: 'XL',
				},
			],
			swatches: [],
			articleCodes: ['0935727024', '0935727026', '0935727027'],
			ticket:
				'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDkzNTcyN19ncm91cF8wMjRfZW5fdXM7MDkzNTcyNzAyNF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
			searchEngineProductId: '0935727_group_024_en_us',
			dummy: false,
			linkPdp: '/en_us/productpage.0935727024.html',
			categoryName: 'Ladies',
			rgbColors: ['#272628', '#A09B8E', '#E9D6CD'],
			articleColorNames: ['Black', 'Taupe', 'Powder pink'],
			ecoTaxValue: 0,
			swatchesTotal: 3,
			showPriceMarker: false,
			redirectToPdp: false,
			mainCategoryCode: 'ladies_blazers',
			comingSoon: false,
			brandName: 'H&M',
		},
		{
			code: '0939703_group_044',
			name: 'V-neck Blouse',
			stock: {
				stockLevel: 1,
			},
			price: {
				currencyIso: 'USD',
				value: 19.99,
				priceType: 'BUY',
				formattedValue: '$ 19.99',
				type: 'WHITE',
			},
			images: [
				{
					url: 'https://lp2.hm.com/hmgoepprod?set=source[/0f/55/0f553870baf41493a47d62bae72e07cc2e7fa4f1.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
				},
			],
			categories: [],
			pk: '9343553568769',
			whitePrice: {
				currencyIso: 'USD',
				value: 19.99,
				priceType: 'BUY',
				formattedValue: '$ 19.99',
				type: 'WHITE',
			},
			articles: [
				{
					code: '0939703044',
					name: 'V-neck Blouse',
					images: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/0f/55/0f553870baf41493a47d62bae72e07cc2e7fa4f1.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
						},
					],
					pk: '9343362924545',
					whitePrice: {
						currencyIso: 'USD',
						value: 19.99,
						priceType: 'BUY',
						formattedValue: '$ 19.99',
						type: 'WHITE',
					},
					logoPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/18/0f/180f5feef436497226450c690a356be3d1fcb22f.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					normalPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/18/0f/180f5feef436497226450c690a356be3d1fcb22f.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					markers: [
						{
							text: 'Conscious choice  ',
							type: 'ENVIRONMENT',
						},
					],
					visible: false,
					numbersOfPieces: 0,
					ticket:
						'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDkzOTcwM19ncm91cF8wNDRfZW5fdXM7MDkzOTcwMzA0NF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
					dummy: false,
					ecoTaxValue: 0,
					redirectToPdp: false,
					comingSoon: false,
					color: {
						code: '000000',
						text: 'Black',
						filterName: 'Black_000000',
						hybrisCode: '09',
					},
					rgbColor: '#272628',
					genArticle: '939703044237',
					environmentalMarkers: ['Conscious choice  '],
				},
			],
			markers: [
				{
					text: 'Conscious choice  ',
					type: 'ENVIRONMENT',
				},
			],
			visible: false,
			concept: ['MODERN CLASSIC'],
			numbersOfPieces: 0,
			defaultArticle: {
				code: '0939703044',
				name: 'V-neck Blouse',
				images: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/0f/55/0f553870baf41493a47d62bae72e07cc2e7fa4f1.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
					},
				],
				pk: '9343362924545',
				whitePrice: {
					currencyIso: 'USD',
					value: 19.99,
					priceType: 'BUY',
					formattedValue: '$ 19.99',
					type: 'WHITE',
				},
				logoPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/18/0f/180f5feef436497226450c690a356be3d1fcb22f.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				normalPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/18/0f/180f5feef436497226450c690a356be3d1fcb22f.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				markers: [
					{
						text: 'Conscious choice  ',
						type: 'ENVIRONMENT',
					},
				],
				visible: false,
				numbersOfPieces: 0,
				ticket:
					'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDkzOTcwM19ncm91cF8wNDRfZW5fdXM7MDkzOTcwMzA0NF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
				dummy: false,
				ecoTaxValue: 0,
				redirectToPdp: false,
				comingSoon: false,
				color: {
					code: '000000',
					text: 'Black',
					filterName: 'Black_000000',
					hybrisCode: '09',
				},
				rgbColor: '#272628',
				genArticle: '939703044237',
				environmentalMarkers: ['Conscious choice  '],
			},
			sale: false,
			variantSizes: [
				{
					orderFilter: 363,
					filterCode: 'XS',
				},
				{
					orderFilter: 366,
					filterCode: 'S',
				},
				{
					orderFilter: 375,
					filterCode: 'XXL',
				},
				{
					orderFilter: 372,
					filterCode: 'XL',
				},
				{
					orderFilter: 370,
					filterCode: 'L',
				},
				{
					orderFilter: 369,
					filterCode: 'M',
				},
			],
			swatches: [],
			articleCodes: ['0939703044', '0939703038', '0939703043', '0939703045'],
			ticket:
				'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDkzOTcwM19ncm91cF8wNDRfZW5fdXM7MDkzOTcwMzA0NF9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
			searchEngineProductId: '0939703_group_044_en_us',
			dummy: false,
			linkPdp: '/en_us/productpage.0939703044.html',
			categoryName: 'Ladies',
			rgbColors: ['#272628', '#5B5A54', '#F4F3E9', '#EDDCDA'],
			articleColorNames: ['Black', 'Moss green', 'White', 'Light pink'],
			ecoTaxValue: 0,
			swatchesTotal: 4,
			showPriceMarker: false,
			redirectToPdp: false,
			mainCategoryCode: 'ladies_shirtsblouses_blouses',
			comingSoon: false,
			brandName: 'H&M',
		},
		{
			code: '0689011_group_001',
			name: 'Slim Fit Chinos',
			stock: {
				stockLevel: 1,
			},
			price: {
				currencyIso: 'USD',
				value: 19.99,
				priceType: 'BUY',
				formattedValue: '$ 19.99',
				type: 'WHITE',
			},
			images: [
				{
					url: 'https://lp2.hm.com/hmgoepprod?set=source[/f9/5a/f95ad39d6dec19e4aae54bcb690d804749188bdb.jpg],origin[dam],category[kids_boys14y_trousers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/style]',
				},
			],
			categories: [],
			pk: '9183529992193',
			whitePrice: {
				currencyIso: 'USD',
				value: 19.99,
				priceType: 'BUY',
				formattedValue: '$ 19.99',
				type: 'WHITE',
			},
			articles: [
				{
					code: '0689011001',
					name: 'Slim Fit Chinos',
					images: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/f9/5a/f95ad39d6dec19e4aae54bcb690d804749188bdb.jpg],origin[dam],category[kids_boys14y_trousers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/style]',
						},
					],
					pk: '9170973589505',
					whitePrice: {
						currencyIso: 'USD',
						value: 19.99,
						priceType: 'BUY',
						formattedValue: '$ 19.99',
						type: 'WHITE',
					},
					logoPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/2a/66/2a662b9042f033c62e843de184d414e46a8b65b3.jpg],origin[dam],category[kids_boys14y_trousers],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					normalPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/2a/66/2a662b9042f033c62e843de184d414e46a8b65b3.jpg],origin[dam],category[kids_boys14y_trousers],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					visible: false,
					numbersOfPieces: 0,
					ticket:
						'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDY4OTAxMV9ncm91cF8wMDFfZW5fdXM7MDY4OTAxMTAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
					dummy: false,
					ecoTaxValue: 0,
					redirectToPdp: false,
					comingSoon: false,
					color: {
						code: '0000FF',
						text: 'Dark blue',
						filterName: 'Blue_0000FF',
						hybrisCode: '76',
					},
					rgbColor: '#393B47',
					genArticle: '689011001226',
				},
			],
			visible: false,
			numbersOfPieces: 0,
			defaultArticle: {
				code: '0689011001',
				name: 'Slim Fit Chinos',
				images: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/f9/5a/f95ad39d6dec19e4aae54bcb690d804749188bdb.jpg],origin[dam],category[kids_boys14y_trousers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/style]',
					},
				],
				pk: '9170973589505',
				whitePrice: {
					currencyIso: 'USD',
					value: 19.99,
					priceType: 'BUY',
					formattedValue: '$ 19.99',
					type: 'WHITE',
				},
				logoPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/2a/66/2a662b9042f033c62e843de184d414e46a8b65b3.jpg],origin[dam],category[kids_boys14y_trousers],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				normalPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/2a/66/2a662b9042f033c62e843de184d414e46a8b65b3.jpg],origin[dam],category[kids_boys14y_trousers],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				visible: false,
				numbersOfPieces: 0,
				ticket:
					'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDY4OTAxMV9ncm91cF8wMDFfZW5fdXM7MDY4OTAxMTAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
				dummy: false,
				ecoTaxValue: 0,
				redirectToPdp: false,
				comingSoon: false,
				color: {
					code: '0000FF',
					text: 'Dark blue',
					filterName: 'Blue_0000FF',
					hybrisCode: '76',
				},
				rgbColor: '#393B47',
				genArticle: '689011001226',
			},
			sale: false,
			variantSizes: [
				{
					orderFilter: 3155,
					filterCode: '8 (8-9Y)',
				},
				{
					orderFilter: 3159,
					filterCode: '16 (12-13Y)',
				},
				{
					orderFilter: 3161,
					filterCode: '20 (14Y+)',
				},
				{
					orderFilter: 3160,
					filterCode: '18 (13-14Y)',
				},
				{
					orderFilter: 3158,
					filterCode: '14 (11-12Y)',
				},
				{
					orderFilter: 3157,
					filterCode: '12 (10-11Y)',
				},
				{
					orderFilter: 3156,
					filterCode: '10 (9-10Y)',
				},
			],
			swatches: [],
			articleCodes: ['0689011001', '0689011007', '0689011010', '0689011021'],
			ticket:
				'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MDY4OTAxMV9ncm91cF8wMDFfZW5fdXM7MDY4OTAxMTAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
			searchEngineProductId: '0689011_group_001_en_us',
			dummy: false,
			linkPdp: '/en_us/productpage.0689011001.html',
			categoryName: 'Kids',
			rgbColors: ['#393B47', '#272628', '#978F78', '#666869'],
			articleColorNames: ['Dark blue', 'Black', 'Beige', 'Gray'],
			ecoTaxValue: 0,
			swatchesTotal: 4,
			showPriceMarker: true,
			redirectToPdp: false,
			mainCategoryCode: 'kids_olderboys_clothing_trousersjeans_trousers_chino',
			comingSoon: false,
			brandName: 'H&M',
		},
		{
			code: '1076389_group_001',
			name: 'Knee-high Boots',
			stock: {
				stockLevel: 1,
			},
			price: {
				currencyIso: 'USD',
				value: 64.99,
				priceType: 'BUY',
				formattedValue: '$ 64.99',
				type: 'WHITE',
			},
			images: [
				{
					url: 'https://lp2.hm.com/hmgoepprod?set=source[/5d/ab/5daba8ccced5f991fada0db90f7ce2dea7795d6a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
				},
			],
			categories: [],
			pk: '9414931611649',
			whitePrice: {
				currencyIso: 'USD',
				value: 64.99,
				priceType: 'BUY',
				formattedValue: '$ 64.99',
				type: 'WHITE',
			},
			articles: [
				{
					code: '1076389001',
					name: 'Knee-high Boots',
					images: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/5d/ab/5daba8ccced5f991fada0db90f7ce2dea7795d6a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
						},
					],
					pk: '9383933378561',
					whitePrice: {
						currencyIso: 'USD',
						value: 64.99,
						priceType: 'BUY',
						formattedValue: '$ 64.99',
						type: 'WHITE',
					},
					logoPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/5d/ab/5daba8ccced5f991fada0db90f7ce2dea7795d6a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
						},
					],
					normalPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/5d/ab/5daba8ccced5f991fada0db90f7ce2dea7795d6a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
						},
					],
					visible: false,
					numbersOfPieces: 0,
					ticket:
						'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA3NjM4OV9ncm91cF8wMDFfZW5fdXM7MTA3NjM4OTAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
					dummy: false,
					ecoTaxValue: 0,
					redirectToPdp: false,
					comingSoon: false,
					color: {
						code: '000000',
						text: 'Black',
						filterName: 'Black_000000',
						hybrisCode: '09',
					},
					rgbColor: '#272628',
					genArticle: '076389001226',
				},
			],
			visible: false,
			numbersOfPieces: 0,
			defaultArticle: {
				code: '1076389001',
				name: 'Knee-high Boots',
				images: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/5d/ab/5daba8ccced5f991fada0db90f7ce2dea7795d6a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
					},
				],
				pk: '9383933378561',
				whitePrice: {
					currencyIso: 'USD',
					value: 64.99,
					priceType: 'BUY',
					formattedValue: '$ 64.99',
					type: 'WHITE',
				},
				logoPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/5d/ab/5daba8ccced5f991fada0db90f7ce2dea7795d6a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
					},
				],
				normalPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/5d/ab/5daba8ccced5f991fada0db90f7ce2dea7795d6a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]',
					},
				],
				visible: false,
				numbersOfPieces: 0,
				ticket:
					'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA3NjM4OV9ncm91cF8wMDFfZW5fdXM7MTA3NjM4OTAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
				dummy: false,
				ecoTaxValue: 0,
				redirectToPdp: false,
				comingSoon: false,
				color: {
					code: '000000',
					text: 'Black',
					filterName: 'Black_000000',
					hybrisCode: '09',
				},
				rgbColor: '#272628',
				genArticle: '076389001226',
			},
			sale: false,
			variantSizes: [
				{
					orderFilter: 10,
					filterCode: '6',
				},
				{
					orderFilter: 11,
					filterCode: '7',
				},
				{
					orderFilter: 13,
					filterCode: '9',
				},
				{
					orderFilter: 9,
					filterCode: '5',
				},
				{
					orderFilter: 15,
					filterCode: '11',
				},
				{
					orderFilter: 14,
					filterCode: '10',
				},
				{
					orderFilter: 12,
					filterCode: '8',
				},
				{
					orderFilter: 8,
					filterCode: '4',
				},
			],
			swatches: [],
			articleCodes: ['1076389001', '1076389003'],
			ticket:
				'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA3NjM4OV9ncm91cF8wMDFfZW5fdXM7MTA3NjM4OTAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
			searchEngineProductId: '1076389_group_001_en_us',
			dummy: false,
			linkPdp: '/en_us/productpage.1076389001.html',
			categoryName: 'Ladies',
			rgbColors: ['#272628', '#6C655F'],
			articleColorNames: ['Black', 'Taupe'],
			ecoTaxValue: 0,
			swatchesTotal: 2,
			showPriceMarker: false,
			redirectToPdp: false,
			mainCategoryCode: 'ladies_shoes_boots',
			comingSoon: false,
			brandName: 'H&M',
		},
		{
			code: '1078377_group_001',
			name: 'Lyocell-blend Chino Shorts',
			stock: {
				stockLevel: 1,
			},
			price: {
				currencyIso: 'USD',
				value: 29.99,
				priceType: 'BUY',
				formattedValue: '$ 29.99',
				type: 'WHITE',
			},
			images: [
				{
					url: 'https://lp2.hm.com/hmgoepprod?set=source[/09/42/09420f7ad50317ff5618e0f47164902f6eb4d8b1.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
				},
			],
			categories: [],
			pk: '9411235348481',
			sellingAttributes: ['New Arrival'],
			whitePrice: {
				currencyIso: 'USD',
				value: 29.99,
				priceType: 'BUY',
				formattedValue: '$ 29.99',
				type: 'WHITE',
			},
			articles: [
				{
					code: '1078377001',
					name: 'Lyocell-blend Chino Shorts',
					images: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/09/42/09420f7ad50317ff5618e0f47164902f6eb4d8b1.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
						},
					],
					pk: '9385715204097',
					sellingAttributes: ['New Arrival'],
					whitePrice: {
						currencyIso: 'USD',
						value: 29.99,
						priceType: 'BUY',
						formattedValue: '$ 29.99',
						type: 'WHITE',
					},
					logoPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/49/fd/49fd3458743e1a4716d3fd97274aab6b827d32ee.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					normalPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/49/fd/49fd3458743e1a4716d3fd97274aab6b827d32ee.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					markers: [
						{
							text: 'Conscious choice  ',
							type: 'ENVIRONMENT',
						},
					],
					visible: false,
					numbersOfPieces: 0,
					ticket:
						'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA3ODM3N19ncm91cF8wMDFfZW5fdXM7MTA3ODM3NzAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
					dummy: false,
					ecoTaxValue: 0,
					redirectToPdp: false,
					comingSoon: false,
					color: {
						code: 'F5F5DC',
						text: 'Beige',
						filterName: 'Beige_F5F5DC',
						hybrisCode: '13',
					},
					rgbColor: '#B1A895',
					genArticle: '078377001225',
					environmentalMarkers: ['Conscious choice  '],
				},
			],
			markers: [
				{
					text: 'Conscious choice  ',
					type: 'ENVIRONMENT',
				},
			],
			visible: false,
			concept: ['EVERYDAY FASHION'],
			numbersOfPieces: 0,
			defaultArticle: {
				code: '1078377001',
				name: 'Lyocell-blend Chino Shorts',
				images: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/09/42/09420f7ad50317ff5618e0f47164902f6eb4d8b1.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
					},
				],
				pk: '9385715204097',
				sellingAttributes: ['New Arrival'],
				whitePrice: {
					currencyIso: 'USD',
					value: 29.99,
					priceType: 'BUY',
					formattedValue: '$ 29.99',
					type: 'WHITE',
				},
				logoPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/49/fd/49fd3458743e1a4716d3fd97274aab6b827d32ee.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				normalPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/49/fd/49fd3458743e1a4716d3fd97274aab6b827d32ee.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				markers: [
					{
						text: 'Conscious choice  ',
						type: 'ENVIRONMENT',
					},
				],
				visible: false,
				numbersOfPieces: 0,
				ticket:
					'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA3ODM3N19ncm91cF8wMDFfZW5fdXM7MTA3ODM3NzAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
				dummy: false,
				ecoTaxValue: 0,
				redirectToPdp: false,
				comingSoon: false,
				color: {
					code: 'F5F5DC',
					text: 'Beige',
					filterName: 'Beige_F5F5DC',
					hybrisCode: '13',
				},
				rgbColor: '#B1A895',
				genArticle: '078377001225',
				environmentalMarkers: ['Conscious choice  '],
			},
			sale: false,
			variantSizes: [
				{
					orderFilter: 18,
					filterCode: '14',
				},
				{
					orderFilter: 22,
					filterCode: '18',
				},
				{
					orderFilter: 20,
					filterCode: '16',
				},
				{
					orderFilter: 8,
					filterCode: '4',
				},
				{
					orderFilter: 16,
					filterCode: '12',
				},
				{
					orderFilter: 54,
					filterCode: '20',
				},
				{
					orderFilter: 10,
					filterCode: '6',
				},
				{
					orderFilter: 12,
					filterCode: '8',
				},
				{
					orderFilter: 14,
					filterCode: '10',
				},
			],
			swatches: [],
			articleCodes: ['1078377001'],
			ticket:
				'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTA3ODM3N19ncm91cF8wMDFfZW5fdXM7MTA3ODM3NzAwMV9lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
			searchEngineProductId: '1078377_group_001_en_us',
			dummy: false,
			linkPdp: '/en_us/productpage.1078377001.html',
			categoryName: 'Ladies',
			rgbColors: ['#B1A895'],
			articleColorNames: ['Beige'],
			ecoTaxValue: 0,
			swatchesTotal: 1,
			showPriceMarker: false,
			redirectToPdp: false,
			mainCategoryCode: 'Ladies_shorts_highwaisted',
			comingSoon: false,
			brandName: 'H&M',
		},
		{
			code: '1109597_group_003',
			name: 'Rib-knit Top',
			stock: {
				stockLevel: 1,
			},
			price: {
				currencyIso: 'USD',
				value: 49.99,
				priceType: 'BUY',
				formattedValue: '$ 49.99',
				type: 'WHITE',
			},
			images: [
				{
					url: 'https://lp2.hm.com/hmgoepprod?set=source[/bb/66/bb66809f116d41dbc0290a25e3ea919805cb52c5.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
				},
			],
			categories: [],
			pk: '9428424491009',
			sellingAttributes: ['New Arrival'],
			whitePrice: {
				currencyIso: 'USD',
				value: 49.99,
				priceType: 'BUY',
				formattedValue: '$ 49.99',
				type: 'WHITE',
			},
			articles: [
				{
					code: '1109597003',
					name: 'Rib-knit Top',
					images: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/bb/66/bb66809f116d41dbc0290a25e3ea919805cb52c5.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
						},
					],
					pk: '9399888150529',
					sellingAttributes: ['New Arrival'],
					whitePrice: {
						currencyIso: 'USD',
						value: 49.99,
						priceType: 'BUY',
						formattedValue: '$ 49.99',
						type: 'WHITE',
					},
					logoPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/81/19/81197d412e3f2939d01a8abc0a00d9b39b36be25.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					normalPicture: [
						{
							url: 'https://lp2.hm.com/hmgoepprod?set=source[/81/19/81197d412e3f2939d01a8abc0a00d9b39b36be25.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
						},
					],
					visible: false,
					numbersOfPieces: 0,
					ticket:
						'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTEwOTU5N19ncm91cF8wMDNfZW5fdXM7MTEwOTU5NzAwM19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
					dummy: false,
					ecoTaxValue: 0,
					redirectToPdp: false,
					comingSoon: false,
					color: {
						code: 'F5F5DC',
						text: 'Light beige',
						filterName: 'Beige_F5F5DC',
						hybrisCode: '12',
					},
					rgbColor: '#DED8C5',
				},
			],
			visible: false,
			concept: ['TREND'],
			numbersOfPieces: 0,
			defaultArticle: {
				code: '1109597003',
				name: 'Rib-knit Top',
				images: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/bb/66/bb66809f116d41dbc0290a25e3ea919805cb52c5.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
					},
				],
				pk: '9399888150529',
				sellingAttributes: ['New Arrival'],
				whitePrice: {
					currencyIso: 'USD',
					value: 49.99,
					priceType: 'BUY',
					formattedValue: '$ 49.99',
					type: 'WHITE',
				},
				logoPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/81/19/81197d412e3f2939d01a8abc0a00d9b39b36be25.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				normalPicture: [
					{
						url: 'https://lp2.hm.com/hmgoepprod?set=source[/81/19/81197d412e3f2939d01a8abc0a00d9b39b36be25.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]',
					},
				],
				visible: false,
				numbersOfPieces: 0,
				ticket:
					'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTEwOTU5N19ncm91cF8wMDNfZW5fdXM7MTEwOTU5NzAwM19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
				dummy: false,
				ecoTaxValue: 0,
				redirectToPdp: false,
				comingSoon: false,
				color: {
					code: 'F5F5DC',
					text: 'Light beige',
					filterName: 'Beige_F5F5DC',
					hybrisCode: '12',
				},
				rgbColor: '#DED8C5',
			},
			sale: false,
			variantSizes: [
				{
					orderFilter: 375,
					filterCode: 'XXL',
				},
				{
					orderFilter: 370,
					filterCode: 'L',
				},
				{
					orderFilter: 372,
					filterCode: 'XL',
				},
				{
					orderFilter: 366,
					filterCode: 'S',
				},
				{
					orderFilter: 369,
					filterCode: 'M',
				},
			],
			swatches: [],
			articleCodes: ['1109597003'],
			ticket:
				'Oy9wbHAvcHJvZHVjdC1saXN0LXdpdGgtY291bnQvcHJvZHVjdC1saXN0OyM7cHJvZHVjdF9rZXk7MTEwOTU5N19ncm91cF8wMDNfZW5fdXM7MTEwOTU5NzAwM19lbl91cztPQkpFQ1RJVkUkO05PTkU6Tk9ORTszMjs',
			searchEngineProductId: '1109597_group_003_en_us',
			dummy: false,
			linkPdp: '/en_us/productpage.1109597003.html',
			categoryName: 'Ladies',
			rgbColors: ['#DED8C5'],
			articleColorNames: ['Light beige'],
			ecoTaxValue: 0,
			swatchesTotal: 1,
			showPriceMarker: false,
			redirectToPdp: false,
			mainCategoryCode: 'ladies_tops_longsleeve',
			comingSoon: false,
			brandName: 'H&M',
		},
	],
	pagination: {
		pageSize: 30,
		currentPage: 0,
		sort: 'stock',
		numberOfPages: 510,
		totalNumberOfResults: 15290,
		totalNumberOfResultsUnfiltered: 0,
	},
	facets: [
		{
			code: 'concepts',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'BABY EXCLUSIVE',
					count: 238,
					selected: false,
				},
				{
					code: 'BASICS',
					count: 1390,
					selected: false,
				},
				{
					code: 'DENIM',
					count: 472,
					selected: false,
				},
				{
					code: 'DIVIDED',
					count: 2385,
					selected: false,
				},
				{
					code: 'EVERYDAY FASHION',
					count: 985,
					selected: false,
				},
				{
					code: 'H&M BEAUTY',
					count: 566,
					selected: false,
				},
				{
					code: 'H&M MAN',
					count: 356,
					selected: false,
				},
				{
					code: 'H&M+',
					count: 509,
					selected: false,
				},
				{
					code: 'KIDS EXCLUSIVE',
					count: 66,
					selected: false,
				},
				{
					code: 'L.O.G.G.',
					count: 1,
					selected: false,
				},
				{
					code: 'MAMA',
					count: 394,
					selected: false,
				},
				{
					code: 'MODERN CLASSIC',
					count: 260,
					selected: false,
				},
				{
					code: 'TREND',
					count: 168,
					selected: false,
				},
			],
		},
		{
			code: 'qualities',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'Premium Selection',
					count: 319,
					selected: false,
				},
			],
		},
		{
			code: 'collection',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: '2_Baby',
					count: 45,
					selected: false,
				},
				{
					code: '2_Blackpink merch',
					count: 7,
					selected: false,
				},
				{
					code: '2_Blank Staples',
					count: 27,
					selected: false,
				},
				{
					code: '2_Brock Collection x H&M',
					count: 1,
					selected: false,
				},
				{
					code: '2_Circular Design Story',
					count: 5,
					selected: false,
				},
				{
					code: '2_Edition by',
					count: 10,
					selected: false,
				},
				{
					code: '2_H&M x LEGO® Collection',
					count: 4,
					selected: false,
				},
				{
					code: '2_Harry Potter x H&M',
					count: 4,
					selected: false,
				},
				{
					code: '2_Hôtel Hennes Merch',
					count: 4,
					selected: false,
				},
				{
					code: '2_India Mahdavi x H&M Home',
					count: 2,
					selected: false,
				},
				{
					code: '2_Innovation Cherish Waste Story',
					count: 4,
					selected: false,
				},
				{
					code: '2_Innovation Co-Exist Story',
					count: 5,
					selected: false,
				},
				{
					code: '2_Liunic x H&M',
					count: 16,
					selected: false,
				},
				{
					code: '2_Mini Me',
					count: 17,
					selected: false,
				},
				{
					code: '2_Netflix x H&M',
					count: 9,
					selected: false,
				},
				{
					code: '2_No Fear x H&M',
					count: 12,
					selected: false,
				},
				{
					code: '2_Save the Children',
					count: 2,
					selected: false,
				},
				{
					code: '2_Sibling',
					count: 9,
					selected: false,
				},
				{
					code: '2_SmileyWorld® x H&M',
					count: 23,
					selected: false,
				},
				{
					code: '2_Smiley® x H&M',
					count: 39,
					selected: false,
				},
				{
					code: '2_Studio Collection',
					count: 11,
					selected: false,
				},
			],
		},
		{
			code: 'functions',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'Blackout',
					count: 5,
					selected: false,
				},
				{
					code: 'Breathable',
					count: 28,
					selected: false,
				},
				{
					code: 'Polarized',
					count: 6,
					selected: false,
				},
				{
					code: 'Quick dry',
					count: 341,
					selected: false,
				},
				{
					code: 'Reflective details',
					count: 68,
					selected: false,
				},
				{
					code: 'Thermal',
					count: 19,
					selected: false,
				},
				{
					code: 'Water-repellent',
					count: 80,
					selected: false,
				},
				{
					code: 'Water-resistant',
					count: 11,
					selected: false,
				},
				{
					code: 'Waterproof',
					count: 21,
					selected: false,
				},
				{
					code: 'Windproof',
					count: 73,
					selected: false,
				},
			],
		},
		{
			code: 'colors',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'beige',
					count: 2391,
					selected: false,
				},
				{
					code: 'black',
					count: 3163,
					selected: false,
				},
				{
					code: 'blue',
					count: 2385,
					selected: false,
				},
				{
					code: 'bronze',
					count: 11,
					selected: false,
				},
				{
					code: 'brown',
					count: 620,
					selected: false,
				},
				{
					code: 'gold-colored',
					count: 176,
					selected: false,
				},
				{
					code: 'gray',
					count: 1796,
					selected: false,
				},
				{
					code: 'green',
					count: 1489,
					selected: false,
				},
				{
					code: 'multi',
					count: 4963,
					selected: false,
				},
				{
					code: 'orange',
					count: 485,
					selected: false,
				},
				{
					code: 'pink',
					count: 1560,
					selected: false,
				},
				{
					code: 'purple',
					count: 617,
					selected: false,
				},
				{
					code: 'red',
					count: 390,
					selected: false,
				},
				{
					code: 'silver-colored',
					count: 131,
					selected: false,
				},
				{
					code: 'transparent',
					count: 56,
					selected: false,
				},
				{
					code: 'turquoise',
					count: 413,
					selected: false,
				},
				{
					code: 'white',
					count: 2538,
					selected: false,
				},
				{
					code: 'yellow',
					count: 494,
					selected: false,
				},
			],
		},
		{
			code: 'fits',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'Fitted',
					count: 793,
					selected: false,
				},
				{
					code: 'Loose fit',
					count: 360,
					selected: false,
				},
				{
					code: 'Muscle fit',
					count: 44,
					selected: false,
				},
				{
					code: 'Oversized',
					count: 403,
					selected: false,
				},
				{
					code: 'Regular fit',
					count: 689,
					selected: false,
				},
				{
					code: 'Relaxed fit',
					count: 809,
					selected: false,
				},
				{
					code: 'Skinny fit',
					count: 142,
					selected: false,
				},
				{
					code: 'Slim fit',
					count: 399,
					selected: false,
				},
				{
					code: 'Super skinny fit',
					count: 5,
					selected: false,
				},
			],
		},
		{
			code: 'contexts',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'Beach',
					count: 859,
					selected: false,
				},
				{
					code: 'Casual',
					count: 5054,
					selected: false,
				},
				{
					code: 'Costume Party',
					count: 27,
					selected: false,
				},
				{
					code: 'Formal',
					count: 97,
					selected: false,
				},
				{
					code: 'Lounge',
					count: 135,
					selected: false,
				},
				{
					code: 'Office Wear',
					count: 54,
					selected: false,
				},
				{
					code: 'Party',
					count: 157,
					selected: false,
				},
				{
					code: 'School',
					count: 8,
					selected: false,
				},
				{
					code: 'Sport',
					count: 520,
					selected: false,
				},
			],
		},
		{
			code: 'productTypes',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'Apron',
					count: 9,
					selected: false,
				},
				{
					code: 'Arm Warmers',
					count: 2,
					selected: false,
				},
				{
					code: 'Artificial Nails',
					count: 3,
					selected: false,
				},
				{
					code: 'Baby Blanket',
					count: 22,
					selected: false,
				},
				{
					code: 'Baby Mat',
					count: 2,
					selected: false,
				},
				{
					code: 'Baby Mobile',
					count: 1,
					selected: false,
				},
				{
					code: 'Baby Scarf',
					count: 5,
					selected: false,
				},
				{
					code: 'Bag',
					count: 109,
					selected: false,
				},
				{
					code: 'Bag Charm',
					count: 1,
					selected: false,
				},
				{
					code: 'Base Layer Set',
					count: 1,
					selected: false,
				},
				{
					code: 'Basket',
					count: 81,
					selected: false,
				},
				{
					code: 'Bath Bomb',
					count: 11,
					selected: false,
				},
				{
					code: 'Bath Caddy',
					count: 2,
					selected: false,
				},
				{
					code: 'Bath Mat',
					count: 37,
					selected: false,
				},
				{
					code: 'Bath Mitt',
					count: 5,
					selected: false,
				},
				{
					code: 'Bath Sponge',
					count: 2,
					selected: false,
				},
				{
					code: 'Bathrobe',
					count: 25,
					selected: false,
				},
				{
					code: 'Beach Mattress',
					count: 1,
					selected: false,
				},
				{
					code: 'Bedskirt',
					count: 34,
					selected: false,
				},
				{
					code: 'Bedspread',
					count: 21,
					selected: false,
				},
				{
					code: 'Belly Band',
					count: 3,
					selected: false,
				},
				{
					code: 'Belt',
					count: 50,
					selected: false,
				},
				{
					code: 'Beret',
					count: 5,
					selected: false,
				},
				{
					code: 'Bib',
					count: 1,
					selected: false,
				},
				{
					code: 'Bikini Top',
					count: 197,
					selected: false,
				},
				{
					code: 'Bikini bottoms',
					count: 313,
					selected: false,
				},
				{
					code: 'Blazer',
					count: 60,
					selected: false,
				},
				{
					code: 'Blouse',
					count: 134,
					selected: false,
				},
				{
					code: 'Blush',
					count: 10,
					selected: false,
				},
				{
					code: 'Body',
					count: 29,
					selected: false,
				},
				{
					code: 'Body Brush',
					count: 1,
					selected: false,
				},
				{
					code: 'Body Jewelry',
					count: 5,
					selected: false,
				},
				{
					code: 'Bodysuit',
					count: 188,
					selected: false,
				},
				{
					code: 'Bolero',
					count: 3,
					selected: false,
				},
				{
					code: 'Book',
					count: 1,
					selected: false,
				},
				{
					code: 'Bow Tie',
					count: 1,
					selected: false,
				},
				{
					code: 'Bowl',
					count: 21,
					selected: false,
				},
				{
					code: 'Box',
					count: 11,
					selected: false,
				},
				{
					code: 'Bra',
					count: 290,
					selected: false,
				},
				{
					code: 'Bra Accessories',
					count: 1,
					selected: false,
				},
				{
					code: 'Bracelet',
					count: 17,
					selected: false,
				},
				{
					code: 'Briefs',
					count: 400,
					selected: false,
				},
				{
					code: 'Bronzer',
					count: 5,
					selected: false,
				},
				{
					code: 'Brush Cleaner',
					count: 1,
					selected: false,
				},
				{
					code: 'Bubble Bath',
					count: 2,
					selected: false,
				},
				{
					code: 'Bustier',
					count: 3,
					selected: false,
				},
				{
					code: 'Butter knife',
					count: 2,
					selected: false,
				},
				{
					code: 'Cable Protector',
					count: 1,
					selected: false,
				},
				{
					code: 'Caftan',
					count: 3,
					selected: false,
				},
				{
					code: 'Cake Server',
					count: 2,
					selected: false,
				},
				{
					code: 'Candle',
					count: 60,
					selected: false,
				},
				{
					code: 'Candlestick',
					count: 6,
					selected: false,
				},
				{
					code: 'Cap',
					count: 116,
					selected: false,
				},
				{
					code: 'Carafe',
					count: 8,
					selected: false,
				},
				{
					code: 'Card Holder',
					count: 1,
					selected: false,
				},
				{
					code: 'Cardigan',
					count: 169,
					selected: false,
				},
				{
					code: 'Changing Pad Cover',
					count: 2,
					selected: false,
				},
				{
					code: 'Cheese knife',
					count: 4,
					selected: false,
				},
				{
					code: 'Clothing Tape',
					count: 2,
					selected: false,
				},
				{
					code: 'Coaster',
					count: 3,
					selected: false,
				},
				{
					code: 'Coat',
					count: 34,
					selected: false,
				},
				{
					code: 'Collar',
					count: 11,
					selected: false,
				},
				{
					code: 'Comb',
					count: 1,
					selected: false,
				},
				{
					code: 'Concealer',
					count: 29,
					selected: false,
				},
				{
					code: 'Costume',
					count: 22,
					selected: false,
				},
				{
					code: 'Costume Party Accessories',
					count: 2,
					selected: false,
				},
				{
					code: 'Cotton',
					count: 1,
					selected: false,
				},
				{
					code: 'Cuff Weight',
					count: 1,
					selected: false,
				},
				{
					code: 'Curtain',
					count: 43,
					selected: false,
				},
				{
					code: 'Curtain Hook',
					count: 1,
					selected: false,
				},
				{
					code: 'Cushion Cover',
					count: 118,
					selected: false,
				},
				{
					code: 'Cutlery',
					count: 8,
					selected: false,
				},
				{
					code: 'Cutting Board',
					count: 1,
					selected: false,
				},
				{
					code: 'Decoration',
					count: 16,
					selected: false,
				},
				{
					code: 'Decorative Cushion',
					count: 2,
					selected: false,
				},
				{
					code: 'Dish',
					count: 15,
					selected: false,
				},
				{
					code: 'Dog Accessories',
					count: 6,
					selected: false,
				},
				{
					code: 'Dog Wear',
					count: 8,
					selected: false,
				},
				{
					code: 'Dome',
					count: 4,
					selected: false,
				},
				{
					code: 'Dress',
					count: 1434,
					selected: false,
				},
				{
					code: 'Dresser',
					count: 1,
					selected: false,
				},
				{
					code: 'Duvet',
					count: 1,
					selected: false,
				},
				{
					code: 'Duvet Cover Set',
					count: 84,
					selected: false,
				},
				{
					code: 'Earphone Case',
					count: 5,
					selected: false,
				},
				{
					code: 'Earrings',
					count: 38,
					selected: false,
				},
				{
					code: 'Egg Cozy',
					count: 1,
					selected: false,
				},
				{
					code: 'Exfoliating Mitt',
					count: 1,
					selected: false,
				},
				{
					code: 'Eye Mask',
					count: 1,
					selected: false,
				},
				{
					code: 'Eyebrow Pomade',
					count: 1,
					selected: false,
				},
				{
					code: 'Eyebrow gel',
					count: 2,
					selected: false,
				},
				{
					code: 'Eyebrow pencil',
					count: 12,
					selected: false,
				},
				{
					code: 'Eyeglass Chain',
					count: 5,
					selected: false,
				},
				{
					code: 'Eyeglasses',
					count: 1,
					selected: false,
				},
				{
					code: 'Eyelash Curlers',
					count: 1,
					selected: false,
				},
				{
					code: 'Eyeliner',
					count: 1,
					selected: false,
				},
				{
					code: 'Eyeshadow',
					count: 66,
					selected: false,
				},
				{
					code: 'Fabric Comb',
					count: 1,
					selected: false,
				},
				{
					code: 'Face Decorations',
					count: 1,
					selected: false,
				},
				{
					code: 'Face Mask',
					count: 6,
					selected: false,
				},
				{
					code: 'Face mist',
					count: 2,
					selected: false,
				},
				{
					code: 'Facial Cleansing Brush',
					count: 2,
					selected: false,
				},
				{
					code: 'Facial Cleansing Pad',
					count: 1,
					selected: false,
				},
				{
					code: 'Facial Cleansing Sponge',
					count: 5,
					selected: false,
				},
				{
					code: 'False Eyelash Adhesive',
					count: 1,
					selected: false,
				},
				{
					code: 'False Eyelashes',
					count: 5,
					selected: false,
				},
				{
					code: 'Foam Roller',
					count: 1,
					selected: false,
				},
				{
					code: 'Foot Jewelry',
					count: 8,
					selected: false,
				},
				{
					code: 'Foundation',
					count: 10,
					selected: false,
				},
				{
					code: 'Frame',
					count: 29,
					selected: false,
				},
				{
					code: 'Games',
					count: 3,
					selected: false,
				},
				{
					code: 'Garland',
					count: 5,
					selected: false,
				},
				{
					code: 'Gift Bag',
					count: 4,
					selected: false,
				},
				{
					code: 'Gift Ribbon',
					count: 1,
					selected: false,
				},
				{
					code: 'Gift Tag',
					count: 4,
					selected: false,
				},
				{
					code: 'Glass',
					count: 27,
					selected: false,
				},
				{
					code: 'Gloves',
					count: 7,
					selected: false,
				},
				{
					code: 'Hair Claw',
					count: 24,
					selected: false,
				},
				{
					code: 'Hair Clips',
					count: 19,
					selected: false,
				},
				{
					code: 'Hair Elastic',
					count: 25,
					selected: false,
				},
				{
					code: 'Hairband',
					count: 31,
					selected: false,
				},
				{
					code: 'Hairbrush',
					count: 8,
					selected: false,
				},
				{
					code: 'Handkerchief',
					count: 1,
					selected: false,
				},
				{
					code: 'Hanger',
					count: 20,
					selected: false,
				},
				{
					code: 'Harness Belt',
					count: 3,
					selected: false,
				},
				{
					code: 'Hat',
					count: 270,
					selected: false,
				},
				{
					code: 'Headband',
					count: 5,
					selected: false,
				},
				{
					code: 'Hemming Tape',
					count: 1,
					selected: false,
				},
				{
					code: 'Hook',
					count: 8,
					selected: false,
				},
				{
					code: 'Inner Cushion',
					count: 5,
					selected: false,
				},
				{
					code: 'Jacket',
					count: 484,
					selected: false,
				},
				{
					code: 'Jeans',
					count: 436,
					selected: false,
				},
				{
					code: 'Jewelry Box',
					count: 3,
					selected: false,
				},
				{
					code: 'Jewelry Stand',
					count: 2,
					selected: false,
				},
				{
					code: 'Jigsaw Puzzle',
					count: 1,
					selected: false,
				},
				{
					code: 'Jug',
					count: 2,
					selected: false,
				},
				{
					code: 'Jump Rope',
					count: 2,
					selected: false,
				},
				{
					code: 'Jumpsuit',
					count: 144,
					selected: false,
				},
				{
					code: 'Key Lanyard',
					count: 2,
					selected: false,
				},
				{
					code: 'Key Ring',
					count: 7,
					selected: false,
				},
				{
					code: 'Knitted Sweater',
					count: 305,
					selected: false,
				},
				{
					code: 'Knob',
					count: 1,
					selected: false,
				},
				{
					code: 'Lantern',
					count: 18,
					selected: false,
				},
				{
					code: 'Laptop Case',
					count: 3,
					selected: false,
				},
				{
					code: 'Laundry Bag',
					count: 1,
					selected: false,
				},
				{
					code: 'Laundry Basket',
					count: 7,
					selected: false,
				},
				{
					code: 'Leggings',
					count: 556,
					selected: false,
				},
				{
					code: 'Lip Balm',
					count: 2,
					selected: false,
				},
				{
					code: 'Lip Gloss',
					count: 51,
					selected: false,
				},
				{
					code: 'Lip Oil',
					count: 1,
					selected: false,
				},
				{
					code: 'Lip Pencil',
					count: 4,
					selected: false,
				},
				{
					code: 'Lip Scrub',
					count: 2,
					selected: false,
				},
				{
					code: 'Lipstick',
					count: 47,
					selected: false,
				},
				{
					code: 'Loose Glitter',
					count: 2,
					selected: false,
				},
				{
					code: 'Lunch Box',
					count: 3,
					selected: false,
				},
				{
					code: 'Makeup Bag',
					count: 12,
					selected: false,
				},
				{
					code: 'Makeup Brush',
					count: 30,
					selected: false,
				},
				{
					code: 'Makeup Highlighter',
					count: 16,
					selected: false,
				},
				{
					code: 'Makeup Organizer',
					count: 2,
					selected: false,
				},
				{
					code: 'Makeup Pencil Sharpener',
					count: 1,
					selected: false,
				},
				{
					code: 'Makeup Setting Spray',
					count: 4,
					selected: false,
				},
				{
					code: 'Makeup Sponge',
					count: 6,
					selected: false,
				},
				{
					code: 'Makeup remover',
					count: 1,
					selected: false,
				},
				{
					code: 'Mascara',
					count: 3,
					selected: false,
				},
				{
					code: 'Massage Stone',
					count: 4,
					selected: false,
				},
				{
					code: 'Mirror',
					count: 13,
					selected: false,
				},
				{
					code: 'Mittens',
					count: 34,
					selected: false,
				},
				{
					code: 'Mug',
					count: 28,
					selected: false,
				},
				{
					code: 'Music Box',
					count: 1,
					selected: false,
				},
				{
					code: 'Nail Buffer',
					count: 3,
					selected: false,
				},
				{
					code: 'Nail Clipper',
					count: 2,
					selected: false,
				},
				{
					code: 'Nail Decorations',
					count: 2,
					selected: false,
				},
				{
					code: 'Nail File',
					count: 10,
					selected: false,
				},
				{
					code: 'Nail Oil',
					count: 1,
					selected: false,
				},
				{
					code: 'Nail Polish',
					count: 185,
					selected: false,
				},
				{
					code: 'Napkin',
					count: 15,
					selected: false,
				},
				{
					code: 'Napkin Ring',
					count: 7,
					selected: false,
				},
				{
					code: 'Necklace',
					count: 64,
					selected: false,
				},
				{
					code: 'Nightgown',
					count: 7,
					selected: false,
				},
				{
					code: 'Nightshirt',
					count: 6,
					selected: false,
				},
				{
					code: 'Notions',
					count: 1,
					selected: false,
				},
				{
					code: 'Oven Mitt',
					count: 1,
					selected: false,
				},
				{
					code: 'Overall',
					count: 5,
					selected: false,
				},
				{
					code: 'Pajamas',
					count: 173,
					selected: false,
				},
				{
					code: 'Pants',
					count: 1122,
					selected: false,
				},
				{
					code: 'Paperweight',
					count: 1,
					selected: false,
				},
				{
					code: 'Patch',
					count: 3,
					selected: false,
				},
				{
					code: 'Pedestal',
					count: 1,
					selected: false,
				},
				{
					code: 'Pencil Case',
					count: 6,
					selected: false,
				},
				{
					code: 'Perfume',
					count: 5,
					selected: false,
				},
				{
					code: 'Phone Grip',
					count: 3,
					selected: false,
				},
				{
					code: 'Phone Jewelry',
					count: 4,
					selected: false,
				},
				{
					code: 'Picnic Blanket',
					count: 1,
					selected: false,
				},
				{
					code: 'Piercing Jewelry',
					count: 1,
					selected: false,
				},
				{
					code: 'Pillow',
					count: 1,
					selected: false,
				},
				{
					code: 'Pillowcase',
					count: 44,
					selected: false,
				},
				{
					code: 'Place Card Holder',
					count: 1,
					selected: false,
				},
				{
					code: 'Placemat',
					count: 17,
					selected: false,
				},
				{
					code: 'Plant Pot',
					count: 46,
					selected: false,
				},
				{
					code: 'Plant Saucer',
					count: 6,
					selected: false,
				},
				{
					code: 'Plant Stand',
					count: 1,
					selected: false,
				},
				{
					code: 'Plate',
					count: 29,
					selected: false,
				},
				{
					code: 'Pompom',
					count: 1,
					selected: false,
				},
				{
					code: 'Poncho',
					count: 7,
					selected: false,
				},
				{
					code: 'Poster',
					count: 11,
					selected: false,
				},
				{
					code: 'Pot Holder',
					count: 1,
					selected: false,
				},
				{
					code: 'Powder',
					count: 8,
					selected: false,
				},
				{
					code: 'Puff Pants',
					count: 13,
					selected: false,
				},
				{
					code: 'Rattle',
					count: 1,
					selected: false,
				},
				{
					code: 'Resistance Band',
					count: 1,
					selected: false,
				},
				{
					code: 'Ring',
					count: 56,
					selected: false,
				},
				{
					code: 'Roller',
					count: 9,
					selected: false,
				},
				{
					code: 'Rug',
					count: 62,
					selected: false,
				},
				{
					code: 'Salt and Pepper Set',
					count: 1,
					selected: false,
				},
				{
					code: 'Sarong',
					count: 6,
					selected: false,
				},
				{
					code: 'Scarf',
					count: 50,
					selected: false,
				},
				{
					code: 'Scissors',
					count: 1,
					selected: false,
				},
				{
					code: 'Sculpture',
					count: 2,
					selected: false,
				},
				{
					code: 'Seat Cushion',
					count: 12,
					selected: false,
				},
				{
					code: 'Seat Pad',
					count: 1,
					selected: false,
				},
				{
					code: 'Servers',
					count: 2,
					selected: false,
				},
				{
					code: 'Serving Board',
					count: 1,
					selected: false,
				},
				{
					code: 'Sheet',
					count: 27,
					selected: false,
				},
				{
					code: 'Shelf',
					count: 12,
					selected: false,
				},
				{
					code: 'Shirt',
					count: 1411,
					selected: false,
				},
				{
					code: 'Shoehorn',
					count: 2,
					selected: false,
				},
				{
					code: 'Shoelaces',
					count: 2,
					selected: false,
				},
				{
					code: 'Shoes',
					count: 471,
					selected: false,
				},
				{
					code: 'Shorts',
					count: 1337,
					selected: false,
				},
				{
					code: 'Shower Curtain',
					count: 11,
					selected: false,
				},
				{
					code: 'Shower Curtain Rings',
					count: 3,
					selected: false,
				},
				{
					code: 'Skirt',
					count: 261,
					selected: false,
				},
				{
					code: 'Sleeping Bag',
					count: 6,
					selected: false,
				},
				{
					code: 'Slippers',
					count: 53,
					selected: false,
				},
				{
					code: 'Smartphone Case',
					count: 12,
					selected: false,
				},
				{
					code: 'Snuggle Blanket',
					count: 8,
					selected: false,
				},
				{
					code: 'Soap Dish',
					count: 1,
					selected: false,
				},
				{
					code: 'Soap Dispenser',
					count: 6,
					selected: false,
				},
				{
					code: 'Socks',
					count: 212,
					selected: false,
				},
				{
					code: 'Soft Toy',
					count: 22,
					selected: false,
				},
				{
					code: 'Sticker',
					count: 34,
					selected: false,
				},
				{
					code: 'Storage Box',
					count: 13,
					selected: false,
				},
				{
					code: 'Storage Caddy',
					count: 1,
					selected: false,
				},
				{
					code: 'Storage bag',
					count: 1,
					selected: false,
				},
				{
					code: 'Sun Shield',
					count: 5,
					selected: false,
				},
				{
					code: 'Sunglasses',
					count: 30,
					selected: false,
				},
				{
					code: 'Suspenders',
					count: 1,
					selected: false,
				},
				{
					code: 'Sweatband',
					count: 2,
					selected: false,
				},
				{
					code: 'Swim Goggles',
					count: 3,
					selected: false,
				},
				{
					code: 'Swim Shorts',
					count: 112,
					selected: false,
				},
				{
					code: 'Swim Top',
					count: 21,
					selected: false,
				},
				{
					code: 'Swimsuit',
					count: 95,
					selected: false,
				},
				{
					code: 'T-shirt',
					count: 1068,
					selected: false,
				},
				{
					code: 'Table Runner',
					count: 3,
					selected: false,
				},
				{
					code: 'Tablecloth',
					count: 50,
					selected: false,
				},
				{
					code: 'Tealight Holder',
					count: 10,
					selected: false,
				},
				{
					code: 'Teapot',
					count: 1,
					selected: false,
				},
				{
					code: 'Throw',
					count: 22,
					selected: false,
				},
				{
					code: 'Tie',
					count: 10,
					selected: false,
				},
				{
					code: 'Tights',
					count: 64,
					selected: false,
				},
				{
					code: 'Toiletry bag',
					count: 11,
					selected: false,
				},
				{
					code: 'Toothbrush Holder',
					count: 4,
					selected: false,
				},
				{
					code: 'Top',
					count: 1153,
					selected: false,
				},
				{
					code: 'Towel',
					count: 170,
					selected: false,
				},
				{
					code: 'Toy',
					count: 3,
					selected: false,
				},
				{
					code: 'Tray',
					count: 18,
					selected: false,
				},
				{
					code: 'Tunic',
					count: 11,
					selected: false,
				},
				{
					code: 'Umbrella',
					count: 4,
					selected: false,
				},
				{
					code: 'Vacuum Flask',
					count: 1,
					selected: false,
				},
				{
					code: 'Vase',
					count: 57,
					selected: false,
				},
				{
					code: 'Vest',
					count: 62,
					selected: false,
				},
				{
					code: 'Waistband Extender',
					count: 1,
					selected: false,
				},
				{
					code: 'Wall Storage',
					count: 9,
					selected: false,
				},
				{
					code: 'Wallet',
					count: 1,
					selected: false,
				},
				{
					code: 'Wardrobe Freshener',
					count: 2,
					selected: false,
				},
				{
					code: 'Water Bottle',
					count: 10,
					selected: false,
				},
				{
					code: 'Watering Can',
					count: 2,
					selected: false,
				},
				{
					code: 'Wine Cooler',
					count: 1,
					selected: false,
				},
				{
					code: 'Wipes Case',
					count: 1,
					selected: false,
				},
				{
					code: 'Wrapping Paper',
					count: 3,
					selected: false,
				},
				{
					code: 'iPad Case',
					count: 2,
					selected: false,
				},
			],
		},
		{
			code: 'productGroups',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'BabyGear',
					count: 51,
					selected: false,
				},
				{
					code: 'Bags',
					count: 136,
					selected: false,
				},
				{
					code: 'Bath',
					count: 20,
					selected: false,
				},
				{
					code: 'BathroomAccessories',
					count: 22,
					selected: false,
				},
				{
					code: 'BodyCare',
					count: 1,
					selected: false,
				},
				{
					code: 'ClothingAccessories',
					count: 98,
					selected: false,
				},
				{
					code: 'Cooking',
					count: 15,
					selected: false,
				},
				{
					code: 'Decoration',
					count: 295,
					selected: false,
				},
				{
					code: 'Eyebrow Styling',
					count: 15,
					selected: false,
				},
				{
					code: 'Eyewear',
					count: 35,
					selected: false,
				},
				{
					code: 'FacialSkincare',
					count: 29,
					selected: false,
				},
				{
					code: 'Fragrances',
					count: 7,
					selected: false,
				},
				{
					code: 'FunctionalWear',
					count: 299,
					selected: false,
				},
				{
					code: 'Furniture',
					count: 2,
					selected: false,
				},
				{
					code: 'GardeningTools',
					count: 2,
					selected: false,
				},
				{
					code: 'GarmentCare',
					count: 12,
					selected: false,
				},
				{
					code: 'HairAccessories',
					count: 86,
					selected: false,
				},
				{
					code: 'HairCare',
					count: 10,
					selected: false,
				},
				{
					code: 'Headwear',
					count: 385,
					selected: false,
				},
				{
					code: 'Hygiene',
					count: 3,
					selected: false,
				},
				{
					code: 'Jewelry',
					count: 188,
					selected: false,
				},
				{
					code: 'KitchenUtensils',
					count: 3,
					selected: false,
				},
				{
					code: 'Loungewear',
					count: 137,
					selected: false,
				},
				{
					code: 'Makeup',
					count: 265,
					selected: false,
				},
				{
					code: 'MakeupTools',
					count: 36,
					selected: false,
				},
				{
					code: 'NailCare',
					count: 197,
					selected: false,
				},
				{
					code: 'Nightwear',
					count: 196,
					selected: false,
				},
				{
					code: 'Nursing',
					count: 82,
					selected: false,
				},
				{
					code: 'Outerwear',
					count: 776,
					selected: false,
				},
				{
					code: 'PetAccessories',
					count: 14,
					selected: false,
				},
				{
					code: 'Play',
					count: 30,
					selected: false,
				},
				{
					code: 'Pregnancy',
					count: 344,
					selected: false,
				},
				{
					code: 'Rainwear',
					count: 18,
					selected: false,
				},
				{
					code: 'Rugs',
					count: 99,
					selected: false,
				},
				{
					code: 'Shower',
					count: 6,
					selected: false,
				},
				{
					code: 'SkincareTools',
					count: 11,
					selected: false,
				},
				{
					code: 'SportAccessories',
					count: 21,
					selected: false,
				},
				{
					code: 'Sportswear',
					count: 448,
					selected: false,
				},
				{
					code: 'Stationery',
					count: 20,
					selected: false,
				},
				{
					code: 'Storage',
					count: 172,
					selected: false,
				},
				{
					code: 'Swimwear',
					count: 700,
					selected: false,
				},
				{
					code: 'Tableware',
					count: 217,
					selected: false,
				},
				{
					code: 'TechAccessories',
					count: 40,
					selected: false,
				},
				{
					code: 'Textiles',
					count: 689,
					selected: false,
				},
				{
					code: 'TravelAccessories',
					count: 1,
					selected: false,
				},
				{
					code: 'Underwear',
					count: 1016,
					selected: false,
				},
				{
					code: 'WallDecorations',
					count: 10,
					selected: false,
				},
			],
		},
		{
			code: 'ageGroups',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'adult',
					count: 8796,
					selected: false,
				},
				{
					code: 'baby',
					count: 1470,
					selected: false,
				},
				{
					code: 'newborn',
					count: 929,
					selected: false,
				},
				{
					code: 'older child',
					count: 1567,
					selected: false,
				},
				{
					code: 'younger child',
					count: 2199,
					selected: false,
				},
			],
		},
		{
			code: 'customerGroups',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'Boy',
					count: 2629,
					selected: false,
				},
				{
					code: 'Girl',
					count: 3347,
					selected: false,
				},
				{
					code: 'Man',
					count: 2150,
					selected: false,
				},
				{
					code: 'Woman',
					count: 6703,
					selected: false,
				},
			],
		},
		{
			code: 'assortmentTypes',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'accessories',
					count: 513,
					selected: false,
				},
				{
					code: 'accessories ',
					count: 548,
					selected: false,
				},
				{
					code: 'clothing',
					count: 11681,
					selected: false,
				},
				{
					code: 'footwear',
					count: 525,
					selected: false,
				},
				{
					code: 'homeware',
					count: 1559,
					selected: false,
				},
				{
					code: 'personal care',
					count: 590,
					selected: false,
				},
			],
		},
		{
			code: 'sizes',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: '1007_79x118_8_homewear',
					count: 1,
					selected: false,
				},
				{
					code: '101_36_5_waist',
					count: 135,
					selected: false,
				},
				{
					code: '106_38_5_waist',
					count: 139,
					selected: false,
				},
				{
					code: '10_6_1_womenswear',
					count: 440,
					selected: false,
				},
				{
					code: '10_6_6_footwear',
					count: 122,
					selected: false,
				},
				{
					code: '10_6_7_kidsfootwear',
					count: 159,
					selected: false,
				},
				{
					code: '111_40_5_waist',
					count: 128,
					selected: false,
				},
				{
					code: '117_42_5_waist',
					count: 130,
					selected: false,
				},
				{
					code: '11_7_6_footwear',
					count: 126,
					selected: false,
				},
				{
					code: '11_7_7_kidsfootwear',
					count: 51,
					selected: false,
				},
				{
					code: '12_8_1_womenswear',
					count: 415,
					selected: false,
				},
				{
					code: '12_8_6_footwear',
					count: 111,
					selected: false,
				},
				{
					code: '12_8_7_kidsfootwear',
					count: 102,
					selected: false,
				},
				{
					code: '1315_kids_8_homewear',
					count: 11,
					selected: false,
				},
				{
					code: '1317_twin_8_homewear',
					count: 46,
					selected: false,
				},
				{
					code: '1319_full_8_homewear',
					count: 27,
					selected: false,
				},
				{
					code: '1320_queen_8_homewear',
					count: 62,
					selected: false,
				},
				{
					code: '1321_king_8_homewear',
					count: 86,
					selected: false,
				},
				{
					code: '1392_28/32_5_waist',
					count: 53,
					selected: false,
				},
				{
					code: '1396_29/30_5_waist',
					count: 32,
					selected: false,
				},
				{
					code: '13_9_6_footwear',
					count: 209,
					selected: false,
				},
				{
					code: '13_9_7_kidsfootwear',
					count: 102,
					selected: false,
				},
				{
					code: '1401_30/30_5_waist',
					count: 40,
					selected: false,
				},
				{
					code: '1402_30/32_5_waist',
					count: 57,
					selected: false,
				},
				{
					code: '1403_30/34_5_waist',
					count: 10,
					selected: false,
				},
				{
					code: '1407_31/30_5_waist',
					count: 38,
					selected: false,
				},
				{
					code: '1408_31/32_5_waist',
					count: 61,
					selected: false,
				},
				{
					code: '1413_32/30_5_waist',
					count: 41,
					selected: false,
				},
				{
					code: '1414_32/32_5_waist',
					count: 65,
					selected: false,
				},
				{
					code: '1415_32/34_5_waist',
					count: 12,
					selected: false,
				},
				{
					code: '1419_33/30_5_waist',
					count: 34,
					selected: false,
				},
				{
					code: '1420_33/32_5_waist',
					count: 68,
					selected: false,
				},
				{
					code: '1421_33/34_5_waist',
					count: 20,
					selected: false,
				},
				{
					code: '1425_34/30_5_waist',
					count: 31,
					selected: false,
				},
				{
					code: '1426_34/32_5_waist',
					count: 63,
					selected: false,
				},
				{
					code: '1427_34/34_5_waist',
					count: 28,
					selected: false,
				},
				{
					code: '1432_36/32_5_waist',
					count: 53,
					selected: false,
				},
				{
					code: '1433_36/34_5_waist',
					count: 16,
					selected: false,
				},
				{
					code: '1437_38/32_5_waist',
					count: 63,
					selected: false,
				},
				{
					code: '1438_38/34_5_waist',
					count: 2,
					selected: false,
				},
				{
					code: '1443_40/32_5_waist',
					count: 59,
					selected: false,
				},
				{
					code: '1448_42/32_5_waist',
					count: 59,
					selected: false,
				},
				{
					code: '1454_44/32_5_waist',
					count: 32,
					selected: false,
				},
				{
					code: '14_10_1_womenswear',
					count: 407,
					selected: false,
				},
				{
					code: '14_10_6_footwear',
					count: 215,
					selected: false,
				},
				{
					code: '14_10_7_kidsfootwear',
					count: 70,
					selected: false,
				},
				{
					code: '1530_d4_8_homewear',
					count: 2,
					selected: false,
				},
				{
					code: '1533_d15_8_homewear',
					count: 12,
					selected: false,
				},
				{
					code: '1537_d24_8_homewear',
					count: 1,
					selected: false,
				},
				{
					code: '1539_d28_8_homewear',
					count: 7,
					selected: false,
				},
				{
					code: '1543_d39_8_homewear',
					count: 5,
					selected: false,
				},
				{
					code: '1546_d43_8_homewear',
					count: 3,
					selected: false,
				},
				{
					code: '1548_d51_8_homewear',
					count: 2,
					selected: false,
				},
				{
					code: '1549_d55_8_homewear',
					count: 3,
					selected: false,
				},
				{
					code: '1554_d75_8_homewear',
					count: 5,
					selected: false,
				},
				{
					code: '1582_30a_2_bras',
					count: 8,
					selected: false,
				},
				{
					code: '1583_32a_2_bras',
					count: 62,
					selected: false,
				},
				{
					code: '1584_34a_2_bras',
					count: 80,
					selected: false,
				},
				{
					code: '1585_36a_2_bras',
					count: 81,
					selected: false,
				},
				{
					code: '1591_30b_2_bras',
					count: 17,
					selected: false,
				},
				{
					code: '1592_32b_2_bras',
					count: 76,
					selected: false,
				},
				{
					code: '1593_34b_2_bras',
					count: 81,
					selected: false,
				},
				{
					code: '1594_36b_2_bras',
					count: 72,
					selected: false,
				},
				{
					code: '1595_38b_1_womenswear',
					count: 1,
					selected: false,
				},
				{
					code: '1595_38b_2_bras',
					count: 77,
					selected: false,
				},
				{
					code: '15_11_6_footwear',
					count: 175,
					selected: false,
				},
				{
					code: '15_11_7_kidsfootwear',
					count: 89,
					selected: false,
				},
				{
					code: '1601_30c_2_bras',
					count: 18,
					selected: false,
				},
				{
					code: '1602_32c_2_bras',
					count: 78,
					selected: false,
				},
				{
					code: '1604_34c_2_bras',
					count: 80,
					selected: false,
				},
				{
					code: '1605_36c_2_bras',
					count: 82,
					selected: false,
				},
				{
					code: '1606_38c_2_bras',
					count: 57,
					selected: false,
				},
				{
					code: '1607_40c_2_bras',
					count: 3,
					selected: false,
				},
				{
					code: '1608_42c_2_bras',
					count: 1,
					selected: false,
				},
				{
					code: '1617_32d_2_bras',
					count: 94,
					selected: false,
				},
				{
					code: '1618_34d_2_bras',
					count: 100,
					selected: false,
				},
				{
					code: '1619_36d_2_bras',
					count: 55,
					selected: false,
				},
				{
					code: '1620_38d_2_bras',
					count: 37,
					selected: false,
				},
				{
					code: '1621_40d_2_bras',
					count: 11,
					selected: false,
				},
				{
					code: '1622_42d_2_bras',
					count: 10,
					selected: false,
				},
				{
					code: '1628_32dd_2_bras',
					count: 28,
					selected: false,
				},
				{
					code: '1629_34dd_2_bras',
					count: 20,
					selected: false,
				},
				{
					code: '1630_36dd_2_bras',
					count: 17,
					selected: false,
				},
				{
					code: '1631_38dd_2_bras',
					count: 16,
					selected: false,
				},
				{
					code: '1632_40dd_2_bras',
					count: 10,
					selected: false,
				},
				{
					code: '1662_32f_2_bras',
					count: 22,
					selected: false,
				},
				{
					code: '1663_34f_2_bras',
					count: 18,
					selected: false,
				},
				{
					code: '1664_36f_2_bras',
					count: 12,
					selected: false,
				},
				{
					code: '1665_38f_2_bras',
					count: 13,
					selected: false,
				},
				{
					code: '16_12_1_womenswear',
					count: 404,
					selected: false,
				},
				{
					code: '16_12_6_footwear',
					count: 74,
					selected: false,
				},
				{
					code: '16_12_7_kidsfootwear',
					count: 158,
					selected: false,
				},
				{
					code: '17_13_6_footwear',
					count: 29,
					selected: false,
				},
				{
					code: '17_13_7_kidsfootwear',
					count: 54,
					selected: false,
				},
				{
					code: '1871_0-1_7_kidsfootwear',
					count: 4,
					selected: false,
				},
				{
					code: '1886_5-7_6_footwear',
					count: 34,
					selected: false,
				},
				{
					code: '1894_8-10_6_footwear',
					count: 32,
					selected: false,
				},
				{
					code: '18_14_1_womenswear',
					count: 425,
					selected: false,
				},
				{
					code: '194_104_4_kidswear',
					count: 1,
					selected: false,
				},
				{
					code: '200_110_4_kidswear',
					count: 1,
					selected: false,
				},
				{
					code: '206_116_4_kidswear',
					count: 1,
					selected: false,
				},
				{
					code: '2092_30r_3_menswear',
					count: 12,
					selected: false,
				},
				{
					code: '2093_32r_3_menswear',
					count: 16,
					selected: false,
				},
				{
					code: '2094_33r_3_menswear',
					count: 8,
					selected: false,
				},
				{
					code: '2095_34r_3_menswear',
					count: 33,
					selected: false,
				},
				{
					code: '2096_36r_3_menswear',
					count: 35,
					selected: false,
				},
				{
					code: '2097_38r_3_menswear',
					count: 31,
					selected: false,
				},
				{
					code: '2098_40r_3_menswear',
					count: 28,
					selected: false,
				},
				{
					code: '2099_42r_3_menswear',
					count: 42,
					selected: false,
				},
				{
					code: '20_16_1_womenswear',
					count: 419,
					selected: false,
				},
				{
					code: '2100_44r_3_menswear',
					count: 44,
					selected: false,
				},
				{
					code: '2101_46r_3_menswear',
					count: 44,
					selected: false,
				},
				{
					code: '2102_48r_3_menswear',
					count: 19,
					selected: false,
				},
				{
					code: '2103_50r_3_menswear',
					count: 13,
					selected: false,
				},
				{
					code: '2104_52r_3_menswear',
					count: 15,
					selected: false,
				},
				{
					code: '212_122_4_kidswear',
					count: 1,
					selected: false,
				},
				{
					code: '2149_s/54_1_womenswear',
					count: 30,
					selected: false,
				},
				{
					code: '2154_s/56_3_menswear',
					count: 30,
					selected: false,
				},
				{
					code: '2155_m/56_1_womenswear',
					count: 28,
					selected: false,
				},
				{
					code: '2158_m/58_3_menswear',
					count: 25,
					selected: false,
				},
				{
					code: '2159_l/58_1_womenswear',
					count: 26,
					selected: false,
				},
				{
					code: '2164_l/60_3_menswear',
					count: 15,
					selected: false,
				},
				{
					code: '218_128_4_kidswear',
					count: 1,
					selected: false,
				},
				{
					code: '224_134_4_kidswear',
					count: 3,
					selected: false,
				},
				{
					code: '22_18_1_womenswear',
					count: 480,
					selected: false,
				},
				{
					code: '230_140_4_kidswear',
					count: 3,
					selected: false,
				},
				{
					code: '236_146_4_kidswear',
					count: 3,
					selected: false,
				},
				{
					code: '2382_6x8_8_homewear',
					count: 9,
					selected: false,
				},
				{
					code: '2393_16x22_4_kidswear',
					count: 1,
					selected: false,
				},
				{
					code: '2410_7x7_4_kidswear',
					count: 5,
					selected: false,
				},
				{
					code: '2411_13x10_4_kidswear',
					count: 1,
					selected: false,
				},
				{
					code: '242_152_4_kidswear',
					count: 3,
					selected: false,
				},
				{
					code: '2465_59x51_1_womenswear',
					count: 1,
					selected: false,
				},
				{
					code: '2472_71x35_8_homewear',
					count: 2,
					selected: false,
				},
				{
					code: '2477_22x22_1_womenswear',
					count: 5,
					selected: false,
				},
				{
					code: '248_158_4_kidswear',
					count: 3,
					selected: false,
				},
				{
					code: '2509_67x94_8_homewear',
					count: 1,
					selected: false,
				},
				{
					code: '2512_18x13_8_homewear',
					count: 2,
					selected: false,
				},
				{
					code: '2524_19x75_1_womenswear',
					count: 1,
					selected: false,
				},
				{
					code: '2540_10x34_1_womenswear',
					count: 4,
					selected: false,
				},
				{
					code: '254_164_4_kidswear',
					count: 3,
					selected: false,
				},
				{
					code: '2596_75x39_1_womenswear',
					count: 2,
					selected: false,
				},
				{
					code: '2607_<0-1m (<0-1m)_4_kidswear',
					count: 39,
					selected: false,
				},
				{
					code: '260_170_4_kidswear',
					count: 3,
					selected: false,
				},
				{
					code: '2615_1½-2y (2t)_4_kidswear',
					count: 11,
					selected: false,
				},
				{
					code: '2616_2-3y (3t)_4_kidswear',
					count: 9,
					selected: false,
				},
				{
					code: '2617_3-4y (4t)_4_kidswear',
					count: 11,
					selected: false,
				},
				{
					code: '2618_4-5y (5t)_4_kidswear',
					count: 14,
					selected: false,
				},
				{
					code: '2619_5-6y (6)_4_kidswear',
					count: 12,
					selected: false,
				},
				{
					code: '2621_6-7y (6x)_4_kidswear',
					count: 14,
					selected: false,
				},
				{
					code: '2625_8-9y (8)_4_kidswear',
					count: 23,
					selected: false,
				},
				{
					code: '2627_9-10y (10)_4_kidswear',
					count: 25,
					selected: false,
				},
				{
					code: '2629_10-11y (12)_4_kidswear',
					count: 3,
					selected: false,
				},
				{
					code: '2631_11-12y (14)_4_kidswear',
					count: 3,
					selected: false,
				},
				{
					code: '2633_12-13y (16)_4_kidswear',
					count: 3,
					selected: false,
				},
				{
					code: '2635_13-14y (18)_4_kidswear',
					count: 1,
					selected: false,
				},
				{
					code: '2637_14y+ (20)_4_kidswear',
					count: 2,
					selected: false,
				},
				{
					code: '2667_55x98_8_homewear',
					count: 4,
					selected: false,
				},
				{
					code: '2670_d71_8_homewear',
					count: 1,
					selected: false,
				},
				{
					code: '2680_37x46_8_homewear',
					count: 2,
					selected: false,
				},
				{
					code: '2684_24x71_8_homewear',
					count: 1,
					selected: false,
				},
				{
					code: '2700_55x51_8_homewear',
					count: 1,
					selected: false,
				},
				{
					code: '27_1.5_7_kidsfootwear',
					count: 82,
					selected: false,
				},
				{
					code: '2833_55x118_8_homewear',
					count: 4,
					selected: false,
				},
				{
					code: '2877_51x118_8_homewear',
					count: 4,
					selected: false,
				},
				{
					code: '28_2.5_7_kidsfootwear',
					count: 161,
					selected: false,
				},
				{
					code: '2934_59x28_8_homewear',
					count: 2,
					selected: false,
				},
				{
					code: '2946_23x26_8_homewear',
					count: 2,
					selected: false,
				},
				{
					code: '2951_31x37_8_homewear',
					count: 1,
					selected: false,
				},
				{
					code: '29_3.5_7_kidsfootwear',
					count: 69,
					selected: false,
				},
				{
					code: '2_000_7_kidsfootwear',
					count: 20,
					selected: false,
				},
				{
					code: '3003_22x9_8_homewear',
					count: 1,
					selected: false,
				},
				{
					code: '3006_baby_8_homewear',
					count: 12,
					selected: false,
				},
				{
					code: '3013_12.5-13.5_7_kidsfootwear',
					count: 31,
					selected: false,
				},
				{
					code: '3141_pm (0-1m)_4_kidswear',
					count: 405,
					selected: false,
				},
				{
					code: '3142_nb (1-2m)_4_kidswear',
					count: 317,
					selected: false,
				},
				{
					code: '3143_3m (2-4m)_4_kidswear',
					count: 355,
					selected: false,
				},
				{
					code: '3144_6m (4-6m)_4_kidswear',
					count: 598,
					selected: false,
				},
				{
					code: '3145_9m (6-9m)_4_kidswear',
					count: 601,
					selected: false,
				},
				{
					code: '3146_12m (9-12m)_4_kidswear',
					count: 477,
					selected: false,
				},
				{
					code: '3147_18m (12-18m)_4_kidswear',
					count: 472,
					selected: false,
				},
				{
					code: '3148_2t (1½-2y)_4_kidswear',
					count: 1319,
					selected: false,
				},
				{
					code: '3149_3t (2-3y)_4_kidswear',
					count: 1031,
					selected: false,
				},
				{
					code: '3150_4t (3-4y)_4_kidswear',
					count: 1155,
					selected: false,
				},
				{
					code: '3151_5t (4-5y)_4_kidswear',
					count: 494,
					selected: false,
				},
				{
					code: '3152_6 (5-6y)_4_kidswear',
					count: 579,
					selected: false,
				},
				{
					code: '3153_6x (6-7y)_4_kidswear',
					count: 572,
					selected: false,
				},
				{
					code: '3154_7 (7-8y)_4_kidswear',
					count: 503,
					selected: false,
				},
				{
					code: '3155_8 (8-9y)_4_kidswear',
					count: 798,
					selected: false,
				},
				{
					code: '3156_10 (9-10y)_4_kidswear',
					count: 805,
					selected: false,
				},
				{
					code: '3157_12 (10-11y)_4_kidswear',
					count: 330,
					selected: false,
				},
				{
					code: '3158_14 (11-12y)_4_kidswear',
					count: 389,
					selected: false,
				},
				{
					code: '3159_16 (12-13y)_4_kidswear',
					count: 403,
					selected: false,
				},
				{
					code: '3160_18 (13-14y)_4_kidswear',
					count: 415,
					selected: false,
				},
				{
					code: '3161_20 (14y+)_4_kidswear',
					count: 935,
					selected: false,
				},
				{
					code: '3175_4t/6 (3-6y)_4_kidswear',
					count: 2,
					selected: false,
				},
				{
					code: '3176_6x/7 (6-8y)_4_kidswear',
					count: 640,
					selected: false,
				},
				{
					code: '3184_3-6m (2-6m)_4_kidswear',
					count: 61,
					selected: false,
				},
				{
					code: '3185_9-12m (6-12m)_4_kidswear',
					count: 92,
					selected: false,
				},
				{
					code: '3186_18m/2t (1-2y)_4_kidswear',
					count: 104,
					selected: false,
				},
				{
					code: '3187_3/4t (2-4y)_4_kidswear',
					count: 622,
					selected: false,
				},
				{
					code: '3188_5t/6 (4-6y)_4_kidswear',
					count: 667,
					selected: false,
				},
				{
					code: '3189_8/10 (8-10y)_4_kidswear',
					count: 997,
					selected: false,
				},
				{
					code: '3190_12/14 (10-12y)_4_kidswear',
					count: 529,
					selected: false,
				},
				{
					code: '3191_16/18 (12-14y)_4_kidswear',
					count: 576,
					selected: false,
				},
				{
					code: '3193_2/4t (1½-4y)_4_kidswear',
					count: 18,
					selected: false,
				},
				{
					code: '3194_5t/7 (4-8y)_4_kidswear',
					count: 15,
					selected: false,
				},
				{
					code: '3195_8/14 (8-12y)_4_kidswear',
					count: 22,
					selected: false,
				},
				{
					code: '3196_16/20 (12-14y+)_4_kidswear',
					count: 18,
					selected: false,
				},
				{
					code: '3199_2t/10 (1½-10y)_4_kidswear',
					count: 1,
					selected: false,
				},
				{
					code: '3201_4t/10 (3-10y)_4_kidswear',
					count: 2,
					selected: false,
				},
				{
					code: '3202_5t/10 (6-10y)_4_kidswear',
					count: 1,
					selected: false,
				},
				{
					code: '3203_8/20 (8-14y+)_4_kidswear',
					count: 6,
					selected: false,
				},
				{
					code: '3209_6m/3t (4m-3y)_4_kidswear',
					count: 3,
					selected: false,
				},
				{
					code: '3212_pm-nb (0-2m)_4_kidswear',
					count: 22,
					selected: false,
				},
				{
					code: '3222_4t/20 (3-14y+)_4_kidswear',
					count: 1,
					selected: false,
				},
				{
					code: '3225_4t/6x (3-7y)_4_kidswear',
					count: 51,
					selected: false,
				},
				{
					code: '3226_7/12 (8-11y)_4_kidswear',
					count: 76,
					selected: false,
				},
				{
					code: '3227_14/20 (12-14y+)_4_kidswear',
					count: 41,
					selected: false,
				},
				{
					code: '32_5.5_7_kidsfootwear',
					count: 31,
					selected: false,
				},
				{
					code: '34_6.5_7_kidsfootwear',
					count: 117,
					selected: false,
				},
				{
					code: '357_xxs_1_womenswear',
					count: 930,
					selected: false,
				},
				{
					code: '357_xxs_2_bras',
					count: 3,
					selected: false,
				},
				{
					code: '363_xs_1_womenswear',
					count: 2745,
					selected: false,
				},
				{
					code: '363_xs_2_bras',
					count: 26,
					selected: false,
				},
				{
					code: '363_xs_3_menswear',
					count: 895,
					selected: false,
				},
				{
					code: '366_s_1_womenswear',
					count: 2927,
					selected: false,
				},
				{
					code: '366_s_2_bras',
					count: 58,
					selected: false,
				},
				{
					code: '366_s_3_menswear',
					count: 979,
					selected: false,
				},
				{
					code: '369_m_1_womenswear',
					count: 2865,
					selected: false,
				},
				{
					code: '369_m_2_bras',
					count: 57,
					selected: false,
				},
				{
					code: '369_m_3_menswear',
					count: 1084,
					selected: false,
				},
				{
					code: '36_7.5_6_footwear',
					count: 96,
					selected: false,
				},
				{
					code: '36_7.5_7_kidsfootwear',
					count: 189,
					selected: false,
				},
				{
					code: '370_l_1_womenswear',
					count: 2888,
					selected: false,
				},
				{
					code: '370_l_2_bras',
					count: 81,
					selected: false,
				},
				{
					code: '370_l_3_menswear',
					count: 1071,
					selected: false,
				},
				{
					code: '372_xl_1_womenswear',
					count: 2866,
					selected: false,
				},
				{
					code: '372_xl_2_bras',
					count: 99,
					selected: false,
				},
				{
					code: '372_xl_3_menswear',
					count: 960,
					selected: false,
				},
				{
					code: '375_xxl_1_womenswear',
					count: 1955,
					selected: false,
				},
				{
					code: '375_xxl_2_bras',
					count: 48,
					selected: false,
				},
				{
					code: '375_xxl_3_menswear',
					count: 972,
					selected: false,
				},
				{
					code: '376_2xl_1_womenswear',
					count: 3,
					selected: false,
				},
				{
					code: '381_3xl_1_womenswear',
					count: 387,
					selected: false,
				},
				{
					code: '381_3xl_2_bras',
					count: 21,
					selected: false,
				},
				{
					code: '381_3xl_3_menswear',
					count: 1045,
					selected: false,
				},
				{
					code: '384_4xl_1_womenswear',
					count: 378,
					selected: false,
				},
				{
					code: '384_4xl_2_bras',
					count: 7,
					selected: false,
				},
				{
					code: '38_8.5_6_footwear',
					count: 95,
					selected: false,
				},
				{
					code: '38_8.5_7_kidsfootwear',
					count: 204,
					selected: false,
				},
				{
					code: '390_xs/p_1_womenswear',
					count: 3,
					selected: false,
				},
				{
					code: '391_s/p_1_womenswear',
					count: 6,
					selected: false,
				},
				{
					code: '392_m/p_1_womenswear',
					count: 6,
					selected: false,
				},
				{
					code: '393_l/p_1_womenswear',
					count: 3,
					selected: false,
				},
				{
					code: '39_9.5_7_kidsfootwear',
					count: 88,
					selected: false,
				},
				{
					code: '3_00_7_kidsfootwear',
					count: 4,
					selected: false,
				},
				{
					code: '40_10.5_6_footwear',
					count: 95,
					selected: false,
				},
				{
					code: '40_10.5_7_kidsfootwear',
					count: 66,
					selected: false,
				},
				{
					code: '41_11.5_6_footwear',
					count: 88,
					selected: false,
				},
				{
					code: '41_11.5_7_kidsfootwear',
					count: 66,
					selected: false,
				},
				{
					code: '42_12.5_7_kidsfootwear',
					count: 68,
					selected: false,
				},
				{
					code: '43_13.5_6_footwear',
					count: 29,
					selected: false,
				},
				{
					code: '43_13.5_7_kidsfootwear',
					count: 73,
					selected: false,
				},
				{
					code: '4_0_1_womenswear',
					count: 320,
					selected: false,
				},
				{
					code: '4_0_7_kidsfootwear',
					count: 29,
					selected: false,
				},
				{
					code: '516_xs/t_1_womenswear',
					count: 1,
					selected: false,
				},
				{
					code: '518_s/t_1_womenswear',
					count: 1,
					selected: false,
				},
				{
					code: '520_m/t_1_womenswear',
					count: 1,
					selected: false,
				},
				{
					code: '54_20_1_womenswear',
					count: 177,
					selected: false,
				},
				{
					code: '54_20_8_homewear',
					count: 2,
					selected: false,
				},
				{
					code: '59_22_1_womenswear',
					count: 35,
					selected: false,
				},
				{
					code: '5_1_7_kidsfootwear',
					count: 175,
					selected: false,
				},
				{
					code: '65_24_1_womenswear',
					count: 21,
					selected: false,
				},
				{
					code: '6_2_1_womenswear',
					count: 392,
					selected: false,
				},
				{
					code: '6_2_6_footwear',
					count: 1,
					selected: false,
				},
				{
					code: '6_2_7_kidsfootwear',
					count: 147,
					selected: false,
				},
				{
					code: '70_26_1_womenswear',
					count: 31,
					selected: false,
				},
				{
					code: '718_8x4_8_homewear',
					count: 3,
					selected: false,
				},
				{
					code: '719_8x8_8_homewear',
					count: 1,
					selected: false,
				},
				{
					code: '720_8x12_8_homewear',
					count: 4,
					selected: false,
				},
				{
					code: '726_10x10_4_kidswear',
					count: 1,
					selected: false,
				},
				{
					code: '726_10x10_8_homewear',
					count: 1,
					selected: false,
				},
				{
					code: '730_11x5_8_homewear',
					count: 1,
					selected: false,
				},
				{
					code: '733_12x12_8_homewear',
					count: 2,
					selected: false,
				},
				{
					code: '735_12x16_8_homewear',
					count: 5,
					selected: false,
				},
				{
					code: '737_12x20_8_homewear',
					count: 26,
					selected: false,
				},
				{
					code: '738_13x13_8_homewear',
					count: 3,
					selected: false,
				},
				{
					code: '739_13x17_8_homewear',
					count: 1,
					selected: false,
				},
				{
					code: '740_13x18_8_homewear',
					count: 2,
					selected: false,
				},
				{
					code: '741_13x19_8_homewear',
					count: 1,
					selected: false,
				},
				{
					code: '743_14x19_8_homewear',
					count: 4,
					selected: false,
				},
				{
					code: '745_14x22_4_kidswear',
					count: 1,
					selected: false,
				},
				{
					code: '747_15x15_8_homewear',
					count: 12,
					selected: false,
				},
				{
					code: '750_16x16_8_homewear',
					count: 28,
					selected: false,
				},
				{
					code: '751_16x24_8_homewear',
					count: 26,
					selected: false,
				},
				{
					code: '758_18x18_8_homewear',
					count: 8,
					selected: false,
				},
				{
					code: '759_18x24_8_homewear',
					count: 5,
					selected: false,
				},
				{
					code: '760_18x26_8_homewear',
					count: 6,
					selected: false,
				},
				{
					code: '765_18x59_8_homewear',
					count: 3,
					selected: false,
				},
				{
					code: '768_20x20_1_womenswear',
					count: 2,
					selected: false,
				},
				{
					code: '768_20x20_8_homewear',
					count: 59,
					selected: false,
				},
				{
					code: '769_20x26_8_homewear',
					count: 15,
					selected: false,
				},
				{
					code: '76_28_5_waist',
					count: 117,
					selected: false,
				},
				{
					code: '770_20x28_8_homewear',
					count: 50,
					selected: false,
				},
				{
					code: '772_20x31_8_homewear',
					count: 3,
					selected: false,
				},
				{
					code: '793_24x24_8_homewear',
					count: 5,
					selected: false,
				},
				{
					code: '796_24x35_8_homewear',
					count: 6,
					selected: false,
				},
				{
					code: '797_24x49_8_homewear',
					count: 3,
					selected: false,
				},
				{
					code: '798_24x51_8_homewear',
					count: 7,
					selected: false,
				},
				{
					code: '799_25x12_8_homewear',
					count: 1,
					selected: false,
				},
				{
					code: '79_29_5_waist',
					count: 108,
					selected: false,
				},
				{
					code: '7_3_6_footwear',
					count: 1,
					selected: false,
				},
				{
					code: '7_3_7_kidsfootwear',
					count: 63,
					selected: false,
				},
				{
					code: '810_28x28_8_homewear',
					count: 4,
					selected: false,
				},
				{
					code: '815_28x51_8_homewear',
					count: 2,
					selected: false,
				},
				{
					code: '817_28x55_8_homewear',
					count: 44,
					selected: false,
				},
				{
					code: '819_28x79_8_homewear',
					count: 5,
					selected: false,
				},
				{
					code: '825_30x30_1_womenswear',
					count: 2,
					selected: false,
				},
				{
					code: '826_30x31_8_homewear',
					count: 2,
					selected: false,
				},
				{
					code: '829_30x39_8_homewear',
					count: 1,
					selected: false,
				},
				{
					code: '82_30_5_waist',
					count: 128,
					selected: false,
				},
				{
					code: '839_31x31_8_homewear',
					count: 5,
					selected: false,
				},
				{
					code: '841_31x34_8_homewear',
					count: 3,
					selected: false,
				},
				{
					code: '843_31x55_8_homewear',
					count: 7,
					selected: false,
				},
				{
					code: '844_31x65_8_homewear',
					count: 10,
					selected: false,
				},
				{
					code: '859_35x35_8_homewear',
					count: 16,
					selected: false,
				},
				{
					code: '85_31_5_waist',
					count: 125,
					selected: false,
				},
				{
					code: '864_35x51_8_homewear',
					count: 7,
					selected: false,
				},
				{
					code: '872_39x39_1_womenswear',
					count: 1,
					selected: false,
				},
				{
					code: '873_39x59_8_homewear',
					count: 30,
					selected: false,
				},
				{
					code: '88_32_5_waist',
					count: 134,
					selected: false,
				},
				{
					code: '8_4_1_womenswear',
					count: 427,
					selected: false,
				},
				{
					code: '8_4_6_footwear',
					count: 161,
					selected: false,
				},
				{
					code: '8_4_7_kidsfootwear',
					count: 119,
					selected: false,
				},
				{
					code: '900_47x24_8_homewear',
					count: 1,
					selected: false,
				},
				{
					code: '903_47x98_8_homewear',
					count: 21,
					selected: false,
				},
				{
					code: '918_51x67_8_homewear',
					count: 19,
					selected: false,
				},
				{
					code: '91_33_5_waist',
					count: 128,
					selected: false,
				},
				{
					code: '926_55x27_8_homewear',
					count: 1,
					selected: false,
				},
				{
					code: '932_55x71_8_homewear',
					count: 9,
					selected: false,
				},
				{
					code: '933_55x79_8_homewear',
					count: 8,
					selected: false,
				},
				{
					code: '934_55x94_8_homewear',
					count: 17,
					selected: false,
				},
				{
					code: '935_55x126_8_homewear',
					count: 16,
					selected: false,
				},
				{
					code: '946_59x118_8_homewear',
					count: 9,
					selected: false,
				},
				{
					code: '94_34_5_waist',
					count: 130,
					selected: false,
				},
				{
					code: '988_71x79_8_homewear',
					count: 10,
					selected: false,
				},
				{
					code: '993_75x75_8_homewear',
					count: 3,
					selected: false,
				},
				{
					code: '9_5_6_footwear',
					count: 148,
					selected: false,
				},
				{
					code: '9_5_7_kidsfootwear',
					count: 57,
					selected: false,
				},
			],
		},
		{
			code: 'sale',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'false',
					count: 13356,
					selected: false,
				},
				{
					code: 'true',
					count: 2086,
					selected: false,
				},
			],
		},
		{
			code: 'colorWithNames',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'beige_f5f5dc',
					count: 2391,
					selected: false,
				},
				{
					code: 'black_000000',
					count: 3163,
					selected: false,
				},
				{
					code: 'blue_0000ff',
					count: 2385,
					selected: false,
				},
				{
					code: 'bronze_cd7f32',
					count: 11,
					selected: false,
				},
				{
					code: 'brown_a52a2a',
					count: 620,
					selected: false,
				},
				{
					code: 'gold-colored_ffd700',
					count: 176,
					selected: false,
				},
				{
					code: 'gray_808080',
					count: 1796,
					selected: false,
				},
				{
					code: 'green_008000',
					count: 1489,
					selected: false,
				},
				{
					code: 'multi_000000',
					count: 4963,
					selected: false,
				},
				{
					code: 'orange_ffa500',
					count: 485,
					selected: false,
				},
				{
					code: 'pink_ffc0cb',
					count: 1560,
					selected: false,
				},
				{
					code: 'purple_800080',
					count: 617,
					selected: false,
				},
				{
					code: 'red_ff0000',
					count: 390,
					selected: false,
				},
				{
					code: 'silver-colored_c0c0c0',
					count: 131,
					selected: false,
				},
				{
					code: 'transparent_ffffff',
					count: 56,
					selected: false,
				},
				{
					code: 'turquoise_40e0d0',
					count: 413,
					selected: false,
				},
				{
					code: 'white_ffffff',
					count: 2538,
					selected: false,
				},
				{
					code: 'yellow_ffff00',
					count: 494,
					selected: false,
				},
			],
		},
		{
			code: 'brandNames',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'Chronicle Books',
					count: 1,
					selected: false,
				},
				{
					code: 'H&M',
					count: 15438,
					selected: false,
				},
				{
					code: 'Kunskapstavlan®',
					count: 2,
					selected: false,
				},
			],
		},
		{
			code: 'clothingStyles',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'A-line',
					count: 135,
					selected: false,
				},
				{
					code: 'Ankle Socks',
					count: 59,
					selected: false,
				},
				{
					code: 'Anorak',
					count: 10,
					selected: false,
				},
				{
					code: 'Babydoll',
					count: 7,
					selected: false,
				},
				{
					code: 'Balconette Bra',
					count: 15,
					selected: false,
				},
				{
					code: 'Bandeau',
					count: 31,
					selected: false,
				},
				{
					code: 'Baseball Jacket',
					count: 41,
					selected: false,
				},
				{
					code: 'Bermuda Shorts',
					count: 18,
					selected: false,
				},
				{
					code: 'Biker',
					count: 21,
					selected: false,
				},
				{
					code: 'Bikini',
					count: 13,
					selected: false,
				},
				{
					code: 'Blazer',
					count: 24,
					selected: false,
				},
				{
					code: 'Blazer Dress',
					count: 3,
					selected: false,
				},
				{
					code: 'Bodycon',
					count: 100,
					selected: false,
				},
				{
					code: 'Bomber Jacket',
					count: 34,
					selected: false,
				},
				{
					code: 'Bootcut',
					count: 9,
					selected: false,
				},
				{
					code: 'Boxer Shorts',
					count: 53,
					selected: false,
				},
				{
					code: 'Boxers',
					count: 62,
					selected: false,
				},
				{
					code: 'Boyfriend',
					count: 12,
					selected: false,
				},
				{
					code: 'Bralette',
					count: 52,
					selected: false,
				},
				{
					code: 'Brazilian',
					count: 117,
					selected: false,
				},
				{
					code: 'Camisole Top',
					count: 140,
					selected: false,
				},
				{
					code: 'Cape Coat',
					count: 5,
					selected: false,
				},
				{
					code: 'Capri Pants',
					count: 2,
					selected: false,
				},
				{
					code: 'Car Coat',
					count: 11,
					selected: false,
				},
				{
					code: 'Cargo',
					count: 152,
					selected: false,
				},
				{
					code: 'Chinos',
					count: 75,
					selected: false,
				},
				{
					code: 'Circular',
					count: 3,
					selected: false,
				},
				{
					code: 'Clamdiggers',
					count: 1,
					selected: false,
				},
				{
					code: 'Coach Jacket',
					count: 2,
					selected: false,
				},
				{
					code: 'Corset Top',
					count: 2,
					selected: false,
				},
				{
					code: 'Crop Top',
					count: 322,
					selected: false,
				},
				{
					code: 'Culottes',
					count: 5,
					selected: false,
				},
				{
					code: 'Cut-out',
					count: 190,
					selected: false,
				},
				{
					code: 'Cycling Shorts',
					count: 119,
					selected: false,
				},
				{
					code: 'Draped',
					count: 94,
					selected: false,
				},
				{
					code: 'Flared',
					count: 175,
					selected: false,
				},
				{
					code: 'Harrington Jacket',
					count: 1,
					selected: false,
				},
				{
					code: 'Henley Shirt',
					count: 20,
					selected: false,
				},
				{
					code: 'High Leg',
					count: 29,
					selected: false,
				},
				{
					code: 'Hipster',
					count: 38,
					selected: false,
				},
				{
					code: 'Hooded jacket',
					count: 124,
					selected: false,
				},
				{
					code: 'Hoodie',
					count: 293,
					selected: false,
				},
				{
					code: 'Hotpants',
					count: 9,
					selected: false,
				},
				{
					code: 'Jazz Pants',
					count: 18,
					selected: false,
				},
				{
					code: 'Jeggings',
					count: 41,
					selected: false,
				},
				{
					code: 'Joggers',
					count: 474,
					selected: false,
				},
				{
					code: 'Jumper',
					count: 4,
					selected: false,
				},
				{
					code: 'Keyhole',
					count: 99,
					selected: false,
				},
				{
					code: 'Knee-high Socks',
					count: 3,
					selected: false,
				},
				{
					code: 'Lumber Jacket',
					count: 3,
					selected: false,
				},
				{
					code: 'Mom',
					count: 41,
					selected: false,
				},
				{
					code: 'Non-padded Bra',
					count: 12,
					selected: false,
				},
				{
					code: 'Off-the-shoulder',
					count: 42,
					selected: false,
				},
				{
					code: 'One-shoulder',
					count: 42,
					selected: false,
				},
				{
					code: 'Open Back',
					count: 71,
					selected: false,
				},
				{
					code: 'Open Shoulder',
					count: 1,
					selected: false,
				},
				{
					code: 'Overall Dress',
					count: 21,
					selected: false,
				},
				{
					code: 'Overall Shorts',
					count: 23,
					selected: false,
				},
				{
					code: 'Overalls',
					count: 41,
					selected: false,
				},
				{
					code: 'Overshirt',
					count: 43,
					selected: false,
				},
				{
					code: 'Padded Bra',
					count: 163,
					selected: false,
				},
				{
					code: 'Paper-bag',
					count: 38,
					selected: false,
				},
				{
					code: 'Parka',
					count: 18,
					selected: false,
				},
				{
					code: 'Pea Coat',
					count: 1,
					selected: false,
				},
				{
					code: 'Pencil Dress',
					count: 2,
					selected: false,
				},
				{
					code: 'Pencil Skirt',
					count: 2,
					selected: false,
				},
				{
					code: 'Peplum',
					count: 12,
					selected: false,
				},
				{
					code: 'Plunge Back',
					count: 96,
					selected: false,
				},
				{
					code: 'Polo shirt',
					count: 95,
					selected: false,
				},
				{
					code: 'Puffer',
					count: 49,
					selected: false,
				},
				{
					code: 'Pull-on Pants',
					count: 58,
					selected: false,
				},
				{
					code: 'Push-up Bra',
					count: 74,
					selected: false,
				},
				{
					code: 'Racer back',
					count: 76,
					selected: false,
				},
				{
					code: 'Rugby Shirt',
					count: 26,
					selected: false,
				},
				{
					code: 'Shirt Dress',
					count: 103,
					selected: false,
				},
				{
					code: 'Shirt Jacket',
					count: 50,
					selected: false,
				},
				{
					code: 'Shortie',
					count: 22,
					selected: false,
				},
				{
					code: 'Skater',
					count: 9,
					selected: false,
				},
				{
					code: 'Skort',
					count: 2,
					selected: false,
				},
				{
					code: 'Slacks',
					count: 20,
					selected: false,
				},
				{
					code: 'Slip Dress',
					count: 37,
					selected: false,
				},
				{
					code: 'Slit',
					count: 169,
					selected: false,
				},
				{
					code: 'Smocking',
					count: 207,
					selected: false,
				},
				{
					code: 'Sneaker socks',
					count: 11,
					selected: false,
				},
				{
					code: 'Soft-cup Bra',
					count: 183,
					selected: false,
				},
				{
					code: 'Sports Bra',
					count: 32,
					selected: false,
				},
				{
					code: 'Straight Leg',
					count: 239,
					selected: false,
				},
				{
					code: 'Strapless',
					count: 5,
					selected: false,
				},
				{
					code: 'Strapless Bra',
					count: 3,
					selected: false,
				},
				{
					code: 'Strappy Dress',
					count: 206,
					selected: false,
				},
				{
					code: 'Suit Pants',
					count: 31,
					selected: false,
				},
				{
					code: 'Super Push-up Bra',
					count: 38,
					selected: false,
				},
				{
					code: 'Suspender Skirt',
					count: 1,
					selected: false,
				},
				{
					code: 'Sweater Dress',
					count: 15,
					selected: false,
				},
				{
					code: 'Sweater Vest',
					count: 43,
					selected: false,
				},
				{
					code: 'Sweatpants',
					count: 48,
					selected: false,
				},
				{
					code: 'Sweatshirt',
					count: 347,
					selected: false,
				},
				{
					code: 'Sweatshorts',
					count: 263,
					selected: false,
				},
				{
					code: 'T-shirt Dress',
					count: 38,
					selected: false,
				},
				{
					code: 'Tank Top',
					count: 177,
					selected: false,
				},
				{
					code: 'Tapered',
					count: 174,
					selected: false,
				},
				{
					code: 'Thong',
					count: 82,
					selected: false,
				},
				{
					code: 'Trashed',
					count: 66,
					selected: false,
				},
				{
					code: 'Treggings',
					count: 10,
					selected: false,
				},
				{
					code: 'Trenchcoat',
					count: 6,
					selected: false,
				},
				{
					code: 'Triangle Bra',
					count: 28,
					selected: false,
				},
				{
					code: 'Trucker Jacket',
					count: 24,
					selected: false,
				},
				{
					code: 'Tube Top',
					count: 14,
					selected: false,
				},
				{
					code: 'Tutu Skirt',
					count: 3,
					selected: false,
				},
				{
					code: 'Underwire Bra',
					count: 61,
					selected: false,
				},
				{
					code: 'Unitard',
					count: 7,
					selected: false,
				},
				{
					code: 'Wide-cut',
					count: 206,
					selected: false,
				},
				{
					code: 'Windbreaker',
					count: 25,
					selected: false,
				},
				{
					code: 'Wrapover',
					count: 159,
					selected: false,
				},
			],
		},
		{
			code: 'accessoriesStyles',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'Backpack',
					count: 24,
					selected: false,
				},
				{
					code: 'Baseball Cap',
					count: 33,
					selected: false,
				},
				{
					code: 'Belt Bag',
					count: 2,
					selected: false,
				},
				{
					code: 'Bonnet',
					count: 3,
					selected: false,
				},
				{
					code: 'Bucket hat',
					count: 67,
					selected: false,
				},
				{
					code: 'Cell phone bag',
					count: 1,
					selected: false,
				},
				{
					code: 'Chain Bracelet',
					count: 6,
					selected: false,
				},
				{
					code: 'Chain Necklace',
					count: 8,
					selected: false,
				},
				{
					code: 'Charm Bracelet',
					count: 2,
					selected: false,
				},
				{
					code: 'Crossbody Bag',
					count: 10,
					selected: false,
				},
				{
					code: 'Dangle Earrings',
					count: 8,
					selected: false,
				},
				{
					code: 'Drawstring Bag',
					count: 2,
					selected: false,
				},
				{
					code: 'Drop Earrings',
					count: 1,
					selected: false,
				},
				{
					code: 'Ear Cuff',
					count: 8,
					selected: false,
				},
				{
					code: 'Earflap Cap',
					count: 2,
					selected: false,
				},
				{
					code: 'Fedora hat',
					count: 4,
					selected: false,
				},
				{
					code: 'Handbag',
					count: 9,
					selected: false,
				},
				{
					code: 'Hoop Earrings',
					count: 19,
					selected: false,
				},
				{
					code: 'Laptop Bag',
					count: 2,
					selected: false,
				},
				{
					code: 'Layered Necklace',
					count: 27,
					selected: false,
				},
				{
					code: 'Multi Strand Bracelet',
					count: 2,
					selected: false,
				},
				{
					code: 'Pendant Necklace',
					count: 22,
					selected: false,
				},
				{
					code: 'Pouch',
					count: 3,
					selected: false,
				},
				{
					code: 'Roll-top backpack',
					count: 1,
					selected: false,
				},
				{
					code: 'Rope Belt',
					count: 2,
					selected: false,
				},
				{
					code: 'Satchel',
					count: 1,
					selected: false,
				},
				{
					code: 'Scrunchie',
					count: 20,
					selected: false,
				},
				{
					code: 'Shopper',
					count: 20,
					selected: false,
				},
				{
					code: 'Shoulder Bag',
					count: 31,
					selected: false,
				},
				{
					code: 'Sports bag',
					count: 1,
					selected: false,
				},
				{
					code: 'Stroller Mittens',
					count: 1,
					selected: false,
				},
				{
					code: 'Stud Earrings',
					count: 8,
					selected: false,
				},
				{
					code: 'Sun hat',
					count: 24,
					selected: false,
				},
				{
					code: 'Tennis Bracelet',
					count: 1,
					selected: false,
				},
				{
					code: 'Trapper Hat',
					count: 2,
					selected: false,
				},
				{
					code: 'Trucker Cap',
					count: 7,
					selected: false,
				},
				{
					code: 'Tube Scarf',
					count: 12,
					selected: false,
				},
				{
					code: 'Weekend Bag',
					count: 6,
					selected: false,
				},
				{
					code: 'beach bag',
					count: 1,
					selected: false,
				},
			],
		},
		{
			code: 'necklineStyles',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'Boat Neck',
					count: 18,
					selected: false,
				},
				{
					code: 'Cowl Neck',
					count: 10,
					selected: false,
				},
				{
					code: 'Crew-neck',
					count: 79,
					selected: false,
				},
				{
					code: 'Halterneck',
					count: 205,
					selected: false,
				},
				{
					code: 'Low-cut Neckline',
					count: 128,
					selected: false,
				},
				{
					code: 'Mock Turtleneck',
					count: 26,
					selected: false,
				},
				{
					code: 'Round Neck',
					count: 2774,
					selected: false,
				},
				{
					code: 'Square Neckline',
					count: 172,
					selected: false,
				},
				{
					code: 'Sweetheart Neckline',
					count: 91,
					selected: false,
				},
				{
					code: 'Turtleneck',
					count: 61,
					selected: false,
				},
				{
					code: 'V-neck',
					count: 854,
					selected: false,
				},
			],
		},
		{
			code: 'collarStyles',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'Band Collar',
					count: 24,
					selected: false,
				},
				{
					code: 'Button-down Collar',
					count: 26,
					selected: false,
				},
				{
					code: 'Chimney Collar',
					count: 4,
					selected: false,
				},
				{
					code: 'Cutaway Collar',
					count: 16,
					selected: false,
				},
				{
					code: 'Henley Collar',
					count: 21,
					selected: false,
				},
				{
					code: 'High Collar',
					count: 44,
					selected: false,
				},
				{
					code: 'Johnny Collar',
					count: 41,
					selected: false,
				},
				{
					code: 'Peter Pan Collar',
					count: 6,
					selected: false,
				},
				{
					code: 'Resort Collar',
					count: 46,
					selected: false,
				},
				{
					code: 'Rounded Collar',
					count: 12,
					selected: false,
				},
				{
					code: 'Ruffled collar',
					count: 28,
					selected: false,
				},
				{
					code: 'Sailor Collar',
					count: 4,
					selected: false,
				},
				{
					code: 'Shawl Collar',
					count: 9,
					selected: false,
				},
				{
					code: 'Stand-up Collar',
					count: 353,
					selected: false,
				},
				{
					code: 'Turn-down Collar',
					count: 405,
					selected: false,
				},
			],
		},
		{
			code: 'footwearStyles',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'Ankle Boots',
					count: 8,
					selected: false,
				},
				{
					code: 'Ballet Flats',
					count: 14,
					selected: false,
				},
				{
					code: 'Boots',
					count: 71,
					selected: false,
				},
				{
					code: 'Chelsea Boots',
					count: 18,
					selected: false,
				},
				{
					code: 'Combat Boots',
					count: 11,
					selected: false,
				},
				{
					code: 'Dance shoes',
					count: 4,
					selected: false,
				},
				{
					code: 'Deck Shoes',
					count: 2,
					selected: false,
				},
				{
					code: 'Derby Shoes',
					count: 4,
					selected: false,
				},
				{
					code: 'Driving Shoes',
					count: 1,
					selected: false,
				},
				{
					code: 'Espadrilles',
					count: 19,
					selected: false,
				},
				{
					code: 'Flatform',
					count: 7,
					selected: false,
				},
				{
					code: 'Flip-flops',
					count: 3,
					selected: false,
				},
				{
					code: 'Heeled ankle boots',
					count: 3,
					selected: false,
				},
				{
					code: 'Heeled sandals',
					count: 25,
					selected: false,
				},
				{
					code: 'Loafers',
					count: 16,
					selected: false,
				},
				{
					code: 'Mules',
					count: 41,
					selected: false,
				},
				{
					code: 'Oxford Shoes',
					count: 1,
					selected: false,
				},
				{
					code: 'Platform',
					count: 8,
					selected: false,
				},
				{
					code: 'Pumps',
					count: 2,
					selected: false,
				},
				{
					code: 'Rubber Boots',
					count: 8,
					selected: false,
				},
				{
					code: 'Sandals',
					count: 77,
					selected: false,
				},
				{
					code: 'Slides',
					count: 33,
					selected: false,
				},
				{
					code: 'Slingbacks',
					count: 3,
					selected: false,
				},
				{
					code: 'Slip-on',
					count: 26,
					selected: false,
				},
				{
					code: 'Sneaker Boots',
					count: 7,
					selected: false,
				},
				{
					code: 'Sneakers',
					count: 125,
					selected: false,
				},
				{
					code: 'Snow Boots',
					count: 3,
					selected: false,
				},
				{
					code: 'Strappy Sandals',
					count: 48,
					selected: false,
				},
				{
					code: 'Water shoes',
					count: 1,
					selected: false,
				},
			],
		},
		{
			code: 'sleeveStyles',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'Balloon Sleeve',
					count: 93,
					selected: false,
				},
				{
					code: 'Batwing sleeve',
					count: 3,
					selected: false,
				},
				{
					code: 'Butterfly Sleeve',
					count: 16,
					selected: false,
				},
				{
					code: 'Cap sleeve',
					count: 29,
					selected: false,
				},
				{
					code: 'Dolman Sleeve',
					count: 4,
					selected: false,
				},
				{
					code: 'Flutter sleeve',
					count: 62,
					selected: false,
				},
				{
					code: 'Puff Sleeve',
					count: 120,
					selected: false,
				},
				{
					code: 'Raglan Sleeve',
					count: 268,
					selected: false,
				},
				{
					code: 'Trumpet Sleeve',
					count: 4,
					selected: false,
				},
			],
		},
		{
			code: 'garmentLengths',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: '3/4-length',
					count: 24,
					selected: false,
				},
				{
					code: 'Ankle-length',
					count: 251,
					selected: false,
				},
				{
					code: 'Crop',
					count: 573,
					selected: false,
				},
				{
					code: 'Extra-long legs',
					count: 8,
					selected: false,
				},
				{
					code: 'Knee-length',
					count: 615,
					selected: false,
				},
				{
					code: 'Long',
					count: 2323,
					selected: false,
				},
				{
					code: 'Maxi',
					count: 1,
					selected: false,
				},
				{
					code: 'Midi',
					count: 479,
					selected: false,
				},
				{
					code: 'Mini',
					count: 10,
					selected: false,
				},
				{
					code: 'Regular length',
					count: 3142,
					selected: false,
				},
				{
					code: 'Short',
					count: 2520,
					selected: false,
				},
			],
		},
		{
			code: 'sleeveLengths',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: '3/4 sleeve',
					count: 74,
					selected: false,
				},
				{
					code: 'Extra-long sleeve',
					count: 42,
					selected: false,
				},
				{
					code: 'Long sleeve',
					count: 3205,
					selected: false,
				},
				{
					code: 'Short sleeve',
					count: 2004,
					selected: false,
				},
				{
					code: 'Sleeveless',
					count: 1776,
					selected: false,
				},
			],
		},
		{
			code: 'heelHeights',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'High heel',
					count: 69,
					selected: false,
				},
				{
					code: 'Low heel',
					count: 32,
					selected: false,
				},
				{
					code: 'No heel',
					count: 396,
					selected: false,
				},
			],
		},
		{
			code: 'waistRises',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'High waist',
					count: 1014,
					selected: false,
				},
				{
					code: 'Low waist',
					count: 250,
					selected: false,
				},
				{
					code: 'Regular waist',
					count: 2676,
					selected: false,
				},
				{
					code: 'Ultra high waist',
					count: 48,
					selected: false,
				},
			],
		},
		{
			code: 'patterns',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'argyle-patterned',
					count: 13,
					selected: false,
				},
				{
					code: 'checked',
					count: 238,
					selected: false,
				},
				{
					code: 'color-block',
					count: 246,
					selected: false,
				},
				{
					code: 'crocodile-patterned',
					count: 2,
					selected: false,
				},
				{
					code: 'dotted',
					count: 188,
					selected: false,
				},
				{
					code: 'floral',
					count: 467,
					selected: false,
				},
				{
					code: 'harlequin-patterned',
					count: 2,
					selected: false,
				},
				{
					code: 'herringbone-patterned',
					count: 1,
					selected: false,
				},
				{
					code: 'houndstooth',
					count: 13,
					selected: false,
				},
				{
					code: 'leopard-print',
					count: 103,
					selected: false,
				},
				{
					code: 'marbled',
					count: 32,
					selected: false,
				},
				{
					code: 'paisley-patterned',
					count: 15,
					selected: false,
				},
				{
					code: 'patterned',
					count: 1401,
					selected: false,
				},
				{
					code: 'pinstriped',
					count: 11,
					selected: false,
				},
				{
					code: 'rainbow-striped',
					count: 8,
					selected: false,
				},
				{
					code: 'snakeskin-patterned',
					count: 1,
					selected: false,
				},
				{
					code: 'solid-color',
					count: 9434,
					selected: false,
				},
				{
					code: 'striped',
					count: 505,
					selected: false,
				},
				{
					code: 'tiger-striped',
					count: 2,
					selected: false,
				},
				{
					code: 'tortoiseshell-patterned',
					count: 4,
					selected: false,
				},
				{
					code: 'zebra-print',
					count: 49,
					selected: false,
				},
				{
					code: 'zigzag-patterned',
					count: 3,
					selected: false,
				},
			],
		},
		{
			code: 'occasions',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: '4th of july',
					count: 32,
					selected: false,
				},
				{
					code: 'carnival',
					count: 16,
					selected: false,
				},
				{
					code: 'chinese new year',
					count: 14,
					selected: false,
				},
				{
					code: 'christmas',
					count: 87,
					selected: false,
				},
				{
					code: 'easter',
					count: 5,
					selected: false,
				},
				{
					code: 'eid al-fitr',
					count: 5,
					selected: false,
				},
				{
					code: 'halloween',
					count: 21,
					selected: false,
				},
				{
					code: "new year's eve",
					count: 26,
					selected: false,
				},
				{
					code: 'ramadan',
					count: 1,
					selected: false,
				},
				{
					code: 'ugly christmas sweater day',
					count: 6,
					selected: false,
				},
				{
					code: "valentine's day",
					count: 11,
					selected: false,
				},
			],
		},
		{
			code: 'trendings',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'animal pattern',
					count: 172,
					selected: false,
				},
				{
					code: 'bohemian',
					count: 42,
					selected: false,
				},
				{
					code: 'chunky',
					count: 55,
					selected: false,
				},
				{
					code: 'crocheted',
					count: 109,
					selected: false,
				},
				{
					code: 'embroidered',
					count: 380,
					selected: false,
				},
				{
					code: 'faux fur',
					count: 72,
					selected: false,
				},
				{
					code: 'fishnet',
					count: 2,
					selected: false,
				},
				{
					code: 'floral',
					count: 523,
					selected: false,
				},
				{
					code: 'fringe',
					count: 41,
					selected: false,
				},
				{
					code: 'glitter',
					count: 257,
					selected: false,
				},
				{
					code: 'glow-in-the-dark',
					count: 5,
					selected: false,
				},
				{
					code: 'graphic',
					count: 56,
					selected: false,
				},
				{
					code: 'grunge',
					count: 15,
					selected: false,
				},
				{
					code: 'holographic',
					count: 22,
					selected: false,
				},
				{
					code: 'lace',
					count: 276,
					selected: false,
				},
				{
					code: 'leather',
					count: 44,
					selected: false,
				},
				{
					code: 'metallic',
					count: 134,
					selected: false,
				},
				{
					code: 'neon',
					count: 97,
					selected: false,
				},
				{
					code: 'ombre',
					count: 36,
					selected: false,
				},
				{
					code: 'pastel colors',
					count: 1394,
					selected: false,
				},
				{
					code: 'patent',
					count: 18,
					selected: false,
				},
				{
					code: 'pleated',
					count: 54,
					selected: false,
				},
				{
					code: 'pompoms',
					count: 26,
					selected: false,
				},
				{
					code: 'print',
					count: 2771,
					selected: false,
				},
				{
					code: 'quilted',
					count: 159,
					selected: false,
				},
				{
					code: 'reversible sequins',
					count: 17,
					selected: false,
				},
				{
					code: 'rhinestones',
					count: 57,
					selected: false,
				},
				{
					code: 'ruffle',
					count: 491,
					selected: false,
				},
				{
					code: 'sequin',
					count: 40,
					selected: false,
				},
				{
					code: 'sheer',
					count: 41,
					selected: false,
				},
				{
					code: 'studs',
					count: 6,
					selected: false,
				},
				{
					code: 'suede',
					count: 5,
					selected: false,
				},
				{
					code: 'tie-dye',
					count: 223,
					selected: false,
				},
				{
					code: 'utility',
					count: 170,
					selected: false,
				},
				{
					code: 'velvet',
					count: 83,
					selected: false,
				},
				{
					code: 'y2k',
					count: 424,
					selected: false,
				},
			],
		},
		{
			code: 'licenseItems',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: '101 dalmatians',
					count: 1,
					selected: false,
				},
				{
					code: 'ac/dc',
					count: 4,
					selected: false,
				},
				{
					code: 'animal crossing',
					count: 1,
					selected: false,
				},
				{
					code: 'ariana grande',
					count: 2,
					selected: false,
				},
				{
					code: 'aristocats',
					count: 1,
					selected: false,
				},
				{
					code: 'bambi',
					count: 12,
					selected: false,
				},
				{
					code: 'batman',
					count: 8,
					selected: false,
				},
				{
					code: 'batman and superman',
					count: 1,
					selected: false,
				},
				{
					code: 'bella poarch',
					count: 4,
					selected: false,
				},
				{
					code: 'billie eilish',
					count: 1,
					selected: false,
				},
				{
					code: 'black panther',
					count: 11,
					selected: false,
				},
				{
					code: 'blackpink',
					count: 9,
					selected: false,
				},
				{
					code: 'blondie',
					count: 1,
					selected: false,
				},
				{
					code: 'captain america',
					count: 1,
					selected: false,
				},
				{
					code: 'care bears',
					count: 9,
					selected: false,
				},
				{
					code: "chip 'n' dale",
					count: 4,
					selected: false,
				},
				{
					code: 'coca-cola',
					count: 12,
					selected: false,
				},
				{
					code: 'dc comics',
					count: 1,
					selected: false,
				},
				{
					code: 'despicable me',
					count: 1,
					selected: false,
				},
				{
					code: 'disney logo',
					count: 1,
					selected: false,
				},
				{
					code: 'disney princesses',
					count: 9,
					selected: false,
				},
				{
					code: 'donald duck',
					count: 3,
					selected: false,
				},
				{
					code: 'dua lipa',
					count: 3,
					selected: false,
				},
				{
					code: 'e.t.',
					count: 2,
					selected: false,
				},
				{
					code: 'ed sheeran',
					count: 2,
					selected: false,
				},
				{
					code: 'fanta',
					count: 4,
					selected: false,
				},
				{
					code: 'fortnite',
					count: 5,
					selected: false,
				},
				{
					code: 'friends',
					count: 4,
					selected: false,
				},
				{
					code: 'frost',
					count: 39,
					selected: false,
				},
				{
					code: 'garfield',
					count: 8,
					selected: false,
				},
				{
					code: 'grateful dead',
					count: 6,
					selected: false,
				},
				{
					code: 'green day',
					count: 1,
					selected: false,
				},
				{
					code: "guns n' roses",
					count: 1,
					selected: false,
				},
				{
					code: 'harry potter',
					count: 39,
					selected: false,
				},
				{
					code: 'harvard university',
					count: 11,
					selected: false,
				},
				{
					code: 'hello kitty',
					count: 1,
					selected: false,
				},
				{
					code: 'hot wheels',
					count: 3,
					selected: false,
				},
				{
					code: 'jaws',
					count: 1,
					selected: false,
				},
				{
					code: 'joy division',
					count: 1,
					selected: false,
				},
				{
					code: 'jurassic world',
					count: 8,
					selected: false,
				},
				{
					code: 'keith haring',
					count: 13,
					selected: false,
				},
				{
					code: 'lady and the tramp',
					count: 2,
					selected: false,
				},
				{
					code: 'led zeppelin',
					count: 1,
					selected: false,
				},
				{
					code: 'lego ninjago',
					count: 19,
					selected: false,
				},
				{
					code: 'lightyear',
					count: 2,
					selected: false,
				},
				{
					code: 'looney tunes',
					count: 14,
					selected: false,
				},
				{
					code: 'marvel comics',
					count: 17,
					selected: false,
				},
				{
					code: 'metallica',
					count: 4,
					selected: false,
				},
				{
					code: 'mickey mouse',
					count: 56,
					selected: false,
				},
				{
					code: 'minnie mouse',
					count: 46,
					selected: false,
				},
				{
					code: 'mtv',
					count: 5,
					selected: false,
				},
				{
					code: 'nirvana',
					count: 6,
					selected: false,
				},
				{
					code: 'paw patrol',
					count: 47,
					selected: false,
				},
				{
					code: 'peppa pig',
					count: 1,
					selected: false,
				},
				{
					code: 'pink panther',
					count: 1,
					selected: false,
				},
				{
					code: 'pj masks',
					count: 2,
					selected: false,
				},
				{
					code: 'playstation',
					count: 29,
					selected: false,
				},
				{
					code: 'pokémon',
					count: 8,
					selected: false,
				},
				{
					code: 'queen',
					count: 1,
					selected: false,
				},
				{
					code: 'rick and morty',
					count: 11,
					selected: false,
				},
				{
					code: 'selena gomez',
					count: 2,
					selected: false,
				},
				{
					code: 'sesame street',
					count: 3,
					selected: false,
				},
				{
					code: 'sex education',
					count: 9,
					selected: false,
				},
				{
					code: 'snoopy',
					count: 22,
					selected: false,
				},
				{
					code: 'sonic the hedgehog',
					count: 7,
					selected: false,
				},
				{
					code: 'space jam',
					count: 1,
					selected: false,
				},
				{
					code: 'spider-man',
					count: 19,
					selected: false,
				},
				{
					code: 'spongebob squarepants',
					count: 23,
					selected: false,
				},
				{
					code: 'sprite',
					count: 1,
					selected: false,
				},
				{
					code: 'star wars',
					count: 17,
					selected: false,
				},
				{
					code: 'tangled',
					count: 2,
					selected: false,
				},
				{
					code: 'tetris',
					count: 1,
					selected: false,
				},
				{
					code: 'the avengers',
					count: 2,
					selected: false,
				},
				{
					code: 'the beach boys',
					count: 1,
					selected: false,
				},
				{
					code: 'the beatles',
					count: 1,
					selected: false,
				},
				{
					code: 'the fast and the furious',
					count: 1,
					selected: false,
				},
				{
					code: 'the hulk',
					count: 1,
					selected: false,
				},
				{
					code: 'the lion king',
					count: 8,
					selected: false,
				},
				{
					code: 'the little mermaid',
					count: 3,
					selected: false,
				},
				{
					code: 'the notorious b.i.g.',
					count: 1,
					selected: false,
				},
				{
					code: 'the powerpuff girls',
					count: 6,
					selected: false,
				},
				{
					code: 'the rolling stones',
					count: 7,
					selected: false,
				},
				{
					code: 'the simpsons',
					count: 4,
					selected: false,
				},
				{
					code: 'tom and jerry',
					count: 5,
					selected: false,
				},
				{
					code: 'toy story',
					count: 1,
					selected: false,
				},
				{
					code: 'transformers',
					count: 1,
					selected: false,
				},
				{
					code: 'ucla',
					count: 18,
					selected: false,
				},
				{
					code: 'winnie the pooh',
					count: 8,
					selected: false,
				},
				{
					code: 'xbox',
					count: 4,
					selected: false,
				},
				{
					code: 'yale',
					count: 17,
					selected: false,
				},
			],
		},
		{
			code: 'licenseCompanies',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'disney',
					count: 206,
					selected: false,
				},
				{
					code: 'disney/fox',
					count: 2,
					selected: false,
				},
				{
					code: 'disney/marvel',
					count: 49,
					selected: false,
				},
				{
					code: 'disney/pixar',
					count: 2,
					selected: false,
				},
				{
					code: 'disney/star wars',
					count: 13,
					selected: false,
				},
				{
					code: 'lego',
					count: 26,
					selected: false,
				},
			],
		},
		{
			code: 'materials',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'Cashmere',
					count: 26,
					selected: false,
				},
				{
					code: 'Ceramic',
					count: 30,
					selected: false,
				},
				{
					code: 'Chiffon',
					count: 57,
					selected: false,
				},
				{
					code: 'Corduroy',
					count: 40,
					selected: false,
				},
				{
					code: 'Cotton',
					count: 4001,
					selected: false,
				},
				{
					code: 'Denim',
					count: 852,
					selected: false,
				},
				{
					code: 'Flannel',
					count: 11,
					selected: false,
				},
				{
					code: 'Fleece',
					count: 46,
					selected: false,
				},
				{
					code: 'Glass',
					count: 99,
					selected: false,
				},
				{
					code: 'Jersey',
					count: 3691,
					selected: false,
				},
				{
					code: 'Lace',
					count: 170,
					selected: false,
				},
				{
					code: 'Leather',
					count: 28,
					selected: false,
				},
				{
					code: 'Linen',
					count: 275,
					selected: false,
				},
				{
					code: 'Merino',
					count: 6,
					selected: false,
				},
				{
					code: 'Mesh',
					count: 115,
					selected: false,
				},
				{
					code: 'Mohair',
					count: 2,
					selected: false,
				},
				{
					code: 'Satin',
					count: 143,
					selected: false,
				},
				{
					code: 'Silk',
					count: 21,
					selected: false,
				},
				{
					code: 'Straw',
					count: 16,
					selected: false,
				},
				{
					code: 'Suede',
					count: 3,
					selected: false,
				},
				{
					code: 'Teddy',
					count: 82,
					selected: false,
				},
				{
					code: 'Terry',
					count: 209,
					selected: false,
				},
				{
					code: 'Tulle',
					count: 31,
					selected: false,
				},
				{
					code: 'Velvet',
					count: 66,
					selected: false,
				},
				{
					code: 'Wood',
					count: 93,
					selected: false,
				},
				{
					code: 'Wool',
					count: 66,
					selected: false,
				},
			],
		},
		{
			code: 'coverages',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'Full coverage',
					count: 75,
					selected: false,
				},
				{
					code: 'Medium coverage',
					count: 91,
					selected: false,
				},
				{
					code: 'Sheer coverage',
					count: 78,
					selected: false,
				},
			],
		},
		{
			code: 'finishes',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'Dewy finish',
					count: 26,
					selected: false,
				},
				{
					code: 'Glossy finish',
					count: 80,
					selected: false,
				},
				{
					code: 'Matte finish',
					count: 37,
					selected: false,
				},
				{
					code: 'Natural finish',
					count: 65,
					selected: false,
				},
			],
		},
		{
			code: 'skinTypes',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'Combination skin',
					count: 93,
					selected: false,
				},
				{
					code: 'Dry skin',
					count: 87,
					selected: false,
				},
				{
					code: 'Mature skin',
					count: 79,
					selected: false,
				},
				{
					code: 'Normal skin',
					count: 86,
					selected: false,
				},
				{
					code: 'Oily skin',
					count: 79,
					selected: false,
				},
				{
					code: 'Sensitive skin',
					count: 79,
					selected: false,
				},
			],
		},
		{
			code: 'skinTones',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'Dark skin tone',
					count: 96,
					selected: false,
				},
				{
					code: 'Fair skin tone',
					count: 89,
					selected: false,
				},
				{
					code: 'Medium-dark skin tone',
					count: 98,
					selected: false,
				},
				{
					code: 'Medium-light skin tone',
					count: 98,
					selected: false,
				},
			],
		},
		{
			code: 'typeOfApplications',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'Pencil',
					count: 4,
					selected: false,
				},
				{
					code: 'Plastic brush',
					count: 20,
					selected: false,
				},
				{
					code: 'Pump',
					count: 3,
					selected: false,
				},
				{
					code: 'Roll-on',
					count: 2,
					selected: false,
				},
				{
					code: 'Sponge',
					count: 10,
					selected: false,
				},
				{
					code: 'Spray',
					count: 5,
					selected: false,
				},
				{
					code: 'Stick',
					count: 37,
					selected: false,
				},
				{
					code: 'Synthetic brush',
					count: 5,
					selected: false,
				},
				{
					code: 'Tube',
					count: 2,
					selected: false,
				},
				{
					code: 'Wand',
					count: 69,
					selected: false,
				},
			],
		},
		{
			code: 'benefits',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'Anti-shine',
					count: 1,
					selected: false,
				},
				{
					code: 'Blurring',
					count: 50,
					selected: false,
				},
				{
					code: 'Buildable coverage',
					count: 90,
					selected: false,
				},
				{
					code: 'Cleansing',
					count: 3,
					selected: false,
				},
				{
					code: 'Color correcting',
					count: 30,
					selected: false,
				},
				{
					code: 'Glowing',
					count: 79,
					selected: false,
				},
				{
					code: 'Hydrating',
					count: 4,
					selected: false,
				},
				{
					code: 'Light-reflecting',
					count: 44,
					selected: false,
				},
				{
					code: 'Long-lasting',
					count: 16,
					selected: false,
				},
				{
					code: 'Mattifying',
					count: 34,
					selected: false,
				},
				{
					code: 'Moisturizing',
					count: 14,
					selected: false,
				},
				{
					code: 'Nourishing',
					count: 1,
					selected: false,
				},
				{
					code: 'Rehydrating',
					count: 4,
					selected: false,
				},
				{
					code: 'Setting effect',
					count: 11,
					selected: false,
				},
				{
					code: 'Softening',
					count: 1,
					selected: false,
				},
			],
		},
		{
			code: 'concerns',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'Blemishes',
					count: 36,
					selected: false,
				},
				{
					code: 'Dark circles',
					count: 39,
					selected: false,
				},
				{
					code: 'Dryness',
					count: 3,
					selected: false,
				},
				{
					code: 'Dullness',
					count: 78,
					selected: false,
				},
				{
					code: 'Redness',
					count: 30,
					selected: false,
				},
				{
					code: 'Uneven skintone',
					count: 47,
					selected: false,
				},
			],
		},
		{
			code: 'keyIngredients',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'Hyaluronic acid (HA)',
					count: 8,
					selected: false,
				},
				{
					code: 'Vitamin E',
					count: 20,
					selected: false,
				},
			],
		},
		{
			code: 'fragranceFamilies',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'Fresh',
					count: 3,
					selected: false,
				},
				{
					code: 'Fruity',
					count: 1,
					selected: false,
				},
				{
					code: 'Spicy',
					count: 1,
					selected: false,
				},
			],
		},
		{
			code: 'forms',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'Cream',
					count: 49,
					selected: false,
				},
				{
					code: 'Cream-to-powder',
					count: 8,
					selected: false,
				},
				{
					code: 'Gel',
					count: 1,
					selected: false,
				},
				{
					code: 'Liquid',
					count: 96,
					selected: false,
				},
				{
					code: 'Loose powder',
					count: 1,
					selected: false,
				},
				{
					code: 'Pressed powder',
					count: 22,
					selected: false,
				},
			],
		},
		{
			code: 'sustainabilities',
			priority: 0,
			category: false,
			multiSelect: false,
			visible: true,
			values: [
				{
					code: 'Conscious choice',
					count: 6100,
					selected: false,
				},
			],
		},
	],
	freeTextSearch: '',
	rangeFacets: [
		{
			code: 'priceRange',
			range: {
				min: 1.99,
				max: 349,
				minSelected: 1.99,
				maxSelected: 349,
			},
		},
	],
	baseUrl: 'https://www2.hm.com',
}

function Hero() {
	const dispatch = useDispatch()
	const products = useSelector(state => state.product.products)

	const handleAddToCart = product => {
		dispatch(addToCart(product))
	}

	let properProducts = myObject.results
	properProducts = properProducts.map(item => {
		const value = item.price.formattedValue
		const itemName = item.name
		let image = item.images[0].url
		const fullValue = item.price.value
		return [value, itemName, image, fullValue]
	})

	return (
		<>
			<div className='griden '>
				{/* <button
					type='submit'
					className='bg-lime-300 hover:bg-lime-400 transition-all p-4 text-sm'
					onClick={() => dispatch(getProducts())}
				>
					Press
				</button> */}

				{console.log(properProducts)}
				{properProducts?.map((item, idx) => (
					<div className='mt-5  mx-10'>
						<div className='max-w-2xl mx-auto'>
							<div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700'>
								<a href='%'>
									<img className='rounded-t-lg' src={item[2]} alt='' />
								</a>
								<div className='p-5'>
									<a href='#'>
										<h5 className='text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white h-20'>
											{item[1]}
										</h5>
									</a>
									<p className='font-normal text-gray-700 mb-3 dark:text-gray-400'>
										Price: {item[0]}
									</p>
									<button
										className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
										onClick={() => handleAddToCart(item)}
									>
										Add to cart
										<svg
											className='-mr-1 ml-2 h-4 w-4'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												fill-rule='evenodd'
												d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
												clip-rule='evenodd'
											></path>
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
					// <div
					// 	// key={product.code}
					// 	// product={product.name}
					// 	className='flex w-full bg-indigo-500 hover:bg-indigo-300 transition-all my-3 py-1 px-2 text-white rounded-sm'
					// >
					// 	<h1>{item[1]}</h1>
					// 	<h1 className='pl-2'>{item[0]}</h1>

					// 	<img src={item[2]} alt='' />

					// 	{/* {product.price.formattedValue} */}
					// </div>
				))}
			</div>
		</>
	)
}

export default Hero

// export default Hero
